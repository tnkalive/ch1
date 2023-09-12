
<script setup lang="ts">
import { ref } from 'vue';

const username = ref();
const password = ref();
const repassword = ref();
const name = ref()
</script>

<template>
<div class="flex justify-content-center p-fluid mt-5">
        <div class="card">
            <div class="field">
                <InputText id="input" v-model="username" type="text" placeholder="Name" autofocus />
            </div>
            <div class="field">
                <div class="p-float-label">
                    <Password v-model="password">
                        <template #header>
                            <h6>Pick a password</h6>
                        </template>
                        <template #footer>
                            <Divider />
                            <p class="mt-2">Suggestions</p>
                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </template>
                    </Password>
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="field">
                <Password v-model="repassword">
                </Password>
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="name" v-model="name" type="text" placeholder="Name" />
                </div>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
            <Button type="button" label="Sign in" class="mt-2" @click="$router.push('/')" />
        </div>
    </div>
</template>


<style scoped>
</style>