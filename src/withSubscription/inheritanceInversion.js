import React, {Component} from 'react'

export default function iiHOC(wrappedComponent) {
    return class Enhancer extends wrappedComponent{
        render(){

            return super.render()
        }
    }
}
