import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state =  initialState.courses,action){
  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({},action.course)];
    case types.UPDATE_COURSE_SUCCESS:
      //en este caso como el state es inmutable lo que se hace es buscar el curso que se actualizo
      //y el metodo filter va a regresar todos menos ese curso entonces solo agregamos el actualizado
      return [
        ...state.filter(course => course.id !== action.course.id),Object.assign({},action.course)
      ];
    default:
      return state;
  }
}


/*
* case types.CREATE_COURSE:
      //debugger;
      //state.push(action.course); I've remove this line because the spreed operator can do the same.
      return [...state, Object.assign({},action.course)];

* */
