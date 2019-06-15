import React, {Component} from 'react'
import './item_list.scss'

class Item_list extends Component{
    constructor(props){
        super(props);
        this.state = {
            great_list:''
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    onScroll = () =>{
        let scrollHeight = this.state.great_list.scrollHeight;
        let offsetHeight = this.state.great_list.offsetHeight;
        let scrollTop = this.state.great_list.scrollTop;
        console.log(scrollHeight,offsetHeight,scrollTop);
        if((scrollHeight - offsetHeight - scrollTop)<this.props.height){
            this.props.onScroll()
        }
    };
    render() {
        return (
            <div className={'list_container'} onScrollCapture={this.onScroll} ref={(great_list)=>{this.state.great_list= great_list}}>
                {this.props.children}
            </div>
        )
    }
}

export default Item_list