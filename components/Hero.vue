<template>
    <div class="main-content">
        <div class="main-text">
            <h1 class="grad">Nos prédictions crypto</h1>
            <p class="grad following">Boostées par IA !</p>
            <div class="bottompart">
                <p class="grad">Anticipez les mouvements du marché grâce à notre analyse avancée des sentiments</p>
                <div class="bothbtn">
                    <button class="btnreversed" @click="redirectToPred"><span>Voir les prédictions</span></button>
                </div>   
            </div>

        </div>
        <div class="imagehero">
            <img src="/assets/heroimg.png" alt="">
        </div>

   </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
 const router = useRouter();


 const redirectToPred = () => {
    router.push('/predictions');
 }
</script>
<style scoped>
.main-content {
    margin-top: 8rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.imagehero img  {
    max-width: 600px;
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
    gap: 3rem;
}
.main-text .bottompart {
margin-top: 2rem;
}
</style>