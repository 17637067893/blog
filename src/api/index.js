import httpRequests from '@/utils/http';


let obj ={
	addArticle:(url,data) => {
		return  httpRequests.post(url,data);
	},
	getArticleList:(url,data) => {
		return  httpRequests.post(url,data);
	}
}			
export default obj