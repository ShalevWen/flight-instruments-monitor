import FlightData, { FlightDataDocument } from "../models/flightData.model";

function storeData(data: FlightDataDocument) {
  return FlightData.insertOne(data);
}

export default { storeData };
