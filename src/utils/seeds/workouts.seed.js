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
 {
  name: 'Rutina 1.1.2',
  requirements: ['Perder peso', 'Parte superior','B'],
  day1: ['Carrera en cinta', 'Jalón al pecho B', 'Dominadas B', 'Remo máquina B', 'Remo mancuerna B', 'Curl biceps alterno B', 'Curl polea biceps B', 'Crunch abdominal B', 'Plancha abdominal', 'Marcha en cinta B'],
  day2: ['Elíptica', 'Press banca plano B', 'Press banca inclinado B', 'Flexiones B', 'Shoulder press B', 'Triceps polea B', 'Marcha en cinta B'],
  day3: ['Elíptica', 'Sentadilla con peso B', 'Abducción de gluteo B', 'Extensión de cuadriceps B', 'Femorales B', 'Elevación de cadera B', 'Prensa de piernas B', 'Oblicuos B', 'Marcha en cinta B']
},
 {
  name: 'Rutina 1.1.3',
  requirements: ['Perder peso', 'Parte superior','C'],
  day1: ['Carrera en cinta', 'Jalón al pecho C', 'Dominadas C', 'Remo máquina C', 'Remo mancuerna C', 'Curl biceps alterno C', 'Curl polea biceps C', 'Crunch abdominal B', 'Plancha abdominal', 'Marcha en cinta B'],
  day2: ['Elíptica', 'Press banca plano C', 'Press banca inclinado C', 'Flexiones B', 'Shoulder press B', 'Triceps polea C', 'Marcha en cinta B'],
  day3: ['Elíptica', 'Sentadilla con peso C', 'Abducción de gluteo B', 'Extensión de cuadriceps C', 'Femorales C', 'Elevación de cadera B', 'Prensa de piernas C', 'Oblicuos B', 'Marcha en cinta B']
},
{
  name: 'Rutina 1.2.1',
  requirements: ['Perder peso', 'Parte central','A'],
  day1: ['Carrera en cinta', 'Crunch abdominal A', 'Flexiones Triceps A', 'Elevación de rodillas A', 'Oblicuos A', 'Marcha en cinta A'],
  day2: ['Carrera en cinta', 'Fondo Triceps A', 'Dominadas A', 'Oblicuos A', 'Marcha en cinta A'],
  day3: ['Carrera en cinta', 'Crunch abdominal A', 'Sentadilla A', 'Flexiones Triceps A', 'Elevación de rodillas A', 'Oblicuos A', 'Marcha en cinta A']
},
{
  name: 'Rutina 1.2.2',
  requirements: ['Perder peso', 'Parte central','B'],
  day1: ['Carrera en cinta', 'Crunch abdominal A', 'Flexiones Triceps A', 'Elevación de rodillas A', 'Plancha abdominal', 'Oblicuos A', 'Marcha en cinta A'],
  day2: ['Carrera en cinta', 'Fondo Triceps A', 'Dominadas A', 'Oblicuos A', 'Plancha abdominal', 'Marcha en cinta A'],
  day3: ['Carrera en cinta', 'Crunch abdominal A', 'Sentadilla B', 'Flexiones Triceps A', 'Plancha abdominal', 'Oblicuos B', 'Marcha en cinta B']
},
{
  name: 'Rutina 1.2.3',
  requirements: ['Perder peso', 'Parte central','C'],
  day1: ['Carrera en cinta', 'Crunch abdominal A', 'Flexiones Triceps A', 'Elevación de rodillas A', 'Plancha abdominal', 'Oblicuos A', 'Marcha en cinta A'],
  day2: ['Carrera en cinta', 'Fondo Triceps A', 'Flexiones Triceps A', 'Dominadas A', 'Oblicuos A', 'Plancha abdominal', 'Marcha en cinta A'],
  day3: ['Carrera en cinta', 'Crunch abdominal A', 'Sentadilla B', 'Flexiones Triceps A', 'Elevación de rodillas B', 'Plancha abdominal', 'Oblicuos B', 'Marcha en cinta B']
},
{
  name: 'Rutina 1.3.1',
  requirements: ['Perder peso', 'Parte inferior','A'],
  day1: ['Carrera en cinta', 'Sentadilla A', 'Fondo Triceps A', 'Elevación de cadera A', 'Marcha en cinta A'],
  day2: ['Carrera en cinta', 'Prensa de piernas A', 'Extensión de cuadriceps A', 'Elevación de piernas A', 'Marcha en cinta A'],
  day3: ['Carrera en cinta', 'Abducción de gluteo A', 'Shoulder press A', 'Remo mancuerna A', 'Marcha en cinta A',  ]
},
 {
  name: 'Rutina 1.3.2',
  requirements: ['Perder peso', 'Parte inferior','B'],
  day1: ['Carrera en cinta', 'Sentadilla B', 'Elevación frontal hombros B', 'Fondo Triceps C', 'Elevación de cadera B', 'Marcha en cinta B'],
  day2: ['Carrera en cinta', 'Prensa de piernas B', 'Extensión de cuadriceps C', 'Dominadas B', 'Elevación de piernas B', 'Marcha en cinta B'],
  day3: ['Carrera en cinta', 'Abducción de gluteo B', 'Sentadilla B', 'Shoulder press B', 'Remo mancuerna C', 'Marcha en cinta B',  ]
},
{
  name: 'Rutina 1.3.3',
  requirements: ['Perder peso', 'Parte inferior','C'],
  day1: ['Carrera en cinta', 'Sentadilla B', 'Elevación frontal hombros C', 'Sentadilla con peso C', 'Fondo Triceps C', 'Elevación de cadera B', 'Marcha en cinta B'],
  day2: ['Carrera en cinta', 'Prensa de piernas C', 'Extensión de cuadriceps C', 'Curl biceps alterno A', 'Dominadas C', 'Elevación de piernas B', 'Marcha en cinta B'],
  day3: ['Carrera en cinta', 'Abducción de gluteo B', 'Sentadilla B', 'Shoulder press B', 'Press mancuerna C', 'Remo mancuerna C', 'Marcha en cinta B' ]
},
{
  name: 'Rutina 2.1.1',
  requirements: ['Crecer musculo', 'Parte superior','A'],
  day1: ['Curl biceps alterno A','Press banca plano A','Cruce de poleas A','Curl polea biceps A','Press mancuerna A','Curl biceps concentrado A'],
  day2: ['Curl biceps concentrado A','Femorales A','Extensión de cuadriceps A','Dominadas A','Elevación de piernas A',],
  day3: ['Flexiones Triceps A','Elevación frontal hombros A','Shoulder press A','Triceps polea A','Shoulder press A','Abducción de gluteo A']
},
{
  name: 'Rutina 2.1.2',
  requirements: ['Crecer musculo', 'Parte superior','B'],
  day1: ['Curl biceps alterno B','Press banca plano B','Cruce de poleas B','Curl polea biceps B','Press mancuerna B','Press banca inclinado B','Curl biceps concentrado B'],
  day2: ['Curl biceps concentrado B','Femorales B','Extensión de cuadriceps B','Sentadilla B','Dominadas B','Elevación de piernas B',],
  day3: ['Flexiones Triceps B','Elevación frontal hombros A','Shoulder press B','Elevación lateral hombros B','Triceps polea B','Shoulder press B','Abducción de gluteo A']
},
{
  name: 'Rutina 2.1.3',
  requirements: ['Crecer musculo', 'Parte superior','C'],
  day1: ['Cruce de poleas B','Crunch abdominal B','Press banca inclinado C','Press banca plano C','Curl biceps alterno C','Curl polea biceps C','Press mancuerna C','Curl biceps concentrado C'],
  day2: ['Femorales C','Extensión de cuadriceps C','Sentadilla B','Elevación de rodillas B','Dominadas C','Elevación de piernas B','Curl biceps concentrado C'],
  day3: ['Elevación frontal hombros C','Shoulder press B','Triceps polea C','Elevación lateral hombros C','Triceps polea C','Flexiones Triceps B','Shoulder press B','Abducción de gluteo B']
},
{
  name: 'Rutina 2.2.1',
  requirements: ['Crecer musculo', 'Parte central','A'],
  day1: ['Dominadas A','Press banca inclinado A','Press banca plano A','Curl polea biceps A','Crunch abdominal A','Press mancuerna A'],
  day2: ['Extensión de cuadriceps A','Sentadilla A','Elevación de rodillas A','Oblicuos A','Elevación de piernas A'],
  day3: ['Elevación frontal hombros A','Triceps polea A','Shoulder press A','Triceps polea A','Flexiones Triceps A','Shoulder press A']
},
{
  name: 'Rutina 2.2.2',
  requirements: ['Crecer musculo', 'Parte central','B'],
  day1: ['Press mancuerna B','Press banca plano B','Dominadas B','Press banca inclinado B','Jalón al pecho B','Curl polea biceps B','Crunch abdominal B',],
  day2: ['Oblicuos B','Sentadilla B','Elevación de rodillas B','Femorales B','Extensión de cuadriceps B','Elevación de piernas B'],
  day3: ['Triceps polea B','Elevación frontal hombros A','Shoulder press B','Triceps polea B','Crunch abdominal B','Flexiones Triceps B','Shoulder press A']
},
{
  name: 'Rutina 2.2.3',
  requirements: ['Crecer musculo', 'Parte central','C'],
  day1: ['Press banca plano C','Dominadas C','Press banca inclinado C','Jalón al pecho C','Curl polea biceps C','Crunch abdominal B','Press mancuerna C','Curl biceps concentrado C'],
  day2: ['Oblicuos B','Extensión de cuadriceps C','Sentadilla B','Elevación de rodillas B','Femorales C','Elevación de piernas B','Elevación de cadera B'],
  day3: ['Triceps polea C','Elevación frontal hombros C','Shoulder press B','Triceps polea C','Crunch abdominal B','Flexiones Triceps B','Shoulder press B','Abducción de gluteo B']
},
{
  name: 'Rutina 2.3.1',
  requirements: ['Crecer musculo', 'Parte inferior','A'],
  day1: ['Crunch abdominal A','Cruce de poleas A','Curl biceps concentrado A','Press banca plano A','Curl biceps alterno A','Crunch abdominal A','Press mancuerna A'],
  day2: ['Elevación de cadera A','Sentadilla con peso A','Femorales A','Prensa de piernas A','Elevación de rodillas A'],
  day3: ['Crunch abdominal A','Shoulder press A','Dominadas A','Flexiones Triceps A','Triceps polea A','Triceps polea A',]
},
{
  name: 'Rutina 2.3.2',
  requirements: ['Crecer musculo', 'Parte inferior','B'],
  day1: ['Cruce de poleas B','Curl barra Z B','Curl biceps concentrado B','Press banca plano B','Curl biceps alterno B','Crunch abdominal A','Press mancuerna B'],
  day2: ['Elevación de cadera B','Extensión de cuadriceps C','Sentadilla con peso B','Femorales B','Prensa de piernas B','Elevación de rodillas B'],
  day3: ['Shoulder press B','Dominadas B','Flexiones Triceps B','Triceps polea B','Triceps polea B','Crunch abdominal B','Abducción de gluteo A']
},
{
  name: 'Rutina 2.3.3',
  requirements: ['Crecer musculo', 'Parte inferior','C'],
  day1: ['Curl biceps alterno C','Cruce de poleas B','Curl barra Z C','Curl polea biceps C','Press banca plano C','Crunch abdominal B','Press mancuerna C','Curl biceps concentrado C'],
  day2: ['Elevación de cadera B','Extensión de cuadriceps C','Sentadilla B','Sentadilla con peso C','Femorales C','Prensa de piernas C','Elevación de rodillas B'],
  day3: ['Flexiones Triceps B','Triceps polea C','Elevación frontal hombros C','Shoulder press B','Triceps polea C','Crunch abdominal B','Dominadas C','Abducción de gluteo B']
},
{
  name: 'Rutina 3.1.1',
  requirements: ['Definir', 'Parte superior','A'],
  day1: ['Curl barra Z A','Curl polea biceps A','Press banca plano A','Crunch abdominal A','Oblicuos A','Curl biceps concentrado A'],
  day2: ['Sentadilla A', 'Sentadilla con peso A','Prensa de piernas A','Plancha abdominal', 'Elevación de cadera A'],
  day3: ['Elevación lateral hombros A','Triceps polea A','Crunch abdominal A','Dominadas A','Fondo Triceps A','Abducción de gluteo A']
},
{
  name: 'Rutina 3.1.2',
  requirements: ['Definir', 'Parte superior','B'],
  day1: ['Remo mancuerna B','Remo máquina B','Curl barra Z B','Curl polea biceps B','Press banca plano B','Crunch abdominal A','Oblicuos A'],
  day2: ['Femorales B','Extensión de cuadriceps B','Sentadilla B','Sentadilla con peso B','Prensa de piernas B','Plancha abdominal','Elevación de cadera B'],
  day3: ['Fondo Triceps B','Elevación frontal hombros B','Triceps polea B','Crunch abdominal B','Dominadas B','Abducción de gluteo B']
},
{
  name: 'Rutina 3.1.3',
  requirements: ['Definir', 'Parte superior','C'],
  day1: ['Remo mancuerna C','Remo máquina C','Curl barra Z C','Curl polea biceps C','Press banca plano C','Crunch abdominal B','Oblicuos B','Curl biceps concentrado C'],
  day2: ['Femorales C','Extensión de cuadriceps C','Sentadilla B','Sentadilla con peso C','Prensa de piernas C','Plancha abdominal','Elevación de cadera B'],
  day3: ['Fondo Triceps C','Elevación frontal hombros C','Elevación lateral hombros C','Triceps polea C','Crunch abdominal B','Dominadas C','Fondo Triceps C','Abducción de gluteo B']
},
{
  name: 'Rutina 3.2.1',
  requirements: ['Definir', 'Parte central','A'],
  day1: ['Press banca plano A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A','Curl barra Z A','Curl biceps concentrado A'],
  day2: ['Elevación de piernas A','Elevación de rodillas A','Sentadilla A','Abducción de cadera A','Flexiones A'],
  day3: ['Fondo Triceps A','Triceps polea A','Elevación frontal hombros A','Plancha abdominal','Shoulder press A','Dominadas A']
},
{
  name: 'Rutina 3.2.2',
  requirements: ['Definir', 'Parte central','B'],
  day1: ['Press banca plano B','Remo mancuerna B','Curl polea biceps B','Crunch abdominal B','Curl barra Z B','Curl biceps concentrado B'],
  day2: ['Elevación de piernas B','Elevación de rodillas B','Sentadilla B','Abducción de cadera B','Flexiones B'],
  day3: ['Fondo Triceps B','Triceps polea B','Elevación frontal hombros B','Plancha abdominal','Shoulder press B','Dominadas B']
},
{
  name: 'Rutina 3.2.3',
  requirements: ['Definir', 'Parte central','C'],
  day1: ['Press banca plano C','Remo máquina C','Remo mancuerna C','Curl polea biceps C','Crunch abdominal B','Oblicuos B','Curl barra Z C','Curl biceps concentrado C'],
  day2: ['Elevación de piernas B','Elevación de rodillas B','Sentadilla B','Sentadilla con peso C','Abducción de cadera B','Plancha abdominal','Flexiones B'],
  day3: ['Fondo Triceps C','Triceps polea C','Elevación frontal hombros C','Elevación lateral hombros C','Shoulder press B','Dominadas C','Fondo Triceps C','Abducción de gluteo B']
},
{
  name: 'Rutina 3.3.1',
  requirements: ['Definir', 'Parte inferior','A'],
  day1: ['Jalón al pecho A','Remo mancuerna A','Curl polea biceps A','Crunch abdominal A','Curl barra Z A','Curl biceps concentrado A'],
  day2: ['Elevación de piernas A','Elevación de rodillas A','Sentadilla A','Abducción de cadera A','Extensión de cuadriceps A'],
  day3: ['Fondo Triceps A','Triceps polea A','Elevación frontal hombros A','Elevación lateral hombros A','Shoulder press A','Dominadas A']
},
{
  name: 'Rutina 3.3.2',
  requirements: ['Definir', 'Parte inferior','B'],
  day1: ['Jalón al pecho B','Remo mancuerna B','Curl polea biceps B','Crunch abdominal B','Curl barra Z B','Curl biceps concentrado B'],
  day2: ['Elevación de piernas B','Elevación de rodillas B','Sentadilla B','Abducción de cadera B','Extensión de cuadriceps B'],
  day3: ['Fondo Triceps B','Triceps polea B','Elevación frontal hombros B','Elevación lateral hombros B','Shoulder press B','Dominadas B']
},
{
  name: 'Rutina 3.3.3',
  requirements: ['Definir','Parte inferior','C'],
  day1: ['Jalón al pecho C','Remo máquina C','Remo mancuerna C','Curl polea biceps C','Crunch abdominal B','Oblicuos B','Curl barra Z C','Curl biceps concentrado C'],
  day2: ['Elevación de piernas B','Elevación de rodillas B','Sentadilla B','Sentadilla con peso C','Abducción de cadera B','Prensa de piernas C','Extensión de cuadriceps C'],
  day3: ['Fondo Triceps C','Triceps polea C','Elevación frontal hombros C','Elevación lateral hombros C','Shoulder press B','Dominadas C','Fondo Triceps C','Abducción de gluteo B']
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