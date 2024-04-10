app.component('dragon-ball-character', {
    props: ['dbChar'],
    template: `
        <article v-if="searchResult === true" class="character-article">
            <p class="char-info" v-if="dbChar.name">Character: {{ dbChar.name }}</p>
            <p class="char-info" v-if="dbChar.ki">Ki: {{ dbChar.ki }}</p>
            <p class="char-info" v-if="dbChar.gender">Gender: {{ dbChar.gender }}</p>
            <p class="char-info" v-if="dbChar.affiliation">Affiliation: {{ dbChar.affiliation }}</p>
            <p class="char-info" v-if="dbChar.race">Race: {{ dbChar.race }}</p>
            <img v-if="dbChar.image" v-bind:src="dbChar.image" alt="Character Image">
        </article>`
})