import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container';
import ModelAddNewUser from './components/ModelAddNewUser';
import { useState } from 'react';


function App() {
  const [isShowModelAddNew, setisShowModelAddNew]= useState(false);
  const handleClose = ()=>{
    setisShowModelAddNew(false);
  }

  return (
    <div className='app-container'>
      <Header/>
      <Container>
        <div className="my-3 add-new">
          <span><b>list users:</b> </span>
          <button className="btn btn-success" onClick={()=>setisShowModelAddNew(true)}>Add new user</button>
        </div>
        <TableUsers/>
      </Container>

      <ModelAddNewUser
        show={isShowModelAddNew}
        handleClose={handleClose}
      />

    </div>
  );
}

export default App;

