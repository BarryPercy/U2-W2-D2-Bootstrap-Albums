favouriteAlbums =[
    {
        "album": "Meteora",
        "artist": "Linkin Park",
        "genre": "Metal - Rock",
        "duration": "36:35",
        "coverimage": "assets/images/Linkin_Park_Meteora_Album_Cover.jpg"
    },
    {
        "album": "Inside",
        "artist": "Bo Burnham",
        "genre": "Synth-pop - Comedy",
        "duration": "57:01",
        "coverimage": "assets/images/bo-burnham-inside.jfif"
    },
    {
        "album": "Because the Internet",
        "artist": "Childish Gambino",
        "genre": "Hip-hop - Rap",
        "duration": "58:01",
        "coverimage": "assets/images/gambino7.jpg"
    },
    {
        "album": "BALLADS1",
        "artist": "Joji",
        "genre": "R&B - Lo-Fi - Downtempo",
        "duration": "35:11",
        "coverimage": "assets/images/ballads1.png"
    },
    {
        "album": "On the Road",
        "artist": "Christy Moore",
        "genre": "Acoustic",
        "duration": "01:00:35",
        "coverimage": "assets/images/on-the-road.jpg"
    },
    {
        "album": "American IV: The Man Comes Around",
        "artist": "Johnny Cash",
        "genre": "Country",
        "duration": "51:50",
        "coverimage": "assets/images/AmericanIV.jpg"
    },
    {
        "album": "The Eminem Show",
        "artist": "Eminem",
        "genre": "Rap",
        "duration": "01:17:00",
        "coverimage": "assets/images/eminem-show.jpg"
    },
    {
        "album": "Tenacious D",
        "artist": "Tenacious D",
        "genre": "Rock",
        "duration": "50:44",
        "coverimage": "assets/images/Tenacious_D_album_cover.jpg"
    }
]
worstAlbums=[
    {
        "album": "Midnights",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "44:08",
        "coverimage": "assets/images/midnights.webp"
    },
    {
        "album": "Red",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "02:10:00",
        "coverimage": "assets/images/red.png"
    },
    {
        "album": "Fearless",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "01:46:00",
        "coverimage": "assets/images/fearless.jpg"
    },
    {
        "album": "evermore",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "01:09:00",
        "coverimage": "assets/images/evermore.png"
    },
    {
        "album": "folklore",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "01:07:00",
        "coverimage": "assets/images/folklore.png"
    },
    {
        "album": "Lover",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "01:01:00",
        "coverimage": "assets/images/lover.jpg"
    },
    {
        "album": "reputation",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "55:45",
        "coverimage": "assets/images/reputation.jpg"
    },
    {
        "album": "1989",
        "artist": "Taylor Swift",
        "genre": "Pop-Country",
        "duration": "01:08:00",
        "coverimage": "assets/images/1989.png"
    },
    
]
tapestry = [
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg",
    "assets/images/Linkin_Park_Meteora_Album_Cover.jpg"
]
let topCards=document.getElementById("top-cards");
let worstCards=document.getElementById("worst-cards");
let tapestryLocation=document.getElementById("tapestry");
function createTopCards(){
    for(let i=0;i<favouriteAlbums.length;i++){
        topCards.innerHTML+=`<div class="col-lg-3 col-md-4 col-6">
        <div class="card">
            <img src=${favouriteAlbums[i].coverimage} class="card-img-top" alt="...">
            <div class="genre-badge""><p>${favouriteAlbums[i].genre}</p></div>
            <div class="">
                <div class="card-body">
                    <h5 class="card-title text-center">${favouriteAlbums[i].album}</h5>
                    <p class="card-text">${favouriteAlbums[i].artist}</p>
                    <p class="card-text">${favouriteAlbums[i].duration}</p>
                </div>  
            </div>
        </div>
    </div>`
    }
}
function createWorstCards(){
    for(let i=0;i<worstAlbums.length;i++){
        worstCards.innerHTML+=`<div class="col-lg-3 col-md-4 col-6">
        <div class="card">
            <img src=${worstAlbums[i].coverimage} class="card-img-top" alt="...">
            <div class="">
                <div class="card-body">
                    <h5 class="card-title text-center">${worstAlbums[i].album}</h5>
                    <p class="card-text">${worstAlbums[i].artist}</p>
                    <p class="card-text">${worstAlbums[i].genre}</p>
                    <p class="card-text">${worstAlbums[i].duration}</p>
                </div>  
            </div>
        </div>
    </div>`
    }
}
function createTapestry(){
    for(let i=0;i<tapestry.length;i++){
        tapestryLocation.innerHTML+=
        `<div class="col-3 tapestry">
            <img src=${tapestry[i]} class="card-img-top" alt="...">
         </div>`
    }
}

function deleteParent(button){
    button.parentNode.parentNode.remove();
}

let numberOfRows = document.querySelectorAll('tr').length -1;
let values;
let table = document.querySelector("table");
function addTrack(){
    values = document.querySelectorAll("form .row div input")
    let tr = document.createElement("tr");
    tr.innerHTML=`
    <th scope="row">${values[0].value}</th>
    <td>${values[1].value}</td>
    <td>${values[2].value}</td>
    <td>${values[3].value}</td>
    <td><button type="button" class="btn btn-danger" onclick="deleteParent(this)">Delete</button></td>
    `
    table.appendChild(tr);
}

window.onload = function(){
    createTopCards();
    createWorstCards();
    createTapestry();
}