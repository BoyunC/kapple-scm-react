import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
//import ReactModal from 'react-modal';
const ContractModal = ({isOpen,onRequestClose,contract}) =>{
    //ReactModal.setAppElement('#root');
  return (
    
    <div>
        <Modal className="modal" tabIndex="-1" role="dialog" show={isOpen} onHide={onRequestClose}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">계약 체결</h5>
            </div>
            <div className="modal-body">
              <p>선택된 제안으로 계약을 진행하시겠습니까?</p>
              <p>{contract}</p>
            </div>
            <div className="modal-footer">
                
              <button type="button" className="btn btn-primary"><Link className="nav-link" to="/contract" data-bs-toggle="" aria-expanded="false">계약</Link></button>
              <button type="button" className="btn btn-secondary" onClick={onRequestClose}>취소</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}




export default ContractModal;