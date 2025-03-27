import { Stack } from "@mui/material";
import VisualAdiInstrument from "./instruments/VisualAdiInstrument";
import VisualHisInstrument from "./instruments/VisualHisInstrument";
import VisualAltitudeInstrument from "./instruments/VisualAltitudeInstrument";

type VisualDashboardParams = {
  altitude: number;
  his: number;
  adi: number;
};

export default function VisualDashboard(props: VisualDashboardParams) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <VisualAltitudeInstrument value={props.altitude} />
      <VisualHisInstrument value={props.his} />
      <VisualAdiInstrument value={props.adi} />
    </Stack>
  );
}
