const searchPhone = () => {
  const searchFiled = document.getElementById('search-filed');
  const searchText = searchFiled.value;
  // console.log(searchText);

  searchFiled.value = "";

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))

}

const displaySearchResult = data => {
  const searchResult = document.getElementById('search-result')
}