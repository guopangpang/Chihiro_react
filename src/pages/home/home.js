import React, {Component} from 'react'
import './home.css'
import HomeItem from '../../components/homeItem/homeItem'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'home_container'}>
                <HomeItem></HomeItem>
                <HomeItem></HomeItem>
            </div>
        )
    }
}

export default Home