import React, { Component } from 'react';
import '../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from  '@fortawesome/free-solid-svg-icons'; 



class Salary extends Component {
    state = { 
        name: 'Salary',
        Salary: [],
 
     }
     componentDidMount(){
     document.title=`${this.state.name} - POS`;      
    }
     showSalary = () => {
         const {Salary} = this.state;
         const Edit = <FontAwesomeIcon  className ='text-primary' icon={faEdit} size ='md mr-3'/>
         const Delete = <FontAwesomeIcon className ='text-danger' icon={faTrashAlt} size ='md mr-3'/>
         if(Salary.length === 0){
            return(
                <h6 className='alert alert-warning mt-4'>You have 0 Salary, Start Adding them!</h6>
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
                {Salary.map(
                    (emp,id) =>
                    <tr key={id}>
                        <td>{emp.SalaryID}</td>
                        <td>{emp.SalaryName}</td>
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
                        placeholder='Search Salary..'
                        />
                    </div>
                </form>           
                </nav>
                <div className='container mt-4'>
                    <h3>Available {this.state.name}</h3>
                    {this.showSalary()}
                </div> 
            </div>
         );
    }
}
 
export default Salary;