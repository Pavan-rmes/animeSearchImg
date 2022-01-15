const input = document.getElementById("imgUrl")
let seterror = document.getElementsByClassName("error")[0]
let moviesData = [
    {
        "anilist": 21249,
        "filename": "[Leopard-Raws] Concrete Revolutio - Choujin Gensou - 03 RAW (KBS 1280x720 x264 AAC).mp4",
        "episode": 3,
        "from": 257.5,
        "to": 261.5,
        "similarity": 0.706445608665905,
        "video": "https://media.trace.moe/video/21249/%5BLeopard-Raws%5D%20Concrete%20Revolutio%20-%20Choujin%20Gensou%20-%2003%20RAW%20(KBS%201280x720%20x264%20AAC).mp4?t=259.5&token=96BA1ZoqbGDL273Fg0InoLAks",
        "image": "https://media.trace.moe/image/21249/%5BLeopard-Raws%5D%20Concrete%20Revolutio%20-%20Choujin%20Gensou%20-%2003%20RAW%20(KBS%201280x720%20x264%20AAC).mp4?t=259.5&token=96BA1ZoqbGDL273Fg0InoLAks"
    },
    {
        "anilist": 105156,
        "filename": "[Ohys-Raws] Shinchou Yuusha Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru - 02 (AT-X 1280x720 x264 AAC).mp4",
        "episode": 2,
        "from": 1242.83,
        "to": 1242.92,
        "similarity": 0.7057429160559336,
        "video": "https://media.trace.moe/video/105156/%5BOhys-Raws%5D%20Shinchou%20Yuusha%20Kono%20Yuusha%20ga%20Ore%20Tueee%20Kuse%20ni%20Shinchou%20Sugiru%20-%2002%20(AT-X%201280x720%20x264%20AAC).mp4?t=1242.875&token=uAkOTB4sX4dwsrJGfn36esaRPE",
        "image": "https://media.trace.moe/image/105156/%5BOhys-Raws%5D%20Shinchou%20Yuusha%20Kono%20Yuusha%20ga%20Ore%20Tueee%20Kuse%20ni%20Shinchou%20Sugiru%20-%2002%20(AT-X%201280x720%20x264%20AAC).mp4?t=1242.875&token=uAkOTB4sX4dwsrJGfn36esaRPE"
    },
    {
        "anilist": 105156,
        "filename": "Shinchou Yuusha Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru - 02 (BD 1280x720 x264 AAC).mp4",
        "episode": 2,
        "from": 1233.83,
        "to": 1233.92,
        "similarity": 0.6985257835272631,
        "video": "https://media.trace.moe/video/105156/Shinchou%20Yuusha%20Kono%20Yuusha%20ga%20Ore%20Tueee%20Kuse%20ni%20Shinchou%20Sugiru%20-%2002%20(BD%201280x720%20x264%20AAC).mp4?t=1233.875&token=eMTJaCH21Ukcw9eJ4erPi34gtQ",
        "image": "https://media.trace.moe/image/105156/Shinchou%20Yuusha%20Kono%20Yuusha%20ga%20Ore%20Tueee%20Kuse%20ni%20Shinchou%20Sugiru%20-%2002%20(BD%201280x720%20x264%20AAC).mp4?t=1233.875&token=eMTJaCH21Ukcw9eJ4erPi34gtQ"
    },
    {
        "anilist": 21249,
        "filename": "[Ohys-Raws] Concrete Revolutio - Choujin Gensou - 03 (MX 1280x720 x264 AAC).mp4",
        "episode": 3,
        "from": 257.5,
        "to": 261.42,
        "similarity": 0.6949878431528055,
        "video": "https://media.trace.moe/video/21249/%5BOhys-Raws%5D%20Concrete%20Revolutio%20-%20Choujin%20Gensou%20-%2003%20(MX%201280x720%20x264%20AAC).mp4?t=259.46000000000004&token=PUGiWSmIqoKMEiJ3k22WjxjmkGo",
        "image": "https://media.trace.moe/image/21249/%5BOhys-Raws%5D%20Concrete%20Revolutio%20-%20Choujin%20Gensou%20-%2003%20(MX%201280x720%20x264%20AAC).mp4?t=259.46000000000004&token=PUGiWSmIqoKMEiJ3k22WjxjmkGo"
    },
    {
        "anilist": 10379,
        "filename": "[CASO][Natsume_Yuujinchou_San][GB][06][1280x720][x264_AAC][505C7BD8].mp4",
        "episode": 6,
        "from": 1253.92,
        "to": 1258.25,
        "similarity": 0.6912161357673857,
        "video": "https://media.trace.moe/video/10379/%5BCASO%5D%5BNatsume_Yuujinchou_San%5D%5BGB%5D%5B06%5D%5B1280x720%5D%5Bx264_AAC%5D%5B505C7BD8%5D.mp4?t=1256.085&token=1zJAdyur2seEyquQhwhzEvOZgE",
        "image": "https://media.trace.moe/image/10379/%5BCASO%5D%5BNatsume_Yuujinchou_San%5D%5BGB%5D%5B06%5D%5B1280x720%5D%5Bx264_AAC%5D%5B505C7BD8%5D.mp4?t=1256.085&token=1zJAdyur2seEyquQhwhzEvOZgE"
    },
    {
        "anilist": 14765,
        "filename": "[Ixion Saga DT][19][BDrip X264 AAC 720P].mp4",
        "episode": 19,
        "from": 1192.5,
        "to": 1192.83,
        "similarity": 0.6875538370063812,
        "video": "https://media.trace.moe/video/14765/%5BIxion%20Saga%20DT%5D%5B19%5D%5BBDrip%20X264%20AAC%20720P%5D.mp4?t=1192.665&token=tew5gFIBQf33JLXZnLH1YwWYtwg",
        "image": "https://media.trace.moe/image/14765/%5BIxion%20Saga%20DT%5D%5B19%5D%5BBDrip%20X264%20AAC%20720P%5D.mp4?t=1192.665&token=tew5gFIBQf33JLXZnLH1YwWYtwg"
    },
    {
        "anilist": 4260,
        "filename": "(18禁アニメ) (無修正) ファイブカード 第3話 (DVD 640x480 WMV9).mp4",
        "episode": 3,
        "from": 1241.08,
        "to": 1241.92,
        "similarity": 0.6654773978185884,
        "video": "https://media.trace.moe/video/4260/(18%E7%A6%81%E3%82%A2%E3%83%8B%E3%83%A1)%20(%E7%84%A1%E4%BF%AE%E6%AD%A3)%20%E3%83%95%E3%82%A1%E3%82%A4%E3%83%96%E3%82%AB%E3%83%BC%E3%83%89%20%E7%AC%AC3%E8%A9%B1%20(DVD%20640x480%20WMV9).mp4?t=1241.5&token=pjKqfyDWUuLE3c8grWJYRmdyak4",
        "image": "https://media.trace.moe/image/4260/(18%E7%A6%81%E3%82%A2%E3%83%8B%E3%83%A1)%20(%E7%84%A1%E4%BF%AE%E6%AD%A3)%20%E3%83%95%E3%82%A1%E3%82%A4%E3%83%96%E3%82%AB%E3%83%BC%E3%83%89%20%E7%AC%AC3%E8%A9%B1%20(DVD%20640x480%20WMV9).mp4?t=1241.5&token=pjKqfyDWUuLE3c8grWJYRmdyak4"
    },
    {
        "anilist": 20645,
        "filename": "[ReinForce] Glasslip - 12 (BDRip 1920x1080 x264 FLAC).mp4",
        "episode": 12,
        "from": 363.42,
        "to": 363.75,
        "similarity": 0.6609675915449613,
        "video": "https://media.trace.moe/video/20645/%5BReinForce%5D%20Glasslip%20-%2012%20(BDRip%201920x1080%20x264%20FLAC).mp4?t=363.58500000000004&token=Z3MiFDLEfVj7Puaq01gNXVDJRw",
        "image": "https://media.trace.moe/image/20645/%5BReinForce%5D%20Glasslip%20-%2012%20(BDRip%201920x1080%20x264%20FLAC).mp4?t=363.58500000000004&token=Z3MiFDLEfVj7Puaq01gNXVDJRw"
    },
    {
        "anilist": 98005,
        "filename": "[Leopard-Raws] Ballroom e Youkoso - 14 RAW (MBS 1280x720 x264 AAC).mp4",
        "episode": 14,
        "from": 1196.17,
        "to": 1196.75,
        "similarity": 0.6604234511120873,
        "video": "https://media.trace.moe/video/98005/%5BLeopard-Raws%5D%20Ballroom%20e%20Youkoso%20-%2014%20RAW%20(MBS%201280x720%20x264%20AAC).mp4?t=1196.46&token=r0vgvJQZvoiLTbmZWMgU2x4B0",
        "image": "https://media.trace.moe/image/98005/%5BLeopard-Raws%5D%20Ballroom%20e%20Youkoso%20-%2014%20RAW%20(MBS%201280x720%20x264%20AAC).mp4?t=1196.46&token=r0vgvJQZvoiLTbmZWMgU2x4B0"
    },
    {
        "anilist": 106625,
        "filename": "[Ohys-Raws] Haikyuu!! To the Top - 04 (TBS 1280x720 x264 AAC).mp4",
        "episode": 4,
        "from": 620.33,
        "to": 620.58,
        "similarity": 0.6591592859009943,
        "video": "https://media.trace.moe/video/106625/%5BOhys-Raws%5D%20Haikyuu!!%20To%20the%20Top%20-%2004%20(TBS%201280x720%20x264%20AAC).mp4?t=620.455&token=nc1P0DkbmA5OLRSWPfToNoqIn0",
        "image": "https://media.trace.moe/image/106625/%5BOhys-Raws%5D%20Haikyuu!!%20To%20the%20Top%20-%2004%20(TBS%201280x720%20x264%20AAC).mp4?t=620.455&token=nc1P0DkbmA5OLRSWPfToNoqIn0"
    }
]


