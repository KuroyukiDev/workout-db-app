import React, {Component} from 'react';
import {exercises, muscles} from '../store';
import Exercises from './exercises';
import {Footer, Header} from './layouts';

class App extends Component {
  state = {
    workouts: exercises
  };
  
  getWorkoutsByGroup() {
    return Object.entries(this.state.workouts.reduce((workouts, workout) => {
        const {muscles} = workout;
        workouts[muscles] = workouts[muscles] ? [...workouts[muscles], workout] : [workout];
        
        return workouts;
      }, {})
    )
  }
  
  render() {
    const workouts = this.getWorkoutsByGroup();
    return (
      <div className="app">
        <Header/>
        
        <Exercises workouts={workouts}/>
        
        <Footer muscles={muscles}/>
      </div>
    );
  }
}

export default App;
