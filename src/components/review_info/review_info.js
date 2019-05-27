import React,{Component} from 'react'
import './review_info.css'
import img from '../../image/image.jpg'

class ReviewInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            review_info:{
                header_img:img,
                name:'暗月',
                time:'2019年5月25日',
                introduction:'机械原理与人体超前结合原理',
                info:'确实讲解的比较详细，对这个学科都了解了很多。确实讲解的比较详细，对这个学科都了解了很多。确实讲解的比较详细，对这个学科都了解了很多。确实讲解的比较详细，对这个学科都了解了很多。确实讲解的比较详细，对这个学科都了解了很多。'
            }
        }
    }
    render(){
        let add_review = <div></div>;
        if(this.props.is_add_review){
            add_review = <div className={'review'}>追评</div>
        }
        return(
            <div className={'review_info_container'}>
                <div className={'review_item_header'}>
                    <img src={this.state.review_info.header_img} className={'header_img'} />
                    <div className={'name_time_introduction'}>
                        <div className={'review_person_name'}>{this.state.review_info.name}</div>
                        <div className={'time_introduction'}>
                            <div className={'review_time'}>{this.state.review_info.time}</div>
                            <div className={'introduction'}>{this.state.review_info.introduction}</div>
                        </div>
                    </div>
                    { add_review }
                </div>
                <div className={'review_info'}>{this.state.review_info.info}</div>
            </div>
        )
    }
}

export default ReviewInfo