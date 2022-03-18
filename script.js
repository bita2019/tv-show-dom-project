// const searchBox = document.getElementById("search-box");
// const searchCount = document.getElementById("search-count");
// const showSelect = document.getElementById("select-show");
// const selectMenu = document.getElementById("select-input");
// const allShowsContainer = document.getElementById("all-shows");
// const episodesSelect = document.getElementById("select-episode");

// showSelect.addEventListener("change", getLiveEpisodes("", showSelect.value));

// console.log(allShowsContainer);

// let allEpisodes = [];
// const allShows = getAllShows().sort((a, b) =>
//   a.name.toLowerCase() > b.name.toLowerCase()
//     ? 1
//     : b.name.toLowerCase() > a.name.toLowerCase()
//     ? -1
//     : 0
// );
// function showsSelectMenue() {
//   allShows.map((show) => {
//     const showOption = document.createElement("option");
//     showOption.innerText = show.name;
//     showOption.value = show.id;
//     showSelect.appendChild(showOption);
//   });
// }
// function episodesSelectMenu(episodeList) {
//   console.log(
//     episodeList.forEach((episode) => {
//       const episodeString = `${formatSeriesAndEpisodee(
//         episode.season,
//         episode.number
//       )} - ${episode.name}`;

//       episodesSelect.innerText = episodeString;
//       episodesSelect.value = "XY";
//       episodesSelect.appendChild(listEpisodeSelect);
//     })
//   );
// }

// //You can edit ALL of the code here
// function getLiveEpisodes(searchValue = "", showID = showSelect.value) {
//   let newVar = fetch(`https://api.tvmaze.com/shows/${showID}/episodes`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("This is data", data);
//       if (searchValue.length > 0) {
//         const searchTerm = searchValue.toLowerCase();

//         const filteredEpisodes = data.filter((e) => {
//           const episodeName = e.name.toLowerCase();
//           const episodeSummary = e.summary.toLowerCase();

//           return (
//             episodeName.includes(searchTerm) ||
//             episodeSummary.includes(searchTerm)
//           );
//         });
//         makePageForEpisodes(filteredEpisodes);
//       } else {
//         makePageForEpisodes(data);
//       }
//     });
// }

// function setup() {
//   getLiveEpisodes();
//   searchBox.addEventListener("keyup", onSearchKeyUp);
//   showsSelectMenue();
//   showSelect.addEventListener("click", getLiveEpisodes);
//   episodesSelectMenue(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const episodeContainer = document.getElementById("episode-list");
//   episodeContainer.innerHTML = "";

//   function formatSeriesAndEpisode(season, number) {
//     function padTheNumber(num) {
//       return num.toString().padStart(2, "0");
//     }
//     return `S${padTheNumber(season)}E${padTheNumber(number)}`;
//   }

//   episodeList.forEach((e) => {
//     const episode = document.createElement("div");
//     const heading = document.createElement("h3");
//     const episodeImage = document.createElement("img");
//     const summary = document.createElement("p");

//     heading.innerText = `${e.name} - ${formatSeriesAndEpisode(
//       e.season,
//       e.number
//     )}`;

//     summary.innerHTML = e.summary;
//     try {
//       episodeImage.src = e.image.medium;
//     } catch {
//       episodeImage.src =
//         "https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";
//     }
//     episode.className = "episode";

//     episode.appendChild(heading);
//     episode.appendChild(episodeImage);
//     episode.appendChild(summary);
//     episodeContainer.appendChild(episode);
//   });
// }

// // function makeSelectMenuForEpisodes(episodeList) {
// //   const showAll = document.createElement("option");
// //   showAll.innerText = "Show all episodes";
// //   showAll.value = "SHOW_ALL";
// //   selectMenu.appendChild(showAll);

// //   episodeList.forEach((episode) => {
// //     const listOption = document.createElement("option");
// //     const episodeString = `${formatSeriesAndEpisode(
// //       episode.season,
// //       episode.number
// //     )} - ${episode.name}`;
// //     listOption.innerText = episodeString;
// //     listOption.value = episode.id;
// //     selectMenu.appendChild(listOption);
// //   });
// // }

