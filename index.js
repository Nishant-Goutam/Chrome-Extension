const getGirl=async()=>{
    try{
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const Snehank = document.querySelector("#Snehank");
        Snehank.innerHTML = data.value;
    }catch(error){}

}

window.addEventListener("load",()=>{
    getGirl();
})