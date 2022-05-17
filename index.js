// Add your code here


function submitData(name,email){
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept : "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
            
        })
    }
    return fetch("http://localhost:3000/users",configObject)
    .then(response=>response.json())
    .then(object=>{
        let body =document.querySelector('body')
        body.innerHTML+=object.id})
    .catch(error=>{ document.querySelector('body').innerHTML+="Unauthorized Access"
    })
}


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }



// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });

