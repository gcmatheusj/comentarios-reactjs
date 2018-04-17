import React, { Component } from 'react'



class NewComment extends Component{
    render(){
        return (
            <div className="row">
                <textarea placeholder="Comente aqui!" className="from-control"></textarea>
            </div>
        )
    }
}

export default NewComment