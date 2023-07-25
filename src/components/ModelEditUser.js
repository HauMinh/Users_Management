import {toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {putUpDateUser} from '../services/UserService';

const ModelEditUser = (props) => {
    const {show, handleClose, dataUserEdit,handleEditUserFromeModel} = props;
    const [name, setName]= useState("");
    const [job, setJob] = useState("");

    console.log(dataUserEdit)

    const onHandleEditUser = async ()=>{
       let res = await putUpDateUser(name, job);
       if(res && res.updatedAt){
         //success
         handleEditUserFromeModel({
            first_name:name,
            id:dataUserEdit.id 
         })
         handleClose()
         toast.success('update user success!');
       }
    }
    


    useEffect(()=>{
      if(show){
        setName(dataUserEdit.first_name)
      }
    },[dataUserEdit])

    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
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
          <Button variant="primary" onClick={onHandleEditUser}>
            Confirm 
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
};

export default ModelEditUser;


