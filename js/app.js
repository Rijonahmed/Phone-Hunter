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
  const searchResult = document.getElementById('search-result');

  data.forEach(item => {
    console.log(item)

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
   <div onclick ='loadMealDetail()'class="card">
      <div class="container mt-3">
       <img src="${item.image}" class="card-img-top " alt="...">
      </div>
       <div class="card-body">
         <h5 class="card-title">${item.phone_name}</h5>
         <p class="card-text">${item.brand}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>
   `;
    searchResult.appendChild(div);


  })
}