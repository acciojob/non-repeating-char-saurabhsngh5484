//your JS code here. If required.
function fnrc(str){
	let ans=null;
	let object={};
	for (let index = 0; index < str.length; index++) {
		let currentChar=str.charAt(index);
		if(object[currentChar]==undefined){
			object[currentChar]=1;	
		}else{
			object[currentChar]++;
		}
	}	
	for (let index = 0; index < str.length; index++) {
		let currentChar=str.charAt(index);
		if(object[currentChar]==1){
			ans=currentChar;
			break;
		}
	}
	return ans;
}
let str=prompt("Enter a string");
alert(fnrc(str));