import React from 'react'
import { shallow, mount, render} from 'enzyme'
import Comment from './Comment'

describe('<Comment />', () => {
   it('renders without crashing', () => {
       const comment = {
           comment: 'teste',
           user: {
               name: 'Matheus'
           }
       }
       
       const wrapper = shallow(<Comment comment={comment} name={comment.user.name} />)
       expect(wrapper.length).toBe(1)
       expect(wrapper.is('.card')).toBe(true)
       expect(wrapper.text()).toBe(comment.comment + ' Por: ' + comment.user.name)
   }) 
})