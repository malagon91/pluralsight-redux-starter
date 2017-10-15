import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
   it('Should handle creating courses', () => {
       //arrange
       const store = createStore(rootReducer,initialState);
       const course = {
         title: 'Clean code'
       };

       //Act
       const action = courseActions.createCourseSuccess(course);
       store.dispatch(action);

       //Assert
       const actual = store.getState().courses[0];
       const expected = {
           title: 'Clean code'
       };

       //Assets
       expect(actual).toEqual(expected);
   });
});