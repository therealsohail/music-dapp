import React, { Component } from 'react';
import '../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from  '@fortawesome/free-solid-svg-icons'; 



class Employee extends Component {
    state = { 
        name: 'Employee',
        Employee: [{EmployeeID:1,EmployeeName:"Sohail",Department:'CS',Email:"sohailsaleem1998@gmail.com"}],
 
     }
     componentDidMount(){
     document.title=`${this.state.name} - POS`;      
    }
     showEmployee = () => {
         const {Employee} = this.state;
         const Edit = <FontAwesomeIcon  className ='text-primary' icon={faEdit} size ='md mr-3'/>
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
                <th>Email</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
                {Employee.map(
                    (emp,id) =>
                    <tr key={id}>
                        <td>{emp.EmployeeID}</td>
                        <td>{emp.EmployeeName}</td>
                        <td>{emp.Department}</td>
                        <td>{emp.Email}</td>
                        <td>
                            <span>{Edit}</span>
                            <span>{Delete}</span> 
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