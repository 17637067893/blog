<template>
	<div>
		<div style="padding: 1vw;width: 50vw;overflow: hidden;">
			 <Input v-model="title" size="large" placeholder="请输入文章标题" />
		</div>
		<div class="imgContanier">
			<div>
				<img class="img-box" src="http://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&f=JPEG?w=1280&h=830" alt="">
			</div>
			<Upload
				ref="upload"
				:show-upload-list="false"
				:on-success="handleSuccess"
				:format="['jpg','jpeg','png']"
				:max-size="2048"
				:before-upload="handleBeforeUpload"
				multiple
				type="drag"
				action="http://localhost:8080/upload"
				style="display: inline-block;width:200px;height: 126px;margin-bottom: 16px;">
				<div style="width: 200px;height:125px;line-height: 140px;">
					<Icon type="ios-camera" size="60"></Icon>
				</div>
			</Upload>
		</div>
		<div id="editor">
			<div ref="editorElem"></div>
		</div>
		<div class="btn-box">
			<Button @click="save(0)" size="large" icon="ios-calendar-outline" type="primary">保存</Button>
			<Button @click="save(1)" size="large" icon="ios-jet-outline" type="primary">发表</Button>
		</div>
	</div>
</template>
<script>
	import E from "wangeditor";
	export default{
		data(){
			return{
				editor: null,
				editorContent: '',
				title:'',
				imgUrl:''
			}
		},
		created(){
		},
		methods:{
		    save(param){
				let obj={
					title:this.title,
					content:this.editor.txt.html(),
					img:this.imgUrl,
					status:param
				}
				this.$ajax.addArticle('/addArticle',obj).then(res => {
					console.log(res)
				}).catch((err) => {
					console.log(err)
				})
			},
			// 上传成功
			handleSuccess(res,file){
				this.imgUrl =res.data.data; 
				console.log(this.imgUrl)
			},
			handleBeforeUpload(res){
				console.log(res);
			}
		},
		mounted(){
			this.editor = new E(this.$refs.editorElem);
			// 每次改动获取值
			this.editor.customConfig.onchange = html => {
				  this.editorContent = html;
				  console.log(html)
			};
			 this.editor.customConfig.menus = [
			      // 菜单配置
			      'head', // 标题
			      'bold', // 粗体
			      'fontSize', // 字号
			      'fontName', // 字体
			      'italic', // 斜体
			      'underline', // 下划线
			      'strikeThrough', // 删除线
			      'foreColor', // 文字颜色
			      'backColor', // 背景颜色
			      'link', // 插入链接
			      'list', // 列表
			      'justify', // 对齐方式
			      'quote', // 引用
			      'emoticon', // 表情
			      'image', // 插入图片
			      'table', // 表格
			      'code', // 插入代码
			      'undo', // 撤销
			      'redo' // 重复
			    ];
			    this.editor.create(); // 创建富文本实例
		}
	}
</script>
<style scoped="scoped">
	.w-e-text-container{
		height: 600px !important;
	}
	.w-e-text{
		height: 600px !important;
	}
	.btn-box{
		display: flex;
		justify-content: space-around;
		margin-top: 24px;
	}
	.imgContanier{
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	.fileLabel{
		  display: inline-block;
		  width:180px;
		  height: 40px;
		  line-height: 40px;
		  text-align: center;
		  border: 1px solid #57a3f3;
		  border-radius: 5px;
		  background: #57a3f3;
		  cursor: pointer;
		  color: white;
		}
		.fileInput{display: none;}
		.img-box{
			width: auto;
			height: 130px;
			object-fit: cover;
			border-radius: 5%;
			margin: 10px 20px;
		}
</style>
