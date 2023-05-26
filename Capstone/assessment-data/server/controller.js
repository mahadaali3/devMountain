require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists users;
        drop table if exists workout;    
        drop table if exists exercises;
            
            create table users (
                user_id serial primary key,
                username varchar,
                password varchar
            );

            create table exercises (
                exercise_id serial primary key, 
                name varchar,
                imageUrl varchar
            );

            create table workout (
                workout_id serial primary key,
                date date,
                sets integer,
                reps integer,
                exercise_id integer references exercises(exercise_id)
            );

            insert into users (username, password)
            values ('admin', '123');

            insert into exercises (name, imageUrl)
            values ('Pushups', 'https://media.istockphoto.com/id/1407656524/vector/man-doing-push-up-flat-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=On5A0WoSDYrvhyyaM7g7IU2u4V746KChM7xsrw3_R5o='),
            ('Pullups', 'https://media.istockphoto.com/id/1407654964/vector/man-doing-chin-ups-workout-fitness-and-bodybuilding-exercise-in-the-gym-healthy-and-active.jpg?s=612x612&w=0&k=20&c=Dq-bIOdyKqF3li1GPKymZLpDbX9Wk5DLBjAAxVLS9Wc='),
            ('Bench Press', 'https://media.istockphoto.com/id/1408266222/vector/man-doing-barbell-bench-press-chest-press-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=4Ku2MI6gMbHFxA9HrskUwI65-5VjP5uJDsans1hCWYA='),
            ('Situps', 'https://media.istockphoto.com/id/1407639801/vector/man-doing-sit-ups-exercise-abdominals-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=TEvQamWTz4RdPLcN3GyDsuDlrFo-pDBuN7oEIGjC9yk='),
            ('Squats', 'https://media.istockphoto.com/id/1410082910/vector/man-doing-squat-with-barbell-exercise-flat-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ztegtkcLrnzMdiLdcfm5G7bu_v7WqF62sMipcJp5f_g='),
            ('Overhead Press', 'https://media.istockphoto.com/id/1408276646/vector/man-doing-standing-barbell-shoulder-press-exercise-flat-vector-illustration-isolated-on.jpg?s=612x612&w=0&k=20&c=3ADB2MnP0otFoPK4UurkUD2qbIa2Qj2QQXSlW65OdUE='),
            ('Deadlifts', 'https://media.istockphoto.com/id/1408890976/vector/man-doing-barbell-stiff-leg-deadlift-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=i6zc7RgO6fLd7RNC1xKdaH1FWjizEXF8fyP6AKp-QbI='),
            ('Barbell Rows', 'https://media.istockphoto.com/id/1407650822/nl/vector/man-doing-bent-over-barbell-row-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AKcv16ioHiWlGtlkTuB7AeLDLsofeu9R_UvLK47-cqs=');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    getExercises: (req, res) => {
        sequelize.query(`select * from exercises
        ORDER BY exercises.name;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
    },

    createWorkout: (req, res) => {
        const {date, sets, reps, exerciseId} = req.body;
        sequelize.query(`insert into workout (date, sets, reps, exercise_id) 
        values ('${date}',${sets}, ${reps}, ${exerciseId}) returning *;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(console.log(err => console.log(err))) 
    },

    // },
    
    getWorkout: (req, res) => {
        sequelize.query(`select workout.workout_id, workout.date AS date, workout.sets AS sets, workout.reps AS reps, exercises.exercise_id, exercises.name AS exercise, exercises.imageUrl AS url
        FROM workout
        JOIN exercises
        ON workout.exercise_id = exercises.exercise_id
        ORDER BY workout.date ASC`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    deleteWorkout: (req, res) => {
        const {id} = req.params;
        sequelize.query(`DELETE FROM workout
        WHERE workout_id = ${id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
    },
    getUsers: (req, res) => {
        sequelize.query(`select * from users;`)
        .then(dbRes => res.status(200).send(dbRes[0]))

},
    createUser: (req, res) => {
        const {username, password} = req.body;
        sequelize.query(`insert into users (username, password) 
        values ('${username}','${password}') returning *;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(console.log(err => console.log(err))) 
    }

  
}