import { Box, Button, Modal, TextField } from "@mui/material";
import React from "react";

type InputModalParams = {
  setData: (data: { altitude: number; his: number; adi: number }) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InputModal(props: InputModalParams) {
  const [altitude, setAltitude] = React.useState<number>(0);
  const [his, setHis] = React.useState<number>(0);
  const [adi, setAdi] = React.useState<number>(0);
  const [altitudeError, setAltitudeError] = React.useState<boolean>(false);
  const [hisError, setHisError] = React.useState<boolean>(false);
  const [adiError, setAdiError] = React.useState<boolean>(false);

  function getHandler(
    setValue: React.Dispatch<React.SetStateAction<number>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    minValue: number,
    maxValue: number
  ) {
    const handler: React.ChangeEventHandler = (e: React.ChangeEvent) => {
      const target = e.target as EventTarget & (HTMLInputElement | HTMLTextAreaElement);
      const newValue = Number.parseFloat(target.value);
      if (target.value.length > 0 && !Number.isNaN(newValue) && minValue <= newValue && newValue <= maxValue) {
        setValue(newValue);
        setError(false);
      } else {
        setError(true);
      }
    };
    return handler;
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (altitudeError || hisError || adiError) return;
    props.setData({ altitude, his, adi });
    props.setOpen(false);
  }

  return (
    <Modal
      open={props.open}
      onClose={(e) => {
        props.setOpen(false);
      }}
    >
      <Box sx={style}>
        <form onSubmit={submitHandler}>
          <TextField
            label="Altitude"
            variant="outlined"
            fullWidth
            defaultValue={altitude}
            error={altitudeError}
            helperText={altitudeError ? "Altitude should be in the range (0, 3000)" : ""}
            margin="normal"
            onChange={getHandler(setAltitude, setAltitudeError, 0, 3000)}
          />
          <TextField
            label="HIS"
            variant="outlined"
            fullWidth
            defaultValue={his}
            error={hisError}
            helperText={hisError ? "HIS should be in the range (0, 360)" : ""}
            margin="normal"
            onChange={getHandler(setHis, setHisError, 0, 360)}
          />
          <TextField
            label="ADI"
            variant="outlined"
            fullWidth
            defaultValue={adi}
            error={adiError}
            helperText={adiError ? "ADI should be in the range (-100, 100)" : ""}
            margin="normal"
            onChange={getHandler(setAdi, setAdiError, -100, 100)}
          />
          <Button variant="contained" color="primary" type="submit">
            confirm
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
