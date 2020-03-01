import React, { Component } from 'react';
import '../StyleSheets/content.css';
import axios from 'axios';



class Sale extends Component {
    state = { 
        name: 'Sale',
        I_Id: null,
        I_Name: "",
        isProduct:null,
        I_Price: null,
        I_Quantity: null ,
        notification:null
     }
     
     componentDidMount(){
     document.title=`${this.state.name} - POS`;  
     console.log("bc")
     this.getInventory();

    }
    notify=()=>{
        const {notification,I_Name} = this.state;
        let className = '';
        if(notification !== null && notification === "Out of Products!"){
            className = 'alert alert-danger mt-4';
            return(
                <div className={className} role="alert">
                    {this.state.notification}
                </div>
            )
        }else if(notification !== null && notification === `Product is sold!`){
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
        axios.get(`http://localhost:52385/api/Sale/${id}`).then((response)=>{
            console.log(response)
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
        axios.put(`http://localhost:52385/api/Sale/${id}`,this.state).then(response=>{
            console.log(response.data)
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
                        placeholder='Search Employee..'
                        />
                    </div>
                </form>                
                </nav>
                <div className='container mt-4'>
                    <h3>Add {this.state.name}</h3>
                    <form onSubmit={this.handleSubmit} className="container">
                        <div className="form-group mt-4 ">
                            <h5>Name</h5>
                            <input onChange={this.handleChange} disabled
                            name="I_Name" type="text" value={this.state.I_Name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Price</h5>
                            <input onChange={this.handleChange} disabled
                            name="I_Price" type="text" value={this.state.I_Price} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <h5>Quantity</h5>
                            <input onChange={this.handleChange} 
                            name="I_Quantity" type="text" value={this.state.I_Quantity} className="form-control"/>
                        </div>
                        <button type="submit" className ="btn btn-primary" onClick={this.click}> Sell </button>
                    </form>
                   {this.notify()}
                </div> 
            </div>
         );
    }
}
 
export default Sale;