// function onSearchKeyUp(event) {
//   getLiveEpisodes(event.target.value);

//   // const filteredCount = filteredEpisodes.length;
//   // const allCount = allEpisodes.length;

//   // const countString = `Displaying ${filteredCount} / ${allCount}`;

//   // searchCount.innerText = countString;
//   // makePageForEpisodes(filteredEpisodes);
// }
// function sendRequest(showId) {
//   const requestUrl = `https://api.tvmaze.com/shows/${showId}/episodes`;
//   return fetch(requestUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// window.onload = setup;

const searchBox = document.getElementById("search-box");
const showSelect = document.getElementById("select-show");
const episodesSelect = document.getElementById("select-episode");

showSelect.addEventListener("change", () =>
  getLiveEpisodes("", showSelect.value)
);
episodesSelect.addEventListener("change", console.log("A"));

const allShows = getAllShows().sort((a, b) =>
  a.name.toLowerCase() > b.name.toLowerCase()
    ? 1
    : b.name.toLowerCase() > a.name.toLowerCase()
    ? -1
    : 0
);

const showsSelectMenue = () => {
  allShows.map((show) => {
    const showOption = document.createElement("option");
    showOption.innerText = show.name;
    showOption.value = show.id;
    showSelect.appendChild(showOption);
  });
};
function makeSelectMenuForEpisodes(episodeList) {
  selectMenu.innerHTML = "";
  const showAll = document.createElement("option");
  showAll.innerText = "Show all episodes";
  showAll.value = "SHOW_ALL";
  selectMenu.appendChild(showAll);

  episodeList.forEach((episode) => {
    const listOption = document.createElement("option");
    const episodeString = `${formatSeriesAndEpisode(
      episode.season,
      episode.number
    )} - ${episode.name}`;
    listOption.innerText = episodeString;
    listOption.value = episode.id;
    selectMenu.appendChild(listOption);
  });
}

// we do a fetch
// we get all the epispdes
// we need to store all the episdoes into a state / const
// add the episodes to the dropdown with the id
// when we click an epsiode, we get that id or episode and filter all the episodes
// container.innerHTML = epsiodes.filter(eps => ep === ep.id)

let ALL_EPS = [];

//You can edit ALL of the code here
let showID;
const getLiveEpisodes = (searchValue = "", showID = 22) => {
  fetch(`https://api.tvmaze.com/shows/${showID}/episodes`)
    .then((response) => response.json())
    .then((data) => {
      console.log("This is data", data);

      ALL_EPS = data;

      ALL_EPS.map((ep) => {
        const epEle = document.createElement("option");
        epEle.innerText = ep.name;
        epEle.value = ep.id;
        episodesSelect.appendChild(epEle);
      });

      console.log("all eps ===", ALL_EPS);
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
};

const setup = () => {
  getLiveEpisodes();
  searchBox.addEventListener("keyup", onSearchKeyUp);
  showsSelectMenue();
  showSelect.addEventListener("click", getLiveEpisodes);
};
/////////////////////////////URL
const runUrl = () => {
  return episodeList.forEach((e) => {
    e.innerText = "url";
  });
};

const makePageForEpisodes = (episodeList) => {
  const episodeContainer = document.getElementById("episode-list");
  episodeContainer.innerHTML = "";
  episodeContainer.addEventListener("click", console.log("onclick"));

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
    const episodeUrl = document.createElement("p");
    heading.innerText = `${e.name} - ${formatSeriesAndEpisode(
      e.season,
      e.number
    )}`;

    summary.innerHTML = e.summary;
    try {
      episodeImage.src = e.image.medium;
    } catch {
      episodeImage.src =
        "https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";
    }
    episode.className = "episode";

    episode.appendChild(heading);
    episode.appendChild(episodeImage);
    episode.appendChild(summary);
    episodeContainer.appendChild(episode);
    episode.appendChild(episodeUrl);
  });
};

const onSearchKeyUp = (event) => {
  getLiveEpisodes(event.target.value);
};

window.onload = setup;
