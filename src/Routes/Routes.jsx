import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Employee from '../Components/Employee';
import SideBar from '../Components/SideBar';
import Inventory from '../Components/Inventory';
import Product from '../Components/Product';
import Sales from '../Components/Sale';
import Salary from '../Components/Salary';
import Revenue from '../Components/Revenue';

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
                             <Route path='/Inventory' component={Inventory}/>
                             <Route path='/Products' component={Product}/>
                             <Route path='/Sales' component={Sales}/>
                             <Route path='/Salary' component={Salary}/>
                             <Route path='/Revenue' component={Revenue}/>
                        </Switch>  
                    </div>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Routes;