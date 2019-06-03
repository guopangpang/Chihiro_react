import React, {Component} from 'react'
import './my.css'
import img from '../../image/image.jpg'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
class My extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'暗月'
        }
    }
    render(){
        return(
            <div className={'my_container'}>
                <Header />
                <div>
                    <div className={'my_header_background'}>
                        <div className={'my_person_center_word'}>个人中心</div>
                        <div className={'my_header_info'}>
                            <img src={img} className={'my_header_img'}/>
                            <div className={"my_header_name"}>{this.state.name}</div>
                        </div>
                    </div>
                </div>
                <Footer home_props={this.props}/>
            </div>
        )
    }
}

export default My