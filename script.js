//your JS code here. If required.


let button = document.querySelector('input[type="button"]');

const select = document.getElementById("colorSelect");
button.addEventListener("click",()=>{
	
select.remove(select.selectedIndex);
	
})


