import React, { Component } from 'react';
import '../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt,faMoneyCheck} from  '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';
import {NavLink} from 'react-router-dom';



class Employee extends Component {
    state = { 
        name: 'Employee',
        Employee: [],
 
     }
     componentDidMount(){
     document.title=`${this.state.name} - POS`;  
     this.getEmployee();
    }
    getEmployee = () => {
      axios.get("http://localhost:52385/api/Employee").then((response)=>{
          this.setState({
              Employee:response.data
          })
      })
    }
     showEmployee = () => {
         const {Employee} = this.state;
         const Edit = <FontAwesomeIcon  className ='text-primary' icon={faEdit} size ='md mr-3'/>
         const pay = <FontAwesomeIcon  className ='text-info' icon={faMoneyCheck} size ='md mr-3'/>
         const Delete = <FontAwesomeIcon className ='text-danger' icon={faTrashAlt} size ='md mr-3'/>
         if(Employee.length === 0){
            return(
                <h6 className='alert alert-warning mt-4'>You have 0 Employee, Start Adding them!</h6>
            )
         }
         return(
            <table class="table table-striped table-hover mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Pay</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
                {Employee.map(
                    emp =>
                    <tr key={emp.E_Id}>
                        <td>{emp.E_Id}</td>
                        <td>{emp.E_Name}</td>
                        <td>{emp.E_Depart}</td>
                        <td>{emp.E_Salary}</td>
                        <td><NavLink to={`/Salary/${emp.E_Id}`}>{pay}</NavLink></td>
                        <td>
                            <NavLink to={`/Employee/Update/${emp.E_Id}`}>{Edit}</NavLink>
                            <NavLink to={`/Employee/Delete/${emp.E_Id}`}>{Delete}</NavLink>
                        </td>

                    </tr> 
                    
                )}
            </tbody>
          </table>
         );
     }


    render() { 
        return ( 
            <div className='main'>
                <nav className="navbar navbar-light bg-light">
                <NavLink to={`/Employee/Create`} className="btn btn-outline-dark" type="button">Add {this.state.name}</NavLink>

                <form className='form-inline'>
                    <div className='form-group'>
                        <input  className='form-control' 
                        type="text"
                        onChange={this.handleSearch}
                        placeholder='Search Employee..'
                        />
                    </div>

                </form>                
                </nav>
                <div className='container mt-4'>
                    <h3>Available {this.state.name}</h3>
                    {this.showEmployee()}
                </div> 
            </div>
         );
    }
}
 
export default Employee;