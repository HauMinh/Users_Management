import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from '../services/UserService';
import ModelAddNewUser from './ModelAddNewUser';

const TableUsers = (props) => {
    const[listUser, setListUser] = useState([]);
    const [totalUsers, setTotalUsers]= useState(0);
    const [totalPageNumber, setTotalPageNumber]= useState(0);
    
    const [isShowModelAddNew, setisShowModelAddNew]= useState(false);
    const handleClose = ()=>{
      setisShowModelAddNew(false);
    }
    const handleUpdateUser = (user)=>{
      setListUser([user, ...listUser])
    }


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
      <><br/>
       <div className="my-3 add-new">
          <span><b>list users:</b> </span>
          <button className="btn btn-success" onClick={()=>setisShowModelAddNew(true)}>Add new user</button>
        </div>
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

        <ModelAddNewUser
          show={isShowModelAddNew}
          handleClose={handleClose}
          handleUpdateUser={ handleUpdateUser}
        />   
      </>
    );
}

export default TableUsers;