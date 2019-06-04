import React, {Component} from 'react'
import './my.css'
import img from '../../image/image.jpg'
import able_img from '../../image/my_able.png'
import question_img from '../../image/my_question.png'
import order_img from '../../image/my_order.png'
import review_img from '../../image/my_review.png'
import help_img from '../../image/help.png'
import aboutus_img from '../../image/aboutus.png'
import back_img from '../../image/back.png'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
class My extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'暗月'
        }
    }
    goto_my_able = () => {
      this.props.history.push({pathname:'/able_list',query:{id:1}})
    };
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
                        <div className={'my_balance'}>
                            <div className={'my_balance_info'}>
                                <div className={'my_balance_word'}>累计总额</div>
                                <div className={'my_balance_money'}>￥：25.00</div>
                            </div>
                            <div className={'my_detail_withdraw'}>
                                <div className={'my_detail'}>明细</div>
                                <div className={'my_withdraw'}>提现</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'my_cell_container'}>
                    <div className={'my_cell'}>
                        <img src={able_img} className={'my_cell_left_img'}/>
                        <div className={'my_cell_name_right'} style={{'borderBottom': '1px solid #ededed'}}>
                            <div className={'my_cell_word'}>我的能力</div>
                            <img src={back_img} className={'my_cell_right_img'} onClick={this.goto_my_able}/>
                        </div>
                    </div>
                    <div className={'my_cell'}>
                        <img src={question_img} className={'my_cell_left_img'}/>
                        <div className={'my_cell_name_right'}>
                            <div className={'my_cell_word'}>我的问题</div>
                            <img src={back_img} className={'my_cell_right_img'}/>
                        </div>
                    </div>

                    <div className={'my_cell'} style={{'marginTop':'1rem'}}>
                        <img src={review_img} className={'my_cell_left_img'}/>
                        <div className={'my_cell_name_right'} style={{'borderBottom': '1px solid #ededed'}}>
                            <div className={'my_cell_word'}>我的评论</div>
                            <img src={back_img} className={'my_cell_right_img'}/>
                        </div>
                    </div>
                    <div className={'my_cell'}>
                        <img src={order_img} className={'my_cell_left_img'}/>
                        <div className={'my_cell_name_right'}>
                            <div className={'my_cell_word'}>我的订单</div>
                            <img src={back_img} className={'my_cell_right_img'}/>
                        </div>
                    </div>

                    <div className={'my_cell'} style={{'marginTop':'1rem'}}>
                        <img src={help_img} className={'my_cell_left_img'}/>
                        <div className={'my_cell_name_right'} style={{'borderBottom': '1px solid #ededed'}}>
                            <div className={'my_cell_word'}>帮助中心</div>
                            <img src={back_img} className={'my_cell_right_img'}/>
                        </div>
                    </div>
                    <div className={'my_cell'}>
                        <img src={aboutus_img} className={'my_cell_left_img'}/>
                        <div className={'my_cell_name_right'}>
                            <div className={'my_cell_word'}>关于我们</div>
                            <img src={back_img} className={'my_cell_right_img'}/>
                        </div>
                    </div>
                </div>
                <Footer home_props={this.props}/>
            </div>
        )
    }
}

export default My