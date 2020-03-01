import React, { Component } from 'react';
import '../StyleSheets/content.css';
import axios from 'axios';



class Salary extends Component {
    state = { 
        name: 'Salary',
        E_Id: null,
        E_Name : "",
        E_Depart:"",
        E_Salary: null ,
        notification:null,
     }
     
     componentDidMount(){
     document.title=`${this.state.name} - POS`;  
     console.log("bc")
     this.getInventory();

    }
    notify=()=>{
        const {notification} = this.state;
        let className = '';
        if(notification !== null && notification === "Out Of Funds!"){
            className = 'alert alert-danger mt-4';
            return(
                <div className={className} role="alert">
                    {this.state.notification}
                </div>
            )
        }else if(notification !== null && notification === "Salary have been transfered!"){
            className = 'alert alert-primary mt-4';
            return(
                <div className={className} role="alert">
                    {this.state.notification}
                </div>
            )
        }
    }
    getInventory = () =>{
        const pathname = window.location.pathname.split("/")
        const id = pathname[2];
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
            
        }).catch(err=>{
            console.log(`Error: ${err}`);
            
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
        const id = pathname[2];
        axios.put(`http://localhost:52385/api/Salary/${id}`,this.state).then(response=>{
            if(response.data){
                this.setState({
                    notification: response.data
                })
            }
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
                    <h3>Pay {this.state.name}</h3>
                    <form onSubmit={this.handleSubmit} className="container">
                        <div className="form-group mt-4 ">
                            <h5>Name</h5>
                            <input onChange={this.handleChange} disabled
                            name="E_Name" type="text" value={this.state.E_Name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Department</h5>
                            <input onChange={this.handleChange} disabled
                            name="E_Depart" type="text" value={this.state.E_Depart} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Salary</h5>
                            <input onChange={this.handleChange} disabled
                            name="E_Salary" type="text" value={this.state.E_Salary} className="form-control"/>
                        </div>
                        <button type="submit" className ="btn btn-primary" onClick={this.click}> Pay </button>
                    </form>
                   {this.notify()}
                </div> 
            </div>
         );
    }
}
 
export default Salary;