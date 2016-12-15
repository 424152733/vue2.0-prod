import * as types from '../mutations-type.js'
import { load } from '../../utils/load'

const state = {
	list: [],
	page: {
		current: 1,
		pagesize: 10,
		total: 0
	},
}

const getters = {
	dataList: state => state.list,
	page: state => state.page,
}

const mutations = {
	[types.FETCH_LIST] (state, { response, page } ) {
		state.page = page
		state.list = response.data.slice((page.current-1)*page.pagesize, page.current*page.pagesize)
	}
}

const actions = {
	fetch({ commit, state, }, page) {
		commit(types.START_LOADING)
		return load('/tableData').then(res => {
			page.total = res.data.length
			setTimeout(_=> {
				commit(types.END_LOADING)
				commit(types.FETCH_LIST, {response: res, page: page})
			}, 500)
			return Promise.resolve(res)
		}).catch(err => {
			return Promise.reject(err)
		})
	}
}

export default {
	getters,
	state,
	actions,
	mutations
}