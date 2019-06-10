import React, {Component} from 'react'
import './order_detail.scss'
import OrderHeader from '../../components/order_header/order_header'

class OrderDetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'order_detail_container'}>
                <OrderHeader />
                <div className={'order_detail_info'}>
                    <div className={'order_detail_numbering'}>订单编号：2019042500</div>
                    <div className={'order_detail_buy'}>收款方：千寻</div>
                    <div className={'order_detail_sell'}>服务方:周*康</div>
                </div>
                <div className={'pay_button'}>
                    <div className={'pay_button_word'}>支付</div>
                </div>
            </div>
        )
    }
}

export default OrderDetail