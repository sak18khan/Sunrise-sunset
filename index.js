let fetchdata =
{
fetchapi: function(city)
{fetch("https://weatherapi-com.p.rapidapi.com/astronomy.json?q="+city+"", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "41521ada7bmsh98cbfe94fecb727p1895efjsnfd701dec0327",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data=>this.displaydata(data))
},
displaydata : function(data){
	const city =data.location.name;
	const country =data.location.country;
	const timezone =data.location.tz_id;
	const localtime =data.location.localtime;
	const sunrise =data.astronomy.astro.sunrise;
	const sunset = data.astronomy.astro.sunset;
	document.querySelector(".city").innerHTML="you  searched for "+ city;
	document.querySelector(".country").innerHTML="country : "+country;
	document.querySelector(".localtime").innerHTML="current date and time " +localtime;
	document.querySelector(".timezone").innerHTML="timezone : "+timezone;
	document.querySelector(".sunrise").innerHTML="sunrise : "+sunrise;
	document.querySelector(".sunset").innerHTML="sunset : "+sunset;
	document.querySelector("title").innerHTML="you searched for " +city;
	document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+city+"')";
	document.querySelector(".dummy").innerHTML="";

},
search:function(){
	this.fetchapi(document.querySelector(".inputsearch").value);
},
};
document.querySelector("button").addEventListener("click",function(){
	fetchdata.search();
});
document.querySelector(".inputsearch").addEventListener("keyup",function(event){
	if (event.key="13"){
		fetchdata.search();
	}
})
