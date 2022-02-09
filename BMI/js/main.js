const form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    document.querySelector('#result').innerHTML = ''

    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value


    if ( height === '' || weight === '') {
        alert("مقدار نباید خالی باشد")
        
        return false
    }

    height = parseInt(height)
    weight = parseInt(weight)

    if ( isNaN(height) || isNaN(weight) ) {
        alert("مقدار باید به عدد باشد")

        return false
    }

    if ( height < 0 || weight < 0) {
        alert("مقدار نباید منفی باشد")

        return false
    }

    height = height/100
    let result = weight / (height*height)
    result = result.toFixed(2)
    document.getElementById('result').innerHTML = result;
    
})