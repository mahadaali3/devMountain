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

const baseURL = `http://localhost:4004/api/toDoList`

const getList = () => axios.get(baseURL).then(toDoListCallback).catch(errCallback)



function displayToDoList(data) {
    console.log(data)
   
    
    for (let i = 0; i < data.length; i++) {
        let currentToDo = document.createElement('li')
        currentToDo.innerHTML = `
        ${data[i].title}`
        toDoListContainer.appendChild(currentToDo)
        console.log(i)
    }
    console.log(toDoListContainer)
   
}

axios.get("http://localhost:4000/api/toDoList")
.then(res =>{
    displayToDoList(res.data)
})

