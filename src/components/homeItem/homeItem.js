import React, {Component} from 'react'
import './homeItem.css'
import img from '../../image/image.jpg'

class homeItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:{
                title:'清华自动化机电学系',
                info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答听听师兄给你耐心解答听听师兄给你耐心解答',
                name:'暗*月',
                time:'2019年3月24',
                good_present:'95%',
                pay_person:'233',
                header_img:'../../image/image.jpg',
                img:'../../image/image.jpg'
            }
        }
    }
    render(){
        return(
            <div className={'home_item_container'}>
                <div className={'title'}>{this.state.info.title}</div>
                <div className={'info_image_person'}>
                    <div className={'info_person'}>
                        <div className={'info'} style={{"WebkitBoxOrient": "vertical"}}>{this.state.info.info}</div>
                        <div className={'person'}>
                            <img className={'person_header_img'} src={img} />
                            <div className={'person_name'}>{this.state.info.name}</div>
                        </div>
                        <div className={'time_num_good'}>
                            <div className={'time'}>{this.state.info.time}</div>
                            <div className={'num'}>{this.state.info.pay_person}人付款</div>
                            <div className={'good'}>{this.state.info.good_present}%好评</div>
                        </div>
                    </div>
                    <img className={'image'} src={img} />
                </div>
            </div>
        )
    }
}

export default homeItem