import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        playerHealth: 70,
        monsterHealth: 90,
        startGame: false,
        turn: []
    },
    getters: {
        turns:(state) => {
            return state.turn
        }
    },
    mutations: {
        'START' (state) {
            state.playerHealth = 100
            state.monsterHealth = 100
            state.startGame = true,
            state.turn = []
        },
        'ATTACK' (state) {
            let min = 8
            let max = 15
            let damage = Math.round(Math.random() * (max - min + 1)) + min
            state.monsterHealth -= damage
            state.turn.unshift({
                isPlayer: true,
                text: `YOU DID ${damage} DAMAGE TO THE MONSTER!`
            })

            if(state.monsterHealth <= 0) {
                state.monsterHealth = 0
                state.startGame = false
                alert('YOU WON')
            }

            min = 10
            max = 20
            damage = Math.round(Math.random() * (max - min + 1) + min)
            state.playerHealth -= damage
            state.turn.unshift({
                isPlayer: false,
                text: `MONSTER HAS DONE ${damage} DAMAGE TO YOU `
            })

            if(state.playerHealth <= 0) {
                state.playerHealth = 0
                alert('YOU LOST')
            }
        },
        'SPECIAL' (state) {
            let damage = 30
            state.monsterHealth -= damage
            state.turn.unshift({
                isPlayer: true,
                text: `YOU DID ${damage} SPECIAL DAMAGE TO THE MONSTER!`
            })
            if(state.monsterHealth <= 0) {
                state.startGame = false,
                state.monsterHealth = 0
            }
        },
        'HEAL' (state) {
            if(state.startGame = true) {
                if(state.playerHealth <= 90) {
                    state.playerHealth += 10
                    state.turn.unshift({
                        isPlayer: true,
                        text: `YOU HEALED YOURSELF WITH 10 HP`
                    })
                } else {
                    state.playerHealth = 100
                    state.turn.unshift({
                        isPlayer: true,
                        text: `YOU HEALED YOURSELF WITH ${100 - state.playerHealth} HP`
                    })
                }
            }
        },
        'GIVE-UP' (state) {
            state.startGame = false
            state.playerHealth = 0
            alert("You a lil bitch")

        }
    },
    actions: {
        start: ({commit}) => {
            commit('START')
        },
        attack: ({commit}) => {
            commit('ATTACK')
        },
        special: function ({commit}) {
            commit('SPECIAL')
        },
        heal: ({commit}) => {
            commit('HEAL')
        },
        giveUp: ({commit}) => {
           commit('GIVE-UP') 
        }
    }
})