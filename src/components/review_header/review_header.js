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
    componentDidMount(){
        console.log('service_header',this.props)
    }
    goto_review_list = () =>{
        this.props.history.push('/review_list')
    };
    render(){
        let show_all = '';
        if(this.props.is_detail){
            show_all = <div className={'show_all'} onClick={this.goto_review_list}>查看全部</div>
        }
        return(
            <div className={'review_header_container'}>
                <div className={'review_num'}>评价({this.state.all_review})</div>
                <div className={'percent_show_all'}>
                    <div className={'percent'}>好评率<span style={{"color":"#FBAF39"}}>&nbsp;{this.state.percent}%</span></div>
                    {show_all}
                </div>
            </div>
        )
    }
}

export default ReviewHeader