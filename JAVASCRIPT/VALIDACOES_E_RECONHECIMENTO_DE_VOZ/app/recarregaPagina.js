

document.body.addEventListener("click", (e) => {
 const el = e.target
    if(el.id == 'btn'){
        window.location.reload()
    }
})