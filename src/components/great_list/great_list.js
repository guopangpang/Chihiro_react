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
        // console.log(this.state.great_list.scrollHeight);
        // console.log(this.state.great_list.offsetHeight);
        // console.log(this.state.great_list.scrollTop);
        this.props.onScroll(this.state.great_list.scrollHeight,this.state.great_list.offsetHeight,this.state.great_list.scrollTop)
    };
    render() {
        return (
            <div className={'great_list_container'} onScrollCapture={this.onScroll} ref={(great_list)=>{this.state.great_list= great_list}}>
                {this.props.container}
            </div>
        )
    }
}

export default GreatList