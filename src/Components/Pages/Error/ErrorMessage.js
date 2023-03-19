import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLE = {
    position: 'fixed',
    top:'50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
};

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
}

export default function ErrorMessage({open, children, close}) {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLE} onClick={close} />
            <div style={MODAL_STYLE}>
            {children}
            <button onClick={close}>X</button>
        </div>
        </>,
        document.getElementById("portal")
    );
}