import { Link } from "react-router-dom";
import { useEffect,useState} from "react";
import axios from "axios";



const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        getEmployees();
    },[]);

    const getEmployees = async () =>{
        try{
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
            setEmployees(response.data)
        }catch(error){
            console.log('Error: ',error)
        }
    }

    const handleDelete = async (employeeID) =>{
            try{
                const response = await axios.delete (`${process.env.REACT_APP_BASE_URL}/${employeeID}`)
                if(response){
                    getEmployees();
                }
            }catch(error){
                console.log('Error: ',error);
            }
    }



    return (
        <div>
            <h2>EMPLOYEES LIST</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                        <th>DESIGNATION</th>
                        <th>MOBILENUMBER</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length && employees.map((employee,index)=>(
                    <tr key={index}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td> {employee.designation}</td>
                        <td>{employee.mobileNumber}</td>
                        <td>
                            <Link className="btn btn-link" to={`/employees/${employee._id}/update`}>EDIT</Link>
                            <button className="btn btn-link"onClick={() => handleDelete(employee._id)}>DELETE</button>
                        </td>

                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    )
};
export default EmployeeList;