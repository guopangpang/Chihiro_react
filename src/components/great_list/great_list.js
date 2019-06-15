import React, {Component} from 'react'
import './great_list.scss'

class GreatList extends Component{
    constructor(props){
        super(props);
        this.state = {
            great_list:''
        };
        this.show_and_buffer = '';
        this.startOffset = 0;
        this.endOffset = 0;
        this.show_list = [];
        this.height = '';

    }
    componentDidMount(){
        console.log(this.props)
    }
    onScroll = () =>{
        let scrollHeight = this.state.great_list.scrollHeight;
        let offsetHeight = this.state.great_list.offsetHeight;
        let scrollTop = this.state.great_list.scrollTop;
        // console.log(scrollHeight,offsetHeight,scrollTop);
        if((scrollHeight - offsetHeight - scrollTop)=== 0){
            // alert(2)
            this.props.onScroll()
        }
    };
    render() {
        this.show_and_buffer = this.props.show_length + this.props.buffersize;
        this.show_list = this.props.list.slice(this.props.start - this.show_and_buffer, this.props.start);
        this.height = this.props.height.split('rem')[0]*this.props.list.length;

        this.startOffset = this.height - 68;
        console.log(this.startOffset);

        return (
            <div className={'great_list_container'} onScrollCapture={this.onScroll} ref={(great_list)=>{this.state.great_list= great_list}}>
                <div style={{'height':this.height - this.startOffset + 'rem', 'paddingTop':this.startOffset + 'rem'}} >
                    {
                        this.show_list.map((item,index)=>{
                            return <this.props.item key={index} item={item}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GreatList