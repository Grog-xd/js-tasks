let sleep = (ms)=>  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('success')
    },ms)
})



sleep(5000).then(() => { 
    console.log('Выполнилось через 5 секунд!'); 
});