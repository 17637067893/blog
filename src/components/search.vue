<template>
	<div>
		<div class="search-box" v-for="(item,index) in articleList" :key="index">
			 <Card class="card-box">
				<p slot="title" style="font-size: 20px;font-weight: 600;">{{item.title}}</p>
				<p style="font-size: 18px;" v-html="item.content"></p>
			</Card>
			<div class="img-box">
				<img :src="item.img" alt="图片">
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				articleList:[]
			}
		},
		created(){
			this.getList();
		},
		methods:{
			getList(){
				
				let _this=this;
				this.$ajax.getArticleList('/getArticleList')
				.then((res) => {
					_this.articleList = res.data.data
				})
				.catch((err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.search-box{
		display: flex;
		flex-direction: row;
		padding: 10px;
		height: 170px;
		margin-left: 3vw;
	}
	.card-box{
		width: 60vw;
		overflow: hidden;
		margin-right: 10px;
	}
	.img-box{
		width: 10vw;
		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 5%;
		}
		
	}
</style>
