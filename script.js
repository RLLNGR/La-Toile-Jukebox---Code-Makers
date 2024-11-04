///LOAD JSON
var xhReq = new XMLHttpRequest();
xhReq.open("GET", "data.json", false);
xhReq.send(null);

///VARIABLES
var data = JSON.parse(xhReq.responseText);
var people = data.slice();
var albumsContainer = document.querySelector("main");

///FUNCTIONS
function loadAlbums() {
  people.forEach((element) => {
    var name = element.name;
    var artist = element.artist;
    var student = element.student;
    var cover = element.cover;
    var url = element.url;
    createAlbum(name, artist, student, cover, url);
  });
}

function createAlbum(name, artist, student, cover, url) {
  const album = document.createElement("article");
  const albumTemplate = `<a href="${url}">
                            <img
                                class="cover"
                                src="${cover}"
                                alt="${name} ${artist} cover"
                            />
                            <div>
                                <h2 class="artist-name">${name}</h2>
                                <p class="artist">${artist}</p>
                                <p class="student">${student}</p>
                            </div>
                        </a>`;
  album.innerHTML = albumTemplate.trim();
  album.id = `album-${name}`;
  album.className = "album";
  albumsContainer.appendChild(album);
}

/////EXECUTE
loadAlbums();
