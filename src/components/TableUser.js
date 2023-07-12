import axios from 'axios';
import {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from '../services/UserService';
import ReactPaginate from 'react-paginate';

const TableUsers = (props) => {
    const[listUser, setListUser] = useState([]);
    const [totalUsers, setTotalUsers]= useState(0);
    const [totalPageNumber, setTotalPageNumber]= useState(0);
    

    useEffect(()=>{
      //call api
        getAllUser();

    }, [])
    
    const getAllUser= async (page)=>{
      let res = await fetchAllUser(page);
      //console.log("res", res)
      if(res && res.data){
        setListUser(res.data)
        setTotalUsers(res.total)
        setTotalPageNumber(res.total_pages)
      }
    }
   
    const handlePageClick = (event)=>{
        getAllUser(+event.selected + 1) 
        //thêm dấu cộng phía trước event nếu như string thì có thể chuyển sang number
    }

     return (
      <><br/><br/>
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
          pageCount= {totalPageNumber}
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