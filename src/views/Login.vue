<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '@/composables/useAuth'

const { user } = useAuth();

const formData = reactive({
    "username": '',
    "password": ''
})


const router = useRouter()

const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Content-Type", "charset=utf-8")

    var raw = JSON.stringify(formData)
    console.log(raw);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://10.4.5.42/Auth/Login", requestOptions)
    .then(res => res.json())
    .then(data => {
        
        if(data.user){
            // set user to keep track of logged in user
            const { user } = useAuth();
            user.value = data.user
            
            // redirect to dashboard
            router.push('/dashboard')
        }

    })
    .catch(err => console.error(err))
}

</script>

<template>
    <div class="flex justify-content-center p-fluid mt-5">
        <div class="card">
            <form @submit.prevent="login">
                <h1>Login</h1>
                <div class="field">
                    <div class="p-input-icon-right">
                        <i class="pi pi-envelope" />
                        <InputText id="email" v-model="formData.username" type="text" placeholder="Email" />
                    </div>
                </div>
                <div class="field">
                    <div class="p-float-label">
                        <Password v-model="formData.password" :feedback="false">
                        </Password>
                        <label for="password">Password</label>
                    </div>
                </div>
                <Button type="submit" label="Submit" class="mt-2" />
                <Button type="button" label="Register" class="mt-2" @click="$router.push('/register')" />
            </form>
        </div>
    </div>


</template>