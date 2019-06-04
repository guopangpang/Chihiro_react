import React, {Component} from 'react'
import './add_able.css'

import Header from '../../components/header/header'

class AddAble extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            info:'',
            selectImageFile:''
        }
    }
    changeTitle =(e)=>{
        this.setState({
            title:e.target.value
        })
    };
    changeInfo =(e)=>{
        this.setState({
            info:e.target.value
        })
    };
    handleFileChange = (e) =>{
        console.log(e.target.files);
        console.log(this.props.uploadedImageFile);
        this.setState({
            selectImageFile:e.target.files[0]
        })
    };
    render(){
        return(
            <div className={'add_able_container'}>
                <Header/>
                <div className={'add_able_title'}>
                    <div className={'add_able_title_word'}>标题</div>
                    <input className={'add_able_title_value'} placeholder={'新建后不可修改'} value={this.state.title} onChange={this.changeTitle}/>
                </div>
                <div className={'add_able_info'}>
                    <div className={'add_able_info_word'}>内容</div>
                    <textarea className={'add_able_info_value'} placeholder={'点击输入内容'}
                              value={this.state.info} onChange={this.changeInfo} />
                </div>
                <div className={'add_able_img'}>
                    <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png"
                        className="base-upload-input"
                        onChange={this.handleFileChange}
                    />
                </div>
            </div>
        )
    }
}

export default AddAble