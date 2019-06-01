import React, {Component} from 'react'
import './homeItem.css'
import img from '../../image/image.jpg'
import add_router from '../../withSubscription/add_router'

class homeItem extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    goto_service_detail = () =>{
        this.props.history.push({pathname:'/service_detail',query:{id:'22'}})
    };
    render(){
        return(
            <div className={'home_item_container'} onClick={this.goto_service_detail}>
                <div className={'title'}>{this.props.item.title}</div>
                <div className={'info_image_person'}>
                    <div className={'info_person'}>
                        <div className={'info'} style={{"WebkitBoxOrient": "vertical"}}>{this.props.item.info}</div>
                        <div className={'person'}>
                            <img className={'person_header_img'} src={img} />
                            <div className={'person_name'}>{this.props.item.name}</div>
                        </div>
                        <div className={'time_num_good'}>
                            <div className={'time'}>{this.props.item.time}</div>
                            <div className={'num'}>{this.props.item.pay_person}人付款</div>
                            <div className={'good'}>{this.props.item.good_present}%好评</div>
                        </div>
                    </div>
                    <img className={'image'} src={img} />
                </div>
            </div>
        )
    }
}

// homeItem = add_router(homeItem);

export default homeItem