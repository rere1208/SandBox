console.log("Hello le stresseu");

const prenom = 'Rémi';// declarer des variable
let year2 = 2024;// declarer des variable
var year3 = 2025; // ne plus utiliser
const dob = 2000 
const isAdmin = false//boolean
const apprenant = ["Remi","tintin", "Florian"];// TABLEAU 
const sac = {livre:'Bd titnin', trousse : 'stylo', skilles:["baggarre","games"]};//objet
const disque = document.querySelector(".disque");
const BtnPause = document.getElementById("BtnPause");
const paragraphe = document.querySelector(".div1 p");
setTimeout(()=>{
    paragraphe.style.backgroundColor = "blue";
}, 1000)

BtnPause.addEventListener("click", () => {
    disque.classList.toggle("pause");
    if(disque.classList.contains("pause")){
        BtnPause.textContant ="Play";
    }else{
        BtnPause.textContent = "Pause";
    }
});

console.log(disque);
console.log(apprenant[0]);
console.log(sac.skilles[0]);

apprenant.forEach(
    data =>{
        console.log(`Bonjour  ${apprenant}`)
    }
)

console.log(`Bonjour  ${prenom}`);//concatenation*
CalculeAge();

// function
function CalculeAge(){
    const age =  year2 - dob;
    console.log(`Voici ton age : ${age}.`);
}
// Nouveau type de fonction
const CalculeAge2 = () => {
    const age =  year2 - dob;
    console.log(`Voici ton age : ${age}.`);

    //if(age > 18){
      //  console.log("Rentre fumier");
    //}else{
      //  console.log("Tu rentre pas fumier");
    //}
    age > 18 ? console.log("Rentre fumier") : console.log("Tu rentre pas fumier") // condition terniere meme chose que le if
}
CalculeAge2();

