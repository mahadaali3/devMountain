const form = document.querySelector('form')


const setInput = document.querySelector('#set-input')
const repInput = document.querySelector('#rep-input')
const dateInput = document.querySelector('#date-input')
const exerciseSelect = document.querySelector('#exercise-select')
const exerciseList = document.querySelector('#exercise-list')

function handleSubmit(e) {
    e.preventDefault()


  
    if (dateInput.value == '') {
        alert ('You must enter a date')
        return
    }
    if (isNaN(setInput.value)) {
        alert ('Sets: You must enter a number')
        return
    }
    if (setInput.value < 1) {
        alert ('Sets: You must enter 1 or greater')
        return
    }
    if (isNaN(repInput.value)) {
        alert ('Reps: You must enter a number')
        return
    }
    if (repInput.value < 1) {
        alert ('Reps: You must enter 1 or greater')
        return
    }

  
    

    
    let body = {
        date: dateInput.value, 
        sets: setInput.value, 
        reps: repInput.value,
        exerciseId: +exerciseSelect.value

    }

    axios.post('http://localhost:4004/workout', body)
        .then(() => {
            dateInput.value = ''
            exerciseSelect.value = 1
            setInput.value = ''
            repInput.value = ''
            
            getWorkout()
        })
}

function deleteCard(id) {
    axios.delete(`http://localhost:4004/workout/${id}`)
        .then(() => getWorkout())
        .catch(err => console.log(err))
}
var clicked = true
function completedCard(index){
    var exerciseCard = document.getElementsByClassName("card");
    
    exerciseCard[index].style.textDecoration = clicked ? 'line-through' : ''
    clicked = !clicked
}
    



function getWorkout() {
    exerciseList.innerHTML = ''

    axios.get('http://localhost:4004/workout/')
        .then(res => {
            let index = 0;
            res.data.forEach(elem => {
                
                let exerciseCard = `<div class="exercise-card">
                    
                    <img src="${elem.url}" class="workout-image">
                    <div class = "card">
                    <h3>Date: ${elem.date}</h3>
                    <h3>Exercise: ${elem.exercise}</h3>
                    <h3>Sets: ${elem.sets}</h3>
                    <h3>Reps: ${elem.reps}</h3>
                    </div>
                    <button onclick="deleteCard(${elem['workout_id']})">Delete</button>
                    <button onclick="completedCard(${index})">Completed</button>
                    </div>
                `

                exerciseList.innerHTML += exerciseCard
                console.log(elem.url)
                console.log(elem.reps)
                console.log(index)
                index+=1
                
                
            })
        })
}

function getExercises() {
    axios.get('http://localhost:4004/exercises')
        .then(res => {
            res.data.forEach(exercises => {
                const option = document.createElement('option')
                option.setAttribute('value', exercises['exercise_id'])
                option.textContent = exercises.name
                exerciseSelect.appendChild(option)
            })
        })
}





function logout(){
    window.location.href = "login.html";
}



getExercises()
getWorkout()


form.addEventListener('submit', handleSubmit)

