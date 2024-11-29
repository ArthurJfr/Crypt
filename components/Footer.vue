<script setup lang="ts">
import { faGit } from '@fortawesome/free-brands-svg-icons';
</script>

<template>
    <div class="footer">
        <font-awesome-icon :icon="['fab', 'github']" class="icon txt-primary" />
        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon txt-primary" />

    </div>
</template>
<script></script>
<style scoped>
    .footer{
    margin-top: 3rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    }
    .footer .icon{
        
        width: 30px;
        height: 30px;
        
    }
    
</style>