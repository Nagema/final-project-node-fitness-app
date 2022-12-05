const mongoose = require("mongoose");
const connectDb = require("../db");
const Workout = require('../../api/workouts/workouts.model');
const Exercise = require("../../api/workouts/exercises/exercises.model");

const workouts = [
{
  name: 'Rutina 1.1.1',
  requirements: ['Perder peso', 'Parte superior','A'],
   day1: ['Carrera en cinta', 'Jalón al pecho A', 'Dominadas A', 'Remo máquina A', 'Remo mancuerna A', 'Curl biceps alterno A', 'Curl polea biceps A', 'Crunch abdominal A', 'Plancha abdominal', 'Marcha en cinta A'],
  day2: ['Elíptica', 'Press banca plano A', 'Press banca inclinado A', 'Flexiones A', 'Shoulder press A', 'Triceps polea A', 'Marcha en cinta A'],
  day3: ['Elíptica', 'Sentadilla con peso A', 'Abducción de gluteo A', 'Extensión de cuadriceps A', 'Femorales A', 'Elevación de cadera A', 'Prensa de piernas A', 'Oblicuos A', 'Marcha en cinta A']
},
/* {
  name: 'Rutina 1.1.2',
  requirements: ['Perder peso', 'Parte superior','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 1.1.3',
  requirements: ['Perder peso', 'Parte superior','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 1.2.1',
  requirements: ['Perder peso', 'Parte central','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 1.2.2',
  requirements: ['Perder peso', 'Parte central','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 1.2.3',
  requirements: ['Perder peso', 'Parte central','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 1.3.1',
  requirements: ['Perder peso', 'Parte inferior','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 1.3.2',
  requirements: ['Perder peso', 'Parte inferior','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 1.3.3',
  requirements: ['Perder peso', 'Parte inferior','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.1.1',
  requirements: ['Crecer musculo', 'Parte superior','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.1.2',
  requirements: ['Crecer musculo', 'Parte superior','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.1.3',
  requirements: ['Crecer musculo', 'Parte superior','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.2.1',
  requirements: ['Crecer musculo', 'Parte central','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.2.2',
  requirements: ['Crecer musculo', 'Parte central','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.2.3',
  requirements: ['Crecer musculo', 'Parte central','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.3.1',
  requirements: ['Crecer musculo', 'Parte inferior','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.3.2',
  requirements: ['Crecer musculo', 'Parte inferior','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 2.3.3',
  requirements: ['Crecer musculo', 'Parte inferior','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.1.1',
  requirements: ['Definir', 'Parte superior','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.1.2',
  requirements: ['Definir', 'Parte superior','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.1.3',
  requirements: ['Definir', 'Parte superior','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.2.1',
  requirements: ['Definir', 'Parte central','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.2.2',
  requirements: ['Definir', 'Parte central','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.2.3',
  requirements: ['Definir', 'Parte central','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.3.1',
  requirements: ['Definir', 'Parte inferior','A'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.3.2',
  requirements: ['Definir', 'Parte inferior','B'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
},
{
  name: 'Rutina 3.3.3',
  requirements: ['Definir','Parte inferior','C'],
  day1: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day2: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A'],
  day3: ['Jalón al pecho A','Remo maquina A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A']
}, */
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