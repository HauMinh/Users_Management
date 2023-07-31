import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModelConfirm = (props) => {
    const {show, handleClose, dataUserDelete} = props;
    

   const confirmDelete = () =>{
     
   }
    

    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal 
          show={show} 
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Delete a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-add-new'>
            You definitely want to delete user? <br/>
            Email is  <b>{dataUserDelete.email}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmDelete}>
             Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
};

export default ModelConfirm;
