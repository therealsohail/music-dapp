import React, { Component } from 'react';
import '../../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from  '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';
import {NavLink} from 'react-router-dom';



class updateEmployee extends Component {
    state = { 
        name: 'Employee',
        E_Id: null,
        E_Name: "",
        E_Depart:"",
        E_Salary: null 
     }
     
     componentDidMount(){
     document.title=`${this.state.name} - POS`;  
     this.getEmployee();
    }
    getEmployee = () =>{
        const pathname = window.location.pathname.split("/")
        const id = pathname[3];
        axios.get(`http://localhost:52385/api/Employee/${id}`).then((response)=>{
            const data = response.data;
            data.map(emp => {
                const salary = parseFloat(emp.E_Salary)
                this.setState({
                    E_Id: id,
                    E_Name : emp.E_Name,
                    E_Depart:emp.E_Depart,
                    E_Salary: salary
                })
            })
            
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
        
        const pathname = window.location.pathname.split("/")
        const id = pathname[3];
        axios.put(`http://localhost:52385/api/Employee/${id}`,this.state).then(response=>{
            console.log(response)
        })
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
                    <h3>Update {this.state.name}</h3>
                    <form onSubmit={this.handleSubmit} className="container">
                        <div className="form-group mt-4 ">
                            <h5>Name</h5>
                            <input onChange={this.handleChange} 
                            name="E_Name" type="text" value={this.state.E_Name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Department</h5>
                            <input onChange={this.handleChange} 
                            name="E_Depart" type="text" value={this.state.E_Depart} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Salary</h5>
                            <input onChange={this.handleChange} 
                            name="E_Salary" type="text" value={this.state.E_Salary} className="form-control"/>
                        </div>
                        <button type="submit" className ="btn btn-primary" onClick={this.click}> Update </button>
                    </form>
                </div> 
            </div>
         );
    }
}
 
export default updateEmployee;