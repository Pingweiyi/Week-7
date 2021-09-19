


var bbb= new Vue({
	el:'#bbb',
	data:{
		msg:"hello",
	},
});


var ccc = new Vue({
	el: "#ccc",
	data:{
    greeting:"Hello,User",
	},
	
	components:{
	"greeting_container":{
	props:["greeting"],
	data:function(){
	return{ name:"Ven"};
	},
	template:"<div>{{greeting}},{{name}}</div>",
	},
	},
	});


Vue.component('child',{
	props:{
		text:{
			type:string,
			required:true
		}
	},
	template:'<div>{{text}}</div>'
})

var qqq = new Vue({
	el:'#qqq',
	data(){
		return{
			msg:"hello!ven"
		},
	},
})





