import React, {Component} from 'react'
import './footer.css'
import fint_person from '../../image/find_person.png'
import fint_person_blue from '../../image/find_person_blue.png'
import fint_question from '../../image/find_question.png'
import fint_question_blue from '../../image/find_question_blue.png'
import my from '../../image/my.png'
import my_blue from '../../image/my_blue.png'


class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            icon_list: [
                {name: '找人',icon:fint_person,url:'',color:'#666'},
                {name: '问题',icon:fint_question,url:'',color:'#666'},
                {name: '我的',icon:my,url:'',color:'#666'}],
            home_props:this.props.home_props
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        if(this.state.home_props.location.pathname === '/'){
            this.state.icon_list[0].icon = fint_person_blue;
            this.state.icon_list[0].color = '#01a6f6';
            this.setState({
                icon_list:this.state.icon_list
            })
        }
    }
    goto = () => {

    };
    render(){
        return(
            <div className={'footer_container'}>
                {
                    this.state.icon_list.map((item,index)=>{
                        return (
                            <div key={index} className={'footer_item'} onClick={this.goto}>
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