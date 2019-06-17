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
    const styles = {
      containerFluid: {
        margin: 0,
        padding: 0
      }
    };
    return (
      <div style={styles}>
        <Header/>
        
        <Exercises workouts={workouts}/>
        
        <Footer muscles={muscles}/>
      </div>
    );
  }
}

export default App;
