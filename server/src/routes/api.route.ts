import express from "express";
import flightDataService from "../services/flightData.service";

let router = express.Router();

router.post("/storeData", (req, res) => {
  if (!req.body.altitude || !req.body.his || !req.body.adi) {
    res.status(400).send("missing values");
    return;
  }
  flightDataService.storeData({
    altitude: req.body.altitude,
    his: req.body.his,
    adi: req.body.adi
  });
  res.sendStatus(200)
  return;
})

module.exports = router;