fetch("./data/studio-ghibli-films (1).json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    render(json);
    console.log("Json:", json);
  });


function render(arr) {
  var container = document.querySelector("#container");
  container.innerHTML = arr.map(
    (item) => {
      return `
      <div class = "movie-title">${item.title}</div>
      <div class = "movie-description">${item.description}</div>
      `
        }
    ).join("");
}

console.log(document)
