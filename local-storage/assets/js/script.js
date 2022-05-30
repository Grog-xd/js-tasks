const btn = document.querySelector('.btn')
const body = document.getElementsByTagName('body')[0]

window.addEventListener('DOMContentLoaded', updateTheme())


btn.addEventListener('click', (e) =>{
    if(localStorage.getItem('theme') === 'light mode'){
        localStorage.theme = 'dark mode'
        updateTheme()
    }else{
        localStorage.theme = 'light mode'
        updateTheme()
    }
})

function updateTheme(){
    switch (localStorage.theme){
        case ('light mode'):
            body.classList.remove('dark-mode')
            btn.innerHTML ='dark mode'
            break
        case ('dark mode'):
            body.classList.add('dark-mode')
            btn.innerHTML ='light mode'
            break
    }
}
