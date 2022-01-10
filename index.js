const input = document.getElementById("imgUrl")

async function search(){
    fetch(`https://api.trace.moe/search?url=${encodeURIComponent(input.value)}`)
    .then((e) => e.json())
    .then((data)=>console.log(data))
}


