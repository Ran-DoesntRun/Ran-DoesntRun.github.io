// Mengambil url dari location
const firstTime = window.location.search;
// mengubah url menjadi object
const paramUrl = new URLSearchParams(firstTime);

// melakukan seleksi dimana jika url memiliki parameter dengan nama first maka statement dijalankan
if(paramUrl.has("first") === true){
  // mengambil elemen dengan nama id modalawal dan memberikan html baru kedalam div tersebut
  document.getElementById("modalawal").innerHTML = 
// Membuat modal menggunakan bootstrap
  `
<div class='modal' id="modal" tabindex='-1'>
    <div class='modal-dialog'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h5 class='modal-title' style='color: red;'>!!! NOTICE !!!</h5>
          <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
        </div>
        <div class='modal-body'>
            <p>This is not a PWA version of Library Of Books. This one is made for showcasing the new user interface</p>
            <p>This is an web for one of my college class assignment</p>
            <p>If you want to visit the PWA version, click the <span style="color: blue;">visit</span> button below</p>
            <p>If you are my lecturer, this is the one that I submit to be graded. Click the <span style="color: red;">Close</span> button below</p>
        </div>
        <div class='modal-footer'>
            <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            <a href='https://pwa-library-of-books.vercel.app/'><button type='button'
                class='btn btn-primary'>Visit</button></a>
        </div>
      </div>
    </div>
  </div>`;

  // dibawah ini merupakan syntax untuk mentriger agar modal berkerja/muncul
  var myModal = new bootstrap.Modal(document.getElementById("modal"));
  myModal.show();
}

// melakukan seleksi dimana jika url memiliki parameter dengan nama search maka statement dijalankan
if(paramUrl.has("search") === true){
document.getElementById("modalawal").innerHTML = 
`
<div class='modal' id="modal" tabindex='-1'>
    <div class='modal-dialog'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h5 class='modal-title' style='color: red;'>!!! NOTICE !!!</h5>
          <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
        </div>
        <div class='modal-body'>
            <p>This Search Feature Still In Development In This UI. If you want to search for books you can visit the PWA Version Of this web by clicking the Visit Button</p>
        </div>
        <div class='modal-footer'>
            <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            <a href='https://pwa-library-of-books.vercel.app/'><button type='button'
                class='btn btn-primary'>Visit</button></a>
        </div>
      </div>
    </div>
  </div>`;
  var myModal = new bootstrap.Modal(document.getElementById("modal"));
  myModal.show();
    }

