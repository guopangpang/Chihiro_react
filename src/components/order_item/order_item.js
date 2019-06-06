import React, {Component} from 'react'
import './order_item.scss'

import img from '../../image/image.jpg'

class OrderItme extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'order_item_container'}>
                <div className={'order_item_word_container'}>
                    <div className={'order_item_word'}>
                        <div className={'order_item_title'}>清华自动化机电学系</div>
                        <div className={'order_item_info'}>这里的专业为何数一数二,与北大的自动化有什么区别，听听
                            师兄给你耐心解答。</div>
                    </div>
                    <img src={img} className={'order_item_img'}/>
                </div>
                <div className={'order_item_price_container'}>
                    <div className={'order_item_adv_price'}>
                        <div className={'name_time'}>
                            <div className={'service_name'}>咨询费:￥1.00</div>
                            <div className={'time'}>2019年6月6日 23:20:04</div>
                        </div>
                        <div className={'service_state'}>已支付</div>
                    </div>
                    <div className={'order_item_service_price'}>
                        <div className={'name_time'}>
                            <div className={'service_name'}>服务费:￥150.00</div>
                            <div className={'time'}>2019年6月6日 23:20:04</div>
                        </div>
                        <div className={'service_state'}>已支付</div>
                    </div>
                </div>
                <div className={'order_item_person_button'}>
                    <div className={'person_info'}>
                        <img className={'person_img'} src={img} />
                        <div className={'person_name'}>暗月</div>
                    </div>
                    <div className={'button_arr'}>
                        <div className={'button_one'}>拨打电话</div>
                        <div className={'button_two'}>评价</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderItme