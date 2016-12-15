import * as types from './mutations-type.js'

const state = {
	loading: true
}

const getters = {
	loading:  state => state.loading
}

const mutations = {
	[types.START_LOADING] (state) {
		state.loading = true
	},
	[types.END_LOADING] (state) {
		state.loading = false
	},
	
}

export default {
	getters,
	state,
	mutations
}