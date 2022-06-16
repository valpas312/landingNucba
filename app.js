addEventListener("DOMContentLoaded", () =>{
    const btnMenu=document.querySelector(".btn-menu")
    if (btnMenu) {
        btnMenu.addEventListener("click", ()=>{
            const navList=document.querySelector(".nav-list")
            navList.classList.toggle("toggle")
        })
    }
})