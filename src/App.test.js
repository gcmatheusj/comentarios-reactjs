import React from 'react'
import { shallow, mount, render} from 'enzyme'
import App from './App'
import base from './base'

describe('<App />', ()=>{
  const base= {
    syncState: jest.fn()
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.length).toBe(1)
  }) 
  it('should have .container class', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  }) 
  it('show comments', () =>{
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it('show NewComment', () =>{
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.find('NewComment').length).toBe(1)
  })
  it('adds a new comment to state when postNewComment is called', () => {
    const wrapper = mount(<App base={base}/>)
    wrapper.instance().postNewComment({ comment: 'teste'})
    wrapper.instance().postNewComment({ comment: 'test'})
    wrapper.instance().postNewComment({ comment: 'te'})
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
  })

  /*it('outputs the <App />', () => {
    //Shallow monta o componente sem renderizar os componentes filhos.
    const wrapperShallow = shallow(<App />)
    //Mount monta o componente inteiro dentro de uma estrutura DOM.
    const wrapperMount = mount(<App />)
    //Renderiza o HTML.
    const wrapperRender = render(<App />)

    console.log(wrapperShallow.debug())
    console.log(wrapperMount.debug())
    console.log(wrapperRender.html())
  })
  */
})
