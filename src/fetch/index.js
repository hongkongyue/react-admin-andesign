import 'whatwg-fetch'
function myFetch(Url,obj){
    fetch(Url,obj).then(function(response) { 
            console.log(response);
            return response.json();
        }).then((data) => {
              console.log(data);
        }).catch(e=>{console.log(e);})
}
export default myFetch;

// var formData = new FormData();
//     formData.append('mobile',19112345678)
//     fetch('http://api.dev.jsc.loc'+api.code,{
//           method:"post",
//           headers:{
//                    'Accept'       : 'application/vnd.trading.v4+json',
//                   },
//           body:formData
//          }).then(response => response.json()).then(function(response){
//                 console.log(response.message);
//          }).catch(function(err){
//                 console.log(`错误信息：${err}`);
//          })