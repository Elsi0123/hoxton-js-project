// import './style.css'

// type MusicData = {
// music: {
// name: string;


// }


// }
import "./style.css";

type Song = {
    id: number;
    title: string;
    playlist: string;
    thumbnail: string;
    audio: string;
    author: string,
    favourited: boolean,
}

type State = {
    songs: Song[];
    selectedSong: Song | null,
    songPlaying: Audio,
    playLists: Array,
    filteredSongs: Array,
}

const songs = [
    {
        id: 1,
        title: "Maps",
        playlist: "Pop",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BYmE5YTU0MDMtMzBiZS00YTEyLWIzZDYtYjg2MTU4NGFjMGZlXkEyXkFqcGdeQXVyOTE4Njc2NjY@._V1_.jpg",
        audio: "hoxton-music/dance-pop/Maroon_5_Maps_Explicit_Official_Music_Video_.mp3",
        author: "Maroon 5",
        favourited: false,
    },

    {
        id: 2,
        title: "Lovely",
        playlist: "Pop",
        thumbnail: "https://i.ytimg.com/vi/QdCIh15qF8I/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Billie_Eilish_Khalid_lovely.mp3",
        author: "Billie Eilish, Khalid ",
        favourited: false,
    },

    {
        id: 3,
        title: "WHOOPTY ",
        playlist: "Hip-Hop",
        thumbnail: "https://i.ytimg.com/vi/bJE6-uGmjpI/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/CJ_WHOOPTY_Official_Music_Video_.mp3",
        author: "Cj",
        favourited: false,
    },

    {
        id: 4,
        title: "Hymn For The Weekend",
        playlist: "Latin",
        thumbnail: "https://i.ytimg.com/vi/HJrKVYJdABc/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Coldplay_Hymn_For_The_Weekend_Official_Video_.mp3",
        author: "Coldplay",
        favourited: false,
    },
    {
        id: 5,
        title: "The Nights",
        playlist: "Rock",
        thumbnail: "https://i.ytimg.com/vi/pLCBf1NljyM/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Avicii_The_Nights.mp3",
        author: "Avicii",
        favourited: false,
    },
    {
        id: 6,
        title: "When I Grow Up",
        playlist: "Hip-Hop",
        thumbnail: "data:image/jpeg;base64,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",
        audio: "hoxton-music/dance-pop/NF_When_I_Grow_Up.mp3",
        author: "NF",
        favourited: false,
    },
    {
        id: 7,
        title: "I Mean It",
        playlist: "Hip-Hop",
        thumbnail: "https://i.ytimg.com/vi/bSfpSOBD30U/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/G_Eazy_I_Mean_It_Official_Music_Video_ft_Remo.mp3",
        author: "G-Eazy ",
        favourited: false,
    },
    {
        id: 8,
        title: "God's Plan",
        playlist: "Hip-Hop",
        thumbnail: "https://i.ytimg.com/vi/7bakZtE-BJs/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Drake_God_s_Plan.mp3",
        author: "Drake",
        favourited: false,
    },
    {
        id: 9,
        title: "Heat Waves",
        playlist: "Pop",
        thumbnail: "https://i.ytimg.com/vi/mRD0-GxqHVo/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Glass_Animals_Heat_Waves_Lyrics_.mp3",
        author: "Glass Animals",
        favourited: false,
    },
    {
        id: 10,
        title: "Unstoppable",
        playlist: "Pop",
        thumbnail: "https://i.ytimg.com/vi/cxjvTXo9WWM/mqdefault.jpg",
        audio: "hoxton-music/dance-pop/Sia_Unstoppable_Lyrics_.mp3",
        author: "Sia ",
        favourited: false,
    },
    {
        id: 11,
        title: "Pop on Broadway",
        playlist: "Hip-Hop",
        thumbnail: "https://i.ytimg.com/vi/VZQ_WpE-Lec/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/DaBaby_BOP_on_Broadway_Hip_Hop_Musical_.mp3",
        author: "DaBaby ",
        favourited: false,
    },
    {
        id: 12,
        title: "New York",
        playlist: "Pop",
        thumbnail: "https://s.yimg.com/ny/api/res/1.2/nLvtZ_KI9tAbGxzTBmRSiA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/uu/api/res/1.2/QimL8NaQyn4aB5yIQQos1g--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/complex584/86db455a9df471b84970cb69a5817223",
        audio: "hoxton-music/dance-pop/Rowdy_Rebel_New_York_Official_Music_Video_ft_.mp3",
        author: "Rowdy Rebel ",
        favourited: false,
    },
    {
        id: 13,
        title: "Godzilla",
        playlist: "Hip-Hop",
        thumbnail: "data:image/jpeg;base64,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",
        audio: "hoxton-music/dance-pop/Eminem_Godzilla_ft_Juice_WRLD_Directed_by_Cole.mp3",
        author: "Eminem ",
        favourited: false,
    },
    {
        id: 14,
        title: "Him & I",
        playlist: "Jazz",
        thumbnail: "https://i.ytimg.com/vi/SA7AIQw-7Ms/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/G_Eazy_Halsey_Him_I_Official_Video_.mp3",
        author: "G-Eazy",
        favourited: false,
    },
    {
        id: 15,
        title: "Demons",
        playlist: "Jazz",
        thumbnail: "https://i.ytimg.com/vi/mWRsgZuwf_8/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Imagine_Dragons_Demons_Official_Music_Video_.mp3",
        author: "Imagine Dragons ",
        favourited: false,
    },
    {
        id: 16,
        title: "Counting Stars",
        playlist: "Pop",
        thumbnail: "https://i.ytimg.com/vi/tzMGDIU_-ow/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/OneRepublic_Counting_Stars_Official_Music_Video.mp3",
        author: "One Republic ",
        favourited: false,
    },
    {
        id: 17,
        title: "Falling",
        playlist: "Folk",
        thumbnail: "https://i.ytimg.com/vi/L7mfjvdnPno/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Trevor_Daniel_Falling_Official_Music_Video_.mp3",
        author: "Trevor Daniel ",
        favourited: false,
    },
    {
        id: 18,
        title: "Another Love",
        playlist: "Pop",
        thumbnail: "https://i.ytimg.com/vi/MwpMEbgC7DA/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Tom_Odell_Another_Love_Official_Video_.mp3",
        author: "Tom Odell ",
        favourited: false,
    },
    {
        id: 19,
        title: "Locked Away",
        playlist: "Pop",
        thumbnail: "data:image/jpeg;base64,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",
        audio: "hoxton-music/dance-pop/R_City_Locked_Away_ft_Adam_Levine.mp3",
        author: "R City Adam Levine ",
        favourited: false,
    },
    {
        id: 20,
        title: "Shape of you",
        playlist: "Hip-Hop",
        thumbnail: "https://assets.teenvogue.com/photos/588f5e96e06b68df121745f0/16:9/w_1408,h_792,c_limit/Screen%20Shot%202017-01-30%20at%2010.36.47%20AM.png",
        audio: "hoxton-music/dance-pop/Ed_Sheeran_Shape_of_You_Official_Music_Video_.mp3",
        author: "Ed Sheeran",
        favourited: false,
    },
    {
        id: 21,
        title: "Dont let me down",
        playlist: "Hip-Hop",
        thumbnail: "https://i.ytimg.com/vi/qMH0Xglh7GA/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/The_Chainsmokers_Don_t_let_Me_Down_Official_Vid.mp3",
        author: "The Chainsmokers ",
        favourited: false,
    },
    {
        id: 22,
        title: "Symphony",
        playlist: "Jazz",
        thumbnail: "https://i.ytimg.com/vi/Z9omVVr3dlg/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Symphony_Clean_Bandit_Lyrics_.mp3",
        author: "Clean Bandit",
        favourited: false,
    },
    {
        id: 23,
        title: "Dusk till dawn",
        playlist: "Hip-Hop",
        thumbnail: "https://i.ytimg.com/vi/tt2k8PGm-TI/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/ZAYN_Dusk_Till_Dawn_Lyrics_FEAT_Sia.mp3",
        author: "Zayn ft Sia ",
        favourited: false,
    },
    {
        id: 24,
        title: "детство",
        playlist: "Folk",
        thumbnail: "https://i.ytimg.com/vi/WJF5Z1WRcqw/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Rauf_Faik_детство_Official_audio_.mp3",
        author: "Rauf ft Faik ",
        favourited: false,
    },
    {
        id: 25,
        title: "Impossible",
        playlist: "Folk",
        thumbnail: "https://i.ytimg.com/vi/Mhj15W23IjA/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/James_Arthur_Impossible_Official_Video_.mp3",
        author: "James Arthur",
        favourited: false,
    },
    {
        id: 26,
        title: "One more night",
        playlist: "Hip-Hop",
        thumbnail: "https://i.ytimg.com/vi/fwK7ggA3-bU/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Maroon_5_One_More_Night_Official_Music_Video_.mp3",
        author: "Maroon 5",
        favourited: false,
    },
    {
        id: 27,
        title: "See you again",
        playlist: "Latin",
        thumbnail: "https://i.ytimg.com/vi/RgKAFK5djSk/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/See_You_Again_Wiz_Khalifa_Lyrics_.mp3",
        author: "Wiz Khalifa ft Charlie ",
        favourited: false,
    },
    {
        id: 28,
        title: "We don't talk...",
        playlist: "Latin",
        thumbnail: "data:image/jpeg;base64,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",
        audio: "hoxton-music/dance-pop/We_Don_t_Talk_Anymore_Charlie_Puth_Lyrics_.mp3",
        author: "Selena ft Charlie ",
        favourited: false,
    },
    {
        id: 29,
        title: "The Search",
        playlist: "Pop",
        thumbnail: "https://i.ytimg.com/vi/fnlJw9H0xAM/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/NF_The_Search.mp3",
        author: "NF",
        favourited: false,
    },
    {
        id: 30,
        title: "Beggin",
        playlist: "Rock",
        thumbnail: "https://i.ytimg.com/vi/JRFkj_F7YlE/maxresdefault.jpg",
        audio: "hoxton-music/dance-pop/Måneskin_Beggin_Lyrics_.mp3",
        author: "Måneskin",
        favourited: false,
    },
]

