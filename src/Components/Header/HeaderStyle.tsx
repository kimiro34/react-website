import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const HeaderRoot = styled(Box)(({ theme }) => ({
  background: "#0D1117",
  color: "#D0A13A",
  height: "90px",
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1600px",
  margin: "0px auto",
  height: "100%",
  padding: "0px 20px",
}));

export const UserContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  "& .MuiTypography-root": {
    margin: "0px 10px",
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  "& img": {
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
    width: "50px",
    height: "50px",
  },
}));
