import type { NextPage } from "next";
import NavBar from "../components/navbar/index";
import { ThemeProvider } from "styled-components";

const Home: NextPage = () => {
  const theme = {
    default: {
      primary: "#7819CB",
      primaryHover: "#AA46BD",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
};

export default Home;
