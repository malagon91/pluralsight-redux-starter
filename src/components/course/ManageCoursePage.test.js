import expect from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

//para poder probar un componente conectado con redux necesito agregar export en la clase
//asi puedo tener un componente sin redux pero se importa de diferente manera ejemplo:
// import ManageCoursePage from './ManageCoursePage'; importa el componente conectado
//import {ManageCoursePage} from './ManageCoursePage'; exporta solo la clase y no el default


//also the actions should sending how props
describe('Manage Course Page',()=>{
  it('sets error message when trying to save empty title', () =>{
    const props ={
      course: {id:'',watchHref:'',title:'',authorId:'',length:'',category:''},
      actions: { saveCourse: () => { return Promise.resolve();}},
      authors: []
    };
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('');
  });
});
