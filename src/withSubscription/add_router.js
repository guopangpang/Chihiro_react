import React, {Component} from 'react'

export default function add_router(WrappedComponent) {
    return class HOC extends Component{
        render(){
            console.log('add_router',this.props);
            return(
                <WrappedComponent {...this.props}/>
            )
        }
    }
}


