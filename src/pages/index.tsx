import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useState } from "react";
import NavBar from "../components/navbar/index";
import SideBar from "../components/sideBar/index";
import { ThemeProvider } from "styled-components";
import HomePage from "../components/HomePage/index";
const CarrerPage = dynamic(() => import("../components/CarrerPage/index"), {
  suspense: true,
});
const TechnologiesPage = dynamic(
  () => import("../components/TechnologiesPage/index"),
  {
    suspense: true,
  }
);
const ProjectsPage = dynamic(() => import("../components/ProjectsPage/index"), {
  suspense: true,
});

const Home: NextPage = () => {
  const [sideBar, setSideBar] = useState(false);
  const [ActivePage, setActivePage] = useState("1");

  const theme = {
    default: {
      primary: "#7819CB",
      primaryHover: "#AA46BD",
    },
  };
  const handleSideBar = (sideBar: boolean) => {
    setSideBar(!sideBar);
  };
  const changeActivePage = (id: string) => {
    console.log("kjnk", ActivePage);
    setActivePage(id);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar
        handleActivePage={(id) => {
          changeActivePage(id);
        }}
        statue={sideBar}
        handleSideBar={() => {
          handleSideBar(sideBar);
        }}
      />
      {ActivePage === "1" && <HomePage />}
      {ActivePage === "2" && (
        <Suspense fallback={`Loading...`}>
          <CarrerPage />
        </Suspense>
      )}
      {ActivePage === "3" && (
        <Suspense fallback={`Loading...`}>
          <TechnologiesPage />
        </Suspense>
      )}
      {ActivePage === "4" && (
        <Suspense fallback={`Loading...`}>
          <ProjectsPage />
        </Suspense>
      )}
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
