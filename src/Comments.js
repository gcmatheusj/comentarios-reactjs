import React, { Component } from 'react'

import Comment from './Comment'

class Comments extends Component{
    /*
    Função pura, pois depende somente do parametro 'comment'.
    Quanto mais funções puras, melhor para o código, pois fica
    mais fácil de ser testado.
    */
    renderComment(key, comment){
        return(
            <Comment key={key} comment={comment}/>
        )
    }
    render(){
        return(
            <div>
                {Object.keys(this.props.comments).map(key => this.renderComment(key, this.props.comments[key]))}
            </div>
        )
    }    
}

export default Comments