import React, { Component } from 'react';
import '../../StyleSheets/content.css'; 
import axios from 'axios';




class deleteInventory extends Component {
    state = { 
        name: 'Inventory',
        notification:null
     }
     
     componentDidMount(){
     document.title=`${this.state.name} - POS`;  
    }
    
    notify=()=>{
        if(this.state.notification !== null){
            return(
                <div class="alert alert-danger mt-4" role="alert">
                    {this.state.notification}
                </div>
            )
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const pathname = window.location.pathname.split("/")
        const id = pathname[3];
        console.log("delete "+ id)
        axios.delete(`http://localhost:52385/api/Inventory/${id}`).then(response=>{
            if(response.data){
                this.setState({
                    notification:response.data
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
                        placeholder='Search Inventory..'
                        />
                    </div>
                </form>                
                </nav>
                <div className='container mt-4'>
                    <h3>Delete {this.state.name}</h3>
                    <h5>Are you sure?</h5>
                    <button  onClick={this.handleSubmit}  type="button" className ="btn btn-danger mt-2"> Delete </button>
                    {this.notify()}
                </div> 
            </div>
         );
    }
}
 
export default deleteInventory;