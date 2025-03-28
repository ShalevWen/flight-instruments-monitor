import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

type TopMenuParams = {
  setSelectedView: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TopMenu(props: TopMenuParams) {
  return (
    <ButtonGroup variant="contained">
      <Button
        onClick={() => {
          props.setSelectedView("TEXT");
        }}
      >
        Text
      </Button>
      <Button
        onClick={() => {
          props.setSelectedView("VISUAL");
        }}
      >
        Visual
      </Button>
      <Button
        onClick={() => {
          props.setOpen(true);
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}
