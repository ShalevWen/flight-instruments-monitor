import React from "react";
import { Container, Paper, Stack } from "@mui/material";
import TopMenu from "./components/TopMenu";
import VisualDashboard from "./components/VisualDashboard";
import TextualDashboard from "./components/TextualDashboard";

type Values = {
  altitude: number; // 0 to 3000
  his: number; // 0 to 360
  adi: number; // -100 to 100
};

function App() {
  const [selectedView, setSelectedView] = React.useState<string>("TEXT");
  const values: Values = {
    altitude: 1000,
    his: 50,
    adi: 0,
  };
  let view = selectedView === "TEXT" ? TextualDashboard(values) : VisualDashboard(values);
  return (
    <Container maxWidth="xl" sx={{ height: "100%", paddingTop: "10px", paddingBottom: "10px" }}>
      <Paper sx={{ padding: "10px", height: "100%" }}>
        <Stack direction="column" alignItems="center" spacing={2}>
          <TopMenu setSelectedView={setSelectedView} />
          {view}
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
