let url = "https://www.metaweather.com/api/location/search/?query=london"
fetch(url)
  .then(response => response.json())
  .then(commits => alert(commits));
