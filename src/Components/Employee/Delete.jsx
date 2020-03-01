import React, { Component } from 'react';
import '../../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from  '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';
import {NavLink} from 'react-router-dom';



class deleteEmployee extends Component {
    state = { 
        name: 'Employee',
        E_Id: null,
        E_Name: "",
        E_Depart:"",
        E_Salary: null 
     }
     
     componentDidMount(){
     document.title=`${this.state.name} - POS`;  
    }
    

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
        
        const pathname = window.location.pathname.split("/")
        const id = pathname[3];
        console.log(id)
        axios.delete(`http://localhost:52385/api/Employee/${id}`).then(res=>{
            console.log(res)
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
                    <h3>Delete {this.state.name}</h3>
                    <h5>Are you sure?</h5>
                    <button  onClick={this.handleSubmit}  type="button" className ="btn btn-danger"> Delete </button>

                </div> 
            </div>
         );
    }
}
 
export default deleteEmployee;