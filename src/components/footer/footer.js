import React, {Component} from 'react'
import './footer.css'
import find_person from '../../image/find_person.png'
import find_person_blue from '../../image/find_person_blue.png'
import find_question from '../../image/find_question.png'
import find_question_blue from '../../image/find_question_blue.png'
import my from '../../image/my.png'
import my_blue from '../../image/my_blue.png'


class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            icon_list: [
                {name: '找人',icon:find_person,url:'/',color:'#666'},
                {name: '问题',icon:find_question,url:'/question',color:'#666'},
                {name: '我的',icon:my,url:'/my',color:'#666'}],
            home_props:this.props.home_props
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        if(this.state.home_props.location.pathname === '/'){
            this.state.icon_list[0].icon = find_person_blue;
            this.state.icon_list[0].color = '#01a6f6';
            this.setState({
                icon_list:this.state.icon_list
            })
        }else if(this.state.home_props.location.pathname === '/question'){
            this.state.icon_list[1].icon = find_question_blue;
            this.state.icon_list[1].color = '#01a6f6';
            this.setState({
                icon_list:this.state.icon_list
            })
        }else if(this.state.home_props.location.pathname === '/my'){
            this.state.icon_list[2].icon = my_blue;
            this.state.icon_list[2].color = '#01a6f6';
            this.setState({
                icon_list:this.state.icon_list
            })
        }
    }
    goto = (item) => {
        return ()=>{
            // console.log(this.props)
            this.state.home_props.history.push(item.url)
        }
    };
    render(){
        return(
            <div className={'footer_container'}>
                {
                    this.state.icon_list.map((item,index)=>{
                        return (
                            <div key={index} className={'footer_item'} onClick={this.goto(item)}>
                                <img className={'image'} src={item.icon} />
                                <span className={'text'} style={{"color":item.color}}>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Footer