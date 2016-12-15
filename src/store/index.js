import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import mutation1 from './modules/mutation1'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		mutations,
		mutation1
	}
})