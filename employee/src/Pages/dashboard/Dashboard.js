import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard =()=>{

    const [ employees,setEmployes ] = useState([]);

    const navigate = useNavigate();

    useEffect( () => {
        const fetchEmployees = async () => {
                try{
                    const response = await fetch("http://localhost:8081/AllEmployee");
                    const data = await response.json();
                    setEmployes(data);
                }catch(err){
                    console.error("Error fatching employee " , err.message);
                }
        };
        fetchEmployees();
    },[]);

    const handleDelete = async (employeeId) =>{
        try{
            const response = await fetch(`http://localhost:8081/employee/${employeeId}`,{
                method : "DELETE",
                
            });
            console.log(`Employe Deleted with id ${employeeId}`)

            if(response.ok){
                setEmployes((prevEmploye)=>{
                    return prevEmploye.filter((employee)=> employee.id != employeeId   )
                })
            }

        }catch(err){
            console.error("Error Deleting Employee" , err.message);
        }
    }

    const HandleUpdate = (employeeId) => {
        navigate(`/employee/${employeeId}`)
    }

    return(
        
      <>
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="text-center"> Employees </h1>

                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Empoye Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Departments</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((employee) =>(
                                    <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td >{employee.name}</td>
                                    <td >{employee.email}</td>
                                    <td >{employee.phone}</td>
                                    <td >{employee.department}</td>
                                    <td>
                                        <Button variant="outline-secondary" onClick={()=> HandleUpdate(employee.id)}> Update </Button> {" "}
                                        <Button variant="outline-secondary" onClick={()=>handleDelete(employee.id)}> Delete </Button> {" "}
                                    </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
      </>

    )
}

export default Dashboard;