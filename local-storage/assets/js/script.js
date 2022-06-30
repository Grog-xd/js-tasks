const btn = document.querySelector('.btn')
const body = document.getElementsByTagName('body')[0]

let theme = localStorage.getItem('theme')

ThemeSwitch(theme)

function ThemeSwitch(theme){
    switch(theme){
        case 'light-mode':
            body.classList.remove('dark-mode')
            btn.innerHTML = 'light mode'
            break
        case 'dark-mode':
            body.classList.add('dark-mode')
            btn.innerHTML = 'dark mode'
            break
    }
}


btn.addEventListener('click', ()=>{
    localStorage.getItem('theme') !== 'dark-mode'? localStorage.theme = 'dark-mode' : localStorage.theme = 'light-mode'
    ThemeSwitch(localStorage.getItem('theme'))
})
