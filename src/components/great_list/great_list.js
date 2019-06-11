import React, {Component} from 'react'
import './great_list.scss'

class GreatList extends Component{
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
        if((scrollHeight - offsetHeight - scrollTop)<this.props.height){
            this.props.onScroll()
        }
    };
    render() {
        return (
            <div className={'great_list_container'} onScrollCapture={this.onScroll} ref={(great_list)=>{this.state.great_list= great_list}}>
                {this.props.children}
            </div>
        )
    }
}

export default GreatList