import './UpdateEmployees.css'
import { useEffect,useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const UpdateEmployees = () => {
    const params = useParams();
    const navigate = useNavigate();
    const empID = params.empID.toString();

    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        email: '',
        address: '',
        designation: '',
        mobileNumber: '',
        error :{
             name: '',
             email: '',
             address: '',
             designation: '',
             mobileNumber: '',

        },
    });
    useEffect(() => {
        axios.get("https://day-42-task-fullstack-demo-backend.onrender.com/api/employees/"+`${empID}`).then((response) => {
            setEmployeeDetails(response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [empID]);

    const handleInput = (value) => {
        return setEmployeeDetails(employee => {
            return {...employee, ...value}
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


        // console.log('Updating employee details...')
        try{
            const response = await axios.put("https://day-42-task-fullstack-demo-backend.onrender.com/api/employees/"+`${empID}`, employeeDetails);
            if(response){
                setEmployeeDetails({
                    name: '',
                    email: '',
                    address: '',
                    designation: '',
                    mobileNumber: ''
                });
                navigate('/');
            }
        }catch(error){
            console.log('Error: ', error)
        }
    }

    return(
        <div className="UpdateEmployees">
            <div className="card">
        <h2>EDIT EMPLOYEES</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input id="name" className="form-control" name='name' type="text" value={employeeDetails.name} onChange={e => handleInput({name: e.target.value})} />
            </div>
            <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input id="email" className="form-control" name='email' type="email" value={employeeDetails.email} onChange={e => handleInput({email: e.target.value})}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">ADDRESS</label>
                <input id="address" className="form-control" name='address' type="text" value={employeeDetails.address} onChange={e => handleInput({address: e.target.value})}/>
            </div>
            <div className="form-group">
                <label htmlFor="designation">DESIGNATION</label>
                <input id="designation" className="form-control" name='designation' type="text" value={employeeDetails.designation}  onChange={e => handleInput({designation: e.target.value})}/>
            </div>
            <div className="form-group">
                <label htmlFor="mobilenumber">MOBILENUMBER</label>
                <input id="mobilenumber" className="form-control" name='mobilenumber' type="number" value={employeeDetails.mobileNumber}  onChange={e => handleInput({mobileNumber: e.target.value})}/>
            </div>
            
            <div className="form-group">
                    <input className='btn btn-primary mt-2' type='submit' text='Update employee' />
                </div>
        </form>
        </div>
        </div>
    )
};
export default UpdateEmployees;