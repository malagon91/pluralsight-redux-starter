import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
//  debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}


//It loads all the courses from the mock API
export function loadCourses(){
  return dispatch => {
    return courseApi.getAllCourses()
      .then( courses =>{
        dispatch(loadCoursesSuccess(courses));
      }).catch( error => {
        throw (error);

      });
  };
}
