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
        console.log(scrollHeight,offsetHeight,scrollTop);
        if((scrollHeight - offsetHeight - scrollTop)<100){
            this.props.onScroll()
        }
    };
    render() {
        let show_and_buffer = this.props.show_length + this.props.buffersize;
        let startOffset = 0, endOffset = 0;
        let show_list = this.props.list.slice(this.props.start - show_and_buffer, this.props.start);;
        let height = this.props.height.split('rem')[0]*this.props.list.length;
        startOffset = height - 68;
        console.log(height);

        return (
            <div className={'great_list_container'} onScrollCapture={this.onScroll} ref={(great_list)=>{this.state.great_list= great_list}}>
                <div style={{'height':height - startOffset + 'rem', 'paddingTop':startOffset + 'rem'}} >
                    {
                        show_list.map((item,index)=>{
                            return <this.props.item key={index} item={item}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GreatList