import "./style.css";

let songs = [
  {
    id: 1,
    title: "Song 1",
    genre: "",
    thumbnail: "",
    src: "https://github.com/lucas-santosP/clone-spotify-web-react/raw/master/src/assets/demo-preview.png",
    author: "",
  },

  {
    id: 2,
    title: "Song 2",
    genre: "",
    thumbnail: "",
    src: "https://github.com/lucas-santosP/clone-spotify-web-react/raw/master/src/assets/demo-preview.png",
    author: "",
  },
];

let songsContainer = document.getElementById("songs");

function renderSongs() {
  for (let song of songs) {
    let divItem = document.createElement("div");

    let imgItem = document.createElement("img");
    imgItem.src = song.src;
    imgItem.width = 250;

    let h2Tittle = document.createElement("h2");
    h2Tittle.textContent = song.title;

    let h3Author = document.createElement("h3");
    h3Author.textContent = song.author;

    let spanFavorite = document.createElement("span");
    spanFavorite.className = "material-symbols-outlined";
    spanFavorite.textContent = "favorite";

    divItem.append(imgItem, h2Tittle, h3Author, spanFavorite);
    songsContainer?.append(divItem);
  }
}

renderSongs();
