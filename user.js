
function userPosts() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();
}