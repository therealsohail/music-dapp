import React, { Component } from 'react';
import '../../StyleSheets/content.css';
import axios from 'axios';




class createInventory extends Component {
    state = { 
        name: 'Inventory',
        I_Id: null,
        I_Name: "",
        isProduct:null,
        I_Price: null,
        I_Quantity: null 
     }
     
     componentDidMount(){
     document.title=`${this.state.name} - POS`;  
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();        
        const pathname = window.location.pathname.split("/")
        const id = pathname[3];
        axios.post(`http://localhost:52385/api/Inventory/${id}`,this.state).then(response=>{
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
                        placeholder='Search Inventory..'
                        />
                    </div>
                </form>                
                </nav>
                <div className='container mt-4'>
                    <h3>Add {this.state.name}</h3>
                    <form onSubmit={this.handleSubmit} className="container">
                        <div className="form-group mt-4 ">
                            <h5>Name</h5>
                            <input onChange={this.handleChange} 
                            name="I_Name" type="text" value={this.state.I_Name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>isProduct</h5>
                            <input onChange={this.handleChange} 
                            name="isProduct" type="text" value={this.state.isProduct} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Price</h5>
                            <input onChange={this.handleChange} 
                            name="I_Price" type="text" value={this.state.I_Price} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Quantity</h5>
                            <input onChange={this.handleChange} 
                            name="I_Quantity" type="text" value={this.state.I_Quantity} className="form-control"/>
                        </div>
                        <button type="submit" className ="btn btn-primary" onClick={this.click}> Update </button>
                    </form>
                </div> 
            </div>
         );
    }
}
 
export default createInventory;