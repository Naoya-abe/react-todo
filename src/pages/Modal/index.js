import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`ui standard modal visible active ${props.modalClass}`}
      >
        <div className="modal-title">{props.title}</div>
        <div className="modal-contents">{props.contents}</div>
      </div>
    </div>,
    document.querySelector(props.querySelector)
  );
};

export default Modal;
