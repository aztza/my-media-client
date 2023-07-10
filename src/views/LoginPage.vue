<template>
    <div class="justify-content-center d-flex">
        <div class="container row">
        <div class="d-flex col-8">
            <p class="bg-danger text-white rounded p-2 mx-1" style="cursor: pointer" @click="home()">Home</p>
            <p class="bg-dark text-white rounded p-2 mx-1" style="cursor: pointer" @click="login()">Login</p>
        </div>
        <div class="col-6 my-3">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="userData.email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <span class="text-danger" v-if="!loginStatus">The Credential do not match !</span>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="userData.password">
            </div>
            <button type="submit" class="btn btn-primary" @click="loginAccount()">Login</button>
        </div>
    </div>
    </div>
</template>
<script src="../js/loginPage.js"></script>
