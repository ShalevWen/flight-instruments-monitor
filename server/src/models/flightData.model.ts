import mongoose from "mongoose";

export interface FlightDataDocument {
  altitude: number;
  his: number;
  adi: number;
}

const FlightDataSchema: mongoose.Schema = new mongoose.Schema({
  altitude: {
    type: Number,
    required: true
  },
  his: {
    type: Number,
    required: true
  },
  adi: {
    type: Number,
    required: true
  }
})

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/FIM");
export default connection.model("FlightData", FlightDataSchema);