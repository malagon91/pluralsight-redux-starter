import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor (props, context){
    super(props,context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
/*    this.state = {
      course:{ title:""}
    };
   this.onTitleChange =this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
*/
  }

 /* onTitleChange(event){
    const course = this.state.course;
    course.title= event.target.value;
    this.setState({course:course});
  }

  onClickSave(){
  //  alert(`Save ${this.state.course.title}`);
    this.props.actions.createCourse(this.state.course);
  }*/
  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }


  render(){
    const {courses} = this.props;
   // debugger;
    return (
      <div>
        <h1>Courses</h1>
        <input
        type="submit"
        value="Add Course"
        className="btn btn-primary"
        onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

/*
*       <h2>Add course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={this.onClickSave}/>
* */

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};



function mapStateToProps(state,ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    //createCourse :  course => dispatch(courseActions.createCourse(course))
    actions : bindActionCreators(courseActions,dispatch)
  };
}

/*  ////***** Important bindActionCreators ******
* cambie createCourse :  course => dispatch(courseActions.createCourse(course)) para poder usar bindactionscreators
* con esta clase mapeo todas las acciones de courseActions en el mapTodispatch
* */

/*const connectStateandProps = connect(mapStateToProps,mapdispatchToProps);
export default connectStateandProps(CoursesPage);   alternative set up  */
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);


