import React from 'react';
import { Modal } from 'react-bootstrap';

function SyllabusModal({ isOpen, onClose, syllabus, courseName }) {

    const fullSyllabus = syllabus.map((value, index) => {
        return (
            <div>
                <h2 style = {{fontSize: "30px", fontWeight: "1px"}}>{value.heading}</h2> 
                <ul>
                    {value.items.map((points, i) => {
                        return (
                            <li style = {{fontSize: "20px", color: "#00308F", fontFamily: "sans-serif"}}>{points}</li>
                    )
                    })}
                </ul>
            </div>
        )
    })

  return (
    <Modal show={isOpen} onHide={onClose} dialogClassName="modal-fullscreen">
      <Modal.Body>
        <div style = {{display: "flex", justifyContent: "space-between"}}>
            <div></div>
            <h2 style = {{fontSize: "40px", fontWeight: "bolder"}}>Course Detail</h2>
            <div onClick = {onClose} style = {{fontSize: "1.5rem", cursor: "pointer", fontWeight: "light", backgroundColor: "transparent", paddingTop: "0px"}}>X</div>
        </div>
        <div style = {{display: "flex", justifyContent: "center"}}>
            <h2 style = {{fontSize: "40px", fontWeight: "bolder"}}>({courseName})</h2> 
        </div>
        <hr></hr>
        <div style = {{margin: "3rem 0rem 0rem 3rem"}}>
            {fullSyllabus}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SyllabusModal;
