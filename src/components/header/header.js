import React, {Component} from 'react'
import './header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'首页',
            back_icon:'<',
            right_icon:""
        }
    }
    render(){
        return(
            <div className={'header'}>
                <span>{this.state.back_icon}</span>
                <span>{this.state.name}</span>
                <span>{this.state.right_icon}</span>
            </div>
        )
    }
}

export default Header