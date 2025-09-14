import mongoose from "mongoose";
import PreGuest from "./preGuest.js"; 
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Read JSON file manually
const guests = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../src/data/guests.json"), "utf-8")
);

const uri = "mongodb+srv://jfer1990_db_user:tabGAIRfjMOZtKTC@cluster0.hkt1wzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    // clean existing if you want a reset
    await PreGuest.insertMany(guests);

    console.log("Guests imported successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
