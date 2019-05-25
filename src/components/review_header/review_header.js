import React, {Component} from 'react'
import './review_header.css'

class ReviewHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            all_review:106,
            percent:90
        }
    }
    render(){
        return(
            <div className={'review_header_container'}>
                <div className={'review_num'}>评价({this.state.all_review})</div>
                <div className={'percent_show_all'}>
                    <div className={'percent'}>好评率<span style={{"color":"#FBAF39"}}>&nbsp;{this.state.percent}%</span></div>
                    <div className={'show_all'}>查看全部</div>
                </div>
            </div>
        )
    }
}

export default ReviewHeader