let state: State = {
    songs: songs,

    selectedSong: null,

    songPlaying: new Audio,

    playLists: [
        'Rock',
        'Pop',
        'Hip-Hop',
        'Folk',
        'Latin',
        'Jazz',
    ],

    filteredSongs: songs
}

function renderPlaylists() {
    let songPlaylists = document.querySelector('.songs-playlists')

    for(let playList of state.playLists) {
        let li = document.createElement('li')
        li.className = 'song-playlist'
        li.textContent = playList

        li.addEventListener('click', function () {
            state.filteredSongs = state.songs.filter(song => song.playlist === playList)
            renderSongs()
        })

        songPlaylists.append(li)
    }
}

function renderSongs() {
    let songsContainer = document.getElementById("songs")
    songsContainer.innerHTML = ''

    removeSingleSong()
    toggleBackBtn()
    togglePageSub()

    for (let song of state.filteredSongs) {
        let divItem = document.createElement("div");
        divItem.className = 'create-element-div'

        let imgItem = document.createElement("img")
        imgItem.className = 'create-element-img'
        imgItem.src = song.thumbnail;
        imgItem.addEventListener('click', function () {
            selectSong(song)
            renderSingleSong()
        })
        imgItem.width = 180;

        let h2Tittle = document.createElement("h2");
        h2Tittle.className = 'create-element-h2'
        h2Tittle.textContent = song.title;

        let h3Author = document.createElement("h5");
        h3Author.className = 'create-element-h3'
        h3Author.textContent = song.author;

        let favorite = document.createElement("div");
        favorite.className = "material-symbols-outlined heart";
        favorite.textContent = "favorite";

        if(song.favourited) {
            favorite.style.color = 'red'
        }
        
        favorite.addEventListener('click', function () {
            song.favourited = !song.favourited

            favorite.style.color = song.favourited ? 'red' : 'white'
        })

        divItem.append(imgItem, h2Tittle, h3Author, favorite);
        songsContainer?.append(divItem);
    }
}

