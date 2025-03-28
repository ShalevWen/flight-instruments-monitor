import React from "react";
import { Container, Paper, Stack } from "@mui/material";
import TopMenu from "./components/TopMenu";
import VisualDashboard from "./components/VisualDashboard";
import TextualDashboard from "./components/TextualDashboard";
import InputModal from "./components/InputModal";
import { json } from "stream/consumers";

type Values = {
  altitude: number; // 0 to 3000
  his: number; // 0 to 360
  adi: number; // -100 to 100
};

const style = {
  height: "100%",
  paddingTop: "10px",
  paddingBottom: "10px",
};

function App() {
  const serverPort = 8000;
  const server = `http://${window.location.hostname}:${serverPort}`

  const [selectedView, setSelectedView] = React.useState<string>("TEXT");
  const [altitude, setAltitude] = React.useState<number>(0);
  const [his, setHis] = React.useState<number>(0);
  const [adi, setAdi] = React.useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);
  const values: Values = { altitude, his, adi };
  let view = selectedView === "TEXT" ? TextualDashboard(values) : VisualDashboard(values);

  function setData(data: Values) {
    setAltitude(data.altitude);
    setHis(data.his);
    setAdi(data.adi);
    console.log(JSON.stringify(data))
    fetch(`${server}/api/storeData`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <Container maxWidth="xl" sx={style}>
        <Paper sx={{ padding: "10px", height: "100%" }}>
          <Stack direction="column" alignItems="center" spacing={2}>
            <TopMenu setSelectedView={setSelectedView} setOpen={setOpen} />
            {view}
          </Stack>
        </Paper>
      </Container>
      <InputModal setData={setData} open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
