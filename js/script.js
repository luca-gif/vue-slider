const app = new Vue({
    el: "#app",

    data: {
        indice: 0,

        slides: [{
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum.",
            },
            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            },
            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
            },
            {
                image: "img/05.jpg",
                title: "Paradise",
                text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
            },
        ],
    },

    methods: {
        /* Funzione che aumenta l'indice */
        aumenta() {
            this.indice++;

            if (this.indice > 4) {
                this.indice = 0;
            }

            console.log(this.indice);
        },

        /* Funzione che diminuisce l'indice */
        diminuisci() {
            this.indice--;
            if (this.indice < 0) {
                this.indice = 4;
            }
            console.log(this.indice);
        },
    },
});