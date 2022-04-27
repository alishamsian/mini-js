async function getUsers(){
  const catchedUsers = localStorage.getItem("users");
  if (catchedUsers !== null) {
    users = JSON.parse(catchedUsers);
  } else {
    const url = "https://randomuser.me/api/?inc=name,picture&results=48";
    const request = await fetch(url);
    const data = await request.json();
    users = data.results;
    localStorage.setItem("users", JSON.stringify(users));
  }
  return users;
}

async function showUsers(users = null) {
  document.querySelector('.users').innerHTML= ''
  try {
    if(users === null){
      users = await getUsers()
    }

    for (const user of users) {
      const { title, first, last } = user.name;
      const name = `${title} ${first} ${last}  `;
      const { large: picture } = user.picture;

      const userContainer = document.createElement("div");
      userContainer.classList.add("col-2");
      userContainer.classList.add("user");

      const image = document.createElement("img");
      image.src = picture;
      userContainer.appendChild(image);

      const body = document.createElement("h3");
      body.innerHTML = name;
      userContainer.appendChild(body);

      document.querySelector(".users").appendChild(userContainer);
    }
    return users;
  } catch (error) {
    console.log(error);
  }
}

(async function () {
  const users = await showUsers();
  let timeout;
  document.querySelector("#filter").addEventListener("keyup", (e) => {
    window.clearTimeout(timeout);
    timeout = setTimeout(() => {
      const value = e.target.value;
      const filterdUsers = users.filter((user) => {
        const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        return name.toLowerCase().indexOf(value) > -1;
      });
      showUsers(filterdUsers);
    }, 500);
  });
})();