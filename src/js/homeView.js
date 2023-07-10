import axios from "axios"
import { mapGetters } from "vuex"

export default {
    name: "HomeView",
    data () {
        return {
            postList: [],
            categoryList: [],
            searchKey: "",
            tokenKey: false
        }
    },
    computed: {
        ...mapGetters(["getToken","getUser"])
    },
    methods: {
        getAllPost () {
            axios.get("http://localhost:8000/api/allPosts").then((response)=>{
                for(let i = 0; i<response.data.post.length; i++){
                    if( response.data.post[i].image != null ){
                        response.data.post[i].image = "http://localhost:8000/image/" + response.data.post[i].image
                    }else{
                        response.data.post[i].image = "http://localhost:8000/image/default.jpg"
                    }
                }
                this.postList = response.data.post
                
        })
        },
        getAllCategory() {
            axios.get("http://localhost:8000/api/allCategory").then((response)=>{
                this.categoryList = response.data.category
        })
        },
        searchingData() {
            let requestKey = {
                "key" : this.searchKey
            }
            axios.post("http://localhost:8000/api/search/post",requestKey).then((response)=>{
                for(let i = 0; i<response.data.search.length; i++){
                    if( response.data.search[i].image != null ){
                        response.data.search[i].image = "http://localhost:8000/image/" + response.data.search[i].image
                    }else{
                        response.data.search[i].image = "http://localhost:8000/image/default.jpg"
                    }
                }
                this.postList = response.data.search
            })
        },
        searchCategory(searchKey) {
            let search = {
                "key" : searchKey
            }
            axios.post("http://localhost:8000/api/search/category",search).then((response)=>{
                for(let i = 0; i<response.data.result.length; i++){
                    if( response.data.result[i].image != null ){
                        response.data.result[i].image = "http://localhost:8000/image/" + response.data.result[i].image
                    }else{
                        response.data.result[i].image = "http://localhost:8000/image/default.jpg"
                    }
                }
                this.postList = response.data.result
            })
        },
        logout(){
            this.$store.dispatch("storeToken", null);
            this.login();
        },
        checkToken(){
                if(this.getToken != null && this.getToken != undefined && this.getToken != ""){
                    this.tokenKey = true
                }else{
                    this.tokenKey = false
                }
        },
        newsDetails(id){
            this.$router.push({
                name: 'newsDetails',
                query: {
                    newsId : id
                },
            });
        },
        login(){
            this.$router.push({
                name: 'loginPage'
            })
        },
        home(){
            this.$router.push({
                name: 'home'
            })
        }
    },
    mounted () {
            this.checkToken();
            this.getAllPost();
            this.getAllCategory();
    }
}