require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getExercises, createWorkout, getWorkout, deleteWorkout, createUser, getUsers} = require('./controller.js')

app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)


app.get('/exercises', getExercises)


app.post('/workout', createWorkout)
app.get('/workout', getWorkout)
app.delete('/workout/:id', deleteWorkout)


app.post('/register', createUser)

app.get('/login', getUsers)



app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))


