import './modal.scss';
import Modal, {
  modalAnimation,
  useModalState,
} from 'react-simple-modal-provider';

export default ({ children }) => {
  const [isOpen, setOpen] = useModalState();

  return (
    <Modal
      id="Modal2"
      consumer={children}
      isOpen={isOpen}
      setOpen={setOpen}
      duration={250}
      animation={modalAnimation.scaleUp}
      draggable={true}
    >
      <div className="modal-body">
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </Modal>
  );
};
