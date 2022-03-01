const toggleSpinner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
}


const searchPhone = () => {
  const searchFiled = document.getElementById('search-filed');
  const searchText = searchFiled.value;
  // console.log(searchText);
  toggleSpinner('block');


  searchFiled.value = "";



  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data.slice(0, 20)))

}

const displaySearchResult = data => {
  const searchResult = document.getElementById('search-result');


  // searchResult.textContent = '';

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
  });
  toggleSpinner('none');

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

    <h1 class="card-title">${phoneDetail.name}</h1>
    <h5 class="card-title"><small>Brand Name : </small>${phoneDetail.brand}</h5>
    <p class="card-text">Release Date : <small class="text-muted">${phoneDetail.releaseDate ? phoneDetail.releaseDate : 'Comming soon'}</small></p>
    
    <h4 class="card-title">More Features</h4>
    <h6>&rtrif; <small>ChipSet</small> : ${phoneDetail.mainFeatures.chipSet}</h6>
    <h6>&rtrif; <small>Display Size</small> : ${phoneDetail.mainFeatures.displaySize}</h6>
    <h6>&rtrif; <small>Memory</small> : ${phoneDetail.mainFeatures.memory}</h6>
    <h6>&rtrif; <small>Storage</small> : ${phoneDetail.mainFeatures.storage}</h6>
    <h6>&rtrif; <small>Sensors</small> : ${phoneDetail.mainFeatures.sensors}</h6>

    <h4>Others Features</h4>
    <h6>&rtrif; <small>Bluetooth</small> : ${phoneDetail.others.Bluetooth}</h6>
    <h6>&rtrif; <small>GPS</small> : ${phoneDetail.others.GPS}</h6>
    <h6>&rtrif; <small>NFC</small> : ${phoneDetail.others.NFC}</h6>
    <h6>&rtrif; <small>Radio</small> : ${phoneDetail.others.Radio}</h6>
    <h6>&rtrif; <small>USB</small> : ${phoneDetail.others.USB}</h6>
    <h6>&rtrif; <small>WLAN</small> : ${phoneDetail.others.WLAN}</h6>

  </div> 
</div>
  `;
  phoneDetails.appendChild(div);
}