function converter()

{
// 	var s = document.getElementById('take1').value;
// var item1 = s.options[s.selectedIndex].value;

// if(s=="celcisus"){
// 	x = document.getElementById("temp1").value * 9 / 5 + 32;
//     document.getElementById("output").value=Math.round(x);

// }
// else if(s=="farenheit"){
// 	x = (document.getElementById("temp1").value -32) * 5 / 9;
//     documelementById("output").value = Math.round(x);
// }


debugger;

var temp=document.getElementById("temp1").value;
var com=document.getElementById("take1").value;
var r;


if (com=='farenheit') {
   r= temp* 9 / 5 + 32;
   document.getElementById("output").value=Math.round(r);
}else{
	r=(temp-32) * 5 / 9;
	document.getElementById("output").value=r;

}

}