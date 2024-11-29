<template>
    <div class="main-content">
        <Hero/>
        <HomeSection/>
        <Footer/>
   </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import HomeSection from '../components/HomeSection.vue';
import Footer from '~/components/Footer.vue';

import { ref, onMounted } from 'vue';
import { getPredictions } from '~/services/api';
 const router = useRouter();
 const predictions = ref([]);

 const redirectToPred = () => {
    router.push('/predictions');
 }


</script>



