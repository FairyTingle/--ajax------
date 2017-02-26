/**
 * Created by Administrator on 2017/2/20.
 */
/************************颜色随机生成****************************************************/
var next = "";
var i = Math.floor(Math.random()*16);//0-15
var color1 = '';var color2 = '';
var color3 = '';var color4 = '';

var xmlhttp, jsonstr;
var text = document.getElementById("text");



if (window.XMLHttpRequest)xmlhttp = new XMLHttpRequest();
else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open("GET", "quote.txt", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {jsonstr = xmlhttp.responseText;
    // alert(jsonstr.valueOf());//要用valueof（）才行**********************************************************问题
    quoteObj = JSON.parse(jsonstr);}
}
/*********************************获得随机颜色和随机名言*******************/
function getQuote() {
    while (color1.length < 6) {
        color1 += '0123456789abcde'[Math.floor(Math.random() * 15)];
        color2 += '0123456789abcde'[Math.floor(Math.random() * 15)];
        color3 += '0123456789abcdef'[Math.floor(Math.random() * 16)];
        color4 += '0123456789abcdef'[Math.floor(Math.random() * 16)];
    }
//    var color = parseInt(color2,16);alert(color);
    color1 = '#' + color1;
    color2 = '#' + color2;
    color3 = '#' + color3;
    color4 = '#' + color4;

//   setTimeout("document.getElementById('btnColor0').style.backgroundColor = color1;" +
//       "document.getElementById('btnColor0').style.backgroundColor = color1;","1000");
    document.getElementById("btnColor0").style.backgroundColor = color1;
    document.getElementById("btnColor1").style.backgroundColor = color1;
    document.getElementById("btnColor2").style.backgroundColor = color1;


    document.getElementById("divColor0").style.backgroundColor = color2;
    document.getElementById("divColor1").style.backgroundColor = color2;

    document.getElementById("divColor2").style.backgroundColor = color3;
    document.getElementById("divColor3").style.backgroundColor = color3;

    document.getElementById("divColor4").style.backgroundColor = color4;

    color1 = '';
    color3 = '';
    color2 = '';
    color4 = '';
    /**********************随机取得名言************************************************************/

    var i = Math.floor(Math.random() * 41);//0-40
    if(quoteObj[i]!=undefined)
    text.firstChild.nodeValue =quoteObj[i];
    else text.firstChild.nodeValue ="成功的路很直很直，也很宽很宽！但，我还是不断地走弯！最后只不过是转了个圈！";
}
/************************************************************share*************************************************************************************************************/
function ShareWeibo(){
      var text= document.getElementById("text");
      var good =text.firstChild.nodeValue;
    var shareqqstring="http://v.t.qq.com/share/share.php?title="+good+"--看到这句话我非常有感触，你呢？";
    window.open(shareqqstring,'newwindow','height=100,width=100,top=100,left=100');
}
function ShareTwitter(){
    var text= document.getElementById("text");
    var good =text.firstChild.nodeValue;
    var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+good+"--看到这句话我非常有感触，你呢？";
    window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
}









