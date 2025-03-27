import { Stack } from "@mui/material";
import TextualInstrument from "./instruments/TextualInstrument";

type TextualDashboardParams = {
  altitude: number;
  his: number;
  adi: number;
};

export default function TextualDashboard(props: TextualDashboardParams) {
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
      <TextualInstrument name="Altitude" value={props.altitude} />
      <TextualInstrument name="HIS" value={props.his} />
      <TextualInstrument name="ADI" value={props.adi} />
    </Stack>
  );
}
