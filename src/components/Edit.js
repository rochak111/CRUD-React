import React,{useState,useEffect} from "react";
import { Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import employee from './employee';
// import {v4 as uuid} from "uuid";
import { Link,useNavigate } from "react-router-dom";

function Edit(){
    const[name,setName]= useState("");
    const[Email,setEmail]= useState("");
    const[id,setId] = useState("");
    let history = useNavigate();

    var index = employee.map(function(e){
        return e.id;
    }).indexOf(id);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        let a=employee[index];
        a.Name = name;
        a.Email = Email;

        history('/')
        
        }

        useEffect( ()=>{
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setId(localStorage.getItem('Id'))
        },[]) 


    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                        <Form.Group  className="mb-3" controlId="formName">
                            <Form.Control type="text" placeholder="Enter name" value={name} required onChange={(e)=>setName(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group  className="mb-3" controlId="formEmail">
                            <Form.Control type="email" placeholder="Enter Email" value={Email} required onChange={(e)=>setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit" onClick={(e)=>handleSubmit(e)}>Update</Button>

                    </Form>
        </div>
    )

}

export default Edit;