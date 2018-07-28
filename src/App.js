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
      },
      isLoggedIn: false,
      user: {}
    }

    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments',
    })
  }

  postNewComment(comment){
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    //Em react não existe alteração de estado, apenas um novo estado.
    this.setState({
      //O estado no item comments será um objeto inteiramente novo.
      comments: comments
    })
    
  }

  auth(provider){
    console.log(provider)
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        { //this.state.isLoggedIn && 
          <div>
          {this.state.user.displayName}
          <img alt={this.state.user.displayName} src={this.state.user.photoURL}/><br/>
          <button type="button" className="btn btn-danger" onClick={() => this.props.auth.signOut()}>Deslogar</button>
          <NewComment postNewComment={this.postNewComment}/>
          </div>
        }
        { !this.state.isLoggedIn && 
          <div className='alert alert-info'>
            <button type="button" className="btn btn-primary" onClick={() => this.auth('facebook')}>Entre com o Facebook para comentar</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App
