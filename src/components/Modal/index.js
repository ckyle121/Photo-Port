import React from "react";

function Modal({ onClose, currentPhoto }) {
    const {name, category, description, index} =currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name</h3>
                <img alt="current category" />
                <p>Photo Description</p>
                <button type="button" onClick={onClose}>Close this Modal</button>
            </div>
        </div>      
    );
}

export default Modal;