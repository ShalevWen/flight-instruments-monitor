import { Card, CardContent, CardHeader } from "@mui/material";

type TextualInstrumentProps = {
  name: string;
  value: number;
};

// A generic textual instrument component
export default function TextualInstrument(props: TextualInstrumentProps) {
  return (
    <Card
      sx={{
        width: "25%",
      }}
    >
      <CardHeader
        title={props.name}
        sx={{
          textAlign: "center",
        }}
      />
      <CardContent
        sx={{
          textAlign: "center",
          fontSize: "2em",
        }}
      >
        {props.value}
      </CardContent>
    </Card>
  );
}
