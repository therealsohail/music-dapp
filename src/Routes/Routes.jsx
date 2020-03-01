import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Employee from '../Components/Employee';
import SideBar from '../Components/SideBar';
import Inventory from '../Components/Inventory';
import Product from '../Components/Product';
import Sales from '../Components/Sale';
import Salary from '../Components/Salary';
import Revenue from '../Components/Revenue';
import updateEmployee from "../Components/Employee/Update";
import deleteEmployee from "../Components/Employee/Delete";
import createEmployee from "../Components/Employee/Create";
import updateInventory from "../Components/Inventory/Update";
import deleteInventory from "../Components/Inventory/Delete";
import createInventory from "../Components/Inventory/Create";


class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <div>
                        <SideBar/>
                        <Switch>
                            <Route path='/' component={Employee} exact/>
                             <Route path='/Inventory' component={Inventory} exact />
                             <Route path='/Products' component={Product}/>
                             <Route path='/Sales' component={Sales}/>
                             <Route path='/Salary' component={Salary}/>
                             <Route path='/Revenue' component={Revenue}/>
                             <Route path='/Employee/Update' component={updateEmployee}/>
                             <Route path='/Employee/Delete' component={deleteEmployee}/>
                             <Route path='/Employee/Create' component={createEmployee}/>

                             <Route path='/Inventory/Update' component={updateInventory}/>
                             <Route path='/Inventory/Delete' component={deleteInventory}/>
                             <Route path='/Inventory/Create' component={createInventory}/>
                        </Switch>  
                    </div>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Routes;