function selectSong(song: Song) {
    state.selectedSong = song
}

function renderSingleSong() {
    let divItem = document.createElement("div");
    divItem.className = 'create-element-div'

    let imgItem = document.createElement("img")
    imgItem.className = 'create-element-img'
    imgItem.src = state.selectedSong.thumbnail;
    imgItem.width = 180;

    let h2Tittle = document.createElement("h2");
    h2Tittle.className = 'create-element-h2'
    h2Tittle.textContent = state.selectedSong.title;

    let h3Author = document.createElement("h5");
    h3Author.className = 'create-element-h3'
    h3Author.textContent = state.selectedSong.author;

    let spanFavorite = document.createElement("div");
    spanFavorite.className = "material-symbols-outlined";
    spanFavorite.textContent = "favorite";

    divItem.append(imgItem, h2Tittle, h3Author, spanFavorite);
    document.getElementById('single-song').append(divItem)

    deleteSongsContainer()

    togglePageSub()
    toggleBackBtn()
    state.songPlaying.src = state.selectedSong?.audio
    document.getElementById('play-btn').click()
}

function removeSingleSong() {
    document.getElementById('single-song').innerHTML = ''
}

function deleteSongsContainer() {
    document.getElementById('songs').innerHTML = ''
}

function togglePageSub() {
    let el = document.getElementById('page-sub')
    if (el.style.display === 'none') {
        el.style.display = 'block'
    } else {
        el.style.display = 'none'
    }
}

