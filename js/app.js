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

  data.forEach(phone => {
    console.log(phone)

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
   <div class="card">
      <div class="container mt-3">
       <img src="${phone.image}" class="card-img-top " alt="...">
      </div>
       <div class="card-body">
         <h5 class="card-title">${phone.phone_name}</h5>
         <p class="card-text">${phone.brand}</p>
         <button onclick ="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">More Detiles</button>

       </div>
     </div>
   `;
    searchResult.appendChild(div);


  })
}


const loadPhoneDetail = phoneId => {

  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`

  fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data))

  console.log(phoneId)


}

const displayPhoneDetail = phoneDetail => {
  console.log(phoneDetail);
  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('row');
  div.innerHTML = `
  <div class="col-md-4 ">
  <div class="container my-3">
  <img src="${phoneDetail.image}" class="img-fluid rounded-start" alt="...">
  </div>
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title"><small>Brand Name : </small>${phoneDetail.brand}</h5>
    <h5 class="card-title"><small>Model Name : </small>${phoneDetail.name}</h5>
    <p class="card-text">Release Date : <small class="text-muted">${phoneDetail.releaseDate}</small></p>
  </div>
</div>
  `;
  phoneDetails.appendChild(div);
}