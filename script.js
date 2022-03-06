//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;
////////////////

//////////////////
const searchBox = document.getElementById("search-box");
const searchCount = document.getElementById("search-count");
let allEpisodes;
//You can edit ALL of the code here
function getLiveEpisodes(searchValue = "") {
  var newVar = fetch("https://api.tvmaze.com/shows/82/episodes")
    .then((response) => response.json())
    .then((data) => {
      console.log("This is data", data);
      if (searchValue.length > 0) {
        const searchTerm = searchValue.toLowerCase();

        const filteredEpisodes = data.filter((e) => {
          const episodeName = e.name.toLowerCase();
          const episodeSummary = e.summary.toLowerCase();

          return (
            episodeName.includes(searchTerm) ||
            episodeSummary.includes(searchTerm)
          );
        });
        makePageForEpisodes(filteredEpisodes);
      } else {
        makePageForEpisodes(data);
      }
    });
}

function setup() {
  getLiveEpisodes();
  searchBox.addEventListener("keyup", onSearchKeyUp);
}

function makePageForEpisodes(episodeList) {
  const episodeContainer = document.getElementById("episode-list");
  episodeContainer.innerHTML = "";

  function formatSeriesAndEpisode(season, number) {
    function padTheNumber(num) {
      return num.toString().padStart(2, "0");
    }
    return `S${padTheNumber(season)}E${padTheNumber(number)}`;
  }

  episodeList.forEach((e) => {
    const episode = document.createElement("div");
    const heading = document.createElement("h3");
    const episodeImage = document.createElement("img");
    const summary = document.createElement("p");

    heading.innerText = `${e.name} - ${formatSeriesAndEpisode(
      e.season,
      e.number
    )}`;

    summary.innerHTML = e.summary;
    episodeImage.src = e.image.medium;
    episode.className = "episode";

    episode.appendChild(heading);
    episode.appendChild(episodeImage);
    episode.appendChild(summary);
    episodeContainer.appendChild(episode);
  });
}

function onSearchKeyUp(event) {
  getLiveEpisodes(event.target.value);

  // const filteredCount = filteredEpisodes.length;
  // const allCount = allEpisodes.length;

  // const countString = `Displaying ${filteredCount} / ${allCount}`;

  // searchCount.innerText = countString;
  // makePageForEpisodes(filteredEpisodes);
}

window.onload = setup;
