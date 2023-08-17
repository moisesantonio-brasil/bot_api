/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from"react";

import "./App.css";



function App() {
  const [contando,setContando]= useState(1)
  const [ name,setname] = useState('') 
  const [ pergunta,setPergunta] = useState('') 
  const [contarresposta,setContarResposta]=useState(1)

function mandando(){
const fetchname = () =>{

  fetch("https://jsonplaceholder.typicode.com/users/"+contando)
  .then((responsta) => responsta.json())
  .then((data) => setname(data.name))
}
fetchname()
setContando(contando + 1)
let input = document.querySelectorAll("input")
const input_value = input[0].value;

if(contando > 10){
window.alert("limite de Bots alcançado")
  window.location.reload(true);
}

//primeiro
let div = document.createElement("div")
let p = document.createElement("p")
div.setAttribute("class","div-criado")
p.setAttribute("class","palavra_css")
p.textContent = "Você: " + input_value;


let parte3 = document.querySelector(".parte3")
parte3.appendChild(div)
div.appendChild(p)

if(input_value == ""){
  p.textContent = "Adicione no minimo um caractere"

  setTimeout(()=>{
div.remove()
  },1500)
  
}
 if(input_value.length >= 1){
  setTimeout(() =>{

  let base_resposta = document.createElement("div")
  let resposta = document.createElement("p")
  let btn_aceitar = document.createElement("button")

  let btn_recusar = document.createElement("button")

  base_resposta.setAttribute("class","div-criado")
  resposta.setAttribute("class","palavra_css")
  btn_aceitar.setAttribute("class","botoes_a")

  btn_recusar.setAttribute("class","botoes_r")

parte3.appendChild(base_resposta)
  base_resposta.appendChild(resposta)
  base_resposta.appendChild(btn_aceitar)
  base_resposta.appendChild(btn_recusar)


  resposta.textContent ="Quer conversar com Bots?"  
  btn_aceitar.textContent = "aceitar conversa"

  btn_recusar.textContent = "recusar conversa"

/*-----------------------------------------------------------------* */
btn_aceitar.addEventListener("click",()=>{

  let button_antigo = document.querySelector(".mandar_r")
  let button_substituto = document.querySelector(".mandar_r2")
 
//
  button_antigo.setAttribute("class","nada")
  button_substituto.setAttribute("class","aparecer")
  input[0].setAttribute("id","espaço_comentario2")
  input[1].setAttribute("id","espaço_comentario")

//
  btn_aceitar.remove()
  btn_recusar.remove()


  let n_base_resposta = document.createElement("div")
  let n_resposta = document.createElement("p")

  n_base_resposta.setAttribute("class","div-criado")
  n_resposta.setAttribute("class","palavra_css")

    n_resposta.textContent = "Vamos começar com o Bot número "+contando
    parte3.appendChild(n_base_resposta)
  n_base_resposta.appendChild(n_resposta)
 
})

btn_recusar.addEventListener("click",()=>{
  div.remove()
  base_resposta.remove()

  let finalizaçao = document.createElement("p")
  finalizaçao.textContent = "Conversa Finalizada"
  parte3.appendChild(finalizaçao)
  setTimeout(()=>{
finalizaçao.remove()
  },1500)
 
})

},1000)
}

}


function mandando2(){ 
  let h2 = document.querySelector("h2")
  h2.textContent = "Conversando com "+name

  setContarResposta(contarresposta + 1)

  const fetchPergunta = () =>{
    fetch("https://jsonplaceholder.typicode.com/comments/"+contarresposta)
    .then((responsta) => responsta.json())
    .then((data) => setPergunta(data.name))
  }
  fetchPergunta()
  console.log("valor do contarresposta: "+contarresposta)

  let n_base_resposta = document.createElement("div")
  let n_resposta = document.createElement("p")
let segundoinput = document.querySelector("#espaço_comentario")
  const input2 = segundoinput.value;

  console.log("extra valor de input novo= "+input2)
  
  let parte3 = document.querySelector(".parte3")
  let parte2 = document.querySelector(".parte2")
  n_base_resposta.setAttribute("class","div-criado")
  n_resposta.setAttribute("class","palavra_css")
  parte3.appendChild(n_base_resposta)
  n_base_resposta.appendChild(n_resposta)
  n_resposta.textContent ="Você: "+input2;

  
  switch(name){
    case 'Leanne Graham':
     
    n_base_resposta.setAttribute("name","name-Leanne Graham");
    parte2.setAttribute("name","name-Leanne Graham");
    break;
    case "Ervin Howell":

      n_base_resposta.setAttribute("name","name-Ervin Howell");
      parte2.setAttribute("name","name-Ervin Howell");
    break;
    case "Clementine Bauch":
      n_base_resposta.setAttribute("name","name-Clementine Bauch");
      parte2.setAttribute("name","name-Clementine Bauch");

    break;
    case "Chelsey Dietrich":
      n_base_resposta.setAttribute("name","name-Chelsey Dietrich");
      parte2.setAttribute("name","name-Chelsey Dietrich");
     
    break;
    case "Patricia Lebsack":
      n_base_resposta.setAttribute("name","name-Patricia Lebsack");
      parte2.setAttribute("name","name-Patricia Lebsack");
 
    break;
    case "Mrs. Dennis Schulist":
      n_base_resposta.setAttribute("name","name-Sra. Dennis Schulist");
      parte2.setAttribute("name","name-Sra. Dennis Schulist");

    break;
    case "Kurtis Weissnat":
      n_base_resposta.setAttribute("name","name-Kurtis Weissnat");
      parte2.setAttribute("name","name-Kurtis Weissnat");

    break;
    case "Nicholas Runolfsdottir V":
      n_base_resposta.setAttribute("name","name-Nicholas Runolfsdottir V");
      parte2.setAttribute("name","name-Nicholas Runolfsdottir V");

    break;
    case "Glenna Reichert":
      n_base_resposta.setAttribute("name","name-Glenna Reichert");
      parte2.setAttribute("name","name-Glenna Reichert");
 
    break;
    case "Clementina DuBuque":

      n_base_resposta.setAttribute("name","name-Clementina DuBuque");
      parte2.setAttribute("name","name-Clementina DuBuque");
    break;
  default:
    console.log("o valor de "+name+"não é compatível")
   }
   //-----

   
   if (contarresposta == 1){
    let n_base_resposta = document.createElement("div")
    let n_resposta = document.createElement("p")
    n_base_resposta.setAttribute("class","div-criado")
    n_resposta.setAttribute("class","palavra_css")
    parte3.appendChild(n_base_resposta)
    n_base_resposta.appendChild(n_resposta)
    n_resposta.textContent = name+ ": Vou começar a falar de mim"
   }

   if(contarresposta == 2 || contarresposta > 2 ){
    let n_base_resposta = document.createElement("div")
    let n_resposta = document.createElement("p")
    n_base_resposta.setAttribute("class","div-criado")
    n_resposta.setAttribute("class","palavra_css")
    parte3.appendChild(n_base_resposta)
    n_base_resposta.appendChild(n_resposta)
    n_resposta.textContent = name+ ": "+pergunta
         }
        
               if(contarresposta == 11 ){
                let n_base_resposta = document.createElement("div")
                let n_resposta = document.createElement("p")
                n_base_resposta.setAttribute("class","div-criado")
                n_resposta.setAttribute("class","palavra_css")
                parte3.appendChild(n_base_resposta)
                setContarResposta(contarresposta - 10)
                n_base_resposta.appendChild(n_resposta)
                n_resposta.textContent = "LIMITE DE RESPOSTA ALCANÇADO" 
                window.alert("o limite de resposta foi alcançado"+
                      " Agora aparecera as respostas do inicio")
                     }
                    
}

    

return (<>
<h2></h2>
  <div className="parte1">
<input type="text" name="" id="espaço_comentario" />
<input type="text" name="" id="espaço_comentario2" />
  </div>
  <div className="parte2">
    <button className="mandar_r" onClick={mandando}>mandar resposta</button>
    <button className="mandar_r2" onClick={mandando2}>mandar respostas</button>
  </div>
  <section className="parte3">

  </section>

<h1>Créditos</h1>

<a href="https://jsonplaceholder.typicode.com/" target="_self">
  <h1>Api jsonplaceholder</h1></a>
</>
);
}
export default App;