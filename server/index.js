import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import mongoose from "mongoose";

const uri = "mongodb+srv://jfer1990_db_user:tabGAIRfjMOZtKTC@cluster0.hkt1wzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: { version: "1", strict: true, deprecationErrors: true }
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

const guestSchema = new mongoose.Schema({
  invitado: String,
  "#deInvitados": Number,
  acompañantes: String,
  confirmados: Number,
});

const preGuestSchema = new mongoose.Schema({
  id: Number,
  name: String,
  maxGuests: Number,
  confirmed: Boolean,
  companions: [String],
  family: String,
  slug: String
});

const Guest = mongoose.model("Guest", guestSchema);
const PreGuest = mongoose.model("PreGuest", preGuestSchema);



// Fix __dirname since it doesn't exist in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));


const excelFilePath = path.join(__dirname, "invitados.xlsx");

// helper: load or create workbook
function loadWorkbook() {
  if (fs.existsSync(excelFilePath)) {
    return XLSX.readFile(excelFilePath);
  } else {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(wb, ws, "Invitados");
    XLSX.writeFile(wb, excelFilePath);
    return wb;
  }
}

app.post("/confirm-assistance", async (req, res) => {
  const { name, maxGuests, confirmed, confirmedCompanions } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const confirmados = (confirmedCompanions?.length || 0) + 1;
  const newEntry = {
    invitado: name,
    "#deInvitados": maxGuests,
    "acompañantes": confirmedCompanions.join(", "),
    confirmados,
  };

  try {
    // Update if exists, otherwise create
    const guest = await Guest.findOneAndUpdate(
      { invitado: name },
      newEntry,
      { new: true, upsert: true }
    );

    res.json({ message: "Guest saved/updated successfully", guest });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});


app.get("/guests", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});

// Get all preGuests
app.get("/preGuests", async (req, res) => {
  try {
    const preguests = await PreGuest.find();
    res.json(preguests);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get preGuest by slug
app.get("/preGuests/:slug", async (req, res) => {
  try {
    const preguest = await PreGuest.findOne({ slug: req.params.slug });
    if (!preguest) return res.status(404).json({ error: "PreGuest not found" });
    res.json(preguest);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.put("/preGuests/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const preGuest = await PreGuest.findByIdAndUpdate(id, updateData, { new: true });
    if (!preGuest) return res.status(404).json({ error: "PreGuest not found" });
    res.json(preGuest);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});




app.get("/confirmacion", async (req, res) => {
  try {
    const guests = await Guest.find();

    let html = `
      <html>
        <head>
          <title>Invitados</title>
          <style>
            body { font-family: 'Roboto', sans-serif; background: #f9f9f9; padding: 2rem; }
            h1 { text-align: center; margin-bottom: 1rem; }
            table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; }
            th, td { padding: 12px 16px; text-align: left; }
            tr:nth-child(even) { background: #f5f5f5; }
            tr:hover { background: #e3f2fd; }
            .download-btn { display: inline-block; margin: 1rem 0; padding: 10px 20px; background: #1976d2; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; transition: background 0.3s; }
            thead, thead:hover { background: #1976d2; color: white; }
            .download-btn:hover { background: #1565c0; }
          </style>
        </head>
        <body>
          <h1>Lista de invitados</h1>
          <a href="/download" class="download-btn">⬇️ Descargar en Excel</a>
          <table>
            <thead>
              <tr>
                <th>Invitado</th>
                <th># de Invitados</th>
                <th>Acompañantes</th>
                <th>Confirmados</th>
              </tr>
            </thead>
            <tbody>
              ${guests.map(row => `
                <tr>
                  <td>${row.invitado || ""}</td>
                  <td>${row["#deInvitados"] || ""}</td>
                  <td>${row["acompañantes"] || ""}</td>
                  <td>${row.confirmados || ""}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </body>
      </html>
    `;
    res.send(html);
  } catch (err) {
    res.status(500).send("Error loading guests");
  }
});

// Endpoint para descargar en Excel
app.get("/download", async (req, res) => {
  try {
    const guests = await Guest.find().lean();
    const ws = XLSX.utils.json_to_sheet(guests);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Invitados");

    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });

    res.setHeader("Content-Disposition", "attachment; filename=lista_invitados.xlsx");
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.send(buffer);
  } catch (err) {
    res.status(500).send("Error generating Excel file");
  }
});



app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
