import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

type TopMenuParams = {
  setSelectedView: React.Dispatch<React.SetStateAction<string>>;
};

export default function TopMenu(params: TopMenuParams) {
  return (
    <ButtonGroup variant="contained">
      <Button
        onClick={() => {
          params.setSelectedView("TEXT");
        }}
      >
        Text
      </Button>
      <Button
        onClick={() => {
          params.setSelectedView("VISUAL");
        }}
      >
        Visual
      </Button>
      <Button
        onClick={() => {
          console.warn("Not implemented yet");
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}
