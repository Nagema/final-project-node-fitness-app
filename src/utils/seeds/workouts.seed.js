const mongoose = require("mongoose");
const connectDb = require("../db");
const Workout = require('../../api/workouts/workouts.model');
const Exercise = require("../../api/workouts/exercises/exercises.model");

const workouts = [
    {
        name: 'Rutina 1',
        requirements: ['Perder peso', 'Delgado'],
        day1: ['Carrera en cinta', 'Jalón al pecho A', 'Dominadas A', 'Remo máquina A', 'Remo mancuerna A', 'Curl biceps alterno A', 'Curl polea biceps A', 'Crunch abdominal A', 'Plancha abdominal', 'Marcha en cinta A'],
        day2: [''],
        day3: ['Dominadas B', 'Jalón al pecho A']
    },
]



connectDb()
  .then(async () => {
    await Workout.collection.drop();
    console.log("Workout collection deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    for (const workout of workouts) {
      const exercises = [...workout.day1]; //
      let newExercise = [];
      for (const exercise of exercises) {
        const exerciseId = await Exercise.findOne({ name: exercise }).lean();
        newExercise = [...newExercise, exerciseId._id.toString()]
      
      }
      workout.day1 = [...newExercise];
    }

    for (const workout of workouts) {
      const exercises = [...workout.day2]; //
      let newExercise = [];
      for (const exercise of exercises) {
        const exerciseId = await Exercise.findOne({ name: exercise }).lean();
        newExercise = [...newExercise, exerciseId._id.toString()]
      
      }
      workout.day2 = [...newExercise];
    }

    for (const workout of workouts) {
      const exercises = [...workout.day3]; //
      let newExercise = [];
      for (const exercise of exercises) {
        const exerciseId = await Exercise.findOne({ name: exercise }).lean();
        newExercise = [...newExercise, exerciseId._id.toString()]
      
      }
      workout.day3 = [...newExercise];
    }
    
    const workoutsDocuments = workouts.map((workout) => new Workout(workout));
    await Workout.insertMany(workoutsDocuments);
    console.log("Workouts added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());