import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, closeButton = 'Close Modal' }) => {
	const [modalRoot, setModalRoot] = useState(null);

	useEffect(() => {
		const root = document.createElement('div');
		document.body.appendChild(root);
		setModalRoot(root);

		return () => {
			document.body.removeChild(root);
		};
	}, []);

	if (!modalRoot || !isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className="modal-overlay">
			<div className="modal-content">
				{children}
				<button onClick={onClose}>{closeButton}</button>
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
