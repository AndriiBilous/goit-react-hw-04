import Modal from 'react-modal';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
    overflow: 'visible',
  },
};
Modal.setAppElement('#root');
const ImageModal = ({ isOpen, onClose, url }) => {
  return (
    <Modal
      modalOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={url} alt={{}} />
    </Modal>
  );
};
export default ImageModal;
