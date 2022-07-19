// import './style.css'

// type MusicData = {
// music: {
// name: string;

    
// }



// }
import "./style.css";

let songs = [
  {
    id: 1,
    title: "Maps",
    genre: "Pop",
    thumbnail: "",
    src: "https://m.media-amazon.com/images/M/MV5BYmE5YTU0MDMtMzBiZS00YTEyLWIzZDYtYjg2MTU4NGFjMGZlXkEyXkFqcGdeQXVyOTE4Njc2NjY@._V1_.jpg",
    author: "Maroon 5",
  },
  
  {
    id: 2,
    title: "Lovely",
    genre: "Pop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/QdCIh15qF8I/maxresdefault.jpg",
    author: "Billie Eilish, Khalid ",
  },

{
    id: 3,
    title: "WHOOPTY ",
    genre: "Hip Hop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/bJE6-uGmjpI/maxresdefault.jpg",
    author: "Cj",
},
{
    id: 4,
    title: "Hymn For The Weekend",
    genre: "",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/HJrKVYJdABc/maxresdefault.jpg",
    author: "Coldplay",
  },
  {
    id: 5,
    title: "The Nights",
    genre: "",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/pLCBf1NljyM/maxresdefault.jpg",
    author: "Avicii",
},
{
    id: 6,
    title: "When I Grow Up",
    genre: "Hip Hop",
    thumbnail: "",
    src: "data:image/jpeg;base64,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",
    author: "NF",
  },
  {
    id: 7,
    title: "I Mean It",
    genre: "Hip Hop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/bSfpSOBD30U/maxresdefault.jpg",
    author: "G-Eazy ",
},
{
    id: 8,
    title: "God's Plan",
    genre: "Pop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/7bakZtE-BJs/maxresdefault.jpg",
    author: "Drake",
  },
  {
    id: 9,
    title: "Ht Waves",
    genre: "Pop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/mRD0-GxqHVo/maxresdefault.jpg",
    author: "Gls Animals",
  },
  {
    id: 10,
    title: "Unstoppable",
    genre: "Pop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/cxjvTXo9WWM/mqdefault.jpg",
    author: "Sia ",
  },
  {
    id: 11,
    title: "The Search",
    genre: "Hip Hop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/fnlJw9H0xAM/maxresdefault.jpg",
    author: "NF",
  },
  {
    id: 12,
    title: "Beggin",
    genre: "Hip Hop",
    thumbnail: "",
    src: "https://i.ytimg.com/vi/JRFkj_F7YlE/maxresdefault.jpg",
    author: "Maneskin",
  },
];

let songsContainer = document.getElementById("songs");
// let sound = new Howl({
//     src: ['https://youtu.be/SA7AIQw-7Ms'],
//     volume: 1.0,
//   });
//   sound.play()

function renderSongs() {
  for (let song of songs) {
 
    let divItem = document.createElement("div");
    divItem.className = 'create-element-div'

    let imgItem = document.createElement("img")
    imgItem.className = 'create-element-img'
    imgItem.src = song.src;
    imgItem.width = 180;

    let h2Tittle = document.createElement("h4");
    h2Tittle.className = 'create-element-h2'
    h2Tittle.textContent = song.title;

    let h3Author = document.createElement("h5");
    h3Author.className = 'create-element-h3'
    h3Author.textContent = song.author;

    let spanFavorite = document.createElement("span");
    spanFavorite.className = "material-symbols-outlined";
    spanFavorite.textContent = "favorite";
    
    divItem.append(imgItem, h2Tittle, h3Author, spanFavorite);
    songsContainer?.append(divItem);

  }
}

renderSongs();
