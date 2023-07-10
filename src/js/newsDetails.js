import axios from "axios"
import { mapGetters } from "vuex"

export default {
    name: "NewsDetails",
    data () {
        return {
            post: 0,
            posts : {},
            views: 0
        }
    },
    computed: {
        ...mapGetters(["getToken","getUser"])
    },
    methods: {
        loadData (id) {
            let postId = {
                "id" : id
            }
            axios.post("http://localhost:8000/api/post/details", postId).then((response)=>{
                if( response.data.postData.image != null ){
                    response.data.postData.image = "http://localhost:8000/image/" + response.data.postData.image
                }else{
                    response.data.postData.image = "http://localhost:8000/image/default.jpg"
                }
                this.posts = response.data.postData
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
        },
        viewCount(){
            let data = {
                "user_id": this.getUser.id,
                "post_id": parseInt(this.$route.query.newsId),
            }
            axios.post("http://localhost:8000/api/view/count",data).then((response)=>{
                this.views = response.data.result
            })
        }
    },
    mounted () {
        this.viewCount(),
        this.post = this.$route.query.newsId,
        this.loadData(this.post)
    },
}