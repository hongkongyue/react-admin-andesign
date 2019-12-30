export default function(){
	   var URL=window.location.href;
	   const store={};
	   if(URL.includes('/tabble')){
           store.name='表格组件';
           store.childname='表格'
	   }else if(URL.includes('/label')){
	   	   store.name='表格组件';
           store.childname='标签'
	   }else if(URL.includes('/form')){
           store.name='表单轮播';
           store.childname='表单'
	   }else{
	   	   store.name='默认';
           store.childname='默认内容'
	   }
	      localStorage.setItem('store',JSON.stringify(store)) 
}