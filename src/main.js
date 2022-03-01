import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'

import PouchDB from 'pouchdb-browser'
import PouchFind from 'pouchdb-find'
import PouchLiveFind from 'pouchdb-live-find'

PouchDB.plugin(PouchFind)
PouchDB.plugin(PouchLiveFind)


createApp(App).use(router,axios,require('vue-pouch'), {
    pouch: PouchDB,    
    defaultDB: 'HeroesDB'}).mount('#app')
