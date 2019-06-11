import React, {Component} from 'react'
import './home.scss'
import HomeItem from '../../components/homeItem/homeItem'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import GreatList from '../../components/great_list/great_list'
import withHeader from '../../withSubscription/withHeader'
import iiHOC from '../../withSubscription/inheritanceInversion'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            home_list:[],
            height:100,
            total:20,
            start:0,
            isloading:true,
        }
    }
    componentDidMount(){
        this.get_home_data();
    }
    method =() =>{
        console.log('method',this.props);
    };
    onScroll = () =>{
        console.log(333333);
        if(this.state.isloading){
            this.get_home_data()
        }
    };
    get_home_data = () =>{
        this.setState({
            isloading:false
        },()=>{
            for(let i=this.state.start;i<this.state.start + 6;i++){
                let obj = {
                    title:'清华自动化机电学系',
                    info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答听听师兄给你耐心解答听听师兄给你耐心解答',
                    name:'暗*月',
                    time:'2019年3月24',
                    good_present:'95%',
                    pay_person:i,
                    header_img:'../../image/image.jpg',
                    img:'../../image/image.jpg'
                };
                this.state.home_list.push(obj)
            }
            this.state.start = this.state.start + 6;
            this.setState({
                home_list:this.state.home_list,
                start:this.state.start
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        isloading:true
                    })
                },2000);
            });
        });
    };
    render(){
        let container =
            <div className={'home_container'}>
                {
                    this.state.home_list.map((item,index)=>{
                        return <HomeItem key={index} item={item} history={this.props.history}/>
                    })
                }
            </div>;

        return(
            <div>
                <Header/>
                <GreatList onScroll={this.onScroll} height={this.state.height} total={this.state.total}>
                    {container}
                </GreatList>
                <Footer home_props={this.props}/>
            </div>
        )
    }
}

// const EnhanceDemo = withHeader(Home,'aaa');
// const EnhanceDemo = iiHOC(Home);
// export default EnhanceDemo
export default Home
