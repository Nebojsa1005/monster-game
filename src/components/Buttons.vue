<template>
    <div class="row">
        <div class="col-xs-12">
        <div class="start">
            <button id="start" @click="start">START GAME</button>
        </div>
        <div class="buttons" v-if="startGame">
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special" @click="special">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="giveUp">GIVE UP</button>
        </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        computed: {
                ...mapState([
                    'startGame'
                ])
                
        },
        methods: {
            ...mapActions([
                'start',
                'attack',
                'special',
                'heal',
                'giveUp'
            ])
        },
        
    }
</script>

<style scoped>
.buttons {
    display: flex;
    height: 70px;
    margin-top: 40px;
    justify-content: space-around;
    border: 2px solid gray;
    box-shadow: 0px 3px 6px #ccc;
    align-items: center;
    border-radius: 5px;
     
}

button {
    border-radius: 5px;
    width: 100px;
    height: 80%;
    font-size: 15px;
    color: white;
}    

.start {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
#start {
    width: 300px;
    height: 40px;
    background: purple;
    font-weight: 500;
}

#attack {
    background: #ff3333;
}
#attack:hover {
    background: #ff0000
}

#special {
    background: #6666ff;
}
#special:hover {
    background:#3333ff; 
}

#heal {
    background: #00b300;
}
#heal:hover {
    background: #008000;
}

#give-up {
    background: #ffffff;
    color: black;
}
#give-up:hover {
    background: #000;
    color: white;
}
</style>
