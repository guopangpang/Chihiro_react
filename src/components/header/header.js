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
                <text>{this.state.back_icon}</text>
                <text>{this.state.name}</text>
                <text>{this.state.right_icon}</text>
            </div>
        )
    }
}

export default Header