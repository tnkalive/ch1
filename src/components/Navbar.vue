<script setup lang="ts">
import { ref } from "vue";
const items = ref([
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        to: '/detail'
    },
    // {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //         {
    //             label: 'Left',
    //             icon: 'pi pi-fw pi-align-left'
    //         },
    //         {
    //             label: 'Right',
    //             icon: 'pi pi-fw pi-align-right'
    //         },
    //         {
    //             label: 'Center',
    //             icon: 'pi pi-fw pi-align-center'
    //         },
    //         {
    //             label: 'Justify',
    //             icon: 'pi pi-fw pi-align-justify'
    //         }
    //     ]
    // },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
const user = ref([
    {
        label: 'Edit Profile',
        icon: 'pi pi-fw pi-pencil',
        to: '/profile'
    },
    {
        label: 'Sign off',
        icon: 'pi pi-fw pi-sign-out',
        to: '/'
    }
])


</script>

<template>
    <div>
        <Menubar :model="items">
            <template #end>
                <SplitButton label="User" icon="pi pi-user" :model="user" class="p-button-primary mr-2 mb-2"></SplitButton>
            </template>
        </Menubar>
    </div>
</template>

<style scoped></style>