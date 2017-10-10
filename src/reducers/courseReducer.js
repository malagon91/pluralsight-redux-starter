import * as types from '../actions/actionTypes';


export default function courseReducer(state =  [],action){
  switch (action.type){
    case types.CREATE_COURSE:
      //debugger;
      //state.push(action.course); I've remove this line because the spreed operator can do the same.
      return [...state, Object.assign({},action.course)];

    default:
      return state;
  }
}
