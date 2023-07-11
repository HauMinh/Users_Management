import axios from 'axios';
import {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from '../services/UserService';
import ReactPaginate from 'react-paginate';

const TableUsers = (props) => {
    const[listUser, setListUser] = useState([]);

    useEffect(()=>{
      //call api
        // axios.get('https://reqres.in/api/users?page=1')
        //   .then( res => {
        //     console.log(res);
        //   })
        //   .catch( error => {
        //     console.log(error);
        //   });
        getAllUser();
    }, [])
    
    const getAllUser= async ()=>{
      let res = await fetchAllUser();
      console.log("res", res)
      if(res && res.data){
        setListUser(res.data)
      }
    }

    const handlePageClick = ()=>{
      
    }

     return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {listUser && listUser.length > 0 &&
              listUser.map((item, index) =>{
                return(
                  <tr key={`user-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <ReactPaginate 
          previousLabel="< previous"
          nextLabel="next >"
          pageCount= {69}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />   
      </>
    );
}

export default TableUsers;