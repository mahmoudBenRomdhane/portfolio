import type { NextPage } from "next";
import { useState } from "react";
import NavBar from "../components/navbar/index";
import SideBar from "../components/sideBar/index";
import { ThemeProvider } from "styled-components";

const Home: NextPage = () => {
  const [sideBar, setSideBar] = useState(false);
  const theme = {
    default: {
      primary: "#7819CB",
      primaryHover: "#AA46BD",
    },
  };
  const handleSideBar = (sideBar: boolean) => {
    console.log("taaada");
    setSideBar(!sideBar);
  };
  return (
    <ThemeProvider theme={theme}>
      <NavBar
        statue={sideBar}
        handleSideBar={() => {
          handleSideBar(sideBar);
        }}
      />
      {sideBar && (
        <SideBar
          statue={sideBar}
          handleSideBar={() => {
            handleSideBar(sideBar);
          }}
        />
      )}
    </ThemeProvider>
  );
};

export default Home;
