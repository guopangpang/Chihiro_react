import React, {Component} from 'react'
import './home.css'
import HomeItem from '../../components/homeItem/homeItem'
import Header from '../../components/header/header'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <div className={'home_container'}>
                    <HomeItem></HomeItem>
                    <HomeItem></HomeItem>
                </div>
            </div>
        )
    }
}

export default Home