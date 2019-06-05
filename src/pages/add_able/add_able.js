import React, {Component} from 'react'
import './add_able.css'
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css
import add_img from '../../image/add_img.png'

import Header from '../../components/header/header'
import Cropper from 'react-cropper'
import BottomButton from '../../components/bottom_button/bottom_button'

class AddAble extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            info:'',
            selectImageFile:[],
            showImageList:[],
            classResultImgUrl:[],
            isShow:false
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
        let freader = new FileReader();
        freader.readAsDataURL(e.target.files[0]);
        freader.onload = (e)=> {
            this.state.showImageList.push(e.target.result);
            this.setState({
                isShow:true,
                showImageList:this.state.showImageList
            })
        };
        this.state.selectImageFile.push(e.target.files[0]);
        this.setState({
            selectImageFile:this.state.selectImageFile
        })
    };
    handleSubmit = () => {
        // TODO: 这里可以尝试修改上传图片的尺寸
        // console.log(this.cropper.getCroppedCanvas().toDataURL())
        this.cropper.getCroppedCanvas().toBlob(async blob => {
            console.log('blob',blob);
            this.onSubmit(blob);
            this.onClose()
        })
    };
    add_img = () =>{
        this.input_file.click()
    };
    onSubmit = (blob) => {
        const str = URL.createObjectURL(blob);
        let obj = {
            file:blob,
            img:str
        };
        this.state.classResultImgUrl.push(obj);
        this.setState({
            classResultImgUrl: this.state.classResultImgUrl
        })
    };
    onClose = () =>{
        this.setState({
            isShow:false
        })
    };
    updata_able = () =>{
        console.log(this.state.title,this.state.info,this.state.classResultImgUrl,this.state.selectImageFile);
    };
    render(){
        let num = this.state.showImageList.length - 1;
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

                {this.state.isShow && (
                    <div className="class-cropper-modal">
                        <div className="cropper-container">
                            <Cropper
                                src={this.state.showImageList[num]}
                                className="cropper"
                                ref={cropper => (this.cropper = cropper)}
                                style={{height: 400, width: '100%'}}
                                // Cropper.js options
                                viewMode={1}
                                zoomable={false}
                                aspectRatio={1} // 固定为1:1  可以自己设置比例, 默认情况为自由比例
                                guides={false}
                            />
                        </div>
                        <div className="add_able_button_row">
                            <div className="submit-button" onClick={this.handleSubmit}>
                                点击提交
                            </div>
                        </div>
                    </div>
                )}
                <div className={'add_able_img_list'}>
                    {
                        this.state.classResultImgUrl.map((item,index)=>{
                            return (
                                <div className={'add_able_img'} key={index}>
                                    <img src={item.img} alt={item} />
                                </div>
                            )
                        })
                    }
                    {this.state.classResultImgUrl.length<9&&(
                        <div className={'add_able_img'}>
                            <img onClick={this.add_img} src={add_img} />
                            <input
                                ref={input_file => (this.input_file = input_file)}
                                type="file"
                                accept="image/jpeg,image/jpg,image/png"
                                className="base-upload-input"
                                onChange={this.handleFileChange}
                                style={{'display':'none'}}
                            />
                        </div>
                    )}
                </div>

                <BottomButton word={'新增能力'} operating={this.updata_able}/>
            </div>
        )
    }
}

export default AddAble