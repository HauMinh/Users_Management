import axios from 'axios';
import {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {UserService} from '../services/UserService';

const TableUsers = (props) => {

    useEffect(()=>{
      //call api
        // axios.get('https://reqres.in/api/users?page=1')
        //   .then( res => {
        //     console.log(res);
        //   })
        //   .catch( error => {
        //     console.log(error);
        //   });
    }, [])
    
    const getAllUser= ()=>{
      
    }
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>      
          </tbody>
        </Table>
      </>
    );
}

export default TableUsers;