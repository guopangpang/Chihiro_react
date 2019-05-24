import React, {Component} from 'react'
import './home.css'
import HomeItem from '../../components/homeItem/homeItem'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            home_list:[]
        }
    }
    componentDidMount(){
        let obj = {
            title:'清华自动化机电学系',
                info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答听听师兄给你耐心解答听听师兄给你耐心解答',
                name:'暗*月',
                time:'2019年3月24',
                good_present:'95%',
                pay_person:'233',
                header_img:'../../image/image.jpg',
                img:'../../image/image.jpg'
        };
        for(let i=0;i<6;i++){
            this.state.home_list.push(obj)
        }
        this.setState({
            home_list:this.state.home_list
        })
    }
    render(){
        return(
            <div>
                <Header/>
                <div className={'home_container'}>
                    {
                        this.state.home_list.map((item,index)=>{
                            return <HomeItem key={index} item={item} history={this.props.history}/>
                        })
                    }
                </div>
                <Footer home_props={this.props}/>
            </div>
        )
    }
}

export default Home