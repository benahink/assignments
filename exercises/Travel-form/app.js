form = document.passengers

form.addEventListener("submit", function(e){
   e.preventDefault()
   let firstName = form.FirstName.value
   let lastName = form.LastName.value
   let age = form.Age.value 
   let gender = form.gender.value   
   let destination = form.destinations.value
   let dietList = form.diet

   const canEat = []
   for (let i = 0; i < dietList.length; i++) {
       if (dietList[i].checked) {
           canEat.push(dietList[i].value)
       }
   }

   let passInfo = {
       firstName, 
       lastName, 
       age, 
       gender, 
       destination, 
       canEat
   }
   
   let passCard = `
   First name: ${passInfo.firstName} 
   Last name: ${passInfo.lastName} 
   Age: ${passInfo.age} 
   Gender: ${passInfo.gender} 
   Destinaton: ${passInfo.destination} 
   Dietary restrictions: ${passInfo.canEat}`
   alert(passCard)
    //   document.getElementsByName("passengers").innerHTML = `<h1> ${passCard}<h1/>`
})

