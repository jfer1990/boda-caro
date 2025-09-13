import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";


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

app.post("/confirm-assistance", (req, res) => {
  const { name, maxGuests, confirmed, confirmedCompanions } = req.body;

  if (!name ) {
    return res.status(400).json({ error: "Name are required" });
  }

  const wb = loadWorkbook();
  const ws = wb.Sheets["Invitados"];
  let data = XLSX.utils.sheet_to_json(ws);

  const index = data.findIndex((row) => row.invitado === name);

  const confirmados = confirmedCompanions.length + 1;
  const newEntry = {
    invitado: name,
    "#deInvitados": maxGuests,
    "acompañantes": confirmedCompanions.join(", "),
    "confirmados": confirmados,
  };

  if (index >= 0) {
    data[index] = newEntry;
  } else {
    data.push(newEntry);
  }

  const newWs = XLSX.utils.json_to_sheet(data);
  wb.Sheets["Invitados"] = newWs;
  XLSX.writeFile(wb, excelFilePath);

  res.json({ message: "Guest saved/updated successfully", guest: newEntry });
});

app.get("/guests", (req, res) => {
  const wb = loadWorkbook();
  const ws = wb.Sheets["Invitados"];
  const data = XLSX.utils.sheet_to_json(ws);
  res.json(data);
});

// app.get("/confirmacion", (req, res) => {
//   const wb = loadWorkbook();
//   const ws = wb.Sheets["Invitados"];
//   const data = XLSX.utils.sheet_to_json(ws);

//   let html = `
//     <html>
//       <head><title>Invitados</title></head>
//       <body>
//         <h1>Lista de invitados</h1>
//         <table border="1" cellpadding="5" cellspacing="0">
//           <thead>
//             <tr>
//               <th>Invitado</th>
//               <th># de Invitados</th>
//               <th>Acompañantes</th>
//               <th>Confirmados</th>
//             </tr>
//           </thead>
//           <tbody>
//             ${data
//               .map(
//                 (row) => `
//               <tr>
//                 <td>${row.invitado}</td>
//                 <td>${row["#deInvitados"]}</td>
//                 <td>${row["acompañantes"]}</td>
//                 <td>${row.confirmados}</td>
//               </tr>`
//               )
//               .join("")}
//           </tbody>
//         </table>
//       </body>
//     </html>
//   `;
//   res.send(html);
// });

app.get("/confirmacion", (req, res) => {
  const wb = loadWorkbook();
  const ws = wb.Sheets["Invitados"];
  const data = XLSX.utils.sheet_to_json(ws);

  let html = `
    <html>
      <head>
        <title>Invitados</title>
        <style>
          body {
            font-family: 'Roboto', sans-serif;
            background: #f9f9f9;
            padding: 2rem;
          }
          h1 {
            text-align: center;
            margin-bottom: 1rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
          }
          
          th, td {
            padding: 12px 16px;
            text-align: left;
          }
          tr:nth-child(even) {
            background: #f5f5f5;
          }
          tr:hover {
            background: #e3f2fd;
          }
          .download-btn {
            display: inline-block;
            margin: 1rem 0;
            padding: 10px 20px;
            background: #1976d2;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            transition: background 0.3s;
          }
            thead, thead:hover {
            background: #1976d2;
            color: white;
          }
          .download-btn:hover {
            background: #1565c0;
          }
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
            ${data
              .map(
                (row) => `
              <tr>
                <td>${row.invitado || ""}</td>
                <td>${row["#deInvitados"] || ""}</td>
                <td>${row["acompañantes"] || ""}</td>
                <td>${row.confirmados || ""}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;
  res.send(html);
});

// Endpoint para descargar en Excel
app.get("/download", (req, res) => {
  const wb = loadWorkbook();
  const ws = wb.Sheets["Invitados"];
  const buffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=lista_invitados.xlsx"
  );
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.send(buffer);
});


app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
