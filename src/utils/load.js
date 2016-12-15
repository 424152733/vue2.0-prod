import axios from 'axios'

export function load(options, commit) {
	let opt = {baseUrl: ' http://localhost:9090/'}
	//get
	opt = typeof options === 'string' && options.method !== 'post'? Object.assign({}, {url: options}, opt): Object.assign({}, opt, options);
	//post
	if(options.method === 'post'){
		opt = Object.assign(options, opt)
	}
	return axios(opt).then(response => {
		return Promise.resolve(response)
	}).catch(reject => {
		return Promise.reject(reject)
	})
}