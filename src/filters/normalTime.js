export const normalTime = (time) => {
	if (time) {
		let oDate = new Date();
		oDate.setTime(time*1000);
		let y = oDate.getFullYear(),
		    m = oDate.getMonth() + 1<10?`0`+oDate.getMonth() + 1:oDate.getMonth() + 1,
	        d = oDate.getDate()<10?`0`+oDate.getDate():oDate.getDate(),
		    h = oDate.getHours()<10?`0`+oDate.getHours():oDate.getHours(),
		    mm = oDate.getMinutes()<10?`0`+oDate.getMinutes():oDate.getMinutes(),
	        s = oDate.getSeconds()<10?`0`+ oDate.getSeconds(): oDate.getSeconds();
		return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
	}
}
export const normalString = (string,len) => {
	    if(string.length>len){
	    	return string.substring(0,len)+`…`
	    }
	    return string
}
