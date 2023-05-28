let form=document.querySelector('#my-form')
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    console.log(name.value);
    console.log(email.value)
});
// let form=document.querySelector('#my-form')
// form.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let name=document.getElementById('name');
//     let email=document.getElementById('email');
//     console.log(name.value);
//     console.log(email.value)
// });
// let form=document.querySelector('#my-form')
// form.addEventListener("mouseover",(e)=>{
//     e.preventDefault();
//     let name=document.getElementById('name');
//     let email=document.getElementById('email');
//     console.log(name.value);
//     console.log(email.value)
// });
// let form=document.querySelector('#my-form')
// form.addEventListener("mouseout",(e)=>{
//     e.preventDefault();
//     let name=document.getElementById('name');
//     let email=document.getElementById('email');
//     console.log(name.value);
//     console.log(email.value)
// });