import React, { Fragment } from 'react';
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import employee from './employee';
import{Link,useNavigate} from 'react-router-dom';

function Home(){
    let history = useNavigate();

    const handleEdit=(id,name,email)=>{
    localStorage.setItem('Name',name)
    localStorage.setItem("Email", email)
    localStorage.setItem( "Id" , id);


    }


    const handleDelete = (id) =>{
        var index = employee.map(function(e){
            return e.id;
        }).indexOf(id);

        employee.splice(index, 1);
        history('/');
        alert(`Employee Deleted:${id}`);
    }

    return(
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee && employee.length>0
                            ?  
                            employee.map((item) => {
                                return(
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td> <Link to={`/edit`}>
                                            <Button onClick={()=> handleEdit(item.id,item.Name,item.Email)}>Edit</Button>
                                            </Link>&nbsp;&nbsp;
                                            &nbsp;
                                            <Button onClick={()=> handleDelete(item.id)}>Delete</Button>
                                            &nbsp;
                                            {/* <Button onClick={()=> alert(item.id)}>Update</Button> */}
                                         </td>
                                    </tr>
                                    
                                )
                            })
                            :
                            "No Data Found!" 
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                    <Link className='d-grid gap-2' to={"/create"}>
                        <Button size='lg'>Create Employee</Button>
                    </Link>
            </div>
        </Fragment>
    )
}

export default Home;