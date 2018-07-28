import React from 'react'
/*
Functional Stateless Component
Componente stateless não tem um estado.
*/
const Comment = props => <div className="card"><p className="card-body">{props.comment.comment}<br/> <b>Por: {props.comment.user.name}</b></p></div>

export default Comment
