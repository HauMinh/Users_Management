import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModelAddNewUser = (props) => {
    const {show, handleClose} = props;
    const [name, setName]= useState("");
    const [job, setJob] = useState("");


    const onHandleSaveUser = ()=>{
        console.log("name", name)
        console.log("job", job)
    }
    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-add-new'>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                className="form-control"  
                placeholder="Name" 
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Job</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Job" 
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </div>
          </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onHandleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
};

export default ModelAddNewUser;


