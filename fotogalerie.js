import { allPictures } from './data/galerie-data.js'

const fotogalerieAllPicturesGrid = document.getElementById('fotogalerie-all-pictures-grid')

let html = ''
allPictures.forEach((picture)=>{
  html += `
  <div class="img-container">
    <img class="fotogalerie-img" src=${picture.src}>
  </div>
  
  `
})

fotogalerieAllPicturesGrid.innerHTML = html