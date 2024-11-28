<template>
    <div class="main-content">
        <div class="main-text">
            <h1 class="grad">Nos prédictions crypto</h1>
            <p class="grad following">Boostées par IA !</p>
            <div class="bottompart">
                <p class="grad">Rejoignez notre newletters pour être au courant des derniers changement</p>
                <div class="bothbtn">
                    <button class="btnreversed" ><span>Rejoindre</span></button>
                    <button class="btn" @click="redirectToPred"><span>Voir les prédictions</span></button>
                </div>   
            </div>

        </div>
        <div class="imagehero">
            <img src="/assets/heroimg.png" alt="">
        </div>
   </div>
</template>


<script setup>
import { useRoute, useRouter} from 'vue-router';
 const router = useRouter();

 const redirectToPred = () => {
    router.push('/predictions')
 }


</script>



<style scoped>
.main-content {
    margin-top: 6rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.imagehero img  {
    max-width: 500px;
    filter: drop-shadow( 5px 15px 5px rgba(0,0,0,0.4));
}
.main-text {
    display: flex;
    flex-direction: column;
}
.main-text h1 {
    font-size: 45px;
    margin: 0;
}
.main-text .following {
    font-size: 25px;
    margin: 0;
    font-weight: bold;
}

.main-text .following {
    font-size: 20px;
    margin: 0;
    font-weight: bold;
}

.main-text .bothbtn {
    display: flex;
    gap: 1rem;
}
.main-text .bottompart {
margin-top: 2rem;
}


</style>