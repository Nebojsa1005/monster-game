<template>
    <div class="list col-xs-12">
        <ul class="list-group">
            <li class="list-group-item"
             v-for="t in turns"
            :class="[{'player': t.isPlayer}, {'monster': !t.isPlayer}]"
             >{{ t.text}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'turns'
            ])
        }
    }
</script>

<style scoped>
.list {
    margin-top: 25px;
    text-align: center;
}

.player {
    background: #22A7F0;
    color: #264348
}
.monster {
    background: #F22613;
    color: white;
}

</style>