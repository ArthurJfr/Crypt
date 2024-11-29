<template>
    <div class="main-content">
        <Hero/>
        <Loader v-if="loading" />
        <HomeSection/>
   </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import HomeSection from '../components/HomeSection.vue';
import Loader from '~/components/Loader.vue';
import { ref, onMounted } from 'vue';

 const router = useRouter();


 const redirectToPred = () => {
    router.push('/predictions');
 }
 onMounted


</script>



