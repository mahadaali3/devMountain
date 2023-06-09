const complimentBtn = document.getElementById("complimentButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const form = document.querySelector('form')
const toDoListContainer = document.querySelector('#toDoList-container');

const toDoListCallback = ({ data: toDoList }) => displayToDoList(toDoList)
const errCallback = err => console.log(err)

const baseURL = `http://localhost:4000/api/toDoList`

const getList = () => axios.get(baseURL).then(toDoListCallback).catch(errCallback)



function displayToDoList(data) {
    console.log(data)
   
    
    for (let i = 0; i < data.length; i++) {
        let currentToDo = document.createElement('li')
        currentToDo.innerHTML = `
        ${data[i].title}`
        toDoListContainer.appendChild(currentToDo)
        console.log("container hit")
        
    }
    console.log(data.length)
    
   
}

function addToDo(body){
    axios.post(baseURL,body).then((res) => {
        toDo = res.data
        displayToDoList(toDo)
        console.log("Ahmeeeed")
    })
    .catch(errCallback)
}
const deleteBtn = document.getElementById('deleteBtn')
const idvalue = document.getElementById('toDo-index')
deleteBtn.addEventListener('click', deleteToDo)

function deleteToDo(idvalue){
    axios.delete(`${baseURL}/${idvalue.value}`).then((res) => {
        toDo = res.data
        console.log("Ayooo cuz")
        displayToDoList(toDo)
    })
    .catch(errCallback)
    console.log(idvalue.value)
}

function submitHandler(event) {
    event.preventDefault()
    
    let toDo = document.querySelector('#toDo')

    


    //create body object for post
    let body = {
        title: toDo.value
    }

    addToDo(body)
    deleteToDo(idvalue.value)
    console.log("hit")


    

    toDo.value = ''
    // location.reload()

}

axios.get("http://localhost:4000/api/toDoList")
.then(res =>{
    displayToDoList(res.data)
   
    console.log("yessssirrrrz")
})

form.addEventListener('submit',submitHandler)
