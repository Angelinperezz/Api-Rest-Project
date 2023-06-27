const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=3';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites';
const API_URL_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?&api_key=live_WArgO19FkpjikcQAB96ytgWiXOmhVdEW3pLBo2SsmNav8xUDGCKkLp8qHNfxMhw0`;

const spanError = document.getElementById('error');

async function loadRamdomMichis() {
  try{ 
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json()
    console.log('Ramdons')
    console.log(data)

    if(res.status != 200){
      spanError.innerHTML = "Hubo un error en saveFavouriteMichis: " + res.status + data.message;
    } else { 

      const img1 = document.getElementById('img1');
      const img2 = document.getElementById('img2'); 
      const img3 = document.getElementById('img3'); 
      const btn1 = document.getElementById('btn1'); 
      const btn2 = document.getElementById('btn2'); 
      const btn3 = document.getElementById('btn3'); 

      img1.src = data[0].url;
      img2.src = data[1].url;
      img3.src = data[2].url;

      btn1.onclick = () => saveFavouriteMichi(data[0].id);
      btn2.onclick = () => saveFavouriteMichi(data[1].id);
      btn3.onclick = () => saveFavouriteMichi(data[2].id);

  }

 }catch(error){
 console.log("Hay un error en loadRamdomMichis" + error)
 }

}

async function loadFavouriteMichis(){
  const res = await fetch(API_URL_FAVOURITES, {
      method: 'GET',
      headers: {
            'X-API-KEY': 'live_WArgO19FkpjikcQAB96ytgWiXOmhVdEW3pLBo2SsmNav8xUDGCKkLp8qHNfxMhw0',
      },

  });
    const data = await res.json()
    console.log('Favoritos')
    console.log(data);

    if(res.status != 200){
      spanError.innerHTML = "Hubo un error en loadFavouriteMichis: " + res.status + data.message;
    } else {
      const section = document.getElementById('favouriteMichis') 
      section.innerHTML = "";
      const h2 = document.createElement('h2');
      const h2Text = document.createTextNode('Michis favoritos')
      h2.appendChild(h2Text);
      section.appendChild(h2);

        data.forEach(michi => {
          if(michi.image.url)
          {
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al michi de favoritos') 

                     img.src = michi.image.url;
                     img.width = 150;
                      img.height = 150;
                      btn.appendChild(btnText);
                      btn.onclick = () => deleteFavouriteMichi(michi.id);
                   
                      
                      article.appendChild(img);
                      article.appendChild(btn);
                      section.appendChild(article);
                  
          }
         
        });
    }
}

async function deleteFavouriteMichi(id){
  
      const res = await fetch(API_URL_FAVOURITES_DELETE(id), {
        method: 'DELETE',
        headers: {
          'X-API-KEY': 'live_WArgO19FkpjikcQAB96ytgWiXOmhVdEW3pLBo2SsmNav8xUDGCKkLp8qHNfxMhw0',
        }, 
      });

      const data = await res.json();

      if(res.status != 200){
        spanError.innerHTML = "Hubo un error en deleteFavouriteMichis: " + res.status + data.message;
      } else{
        console.log("Michi eliminado exitosamente")
        loadFavouriteMichis();
      }

  
}

async function saveFavouriteMichi(id){
  try{ 
      const res = await fetch(API_URL_FAVOURITES, {
        method: 'POST',
        headers: {
            'X-API-KEY': 'live_WArgO19FkpjikcQAB96ytgWiXOmhVdEW3pLBo2SsmNav8xUDGCKkLp8qHNfxMhw0',
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
          image_id:  id
        }),
      });

      const data = await res.json();

      console.log('save')
      console.log(res);

      if(res.status != 200){
        spanError.innerHTML = "Hubo un error en saveFavouriteMichis: " + res.status + data.message;
      } else{
        console.log("Michi guardado exitosamente")
        loadFavouriteMichis();
      }

    }catch(error){
    console.log("Error en el saveFavouriteMichi" + error)
    }
}
loadRamdomMichis();
loadFavouriteMichis();



