const input = document.getElementById('input')
const errMessage = document.getElementById('err-message')
const btn = document.getElementById('input-btn')



const validationInput = () =>{
    if (!input.value) throw new Error("Заполните поле")
    else if(input.value < 5) throw new Error("Введите число больше 5")
    else if(input.value > 10) throw new Error("Введите число меньше 10")
}

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    try{
        validationInput()
        errMessage.classList.remove('active')
    }catch (e){
        errMessage.innerHTML = e.message
        errMessage.classList.add('active')
    }
})




