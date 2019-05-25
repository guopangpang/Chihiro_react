import React, {Component} from 'react'
import './order_header.css'
import Header from '../../components/header/header'
import img from '../../image/image.jpg'

class OrderHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:{
                title:'北大自动化学院',
                img:img,
            }
        }
    }
    render(){
        return(
            <div className={'order_header_container'}>
                <Header/>
                <div className={'order_info'}>订单信息</div>
                <div className={'order_header_info'}>
                    <div className={'order_header_title_fee'}>
                        <div className={'order_header_title'}>{this.state.info.title}</div>
                        <div className={'order_header_advisory'}>
                            <div className={'order_header_fee_word'}>咨询费</div>
                            <div className={'order_header_fee_money'}>￥1.00</div>
                        </div>
                        <div className={'order_header_service'}>
                            <div className={'order_header_fee_word'}>服务费</div>
                            <div className={'order_header_fee_money'}>￥150.00</div>
                        </div>
                    </div>
                    <img className={'order_header_img'} src={this.state.info.img} />
                </div>
                <div className={'order_header_real_payment'}>
                    <div className="order_header_real_payment_word">实付款</div>
                    <div className="order_header_real_payment_money">￥1.00</div>
                </div>
                <div className={'order_header_leave'}></div>
            </div>
        )
    }
}

export default OrderHeader