import '../styles/modal.scss'

const Modal = ({ isOpen, onClose, children }) => {
    if(!isOpen) return <></>
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}   

export default Modal;