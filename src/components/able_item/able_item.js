import React, {Component} from 'react'
import './able_item.scss'
import img from '../../image/image.jpg'

class AbleItem extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    goto_service_detail = () =>{
        // this.props.history.push({pathname:'/service_detail',query:{id:'22'}})
    };
    render(){
        return(
            <div className={'able_item_comtainer'} onClick={this.goto_service_detail}>
                <div className={'title'}>{this.props.item.title}</div>
                <div className={'info_image_person'}>
                    <div className={'info_person'}>
                        <div className={'info'} style={{"WebkitBoxOrient": "vertical"}}>{this.props.item.info}</div>
                        <div className={'able_item_price'}>￥{this.props.item.price}</div>
                        <div className={'time_num_good'}>
                            <div className={'time'}>{this.props.item.time}</div>
                            <div className={'num'}>{this.props.item.pay_person}人付款</div>
                        </div>
                    </div>
                    <img className={'image'} src={img} />
                </div>
            </div>
        )
    }
}

export default AbleItem