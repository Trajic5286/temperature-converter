"use strict";if(typeof rtads==='undefined')
var rtads;if(typeof rtlots==='undefined')
var rtlots;if(document.readyState!=='loading'){setAds();setAnalytics();}
else{window.addEventListener("DOMContentLoaded",function(){setAds();setAnalytics();});}
function setAds()
{if(rtads==undefined)
rtads=window.innerWidth<980?["adhesive","bottom_01"]:["right_sidebar","bottom_01"];if(rtlots==undefined){if(window.innerWidth<980)
rtlots=[{placement:"adngin-adhesive-0",adUnit:"adhesive"},{placement:"adngin-bottom_01-0",adUnit:"bottom_01",lazyLoad:true},];else
rtlots=[{placement:"adngin-right_sidebar-0",adUnit:"right_sidebar"},{placement:"adngin-bottom_01-0",adUnit:"bottom_01",lazyLoad:true},];}
window.snigelPubConf={"adengine":{"activeAdUnits":rtads,"activeLots":rtlots}}
window.pg=window.pg||{};pg.atq=pg.atq||[];pg.atq.push(function(){pg.loadJS("https://cdn.snigelweb.com/adengine/rapidtables.com/loader.js");});var tcs=document.createElement('script');tcs.async=true;tcs.src="//c.pubguru.net/pg.rapidtables.com.js";document.head.appendChild(tcs);}
function setAnalytics()
{(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-2665076-2','auto');ga('send','pageview');}
function OnPageSearch()
{var csediv=document.getElementsByClassName("gcse-search");if(csediv.length>0){var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cse.google.com/cse.js?cx=79675d3642b30784a";document.head.appendChild(s);}
setTimeout(function(){var e=document.querySelector("#header input");if(e!=null)e.focus();},1000);}
function OnPageShare()
{if(navigator.canShare){navigator.share({title:document.title,url:window.location.href}).then(()=>console.log('Share was successful.')).catch((error)=>console.log('Sharing failed',error));}else{console.log(`Your system doesn't support sharing files.`);}}
function OnSubFb()
{var m="feedback.r";var txt=document.getElementById("fdbkarea").value;var url=window.location.href;var body="Page URL:\r\n"+url;body+="\r\nScreen size:\r\n"+window.screen.width+"x"+window.screen.height;body+="\r\nOS:\r\n"+window.navigator.platform;body+="\r\nUser agent:\r\n"+window.navigator.userAgent;body+="\r\n\r\nMessage:\r\n"+txt;body=encodeURIComponent(body);m+="apidtables@gmail.com";var href="mailto:"+m+"?subject=Page%20Feedback&body="+body;if(txt.length>30)
{var form=document.getElementById("fdbkform");function handleForm(e){e.preventDefault();}form.addEventListener('submit',handleForm);window.location.href=href;document.getElementById("fdbkmsg").textContent="If your mail client is not defined, please copy & send your message to "+m;}}

function creset()
	{
		document.calcform.f.style.backgroundColor = "lavander";
		document.calcform.r.style.backgroundColor = "lavender";
		document.calcform.cel.style.backgroundColor = "lavander";
		document.calcform.cen.style.backgroundColor = "lavander";
		document.calcform.k.style.backgroundColor = "lavander";
	}
	function ConvertFahrenheit() 
	{
		t = document.calcform.f.value;
		if( t=='' ) return;
		t = parseFloat(t);
		if( t<-459.67 ) {
			document.calcform.f.style.backgroundColor = "#ffdddd";
			return;
		}
		creset();
		document.calcform.f.value   = roundnum(t,              4);
		document.calcform.r.value   = roundnum((t+459.67),     4);
		document.calcform.cel.value = roundnum((t-32)*5/9,     4);
		document.calcform.cen.value = roundnum((t-32)*5/9,     4);
		document.calcform.k.value   = roundnum((t+459.67)*5/9, 4);
	}
	function ConvertRankine() 
	{
		t = document.calcform.r.value;
		if( t=='' ) return;
		t = parseFloat(t);
		if( t<0 ) {
			document.calcform.r.style.backgroundColor = "#ffdddd";
			return;
		}
		creset();
		document.calcform.f.value   = roundnum((t-459.67),     4);
		document.calcform.r.value   = roundnum(t,              4);
		document.calcform.cel.value = roundnum((t-491.67)*5/9, 4);
		document.calcform.cen.value = roundnum((t-491.67)*5/9, 4);
		document.calcform.k.value   = roundnum((t*5/9),        4);
	}
	function ConvertCelsius() 
	{
		t = document.calcform.cel.value;
		if( t=='' ) return;
		t = parseFloat(t);
		if( t<-273.15 ) {
			document.calcform.cel.style.backgroundColor = "#ffdddd";
			return;
		}
		creset();
		document.calcform.f.value   = roundnum((t*9/5+32),     4);
		document.calcform.r.value   = roundnum((t+273.15)*9/5, 4);
		document.calcform.cel.value = roundnum(t,              4);
		document.calcform.cen.value = roundnum(t,              4);
		document.calcform.k.value   = roundnum((t+273.15),     4);
	}
	function ConvertCentigrade() 
	{
		t = document.calcform.cen.value;
		if( t=='' ) return;
		t = parseFloat(t);
		if( t<-273.15 ) {
			document.calcform.cen.style.backgroundColor = "#ffdddd";
			return;
		}
		creset();
		document.calcform.f.value   = roundnum((t*9/5+32),     4);
		document.calcform.r.value   = roundnum((t+273.15)*9/5, 4);
		document.calcform.cel.value = roundnum(t,              4);
		document.calcform.cen.value = roundnum(t,              4);
		document.calcform.k.value   = roundnum((t+273.15),     4);
	}
	function ConvertKelvin() 
	{
		t = document.calcform.k.value;
		if( t=='' ) return;
		t = parseFloat(t);
		if( t<0 ) {
			document.calcform.k.style.backgroundColor = "#ffdddd";
			return;
		}
		creset();
		document.calcform.f.value   = roundnum((t*9/5-459.67), 4);
		document.calcform.r.value   = roundnum((t*9/5),        4);
		document.calcform.cel.value = roundnum((t-273.15),     4);
		document.calcform.cen.value = roundnum((t-273.15),     4);
		document.calcform.k.value   = roundnum(t,              4);
	}