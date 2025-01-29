
let para = document.createElement('p');
let bt = document.querySelector('button');
para.textContent = "submitted nothing you idiot";
function addImg() {
    bt.insertAdjacentElement('beforebegin', para);
}
bt.onclick = addImg;

//http API requests
let url = 'https://catfact.ninja/fact';
//using promises
// fetch(url).then((response) => console.log(response)).catch((error) => console.log(error));
//using async await
let data;
async function getdata() {
    let respo = await fetch(url);
    data = await respo.json();
    console.log(data.fact);
}
module.exports = 128;