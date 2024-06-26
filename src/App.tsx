import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import useLocalStorageFilter from "./hooks/useLocalStorageFilter";
import { useRecoilValue } from "recoil";
import { ModileCartCalendarModalState } from "./recoil/atoms/ModileCartCalendarModalState";
import { useEffect } from "react";

function App() {
  useLocalStorageFilter();
  const isModalOpen = useRecoilValue(ModileCartCalendarModalState);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <BrowserRouter>
      <Nav />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
