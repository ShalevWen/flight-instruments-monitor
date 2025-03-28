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

  function getHandler(setState: React.Dispatch<React.SetStateAction<number>>) {
    const handler: React.ChangeEventHandler = (e: React.ChangeEvent) => {
      const target = e.target as EventTarget & (HTMLInputElement | HTMLTextAreaElement);
      const value = Number.parseFloat(target.value);
      if (!Number.isNaN(value)) {
        setState(value);
      }
    };
    return handler;
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
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
        <form
          onSubmit={submitHandler}
        >
          <TextField label="altitude" variant="outlined" fullWidth margin="normal" onChange={getHandler(setAltitude)} />
          <TextField label="his" variant="outlined" fullWidth margin="normal" onChange={getHandler(setHis)} />
          <TextField label="adi" variant="outlined" fullWidth margin="normal" onChange={getHandler(setAdi)} />
          <Button variant="contained" color="primary" type="submit">
            confirm
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
