const loadBtn = document.querySelector(".js-load");
const loadBtnUsers = document.querySelector(".js-load-users");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");


loadBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then(resultsContainer.innerHTML = '')
    .then(response => response.json())
    .then(
      (data) =>
        resultsContainer.innerHTML = `<div class="response-container">
                  <img src="${data.avatar_url}">
                  <p> Имя: <span>${data.name}</span><p>
                  <p> О себе: <span>${data.bio}</span><p>
                  <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
              </div>`
    );
});

loadBtnUsers.addEventListener('click', e =>{
  e.preventDefault()
  axios.get('https://jsonplaceholder.typicode.com/users', )
      .then(resultsContainer.innerHTML = '')
      .then(response => response.data)
      .then(response => response.map(user=>
          resultsContainer.insertAdjacentHTML("beforeend", `
           <div class="response-container">
                <p> Имя: <span>${user.name}</span><p>
                <p> Username: <span>${user.username}</span><p>
                <p> Email: <span>${user.email}</span><p>
                <p>Город: <span>${user.address.city}</span></p>
           </div>
          `)
      ))
})


