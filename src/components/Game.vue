<template>
    <div>
        <div class="row">
            <div class="col-xs-6">
                <H2>YOUR HEALTH</H2>
                <div class="health-bar">
                    <div id="playerHealth" 
                    :style="{width: playerHealth + '%'}">{{ playerHealth }}</div>
                </div>
            </div>
            <div class="col-xs-6">
                <h2>MONSTER HEALTH</h2>
                <div class="health-bar">
                    <div  id="monsterHealth"
                    :style="{width: monsterHealth + '%'}">{{ monsterHealth }}</div>
                </div>
            </div>
        </div>
    <app-buttons></app-buttons>
    <app-turn-display></app-turn-display>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Buttons from './Buttons.vue'
    import Turns from './Turns.vue'
    export default {
        computed: {
            ...mapState([
                'playerHealth',
                'monsterHealth',
                'startGame'
            ])
        },
        components: {
            appButtons: Buttons,
            appTurnDisplay: Turns
        }
}
</script>

<style scoped>
.row {
    display: flex;
}
h2 {
    text-align: center;
}

.health-bar {
    height: 40px;
    border: 2px solid gray;
    float: right;
    width: 80%;
    margin-right: 10%;
    border-radius: 5px;
    transition: width 300ms;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 25px;
    color: black;
}


#playerHealth {
    background: green;
    height: 100%;
    transition: width 500ms;
}

#monsterHealth {
    background: green;
    height: 100%;
    transition: width 500ms
}



</style>