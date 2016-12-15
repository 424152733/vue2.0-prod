<style lang="sass">
	.v-app-left{
		height: 100vh;
		top:0;
		width: 18%;
		overflow-y: scroll;
		background: #324057
	}
</style>

<template>
		<div class="v-app-left">
			<el-menu default-active="/" class="el-menu-vertical-demo"  theme="dark" :router="true">
			  <el-menu-item index="/">导航一</el-menu-item>
			  <el-menu-item index="1">导航二</el-menu-item>
			  <el-menu-item index="2">导航三</el-menu-item>
		    </el-menu>
		</div> 
</template>
<script>
	
	export default {
		
	}

</script>