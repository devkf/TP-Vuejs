<template>
    <div class="row">
        <div class="col-md-6 offset-3">

            <div class="card mt-4">
                <div class="card-body">
                    <h1 class="text-center">Register</h1>
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name" v-model="Name" v-bind:class="{'is-invalid':errors.name, 'is-valid':!errors.name && submited}">
                        <div class="errors" v-if="errors.name">
                            <small class="text-danger" :key="error" v-for="error in errors.name">{{ error }}</small>
                        </div>
                    </div>
                    <div class="form-group" >
                        <input type="text" class="form-control" placeholder="E-mail"  v-model="Email" v-bind:class="{'is-invalid':errors.email, 'is-valid': !errors.email && submited}">

                        <div class="errors" v-if="errors.email">
                            <small class="text-danger" :key="error" v-for="error in errors.email">{{ error }}</small>
                        </div>


                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password"  v-model="Password" v-bind:class="{'is-invalid':errors.password, 'is-valid':!errors.password && submited}">

                          <div class="errors" v-if="errors.password">
                            <small class="text-danger" :key="error" v-for="error in errors.password">{{ error }}</small>
                        </div>

                    </div>
                    <div class="form-group text-center">
                        <button class="btn btn-success" @click="registerUser()" :disabled="loading">
                            <i class="fas fa-spinner fa-spin" v-if="loading"></i>
                            {{
                                loading ? '' : 'Register'
                            }}
                            
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    name:'Register',
    data(){
        return {
            Name : '',
            Email : '',
            Password : '',
            errors:{},
            submited:false,
            loading:false
        }
    },
    methods:{
        registerUser(){
            this.loading = true;
            axios.post('https://react-blog-api.bahdcasts.com/api/auth/register',{
                email: this.Email,
                name:this.Name,
                password:this.Password
            })
            .then((response) => {
                const {data} = response.data;
                localStorage.setItem("auth", JSON.stringify(data));
                this.$root.auth = data;
                this.submited = true;

                this.loading = false;
                this.$router.push("/");
            })
            .catch(({response}) => {
                this.errors = response.data;
                this.submited = true;
                this.loading = false;

            });
            
        }
    }
}
</script>
