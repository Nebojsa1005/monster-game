<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1>MONSTER GAME</h1>
            </div>
        </div>
        <app-game></app-game>
    </div>
</template>

<script>
    import Game from  './components/Game.vue'
    export default {
        components: {
            appGame: Game
        }
    }
</script>


<style scoped>
body {
    background: #ccc;
    display: flex;
}
h1 {
    text-align: center;
}

</style>