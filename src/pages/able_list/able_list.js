import React, {Component} from 'react'
import './able_list.css'

import Header from '../../components/header/header'
import AbleItem from '../../components/able_item/able_item'

class AbleList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'able_list_container'}>
                <Header/>
                <AbleItem/>
            </div>
        )
    }
}

export default AbleList