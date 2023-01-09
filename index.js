// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

let users;

async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();
    const userCard = document.querySelector(".user")
    
    const usersHTML = usersData.map((user) => {
      return `<div class="user-card">
      <div class="user-card__container">
        <h3>${user.name}</h3>
          <p><b>Email:</b> ${user.email}</p>
          <p><b>Phone:</b> ${user.phone}</p>
          <p><b>Website:</b> <a href="${user.website}" target="_blank">${user.website}</a></p>
      </div>
    </div>`
    }).join('');
    console.log(usersData)
    userCard.innerHTML = usersHTML
}

main();