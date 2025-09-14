import mongoose from "mongoose";

const PreGuestSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  maxGuests: { type: Number, required: true },
  confirmed: { type: Boolean, default: false },
  companions: { type: [String], default: [] },
  family: { type: String },
  slug: { type: String, required: true, unique: true },
});

const PreGuest = mongoose.model("PreGuest", PreGuestSchema);

export default PreGuest;