function toggleBackBtn() {
    let el = document.getElementById('go-back-btn')
    if (el.style.display === 'none') {
        el.style.display = 'block'
    } else {
        el.style.display = 'none'
    }
}

document.getElementById('go-back-btn').addEventListener('click', function () {
    renderSongs()
});

function renderSongControls() {
    state.songPlaying.autoplay = true

    document.getElementById('play-btn').addEventListener('click', function () {
        state.songPlaying.play()

        document.querySelector('.play-btn').style.display = 'none'
        document.querySelector('.pause-btn').style.display = 'block'
    })

    document.getElementById('pause-btn').addEventListener('click', function () {
        state.songPlaying.pause()

        document.querySelector('.play-btn').style.display = 'block'
        document.querySelector('.pause-btn').style.display = 'none'
    })

    document.getElementById('back-btn').addEventListener('click', function () {
        let index = state.filteredSongs.findIndex(song => song.id === state.selectedSong.id)

        if (index - 1 >= 0) {
            state.selectedSong = state.filteredSongs[index - 1]
            removeSingleSong()
            renderSingleSong()

            state.songPlaying.src = state.selectedSong.audio
            state.songPlaying.play()
        }
    })

    document.getElementById('next-btn').addEventListener('click',function () {
        let index = state.filteredSongs.findIndex(song => song.id === state.selectedSong.id)

        if (index <= state.filteredSongs.length - 1){
            state.selectedSong = state.filteredSongs[index + 1]
            removeSingleSong()
            renderSingleSong()

            state.songPlaying.src = state.selectedSong?.audio
            state.songPlaying.play()
        }

    })
}

function favorite(){
    document.getElementById('favorite-btn').addEventListener('click', function () {
        state.filteredSongs = state.songs.filter(song => song.favourited)

        renderSongs()
})

}

function search(){
    document.getElementById('search-input').addEventListener('keyup', function (event) {
        state.filteredSongs = state.songs.filter(song => {
            let title = song.title.toLowerCase()
            let search = event.target.value.toLowerCase()

            return title.includes(search)
        })
        renderSongs()
})
}


function initialise() {
    favorite()
    search()   
    renderPlaylists()
    renderSongs();
    renderSongControls()
}

initialise()