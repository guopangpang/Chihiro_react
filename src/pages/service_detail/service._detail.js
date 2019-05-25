import React, {Component} from 'react'
import './service_detail.css'
import Swiper from '../../components/swiper/swiper'
import ReviewHeader from '../../components/review_header/review_header'
import ReviewInfo from '../../components/review_info/review_info'
import Radio from '@material-ui/core/Radio';


import img from '../../image/image.jpg'


class ServiceDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:{
                title:'北大自动化学院',
                person_num:120,
                info:'333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333' +
                '33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333' +
                '33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333',
                time:'2019年5月15'
            },
            info_line:4,
            show_more:true,
            person:{
                name:'暗月',
                img:img
            },
            selectedValue:""
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        console.log(this.props.location.query)
    }
    show_more_info = () =>{
        this.setState({
            info_line:1000,
            show_more:false
        })
    };
    choose_price = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedValue:e.target.value
        })
    };
    render(){
        return(
            <div className={'service_detail_container'}>
                <Swiper item={'aaa'}/>
                <div className={'header_info'}>
                    <div className={'title_person'}>
                        <div className={'title'}>{this.state.info.title}</div>
                        <div className={'person_num'}>{this.state.info.person_num}人付款</div>
                    </div>
                    <div>
                       <span className={'info'} style={{"WebkitBoxOrient": "vertical","WebkitLineClamp":this.state.info_line}}>
                        {this.state.info.info}</span>
                        {
                            this.state.show_more? <span className={'show_more_info'} onClick={this.show_more_info}>点击查看更多</span>:''
                        }
                    </div>
                    <div className={'time'}>
                        {this.state.info.time}
                    </div>
                </div>
                <ReviewHeader/>
                <ReviewInfo />
                <div className={'person_able'}>
                    <div className={'header_img_able_name'}>
                        <img className={'person_able_img'} src={this.state.person.img}/>
                        <div className={'person_able_name'}>{this.state.person.name}</div>
                    </div>
                    <div className={'more_able'}>查看能力</div>
                </div>
                <div>
                    <Radio
                        checked={this.state.selectedValue === 'a'}
                        onChange={this.choose_price}
                        value="a"
                        name="radio-button-demo"
                        aria-label="A"
                    />
                    <Radio
                        checked={this.state.selectedValue === 'b'}
                        onChange={this.choose_price}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                    />
                </div>

                <div className={'leave_blank'}></div>
            </div>
        )
    }
}

export default ServiceDetail