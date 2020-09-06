const login={
    login:document.getElementById("modal"),


}

let openmodal=document.getElementById("modal");

openmodal.addEventListener("click", () => {
    let modal=document.getElementById("modal-login");
    modal.style.display="flex";
});

let openmodalclose=document.getElementById("background");

openmodalclose.addEventListener("click", () =>{
    let modal_close=document.getElementById("background").parentElement;
        modal_close.style.display="none";
});

/* let login_success=document.getElementById("login");

login_success.addEventListener("click", ()=>{
    let login_modal=getElementById("modal-login");
    login_modal.style.display="none";
}); */


document.getElementById("logo").addEventListener("mouseover", ()=>{
    let sidebar=document.getElementById("sidebar");
    sidebar.style.display="block"; 
});

document.getElementById("logo"),addEventListener("mouseout", ()=>{
     sidebar.style.display="none";
});
document.getElementById("sidebar").addEventListener("mouseover", ()=>{
    sidebar.style.display="block";
});
