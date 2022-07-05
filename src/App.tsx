import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("root");

export function App() {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  function handleOpenPostModal() {
    setIsNewPostModalOpen(true);
  }
  function handleClosePostModal() {
    setIsNewPostModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewPostModal={handleOpenPostModal} />
      <Summary />


      <GlobalStyle />
    </>
  );
}
