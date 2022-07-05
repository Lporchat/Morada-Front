import Modal from "react-modal";

interface NewPostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewPostModal() {
  return (
    <Modal isOpen={isNewPostModalOpen} onRequestClose={handleClosePostModal}>
      <h2>cadastrar post</h2>
    </Modal>
  );
}
