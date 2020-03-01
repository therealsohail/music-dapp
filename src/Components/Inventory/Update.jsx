import React, { Component } from 'react';
import '../../StyleSheets/content.css';
import axios from 'axios';



class updateInventory extends Component {
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
     this.getInventory();
    }
    getInventory = () =>{
        const pathname = window.location.pathname.split("/")
        const id = pathname[3];
        axios.get(`http://localhost:52385/api/Inventory/${id}`).then((response)=>{
            const data = response.data;
            data.map(inv => {
                const price = parseFloat(inv.I_Price)
                const qty = parseFloat(inv.I_Quantity)
                this.setState({
                    I_Id: id,
                    I_Name : inv.I_Name,
                    isProduct:inv.isProduct,
                    I_Price: price,
                    I_Quantity: qty 
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
        axios.put(`http://localhost:52385/api/Inventory/${id}`,this.state).then(response=>{
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
 
export default updateInventory;