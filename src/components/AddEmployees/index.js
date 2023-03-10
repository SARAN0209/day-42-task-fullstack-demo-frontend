import './AddEmployees.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployees = () => {
    const navigate = useNavigate ();
    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        email: '',
        address: '',
        designation: '',
        mobileNumber: '',
        error:{
            name: '',
            email: '',
            address: '',
            designation: '',
            mobileNumber: '',
        },
    });
   
    const handleInput = (value) => {
        return setEmployeeDetails(employee => {
            return { ...employee, ...value }
        })
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errKeys = Object.keys(employeeDetails).filter((key) => {
            if (employeeDetails[key] === "" && key !== "id" && key !== "error") {
              return key;
            }
          }); if (errKeys.length >= 1) {
            alert("Please fill all Data");
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(employeeDetails.email)
          ) {
            alert("Please Enter a Valid Email Address");
          } 

        try {
            const response = await axios.post("https://day-42-task-fullstack-demo-backend.onrender.com/api/employees", employeeDetails);  
            if (response) {
                setEmployeeDetails({
                    name: '',
                    email: '',
                    address: '',
                    designation: '',
                    mobileNumber: ''

                });
                navigate('/');
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    return (
        <div className='AddEmployees'>
            <div className='card'>
            <h2>ADD EMPLOYEES</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">NAME</label>
                    <input id="name" className="form-control" name='name' type="text"
                     value={employeeDetails.name} onChange={e => handleInput({ name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input id="email" className="form-control" name='email' type="email" 
                    value={employeeDetails.email} onChange={e => handleInput({ email: e.target.value })} />
                    <span style={{ color: "red" }}>{employeeDetails.error.email}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="address">ADDRESS</label>
                    <input id="address" className="form-control" name='address' type="text" 
                    value={employeeDetails.address} onChange={e => handleInput({ address: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="designation">DESIGNATION</label>
                    <input id="designation" className="form-control" name='designation' type="text"
                     value={employeeDetails.designation} onChange={e => handleInput({ designation: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">MOBILENUMBER</label>
                    <input id="mobileNumber" className="form-control" name='mobilenumber' type="number"
                     value={employeeDetails.mobileNumber} onChange={e => handleInput({ mobileNumber: e.target.value })} />
                </div>
                
                <div className="form-group">
                    <input className='btn btn-primary mt-2' type='submit' value='Create an Employee' />
                </div>
            </form>
            </div>
        </div>
    )
};
export default AddEmployees