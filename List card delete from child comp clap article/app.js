Vue.component('card', {
    props:['title', 'content'],
    template:`
        <div class="card">
            <div class="card-body">
                <h3 class="title">{{ title }}</h3>
                <div class="card-text">
                    {{ content }}
                </div>
            </div>
            <div class="text-center text-muted display-4">
                {{ claps }}
            </div>
           <button @click="clapForArticle" class="btn btn-info btn-sm">Clap for me</button>

    <br>  
            <button class="btn btn-danger btn-sm" @click="deleteArticle">Delete Me</button>
        </div>
    `,
    data(){
        return {
            claps:0
        }
    },
    methods:{
        deleteArticle(){
            this.$emit('delete-article', this.title);
        },

        clapForArticle(){
            this.claps++; 
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        articles : [
            {
                title: 'Vuejs for beginers',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quibusdam saepe animi. Ullam numquam hic ipsum aliquid voluptate officiis consectetur.'
            },
            {
                title: 'Vuejs for beginers2',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quibusdam saepe animi. Ullam numquam hic ipsum aliquid voluptate officiis consectetur.'
            },
            {
                title: 'Vuejs for beginers3',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quibusdam saepe animi. Ullam numquam hic ipsum aliquid voluptate officiis consectetur.'
            },
            {
                title: 'Vuejs for beginers4',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quibusdam saepe animi. Ullam numquam hic ipsum aliquid voluptate officiis consectetur.'
            },
        ]
    },
    methods: {
        deleteArticle(event){
           this.articles = this.articles.filter(article => article.title != event);
        },
    }
});