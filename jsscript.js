const firstTime = window.location.search;
const paramUrl = new URLSearchParams(firstTime);
console.log(paramUrl.has("first"));
document.getElementById("body-modal").innerHTML = 
`<div class='modal-body'>
    <p>This is not a PWA version of Library Of Books. This one is made for showcasing the new user interface</p>
    <p>This is an web for one of my college class assignment</p>
    <p>If you want to visit the PWA version, click the <span style="color: blue;">visit</span> button below</p>
  </div>
  <div class='modal-footer'>
    <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
    <a href='https://pwa-library-of-books.vercel.app/'><button type='button'
        class='btn btn-primary'>Visit</button></a>
  </div>`;
if(paramUrl.has("first") === true){
  console.log(paramUrl.has("first"));
  var myModal = new bootstrap.Modal(document.getElementById("modal"));
  myModal.show();
}