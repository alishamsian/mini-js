const container = document.createElement('ol')
document.querySelector('.items').appendChild(container)

document.querySelector('form').onsubmit = (event)=>{
  event.preventDefault();

  const value = document.querySelector('form input').value
  if (value.trim() === ''){
    alert("مقدار نباید خالی باشد")
    return;
  }

  const row = document.createElement("li")
  const title = document.createElement("h3")

  title.innerHTML = value


  row.appendChild(title)
  container.appendChild(row)

}