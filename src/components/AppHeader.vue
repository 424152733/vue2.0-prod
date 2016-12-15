<style lang="sass">
	.v-app-header{
		background: #324057;
		height: 100px;
	}
	.v-app-header-nav{
		padding-left: 20%;
		position: absolute;
		top: 20px;
		padding-top:10px
	}
	.v-title{
		margin:0 0 0 25px;
		height: 100%;
		line-height:100px;
		letter-spacing: 1px;
		font-weight: bold;
		font-size: 24px;
		color: #ffffff;
	}
	.v-app-user-opera{
		float: right;
		height: 85px;
		margin:10px 25px 5px 0;
		text-align: center;
		
	}
	.v-header{
		display: block;
		width: 50px;
		height: 50px;
		margin:auto;
		border-radius: 25px;
		background: url('../assets/header.jpg')no-repeat center;
		background-size: 50px 50px;
		border: 1px solid #ffffff;
	}
</style>

<template>
	<div class="v-app-header">
		<span class="v-title">vue2.0后台系统</span>
		<div class="v-app-header-nav">
			<el-menu theme="dark" default-active="/" class="el-menu-demo" mode="horizontal" :router="true">
			  <el-menu-item index="/">路由1</el-menu-item>
			  <el-menu-item index="1">路由2</el-menu-item>
			  <el-menu-item index="2">路由3</el-menu-item>
			</el-menu>
		</div>

		<div class="v-app-user-opera">
			<i class="v-header"></i>
			<el-dropdown menu-align="start">
			  <span class="el-dropdown-link" style="color:#ffffff">
			    恶霸萌😊<i class="el-icon-caret-bottom el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>切换账号</el-dropdown-item>
			    <el-dropdown-item>登录</el-dropdown-item>
			    <el-dropdown-item>注销</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<script>
	
	export default {
		
	}

</script>