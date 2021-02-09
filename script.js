
/**No funciona
 * 
 * cosnt url = "http://www.omdbapi.com/"
 * 
 * fetch(url)
 * .the(response => response.json())
 * .then(data => {
 * 
 * let pelicula =document.getElementById('peliculas')
 * pelicula.innerHTML = '
 *  <img src= ${ result.Poster } />
 *  <p>${result.Title }</p>
 * '
 * }
 * console.log(data)
 * )
 * 

 */






var app = new Vue({
    el: "#app",
    data() {
      return {
          query: null,
          results: null,
          apikey: '699ba79b'}
    },
    created() {
      this.getMovies();
    },
    methods: {
      getMovies() {
        axios.get(`http://www.omdbapi.com/?s=${ this.query }&apikey=${ this.apikey }`)
          .then(response => {
            console.log(response.data.Search)
            results = response.data.Search
            let html = '';
  
            results.forEach(result => {
              html += `
               
                <div class="card text-centre tarjeta" style="width: 18rem;">
                    <img src="${ result.Poster }" class="card-img-top img-fluid" >
                    <div class="card-body">
                        <h5 class="card-title titulopelicula">${result.Title }</h5>
                    </div>
                </div>
              `
            });
  
            document.getElementById('peliculas').innerHTML = html;
  
          })
      }
    }
  })