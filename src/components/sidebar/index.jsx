// src/components/Sidebar.js
import { NavLink } from "react-router-dom";
import { Box, Group, Image, Stack, Text } from "@mantine/core";
import appLogo from "../../assets/Antares-Capital-Logo.svg";
import { useDispatch } from "react-redux";
import { setTitle } from "../../slice/titleSlice";

function Sidebar() {
  const dispatch = useDispatch();

  const handleNavClick = (title) => {
    dispatch(setTitle(title)); // Dispatch the title change on nav click
  };
  return (
    <Box h={"100%"} style={{ backgroundColor: "#3D5063" }}>
      <Stack gap="0">
        <Group py={"md"} justify="center">
          <Image
            h={"60px"}
            w={"auto"}
            fit="contain"
            src={appLogo}
            alt="Antares-Capital-Logo"
          />
        </Group>
        <NavLink 
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              borderLeft: isActive ? "3px solid #F7A81D" : "none",
              background: isActive ? "#121725":"none"
            })} 
            onClick={() => handleNavClick("Team Work Items")}>
              <Box pl="18px" py="12px">
                <Text color="white" sx={{ backgroundColor: 'blue' }}>Team Work Items</Text>
              </Box>
        </NavLink>
        <NavLink 
            to="/my-work-items"
            style={({ isActive }) => ({
              textDecoration: "none",
              borderLeft: isActive ? "3px solid #F7A81D" : "none",
              background: isActive ? "#121725":"none"
            })}  
            onClick={() => handleNavClick("My Work Items")}>
              <Box pl="18px" py="12px">
              <Text color="white">My Work Items</Text>
            </Box>
        </NavLink>
        <NavLink 
          to="/capacity-dashboard"
          style={({ isActive }) => ({
            textDecoration: "none",
            borderLeft: isActive ? "3px solid #F7A81D" : "none",
            background: isActive ? "#121725":"none"
          })} 
          onClick={() => handleNavClick("Capacity Dashboard")}>
            <Box pl="18px" py="12px">
              <Text color="white">Capacity Dashboard</Text>
            </Box>
        </NavLink>
      </Stack>
    </Box>
  );
}

export default Sidebar;
