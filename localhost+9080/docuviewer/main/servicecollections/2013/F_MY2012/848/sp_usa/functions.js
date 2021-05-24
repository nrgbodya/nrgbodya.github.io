function ForceError(msg, url, lno) {
	return true;
}

window.onerror = ForceError;


var		C_TAVOLA			= 0;
var		C_NOTE				= 1;
var		C_POS				= 2;
var		C_CODICE			= 3;
var		C_ITA				= 4;
var		C_ING				= 5;
var		C_FRA				= 6;
var		C_TED				= 7;
var		C_SPA				= 8;
var		C_VALIDITA			= 9;
var		C_Q					= 10;

var		params				= GetParams();
var		lingua				= GetLingua();
//var		lingua_num			= getVar("lingua_num");
var		lingua_str			= getVar("lingua_str");
var		lingua_domain		= getVar("lingua_domain");

/*
alert(lingua_num);
alert(lingua_str);
alert(lingua_domain);
*/

function GetTavDraw(s)
{
	var			i;
	
	for(i = 0; i < tavole.length; i++) {
		if(tavole[i][0] == s) {
			return tavole[i][2];
		}
	}
	
	return "NOT FOUND";
}


function GetLingua()
{
	var		s = getVar("lingua");
	
	if(s == "")	{
		setVar("lingua", 0);
		return 0;
	}
	
	return parseInt(s);
}


function GoPage(dst)
{
	window.parent.location = dst;
}


function GetInterfaceDesc(x)
{
/*	var			i;
		
	for(i = 0; i < desc_intr.length; i++) {
		if(desc_intr[i][0] == x) {
			return desc_intr[i][lingua];
		}
	}
	
	return "";*/
	
	return x;
}


function GetParam(name)
{
	if(name == "")	{	return "";	}
	
	var		b	= params.indexOf("&" + name);
	
	if(b == -1)		{	return "";	}
	
	return params.substring(b + 1 + name.length + 1, params.indexOf("&", b + 1));
}



function GetParams()
{
	var		s	= new String(window.parent.location);
	var		pos	= s.indexOf("?");
	
	if(pos == -1)	{	return "";	}
	
	return "&" + s.substring(pos + 1, s.length) + "&";
}


function GetParamsFrame()
{
	var		s	= new String(document.location);
	var		pos	= s.indexOf("?");
	
	if(pos == -1)	{	return "";	}
	
	return "&" + s.substring(pos + 1, s.length) + "&";
}


function SetInnerText(id, s)
{
	var		obj = document.getElementById(id);
	
	if(obj == null)	{	return;	}
	
	obj.innerText = s;
}


function SetInnerHTML(id, s)
{
	var		obj = document.getElementById(id);
	
	if(obj == null)	{	return;	}
	
	obj.innerHTML = s;
}



function StringToHex(s)
{
	var		hx	= "0123456789ABCDEF";
	var		i;
	var		c;
	var		r	= "";
	
	for(i = 0; i < s.length; i++) {
		c = s.charCodeAt(i);

		r += hx.charAt((c - (c % 16)) / 16) + hx.charAt(c % 16);
	}
	
	return r;
}

function HexToString(s)
{
	// LA STRINGA DI INGRESSO DEVE ESSERE DI LUGHEZZA PARI SENZA I "0x" iniziali
	var		hx	= "0123456789ABCDEF";
	var		i;
	var		hi_byte, lo_byte;
	var		r	= "";
	
	if(s.length % 2)	{	return "No HEX Par (" + s.length + ")";	}
	
	for(i = 0; i < s.length; i += 2) {
		hi_byte = hx.indexOf(s.charAt(i));
		lo_byte = hx.indexOf(s.charAt(i + 1));
		
		if(hi_byte == -1)	{	return "No HEX String (char " + i + ")" ;		}
		if(lo_byte == -1)	{	return "No HEX String (char " + (i + 1) + ")" ;	}
		
		r += String.fromCharCode((hi_byte * 16) + lo_byte);
	}
	
	return r;
}


// --- COOKIES ---
function setVar(name, value) {
	var today = new Date();
	var expires = new Date();
	expires.setTime(today.getTime() + 1000*60*60*24*365);

	setCookie(name, value, expires);
}

function getVar(s) {
	return getCookie(s);
}


function setCookie(name, value, expire) {
	var		s = name + "=" + escape(value) + ((expire == null) ? ";" : ("; expires=" + expire.toGMTString()));
	
	document.cookie = s;
}



function getCookie(Name) {
	var search = Name + "=";
	
	if (document.cookie.length > 0) { // if there are any cookies
		offset = document.cookie.indexOf(search);
		if (offset != -1) { // if cookie exists
			offset += search.length;
			
			// set index of beginning of value
			end = document.cookie.indexOf(";", offset);
			
			// set index of end of cookie value
			if (end == -1) {
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(offset, end));
		} else {
			return "";
		}
	} else {
		return "";
	}
}
