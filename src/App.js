import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container';
import ModelAddNewUser from './components/ModelAddNewUser';


function App() {

  return (
    <div className='app-container'>
      <Header/>
      <Container>
        <div className="my-3 add-new">
          <span><b>list users:</b> </span>
          <button className="btn btn-success">Add new user</button>
        </div>
        <TableUsers/>
      </Container>

      <ModelAddNewUser/>

    </div>
  );
}

export default App;
