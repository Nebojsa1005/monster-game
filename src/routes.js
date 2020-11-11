import game from './views/game.vue'

export const routes = [
    {path: '/', components: game},
    {path: '*', redirect: '/'}
]