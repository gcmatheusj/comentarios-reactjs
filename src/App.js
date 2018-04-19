import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments: {
        '1': {
          comment: 'first comment'
        },
        '2': {
          comment: 'second comment'
        }
      }
    }
  }
  postNewComment(comment){
    const comments = { ...this.state.comments, comment }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    //Em react não existe alteração de estado, apenas um novo estado.
    this.setState({
      //O estado no item comments será um objeto inteiramente novo.
      comments: comments
    })
  }
  render() {
    return (
      <div className="container">
        <NewComment postNewComment={this.postNewComment}/>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App
