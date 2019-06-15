import React, {Component} from 'react'
import { InfiniteLoader, List } from 'react-virtualized';
import './question.scss'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import HomeItem from '../../components/homeItem/homeItem'
import ItemList from '../../components/item_list/item_list'

class Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            question_list:[],
            height:100,
            start:0,
            isloading:true,
        }
    }
    componentWillMount(){
        this.get_data();
    }
    get_data = () =>{
        this.setState({
            isloading:false
        },()=>{
            for(let i=this.state.start;i<this.state.start + 6;i++){
                let obj = {
                    title:'小锅米线加盟有什么流程？',
                    info:'我想要加盟一下云南十里香小锅米线，但是有什么\n' +
                    '注意s事项，如果来开始，请有经验的人帮忙解',
                    name:'暗*月',
                    time:'2019年06月03',
                    good_present:'95%',
                    pay_person:i,
                    header_img:'../../image/image2.jpg',
                    img:'../../image/image2.jpg'
                };
                this.state.question_list.push(obj)
            }
            this.state.start = this.state.start + 6;
            this.setState({
                question_list:this.state.question_list,
                start:this.state.start
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        isloading:true
                    })
                },2000);
            });
        });
    };
    onScroll = () => {
        console.log('onScroll');
        if(this.state.isloading){
            this.get_data();
        }
    };
    render(){
        return(
            <div className={'question_container'}>
                <Header/>
                <ItemList onScroll={this.onScroll} height={this.state.height} total={this.state.question_list.length}>
                    {
                        this.state.question_list.map((item,index)=>{
                            return <HomeItem key={index} item={item} history={this.props.history}/>
                        })
                    }
                </ItemList>
                <Footer home_props={this.props} />
            </div>
        )
    }
}

export default Question