import { AppShell, Group, Title } from "@mantine/core";

import { Route, Routes } from "react-router-dom";
import MyWorkItems from "./pages/MyWorkItems";
import CapacityDashboard from "./pages/CapacityDashboard";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import TeamWorkItems from "./pages/TeamWorkItems";
import "./App.css";

export function App() {

  const title = useSelector((state) => state.title.currentTitle);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm"}}
      // aside={{
      //   width: 300,
      //   breakpoint: "md",
      //   collapsed: { desktop: false, mobile: true },
      // }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" py="sm">
        <Title order={2}>{title}</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main bg="#F5F6F8">
        <Routes>
          <Route path="/" element={<TeamWorkItems />} />
          <Route path="/my-work-items" element={<MyWorkItems />} />
          <Route path="/capacity-dashboard" element={<CapacityDashboard />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}
