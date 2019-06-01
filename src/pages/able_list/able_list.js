import React, {Component} from 'react'
import './able_list.css'

import Header from '../../components/header/header'
import AbleItem from '../../components/able_item/able_item'

class AbleList extends Component{
    constructor(props){
        super(props);
        this.state = {
            able_list:[]
        }
    }
    componentDidMount(){
        let obj = {
            title:'自动化生活与行业现状',
            info:'我在杭州生活学习三年有余，做了许多项目,对这一块技术有比较\n' +
            '多的了解，也喜欢给学弟讲讲怎么学习,希望可以给大家说一下',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            price:150,
            img:'../../image/image.jpg'
        };
        for(let i=0;i<6;i++){
            this.state.able_list.push(obj)
        }
        this.setState({
            able_list:this.state.able_list
        });
    }
    render(){
        return(
            <div className={'able_list_container'}>
                <Header/>
                {
                    this.state.able_list.map((item,index)=>{
                        return <AbleItem key={index} item={item} history={this.props.history}/>
                    })
                }
            </div>
        )
    }
}

export default AbleList