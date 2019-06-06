import React, {Component} from 'react'
import './order_list.scss'

import Header from  '../../components/header/header'
import OrderItem from '../../components/order_item/order_item'

class OrderList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'order_list_container'}>
                <Header/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
            </div>
        )
    }
}

export default  OrderList