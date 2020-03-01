import React, { Component } from 'react';
import '../StyleSheets/content.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt, faBatteryEmpty} from  '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';



class Revenue extends Component {
    state = { 
        name: 'Revenue',
        Revenue: {},
 
     }
     componentDidMount(){
     document.title=`${this.state.name} - POS`;      
     this.getRevenue();
    }
    getRevenue = () =>{
        axios.get("http://localhost:52385/api/Revenue").then(response =>{
            const resArray = response.data;
            const revObj = resArray.pop()
            console.log(revObj)
            this.setState({Revenue: revObj})
        })
    }
     showRevenue = () => {
         const {Revenue} = this.state;
         const Edit = <FontAwesomeIcon  className ='text-primary' icon={faEdit} size ='md mr-3'/>
         const Delete = <FontAwesomeIcon className ='text-danger' icon={faTrashAlt} size ='md mr-3'/>
         if(Revenue.length === 0){
            return(
                <h6 className='alert alert-warning mt-4'>You have 0 Revenue, Start Adding them!</h6>
            )
         }
         return(
            <div style={{width: 500}}className="alert alert-success mt-4" role="alert">
                <h3 className="alert-heading">$ {Revenue.Funds}</h3>
                <p>Our goal is long term growth in revenue…so we invest aggressively in future innovation while tightly managing our short term costs..</p>
                <hr/>
                <p className="mb-0">Success is not final. failure is not fatal. It is the courage to continue that counts.</p>
            </div>
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
                        placeholder='Search Revenue..'
                        />
                    </div>
                </form>           
                </nav>
                <div className='container mt-4'>
                    <h3>Available {this.state.name}</h3>
                    {this.showRevenue()}
                </div> 
            </div>
         );
    }
}
 
export default Revenue;