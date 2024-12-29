import './UpdateUser.css'
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';

 
const UpdateUser = () => {

    const {id} = useParams(); 
    const navigate = useNavigate();

        const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            department: ""
        });
    
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        useEffect(() =>{
            const fetchEmployee = async ()=>{
                try{
                    const response = await fetch(`http://localhost:8081/employee/${id}`);
                    const data = await response.json();
                    setFormData(data);
                }catch(err){
                    console.error("Error fetching data");
                }
            }

            fetchEmployee();
        },[id])

        const handleSubmit = async (e) =>{
            e.preventDefault();

            try{
                const response = await fetch(`http://localhost:8081/employee/${id}`,{
                    method:'PATCH',
                    headers:{
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                console.log("User Update ",data);     
                navigate(`/`)               
            }catch(err){
                    console.error("Error updating User  " , err.message);
            }
        }
    

    return(
        <>
        <div className="center-form">
            <h1>Edit Employee Details</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicDepartment">
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter Department"
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Post
                </Button>
            </Form>
        </div>
        </>
    )
} 

 export default UpdateUser;