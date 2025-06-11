// Menyimpan nama cache kedalam variabel
const CACHE_NAME = "porto-cache-1";
// Menyimpan data / file yang akan dicache kedalam variabel
const CACHE_ASSETS = [
  "/",
  "/bootstrap/bootstrap.bundle.min.js",
  "/bootstrap/bootstrap.min.css",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/bootstrap-small.png",
  "/images/bootstrap.png",
  "/images/bruh.png",
  "/images/css-3-small.png",
  "/images/facebook-small.png",
  "/images/github-small.png",
  "/images/html-small.png",
  "/images/icon.png",
  "/images/instagram-small.png",
  "/images/java-black-small.png",
  "/images/java-script-small.png",
  "/images/jquery-small.png",
  "/images/libraryofbooks.png",
  "/images/linkedin-small.png",
  "/images/php-small.png",
  "/images/profile.jpg",
  "/index.html",
  "/jsscript.js",
  "/sw.js",
  "/libraryofbooks.html",
  "/books/Fan1.jpg",
  "/books/Fan1s.jpg",
  "/books/Fan2m.jpg",
  "/books/Horror1.jpg",
  "/books/Horror1s.jpg",
  "/books/Rom1.jpg",
  "/books/Rom1s.jpg",
  "/libraryofbooks.html?first=yes",
  "/libraryofbooks.html?search=yes"
];


// Menginstall service worker yang akan dijalankan
self.addEventListener('install', (event) => {
  self.skipWaiting(); //Membuat service worker dalam status waiting langsung menjadi active 
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => { //Membuka cache dengan nama yang telah disimpan pada variabel CACHE_NAME
      return cache.addAll(CACHE_ASSETS); //Menyimpan file yang akan dicache kedalam cache
    }));
  });

// Mengaktifkan service work kemudian menghapus cache yang lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
      caches.keys().then((cacheNames) => {
        console.log(cacheNames)
          return Promise.all(
              cacheNames
                  .filter((cache) => cache !== CACHE_NAME) //Melakukan filter terhadap cache yang namanya berbeda dengan yang diberikan (cache lama)
                  .map((cache) => caches.delete(cache)) // Menghapus cache
          );
      })
  );
  self.clients.claim(); //Membuat service worker yang telah aktif menjadi controller
});

//Mengambil data dari cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
      });
    }).catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    })
  );
});
