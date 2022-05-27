function lottery() {
     console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random(0) > 0.5 ?   resolve() : reject("Вы промахнулись");
        }, 1000);
    });
    return promise;
}


(async () => {
    try{
        await lottery()
        console.log("Вы выиграли")
        console.log("Вам заплатили")
    }catch (e){
        console.log("Вы проиграли")
    } finally {
        console.log("Игра закончена")
    }
})()

