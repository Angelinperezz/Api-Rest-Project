const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=8&api_key=live_WArgO19FkpjikcQAB96ytgWiXOmhVdEW3pLBo2SsmNav8xUDGCKkLp8qHNfxMhw0';
const API_URL_DOG = 'https://api.thedogapi.com/v1/images/search?limit=8&api_key=live_WArgO19FkpjikcQAB96ytgWiXOmhVdEW3pLBo2SsmNav8xUDGCKkLp8qHNfxMhw0'


function reloadNasa() {

  const Nasa_api = 'ccaxmjyvWqO1nRqHOSuI9xHfyeey0bfTGtdLtMhk';
  const API_URL_NASA = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_api}`;


   fetch(API_URL_NASA)
      .then(res => res.json())
      .then(res => mostrarData(res))

}

function mostrarData({date, explanation, media_type, tittle, url}){
      const titulo = document.querySelector('#titulo');
      titulo.innerHTML = tittle;
      const fecha = document.querySelector('#fecha');
      fecha.innerHTML = date;
      const descripcion = document.querySelector('#descripcion');
      descripcion.innerHTML = explanation;
      const multimedia = document.querySelector('#c_multimedia')
      if(media_type == 'video'){
          multimedia.innerHTML = `<iframe class="embed-resposive-item" src="${url}"</iframe>`
      } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}"></img>`
        
      }
    
}

async function reload() {
    const res = await fetch(API_URL)
    const data = await res.json()
    console.log(data)
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2'); 
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');
    const img7 = document.getElementById('img7');
    const img8 = document.getElementById('img8');
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;
    img5.src = data[4].url;
    img6.src = data[5].url;
    img7.src = data[6].url;
    img8.src = data[7].url;

}
reload();

async function reloadDogs(){
  const res = await fetch(API_URL_DOG)
  const data = await res.json()
  console.log(data)
  const imgp1 = document.getElementById('imgp1');
    const imgp2 = document.getElementById('imgp2'); 
    const imgp3 = document.getElementById('imgp3');
    const imgp4 = document.getElementById('imgp4');
    const imgp5 = document.getElementById('imgp5');
    const imgp6 = document.getElementById('imgp6');
    const imgp7 = document.getElementById('imgp7');
    const imgp8 = document.getElementById('imgp8');

    imgp1.src = data[0].url;
    imgp2.src = data[1].url;
    imgp3.src = data[2].url;
    imgp4.src = data[3].url;
    imgp5.src = data[4].url;
    imgp6.src = data[5].url;
    imgp7.src = data[6].url;
    imgp8.src = data[7].url;
}
reloadDogs();


