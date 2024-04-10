const app = Vue.createApp({
    data() {
        return {
            search: "",
            dbChar: "",
            searchResult: null,
            favs: new Map()
        }
    },
    computed: {
        favsArray() {
            return Array.from(this.favs.values());
        }
    },
    methods: {
        buscarDragonBallCharacter() {
            fetch(`https://dragonball-api.com/api/characters?name=${this.search}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        this.dbChar = data[0];
                        this.searchResult = true;
                    } else {
                        this.searchResult = false;
                    }
                })

                .catch(error => {
                    console.error('Error:', error);
                    this.searchResult = null;
                });
        },
        addToFavorite() {
            this.favs.set(this.dbChar.name, this.dbChar);
            this.saveFavs();
        },
        saveFavs() {
            localStorage.setItem("favs", JSON.stringify(this.favsArray));
        },
        showFavorites() {
            const favsData = JSON.parse(localStorage.getItem("favs"));

            if (favsData) {
                this.favs = new Map(favsData);
            }
        },
        deleteFavs() {
            localStorage.clear();
            this.favs.clear();
        },
        
    },
    mounted() {
        let newFavs = localStorage.getItem("favs");

        if (newFavs) {
            for (let fav of JSON.parse(newFavs)) {
                this.favs.set(fav.name, fav);
            }
        }
    }
})