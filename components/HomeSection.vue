<template>
    <section class="home-section">
        <h1 class="grad">Notre Technologie d'Analyse Prédictive</h1>
        <div class="bar"></div>
        <div class="content">
            <div class="leftcard card">
                <font-awesome-icon :icon="['fas', 'chart-simple']" class="icon txt-primary" />
                <h3 class="txt-primary">Analyse en Temps Réel</h3>
                <p class="txt-primary">Notre IA surveille et analyse en continu les réseaux sociaux, forums et actualités pour détecter les tendances émergentes du marché crypto.</p>
            </div>
            <div class="rightcard card">
                <font-awesome-icon :icon="['fas', 'brain']" class="icon txt-primary" />
                <h3 class="txt-primary">Intelligence Artificielle Avancée</h3>
                <p class="txt-primary">Nos modèles de Machine Learning utilisent des algorithmes sophistiqués pour comprendre le sentiment des investisseurs.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
 .home-section {
    width : 100%;
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    align-items: center;

 }
 .feature-icon {
    font-size: 15px;
 }
 .home-section h1 {
    font-weight: bold;
    font-size: 30px;
 }
 .home-section .content {
    margin-top: 4rem;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 4rem;
    justify-content: center;

 }
.home-section .leftcard {
    width: 450px;
    text-align: center;
    
 }
.home-section .rightcard {
    width: 450px;
    text-align: center;  
    
    
}
.icon {
    width: 35px;
    height: 35px;
    
    
    
}

</style>