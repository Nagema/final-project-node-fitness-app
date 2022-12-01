const mongoose = require("mongoose");
const connectDb = require("../db");
const Exercise = require('../../api/workouts/exercises/exercises.model')

const exercises = [
    {
        name: 'Press Banca A',
        description: '3 x 10 repeticiones',
        rest: '3 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
        name: 'Press Banca B',
        description: '3 x 12 repeticiones',
        rest: '4 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
        name: 'Press Banca C',
        description: '3 x 14 repeticiones',
        rest: '5 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
        name: 'Press Banca D',
        description: '3 x 16 repeticiones',
        rest: '6 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
      name: 'Press Banca Inclinado A',
      description: '4 x 12 repeticiones',
      rest: '30 segundos',
      img: 'https://1.bp.blogspot.com/-vThyvcDl_Eg/XEoBqk-hYTI/AAAAAAAABtE/H8Nbc2o1eUEaveXAWWW0pA4tLlGa6hzXgCLcBGAs/s320/press-inclinado-barra.jpg'
    },
]

const exercisesDocuments = exercises.map((exercise) => new Exercise(exercise));

connectDb()
  .then(async () => {
    await Exercise.collection.drop();
    console.log("SEED :collection exercices deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    await Exercise.insertMany(exercisesDocuments);
    console.log("Exercises added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());