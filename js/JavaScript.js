const cambiarFondo = (x) => {
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = x.value;
}

//Acordeon
const eventoMenu = () =>{
let btnItems = document.querySelectorAll(".item .btnItem");

for (let i = 0; i < btnItems.length; i++){
    btnItems[i].addEventListener("click", function(e){
        console.log(e.target);
        let btn = e.target;
        if (btn.className == "btnItem active"){
            btn.classList.remove("active");
        } else{
            btn.classList.add("active");
        }
        
    })
}
}
