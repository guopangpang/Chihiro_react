import React, {Component} from 'react'

export default function withHeader(WrappedComponent,name) {
    return class HOC extends Component {
        constructor(props){
            super(props);
            this.state = {
                name:''
            }
        }
        componentDidMount(){
            console.log('withHeader')
        }
        proc = (wrappedComponentInstance) => {
            wrappedComponentInstance.method();
            console.log(555);
        };
        text_func =(e)=>{
            console.log('change_name',e);
            this.setState({
                name:'guo'
            })
        };
        render() {
            const newProps = {
                name:this.state.name,
                change_name:this.text_func,
            };
            const props = Object.assign({}, this.props, {ref: this.proc});
            return <div>
                <div className="demo-header">
                    {name?name:'我是标题'}
                </div>
                <WrappedComponent {...newProps} {...props}/>
            </div>
        }
    }
}