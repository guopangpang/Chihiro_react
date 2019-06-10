import React, {Component} from 'react'
import './review_list.scss'

import Header from '../../components/header/header'
import ReviewHeader from '../../components/review_header/review_header'
import ReviewInfo from '../../components/review_info/review_info'

class ReviewList extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [0, 1, 2, 3, 4, 5]
        }
    }
    render(){
        return(
            <div className={'review_list_container'}>
                <Header/>
                <ReviewHeader is_detail = {false} history = {this.props.history}/>
                {
                    this.state.data.map((index, item) => {
                        return <ReviewInfo key={index} is_add_review = {false}/>
                    })
                }
            </div>
        )
    }
}

export default ReviewList