async function search(){
    fetch(`https://api.trace.moe/search?url=${encodeURIComponent(input.value)}`)
    .then((e) => e.json())
    .then((data)=>{
        moviesData=data.result
        console.log(moviesData)
        renderMainMovies(0)
        renderSideMovies()
    })
    
}

document.getElementById("serachButton").addEventListener("click",()=>{
    if(input.value.slice(input.value.length - 3) === "png"){
        seterror.style.display="none"
        search()
    }
    else{
        seterror.style.display="block"
        seterror.style.color="red"
    }
})

let mainMoviediv = document.getElementsByClassName("mainMovie")[0]
let sideMoviesdiv = document.getElementsByClassName("sideMovies")[0]

renderMainMovies(0)
renderSideMovies()

function renderMainMovies(id){
    console.log(id)
    mainMoviediv.innerHTML=`<video class="mainVideo" controls >
    <source src=${moviesData[id].video}>
    </video>
    <div style="display: flex;justify-content: space-between;">
        <div>
            <p>Filim name: ${filename(moviesData[id].filename)}</p>
            <p>Episode: ${moviesData[id].episode}</p>
            <p>Similarity: ~${Math.round(moviesData[id].similarity*100)}</p>
        </div>
        <div>
            <img class="mainImg" src=${moviesData[id].image} alt="#"/>
        </div>
    </div>`
}

function filename(name){
    let moviename = name.split(" ")
    return moviename[1]
}

function renderSideMovies(){
    sideMoviesdiv.innerHTML=""
    moviesData.map((movie,index)=>{
        if(index<5){
            sideMoviesdiv.innerHTML = sideMoviesdiv.innerHTML+`<div class="sideMovie">
            <img onclick="renderMainMovies(this.id)" id=${index} class="sideImg" src=${movie.image} alt="#"/>
            <p style="width: 100%;">${filename(movie.filename)}</p>
            </div>`
        }
    })

}

function changeVideo(id){
    
}
