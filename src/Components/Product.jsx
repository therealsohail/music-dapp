import React, { Component } from 'react';
import '../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCashRegister} from  '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';
import {NavLink} from 'react-router-dom';


class Product extends Component {
    state = { 
        name: 'Product',
        Product: [],
 
     }
     componentDidMount(){
     document.title=`${this.state.name} - POS`;    
     this.getProduct();  
    }
    getProduct = () =>{
        axios.get("http://localhost:52385/api/Product").then((response)=>{
            console.log(response)
            this.setState({
                Product:response.data
            })
        })
    }
     showProduct = () => {
         const {Product} = this.state;
         const Edit = <FontAwesomeIcon  className ='text-info' icon={faCashRegister} size ='md mr-3'/>
         if(Product.length === 0){
            return(
                <h6 className='alert alert-warning mt-4'>You have 0 Product, Start Adding them!</h6>
            )
         }
         return(
            <table class="table table-striped table-hover mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>isProduct</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sell</th>
              </tr>
            </thead>
            <tbody>
                {Product.map(
                    (inv) =>
                    <tr key={inv.I_Id}>
                        <td>{inv.I_Id}</td>
                        <td>{inv.I_Name}</td>
                        <td>{inv.isProduct}</td>
                        <td>{inv.I_Price}</td>
                        <td>{inv.I_Quantity}</td>
                        <td>
                            <NavLink to={`/Sales/${inv.I_Id}`}>{Edit}</NavLink>
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
                        placeholder='Search Product..'
                        />
                    </div>
                </form>           
                </nav>
                <div className='container mt-4'>
                    <h3>Available {this.state.name}</h3>
                    {this.showProduct()}
                </div> 
            </div>
         );
    }
}
 
export default Product;