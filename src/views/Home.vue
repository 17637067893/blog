<template>
	<div class="container">
		<div class="left">
			<div class="demo-avatar box-avatar">
				<Avatar icon="ios-person" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" />
			</div>
			<div class="btn-box">
				 <Menu @on-select="selectMenu" width='auto' theme="dark" :active-name="titleList[0].name">
				         <MenuGroup>
				             <MenuItem v-for="(item,index) in titleList" :key="index" style="text-align: center;" :name="item.name">
				                 {{item.title}}
				             </MenuItem>
				         </MenuGroup>
				     </Menu>
			</div>
		</div>
		<div class="right">
			 <!-- 路由匹配到的组件将渲染在这里 -->
			  <router-view></router-view>
			<!-- <v-header></v-header>
			<v-main></v-main> -->
		</div>
	</div>
</template>
<script>
	// import header from '@/components/header.vue';
	// import vuemain from '@/components/main.vue';
	export default{
		name:"home",
		data(){
			return{
				titleList:[
					{
						title:'发现文章',
						name:'search'
					},
					{
						title:'写文章',
						name:'write'
					},
					{
						title:'个人中心',
						name:'personal'
					}
				]
			}
		},
		methods:{
			selectMenu(name){
				console.log(name)
		        switch (name){
					case 'search':
						this.$router.push({
							name:'search',
							query:{
								a:'1'
							}
						})
					break;
					case 'write':
						console.log(2)
						this.$router.push({
							name:'write',
							query:{
								a:'1'
							}
						})
					break;
					case 'personal':
						this.$router.push({
							name:'personal',
							query:{
								a:'1'
							}
						})
					break;
				}
			}
		},
		components:{
			// 'v-header':header,
			// 'v-main':vuemain
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.container{
		display: flex;
		flex-direction: row;
	}
	.left{
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width:20vw;
		height: 100vh;
		background-color: #515a6e;
	}
	.right{
		width: 80vw;
		margin-left: 20vw;
	}
	.btn-box{
		width: 100%;
		margin-top: 3vh;
	}
	.box-avatar{
		width: 8rem;
		span{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
</style>
