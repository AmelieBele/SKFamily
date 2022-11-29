
<template>
    <div class="all">
        <p>Nos Différents thèmes </p>
        <div class="themes">
            <ThemeTousComponent/>
            <ThemeAnniversaireComponent/>
            <ThemeBabySComponent/>
            <ThemeFaTComponent/>
            <ThemeGenderRevealComponent/>
            <ThemeMariageComponent/>
            <ThemeAutreComponent/>

        </div>
    </div>
</template>

<script>

import ThemeAnniversaireComponent from './ThemeAnniversaireComponents.vue';
import ThemeAutreComponent from './ThemeAutreComponent.vue';
import ThemeBabySComponent from './ThemeBabySComponent.vue'; 
import ThemeFaTComponent from './ThemeFaTComponent.vue'; 
import ThemeGenderRevealComponent from './ThemeGenderRevealComponent.vue'; 
import ThemeMariageComponent from './ThemeMariageComponent.vue'; 
import ThemeTousComponent from './ThemeTousComponent.vue';

export default {
    name: 'AllThemesComponent',
    components: {
        ThemeAnniversaireComponent,
        ThemeAutreComponent,
        ThemeBabySComponent, 
        ThemeFaTComponent, 
        ThemeGenderRevealComponent, 
        ThemeMariageComponent, 
        ThemeTousComponent, 
    }

}

</script>
<style lang="scss" scoped>
    p{
        color:#5b4e46;
        font-size:20px;
        font-weight: 500;
        margin-top:100px;
        text-align: center;
        text-decoration: underline;
    }

    div.themes{
        display: flex;
        justify-content: space-around;
    }
</style>

