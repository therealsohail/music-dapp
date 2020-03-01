import React, { Component } from 'react';
import '../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from  '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';
import {NavLink} from 'react-router-dom';



class Inventory extends Component {
    state = { 
        name: 'Inventory',
        Inventory: [],
 
     }
     componentDidMount(){
        document.title=`${this.state.name} - POS`;      
        this.getInventory()
    }
    getInventory = () =>{
        axios.get("http://localhost:52385/api/Inventory").then((response)=>{
            console.log(response)
            this.setState({
                Inventory:response.data
            })
        })
    }
     showInventory = () => {
         const {Inventory} = this.state;
         const Edit = <FontAwesomeIcon  className ='text-primary' icon={faEdit} size ='md mr-3'/>
         const Delete = <FontAwesomeIcon className ='text-danger' icon={faTrashAlt} size ='md mr-3'/>
         if(Inventory.length === 0){
            return(
                <h6 className='alert alert-warning mt-4'>You have 0 Inventory, Start Adding them!</h6>
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
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
                {Inventory.map(
                    (inv) =>
                    <tr key={inv.I_Id}>
                        <td>{inv.I_Id}</td>
                        <td>{inv.I_Name}</td>
                        <td>{inv.isProduct}</td>
                        <td>{inv.I_Price}</td>
                        <td>{inv.I_Quantity}</td>
                        <td>
                            <NavLink to={`/Inventory/Update/${inv.I_Id}`}>{Edit}</NavLink>
                            <NavLink to={`/Inventory/Delete/${inv.I_Id}`}>{Delete}</NavLink> 
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
                <NavLink to={`/Inventory/Create`} className="btn btn-outline-dark" type="button">Add {this.state.name}</NavLink>

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
                    <h3>Available {this.state.name}</h3>
                    {this.showInventory()}
                </div> 
            </div>
         );
    }
}
 
export default Inventory;