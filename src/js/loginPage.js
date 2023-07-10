import axios from "axios"
export default {
    name: "loginPage",
    data () {
        return {
            userData: {
                email: "",
                password: ""
            },
            loginStatus: true
        }
    },
    methods: {
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
        loginAccount(){
            axios.post("http://localhost:8000/api/user/login",this.userData).then((response)=>{
                if(response.data.token == null){
                    console.log("There is no user")
                    this.loginStatus = false
                }else{
                    this.loginStatus = true;
                    this.$store.dispatch("storeToken",response.data.token);
                    this.$store.dispatch("storeUser",response.data.user);
                    this.home();
                }
            }).catch((error)=>console.log(error));
        },
    }
}