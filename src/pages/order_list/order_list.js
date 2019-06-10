import React, {Component} from 'react'
import './order_list.scss'

import Header from  '../../components/header/header'
import OrderItem from '../../components/order_item/order_item'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class OrderList extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    handleChange = (event,newValue) =>{
        this.setState({
            value:newValue
        })
    };
    render(){
        return(
            <div className={'order_list_container'}>
                <Header/>
                <div className={'order_tab'}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                    </Tabs>
                </div>

                {this.state.value === 0 && <div>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                </div>}
                {this.state.value === 1 && <div>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                </div>}

            </div>
        )
    }
}

export default  OrderList