import React, {Component} from 'react'
import './service_detail.scss'
import Swiper from '../../components/swiper/swiper'
import Header from '../../components/header/header'
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
            selectedValue:"",
            is_question:true
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
    goto_order_detail = () =>{
        this.props.history.push({pathname:'/order_detail'})
    };
    goto_able_list = () =>{
        this.props.history.push({pathname:'/able_list'})
    };
    render(){
        let button;
        if(this.state.is_question){
            button = (
                <div className={'pay_button'} onClick={this.goto_order_detail}>
                    <div className={'pay_button_word'}>支付</div>
                </div>
            )
        }else{
            button = (
                <div>

                </div >
            )
        }
        return(
            <div className={'service_detail_container'}>
                <Header/>
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
                <ReviewHeader is_detail={true} history = {this.props.history}/>
                <ReviewInfo is_add_review = {false} />
                <div className={'person_able'}>
                    <div className={'header_img_able_name'}>
                        <img className={'person_able_img'} src={this.state.person.img}/>
                        <div className={'person_able_name'}>{this.state.person.name}</div>
                    </div>
                    <div className={'more_able'} onClick={this.goto_able_list}>查看能力</div>
                </div>
                <div className={'service_radio'}>
                    <Radio
                        checked={this.state.selectedValue === 'a'}
                        onChange={this.choose_price}
                        value="a"
                        name="radio-button-demo"
                        aria-label="A"
                    />
                    <span>￥1.00&nbsp;&nbsp;咨询费</span>
                    <Radio
                        checked={this.state.selectedValue === 'b'}
                        onChange={this.choose_price}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                    />
                    <span>￥150.00&nbsp;&nbsp;服务费</span>
                </div>
                <div className={'leave_blank'}></div>
                { button }
            </div>
        )
    }
}

export default ServiceDetail