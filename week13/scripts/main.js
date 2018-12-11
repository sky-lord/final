const tunesApp = new Vue({
  el:'#tunesApp',
  data:{
    siteTitle: 'Itunes Searchenator 3000',
    searchTerm: '',
    comicList: [],
    limit: 50,
    results: '',
    description: ''
    },
  methods:{
    getMusic(){
      fetch(`https://comicvine.gamespot.com/api/volumes/?api_key=836a5cedc12661e32bcdfb494600d917138be931&format=json&sort=name:asc&filter=name:${this.searchTerm}`)
      .then(data=> data.json() )
      .then(comics=> {
        this.comicList = comics.results;
        console.log();
      });
    }
  }
});