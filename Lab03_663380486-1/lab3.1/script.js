function loadXML() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      parseXML(this.responseXML);
    }
  };
  xhttp.open("GET", "movie.xml", true);
  xhttp.send();
}
  
  function parseXML(xml) {
    let movieList = xml.getElementsByTagName("movie");

    let container = document.getElementById("xmlDataContainer");
    container.innerHTML = "";
  
    for (let i = 0; i < movieList.length; i++) {
      let title = movieList[i].getElementsByTagName("title")[0].textContent;
      let genre = movieList[i].getElementsByTagName("genre")[0].textContent;
      let year = movieList[i].getElementsByTagName("year")[0].textContent;
      let direc = movieList[i].getElementsByTagName("director")[0].textContent;
      let dure = movieList[i].getElementsByTagName("duration")[0].textContent;
  
      let cast = movieList[i].getElementsByTagName("cast")[0].getElementsByTagName("actor");
      let castList = "";
      for (let j = 0; j < cast.length; j++) {
        castList += cast[j].textContent + ", ";
      }

      // Remove the trailing comma and space
      castList = castList.slice(0, -2);

      let movieDiv = document.createElement("div");
      movieDiv.innerHTML = "<strong>Title:</strong> " + title + "<br>" +
                           "<strong>Genre:</strong> " + genre + "<br>" +
                           "<strong>Year:</strong> " + year + "<br>" +
                           "<strong>Director:</strong> " + direc + "<br>" +
                           "<strong>Cast:</strong> " + castList + "<br>" +
                           "<strong>Dure:</strong> " + dure + "<br>" + "<br>"
      container.appendChild(movieDiv);
    }
  }
  