const username = document.querySelector('#username')
const password = document.querySelector('#password')
const submitButton = document.querySelector(".login-btn");
function handleSubmit(e){
        e.preventDefault()
        
        console.log(username.value)
        
    
        axios.get('http://localhost:4004/login')
            .then(res => {
                let correctLogin = false
                res.data.forEach(elem => {
                    
                    if(username.value == elem.username && password.value == elem.password){
                        console.log("correct login")
                        correctLogin = true
                        window.location.href = "index.html";
                    }
                    
                })
                if(correctLogin == false){
                    alert("Incorrect login")
                }
            })
    }
    function directToRegister(e){
        console.log("hit")
        e.preventDefault()
        window.location.href = "register.html";
    }
   


    // submitButton.addEventListener("click", handleSubmit)
    



    