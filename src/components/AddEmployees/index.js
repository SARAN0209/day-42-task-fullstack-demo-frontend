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
        mobileNumber: ''
    })

    const handleInput = (value) => {
        return setEmployeeDetails(employee => {
            return { ...employee, ...value }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitting employee details...')

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}`, employeeDetails);  
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
            <h2>ADD EMPLOYEES</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">NAME</label>
                    <input id="name" className="form-control" type="text" value={employeeDetails.name} onChange={e => handleInput({ name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input id="email" className="form-control" type="text" value={employeeDetails.email} onChange={e => handleInput({ email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">ADDRESS</label>
                    <input id="address" className="form-control" type="text" value={employeeDetails.address} onChange={e => handleInput({ address: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="designation">DESIGNATION</label>
                    <input id="designation" className="form-control" type="text" value={employeeDetails.designation} onChange={e => handleInput({ designation: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">MOBILENUMBER</label>
                    <input id="mobileNumber" className="form-control" type="text" value={employeeDetails.mobileNumber} onChange={e => handleInput({ mobileNumber: e.target.value })} />
                </div>
                <div className="form-group">
                    <input className='btn btn-primary mt-2' type='submit' value='Create an Employee' />
                </div>
            </form>
        </div>
    )
};
export default AddEmployees