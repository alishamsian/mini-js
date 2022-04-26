async function getUsers(){
    const url = "https://randomuser.me/api/?inc=name,picture&results=48";
   try {
    const request = await fetch(url);
    const data = await request.json();
    const users = data.results;

    for (const user of users) {
        const {title , first , last} = user.name;
      const name = `${title} ${first} ${last}  `;
      const {large:picture} = user.picture;

      const userContainer = document.createElement("div");
      userContainer.classList.add("col-2");
      userContainer.classList.add("user");

      const image = document.createElement("img");
      image.src = picture;
      userContainer.appendChild(image);

      const body = document.createElement("h3")
      body.innerHTML = name
      userContainer.appendChild(body)


      document.querySelector(".users").appendChild(userContainer);
    }  
   } catch (error) {
       console.log(error)
   }
}

getUsers()