import React, {Component} from 'react'
import './service_detail.css'
import Swiper from '../../components/swiper/swiper'

class ServiceDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:{
                title:'北大自动化学院',
                person_num:120
            }
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        console.log(this.props.location.query)
    }
    render(){
        return(
            <div className={'service_detail_container'}>
                <Swiper item={'aaa'}/>
                <div className={'header_info'}>
                    <div className={'title_person'}>
                        <div className={'title'}>{this.state.info.title}</div>
                        <div className={'person_num'}>{this.state.info.person_num}人付款</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceDetail