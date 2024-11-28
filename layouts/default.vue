<template>
    <div>
        <header>
         <div class="brand"><h1 class="grad">Crypt.</h1><h1>💰</h1></div> 
            <nav>
                <ul>
                    <li>
                        <button class="btn" @click="redirectToPage"><span>{{buttonText}}</span></button>
                    </li>
                    <li>
                      <button class="btn"><span>Contact</span></button>
                    </li>

                </ul>
            </nav>
        </header>

        <main><NuxtPage /></main>

        <footer></footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();


const buttonText = computed(() => {
  if (route.name === 'predictions') {
    return 'Accueil';
  } else {
  return 'Prédictions';
  }
});
const redirectToPage = () => {
  if (route.name === 'predictions') {
    router.push('/'); // Aller à la page des prédictions
  } else  {
    router.push('/predictions'); // Retour à la page d'accueil
  } 
};
const redirectToContact = () => {
  //router.push('/contact');
}

</script>
<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 6rem;
    }

    .brand {display: flex; align-items: center;}

        
      ul{
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }
    
    li {
        list-style-type : none;
    }
</style>