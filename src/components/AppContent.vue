<style lang="sass">
	.v-app-content{
		width: 100%;
		display: flex;
	}
	.v-app-right{
		width: 82%;
		padding: 15px 20px;
		overflow-y: scroll;
	}
	.v-app-right-content{
		padding: 15px
	}
	.v-app-pagation{
		margin-top: 15px;
		float: right;
	}
</style>

<template>
	<div class="v-app-content">
	 <app-left></app-left>
	 <div class="v-app-right">
	 	<transition name="fadeUp">
	 		<router-view></router-view>	
	 	</transition>
	 </div>
	</div>
</template>

<script>
	import AppLeft from './AppLeft'
	export default {
		data() {
			return {
				step1: false,
				step2: false
			}
		},

		mounted() {
			setTimeout(_=>{
				this.step1 = true
				setTimeout(_=> {
					this.step2 = true
				}, 500)
			}, 800)
		},

		components: {
			AppLeft
		}
	}
</script>