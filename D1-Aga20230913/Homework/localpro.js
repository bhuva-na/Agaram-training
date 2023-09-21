let textinput = document.getElementById("txtinput")
let button= document.getElementById("join")
let list= document.getElementById("listofwords")
// console.log(button)


let todos=[]
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem("liststr")||[])
    todos.forEach(todo=>joining(todo))
}

// console.log(button)
button.addEventListener("click",()=>{
    todos.push(textinput.value)
    localStorage.setItem("liststr",JSON.stringify(todos))
    joining(textinput.value)
    textinput.value=" "
    // console.log("hi")
})

function joining(todo){
   let para=document.createElement("p")
   para.innerText=todo
   list.appendChild(para)
   para.addEventListener("click",()=>{
    para.style.textDecoration="line-through"
    remove(todo)
   })
   para.addEventListener("dblclick",()=>{
    list.removeChild(para)
    remove(todo)
   })

}

function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1);
    }
  localStorage.setItem("liststr",JSON.stringify(todos))
}
