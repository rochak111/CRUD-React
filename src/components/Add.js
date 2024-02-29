import React,{useState} from "react";
import { Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import employee from './employee';
import {v4 as uuid} from "uuid";
import { Link,useNavigate } from "react-router-dom";

function Add() {
        const[name,setName]= useState("");
        const[Email,setEmail]= useState("");
        let history = useNavigate();

        const handleSubmit=(e)=>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId=ids.slice(0,8);

        let a=name,
        b=Email;

        employee.push({id:uniqueId,Name:a,Email:b});
        history('/')
        
        }

    return(
            <div>
                    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                        <Form.Group  className="mb-3" controlId="formName">
                            <Form.Control type="text" placeholder="Enter name" required onChange={(e)=>setName(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group  className="mb-3" controlId="formEmail">
                            <Form.Control type="email" placeholder="Enter Email" required onChange={(e)=>setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit" onClick={(e)=>handleSubmit(e)}>Add Employee</Button>

                    </Form>

            </div>
    )

}

export default Add;