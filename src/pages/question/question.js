import React, {Component} from 'react'
import './question.scss'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import HomeItem from '../../components/homeItem/homeItem'

class Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            question_list:[]
        }
    }
    componentDidMount(){
        let obj = {
            title:'小锅米线加盟有什么流程？',
            info:'我想要加盟一下云南十里香小锅米线，但是有什么\n' +
            '注意s事项，如果来开始，请有经验的人帮忙解',
            name:'暗*月',
            time:'2019年06月03',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image2.jpg',
            img:'../../image/image2.jpg'
        };
        for(let i=0;i<6;i++){
            this.state.question_list.push(obj)
        }
        this.setState({
            question_list:this.state.question_list
        });
    }
    render(){
        return(
            <div className={'question_container'}>
                <Header/>
                {
                    this.state.question_list.map((item,index)=>{
                        return <HomeItem key={index} item={item} history={this.props.history}/>
                    })
                }
                <Footer home_props={this.props} />
            </div>
        )
    }
}

export default Question