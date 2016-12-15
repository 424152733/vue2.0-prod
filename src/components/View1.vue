<style lang="sass">
	
</style>

<template>
	<div>
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>活动管理1</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="v-app-right-content">
			<el-table
			  v-loading="loading"
			  element-loading-text="loading..."
			  :data="source"
			  border
			  style="width: 100%">
			  <el-table-column
			    inline-template
			    label="日期"
			    width="180">
			    <div>
			      <el-icon name="time"></el-icon>
			      <span style="margin-left: 10px">{{ row.date }}</span>
			    </div>
			  </el-table-column>
			  <el-table-column
			       inline-template
			       label="姓名"
			       width="180">
			       <el-popover trigger="hover" placement="top">
			            <p>姓名: {{ row.name }}</p>
			            <p>住址: {{ row.address }}</p>
		                <div slot="reference" class="name-wrapper">
		                  <el-tag>{{ row.name }}</el-tag>
		                </div>
			            </el-popover>
			     </el-table-column>
			  <el-table-column
			    :context="_self"
			    inline-template
			    label="操作">
			    <div>
			      <el-button
			        size="small"
			        @click="handleEdit($index, row)">
			        编辑
			      </el-button>
			      <el-button
			        size="small"
			        type="danger"
			        @click="handleDelete($index, row)">
			        删除
			      </el-button>
			    </div>
			  </el-table-column>
			</el-table>	
			<div class="v-app-pagation">
			    <el-pagination
			    	@current-change="handlePageChange"
		            :current-page="page.current"
		            :page-sizes="[10, 20, 30, 40]"
		            :page-size="page.pagesize"
		            layout="sizes, prev, pager, next"
		            :total="100">
			    </el-pagination>
		    </div>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions, mapState } from 'vuex'
	export default {
		computed: {
		  ...mapGetters({
		    source: 'dataList',
		    page: 'page',
		    loading: 'loading'
		  })
		},
		created() {
			this.$store.dispatch('fetch', { current: 1, pagesize: 10 })
		},

	    methods: {
	      handleEdit(index, row) {
	        console.log(index, row);
	      },
	      handleDelete(index, row) {
	        this.$message('删除成功！')
	      },
	      handlePageChange(val) {
	      	this.$store.dispatch('fetch', { current: val, pagesize: this.page.pagesize })
	      }
	    }
	  }

</script>