const form = document.querySelector('.login-form')

// const handleSubmit = (evt) => {
//     evt.preventDefault();
    
//     const {email, password} = evt.currentTarget;
    

//     if (email.value === "" || password.value === "") {
//         alert("Please, fill all fields in this form")
//     } else { 
//         console.log(`Name: ${email.value} \n Password: ${password.value}`)
//     }
//     evt.currentTarget.reset();
// }
form.addEventListener("submit", evt => {
    evt.preventDefault();
    
    const {email, password} = evt.currentTarget;
    

    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("Please, fill all fields in this form")
    } else { 
        console.log(`Name: ${email.value} \n Password: ${password.value}`)
    }
    evt.currentTarget.reset();
})



