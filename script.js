const mainEl = document.getElementById("root");
mainEl.className = "container";

// making page for Episodes
const bodyMain = document.createElement("section");
bodyMain.className = "row";

function makePageForEpisodes(episodeList) {
  episodeList.forEach((element) => {
    const episodeWrapper = document.createElement("div");
    episodeWrapper.className = "green col-sm-12 col-md-6 col-lg-4";

    const bodyEpisode = document.createElement("div");
    bodyEpisode.id = element.id;
    bodyEpisode.className = "episode border";

    const header = document.createElement("div");
    // bodyMain.className = "border col-md-12  col-sm-12";

    const myHeader = document.createElement("h3");
    myHeader.className = "border";

    myHeader.textContent = `${element.name}-S${element.season < 10 ? 0 : ""}${
      element.season
    }E${element.number < 10 ? 0 : ""}${element.number}`;

    const myImage = document.createElement("img");
    myImage.src = element.image.medium;

    const myText = document.createElement("p");
    myText.innerHTML = "This Episode's Summary is :" + element.summary;

    header.appendChild(myHeader);
    header.appendChild(myImage);

    bodyEpisode.appendChild(header);
    bodyEpisode.appendChild(myText);

    episodeWrapper.appendChild(bodyEpisode);
    bodyMain.appendChild(episodeWrapper);

    /*change backgroundcolor when mouseover the header part of episodes*/
    header.addEventListener("mouseover", runEvent);
    function runEvent(e) {
      document.body.style.backgroundColor =
        "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
    }

    // mainEl.appendChild(bodyMain);
  });
  mainEl.appendChild(bodyMain);
}
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

//level 200
const filter = document.getElementById("filter");
filter.addEventListener("keydown", filterSearch);

function filterSearch(e) {
  const userSearch = e.target.value.toLowerCase();
  //console.log(userSearch);

  const allEpisodes = getAllEpisodes();

  allEpisodes.forEach((episode) => {
    const episodeElement = document.getElementById(episode.id);
    if (episode.name.toLowerCase().indexOf(userSearch) > -1) {
      episodeElement.style.display = "block";
    } else {
      episodeElement.style.display = "none";
    }
  });
}

window.onload = setup();
//Add an input in the page //done
//Add an eventlisterner "keydown" // done
//when the user touch the keyboard, call the function filterSearch(input.value).
// event.target.value  (search)

// const searchResults = allEpisodes.filter(episode => {
//   return episode.name.includes(userSearch);
// });
// return searchResults;
