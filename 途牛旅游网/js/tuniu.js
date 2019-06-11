window.onload = function () {
    jianbianlunbo();
    BannerRight();
    daojishi();
    caidan();
    huaguoImg();
    fanhui();
    Celan();
    InputMain();
    guanggao();
    lvyoujv();
    foot_click();
    foot_lunbo();
    control("content_top_li", "content_content_li", "content_border", "content_foot_hover");
    control("djrw_li","djrw_content","djrw-hover","content-body-main-hover");
}
function caidan() {
    var oHeadBox = document.getElementsByClassName('head-foot-box')[0];
    var oHeadNav = document.getElementsByClassName('head-foot-nav')[0];
    var aHeadLi = oHeadNav.getElementsByTagName('li');
    aHeadLi[1].onmouseover = function () {
        oHeadBox.style.display = "block";
    }
    aHeadLi[1].onmouseout = function () {
        oHeadBox.style.display = "none";
    }
}
function huaguoImg() {
    var oBanner = document.getElementsByClassName('ban-main-bottom')[0];
    var aBannerBottomLi = oBanner.getElementsByTagName('li');
    var aBannerImg = oBanner.getElementsByTagName('img');
    for (var i = 0; i < aBannerBottomLi.length; i++) {
        aBannerBottomLi[i].index = i;
        aBannerBottomLi[i].onmouseover = function () {
            for (var i = 0; i < aBannerBottomLi.length; i++) {
                aBannerBottomLi[i].style.left = 97 * i + "px";
                aBannerBottomLi[i].className = "";
                aBannerImg[i].style.left = 0;
            }
            this.className = "ban-bottom-img";
            aBannerImg[this.index].style.left = -100 + "px";
            for (var j = this.index + 1; j < aBannerBottomLi.length; j++) {
                aBannerBottomLi[j].style.left = j * 97 + 25 + "px";
            }
        }
    }
}
function jianbianlunbo() {
    var oBan_Top = document.getElementsByClassName('ban-main-top')[0];
    var aBan_TopDd = oBan_Top.getElementsByTagName('dd');
    var aBan_TopSpan = oBan_Top.getElementsByTagName('span');
    var oBan = document.getElementsByClassName('banner')[0];
    var aBan_Li = oBan.firstElementChild.children;
    var num = 0;
    var time_Btop;
    changeImg();
    function changeImg() {
        for (var i = 0; i < aBan_Li.length; i++) {
            aBan_Li[i].style.opacity = 0;
            aBan_TopDd[i].className = "";
        }
        aBan_Li[num].style.opacity = 1;
        aBan_TopDd[num].className = "dd-style";
    }
    for (var i = 0; i < aBan_TopDd.length; i++) {
        aBan_TopDd[i].index = i;
        aBan_TopDd[i].onmouseover = function () {
            num = this.index;
            changeImg();
        }
    }
    aBan_TopSpan[1].onclick = function () {
        num++;
        if (num == aBan_Li.length) {
            num = 0;
        }
        changeImg();
    }
    aBan_TopSpan[0].onclick = function () {
        num--;
        if (num < 0) {
            num = aBan_Li.length - 1;
        }
        changeImg();
    }
    time_Btop = setInterval(function () {
        num++;
        if (num == aBan_Li.length) { num = 0; }
        changeImg();
    }, 3000)
    oBan_Top.onmouseover = function () {
        clearInterval(time_Btop);
    }
    oBan_Top.onmouseout = function () {
        time_Btop = setInterval(function () {
            num++;
            if (num == aBan_Li.length) { num = 0; }
            changeImg();
        }, 3000)
    }
}
function BannerRight() {
    var oBanRight = document.getElementsByClassName('ban-right-banner')[0];
    var oBanRightUl = oBanRight.getElementsByTagName('ul')[0];
    var timer;
    var Htop = 66;
    var newFirstLi = oBanRightUl.firstElementChild.cloneNode(true);
    var newlastLi = oBanRightUl.lastElementChild.cloneNode(true);
    oBanRightUl.appendChild(newFirstLi);
    oBanRightUl.insertBefore(newlastLi, oBanRightUl.firstElementChild);
    timer = setInterval(Top, 50);
    function Top() {
        Htop += 1;
        oBanRightUl.style.top = -Htop + "px";
        if (Htop == oBanRightUl.offsetHeight - 67) {
            Htop = 66;
        }
    }
    oBanRight.onmouseover = function () {
        clearInterval(timer);
    }
    oBanRight.onmouseout = function () {
        timer = setInterval(Top, 50);
    }
}
function daojishi() {
    var Djs = document.getElementsByClassName('djs');
    var DjsSpanA = Djs[0].children;
    var DjsSpanB = Djs[1].children;
    var DjsSpanC = Djs[2].children;
    var DjsSpanD = Djs[3].children;
    var timer;
    timer = setInterval(function () {
        var Time = new Date();
        var newTimeA = new Date(2019, 11, 31, 0, 0, 0);
        var newTimeB = new Date(2019, 4, 1, 0, 0, 0);
        var newTimeC = new Date(2019, 5, 15, 0, 0, 0);
        var newTimeD = new Date(2019, 9, 1, 0, 0);
        var sjA = Math.floor((newTimeA - Time) / 1000);
        var sjB = Math.floor((newTimeB - Time) / 1000);
        var sjC = Math.floor((newTimeC - Time) / 1000);
        var sjD = Math.floor((newTimeD - Time) / 1000);
        if (sjA < 0) { sjA = 0; }
        if (sjB < 0) { sjB = 0; }
        if (sjC < 0) { sjC = 0; }
        if (sjD < 0) { sjD = 0; }
        var Arr = new Array();
        var Brr = new Array();
        var Crr = new Array();
        var Drr = new Array();
        Arr[0] = Math.floor(sjA / 3600 / 24);
        Arr[1] = Math.floor((sjA / 3600) % 24);
        Arr[2] = Math.floor((sjA / 60) % 60);
        Brr[0] = Math.floor(sjB / 3600 / 24);
        Brr[1] = Math.floor((sjB / 3600) % 24);
        Brr[2] = Math.floor((sjB / 60) % 60);
        Crr[0] = Math.floor(sjC / 3600 / 24);
        Crr[1] = Math.floor((sjC / 3600) % 24);
        Crr[2] = Math.floor((sjC / 60) % 60);
        Drr[0] = Math.floor(sjD / 3600 / 24);
        Drr[1] = Math.floor((sjD / 3600) % 24);
        Drr[2] = Math.floor((sjD / 60) % 60);
        for (var i = 0; i < DjsSpanA.length; i++) {
            DjsSpanA[i].innerHTML = Arr[i];
            DjsSpanB[i].innerHTML = Brr[i];
            DjsSpanC[i].innerHTML = Crr[i];
            DjsSpanD[i].innerHTML = Drr[i];
        }
    }, 1000)

}
function fanhui() {
    var oFan = document.getElementById('fhdb');
    var timer;
    oFan.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            document.documentElement.scrollTop -= document.documentElement.scrollTop / 20;
            if (document.documentElement.scrollTop == 0) {
                document.documentElement.scrollTop = 0;
                clearInterval(timer);
            }
        }, 10)

    }
}
function Celan() {
    var oCelan = document.getElementsByClassName('left-celan')[0];
    var oCli = oCelan.getElementsByTagName('li');
    var oCe = document.getElementsByClassName('CeLan');
    var ColorArr = ["rgb(215, 69, 104)", "rgb(81, 122, 192)", "rgb(58, 168, 96)", "rgb(225, 91, 56)", "rgb(8, 175, 177)", "rgb(239, 173, 8)", "rgb(225, 91, 56)", "rgb(225, 91, 56)", "rgb(239, 173, 8)", "rgb(104, 163, 46)", "rgb(147, 94, 178)", "rgb(46, 153, 0)", "#f80"];
    var timer;
    var num;
    for (var i = 0; i < oCli.length; i++) {
        oCli[i].index = i;
        oCli[i].onclick = function () {
            for (var i = 0; i < oCli.length; i++) {
                oCli[i].className = "";
                oCli[i].style.background = "#fff";
            }
            oCli[this.index].className = "Celan";
            var H = oCe[this.index].offsetTop;
            var Hi = H - document.documentElement.scrollTop;
            clearInterval(timer);
            timer = setInterval(function () {
                Height(H, Hi);
            }, 10)
        }

    }
    window.onscroll = function () {
        if (document.documentElement.scrollTop > oCe[0].offsetTop - 50) {
            oCelan.style.transition = 0.4 + "s";
            oCelan.style.visibility = "visible";
            oCelan.style.marginTop = 80 + "px"
            oCelan.style.opacity = "1";
        }
        else if (document.documentElement.scrollTop < oCe[0].offsetTop - 50) {
            oCelan.style.transition = 0.1 + "s";
            oCelan.style.visibility = "hidden";
            oCelan.style.marginTop = 0;
            oCelan.style.opacity = 0;
        }
        for (var i = 0; i < oCli.length; i++) {
            if (document.documentElement.scrollTop > oCe[i].offsetTop - 50) {
                num = i;
                changeB();
            }
        }

    }
    function changeB() {
        for (var i = 0; i < oCli.length; i++) {
            oCli[i].className = "";
            oCli[i].style.background = "#fff";
        }
        oCli[num].className = "Celan";
        oCli[num].style.background = ColorArr[num];
    }
    function Height(H, Hi) {
        if (Hi > 0) {
            document.documentElement.scrollTop += (H - document.documentElement.scrollTop) / 20;
            if (parseInt(document.documentElement.scrollTop) >= H - 20) {
                document.documentElement.scrollTop = H - 20;
                clearInterval(timer);
            }
        }
        else if (Hi < 0) {
            document.documentElement.scrollTop += (H - document.documentElement.scrollTop) / 20;
            if (parseInt(document.documentElement.scrollTop) <= H) {
                document.documentElement.scrollTop = H;
                clearInterval(timer);
            }
        }
    }
}
function InputMain() {
    var Span = document.getElementsByClassName('Input_main')[0];
    var SpanUl = Span.getElementsByTagName('ul')[0];
    var SpanI = Span.getElementsByTagName('i')[0];
    var SpanLi = Span.getElementsByTagName('li');
    for (var i = 0; i < SpanLi.length; i++) {
        SpanLi[i].onclick = function () {
            SpanI.innerText = this.innerText;
            SpanUl.style.display = "none";
        }
    }
    Span.onmouseover = function () {
        SpanUl.style.display = "block";
    }
    Span.onmouseout = function () {
        SpanUl.style.display = "none";
    }
}
function guanggao() {
    var ON = document.getElementsByClassName('celanon')[0];
    var OFF = document.getElementsByClassName('off')[0];
    var bgcelan = document.getElementsByClassName('bgcelan')[0];
    var timer;
    ON.onclick = function () {
        this.style.left = -120 + "px";
        clearTimeout(timer);
        timer = setTimeout(function () {
            bgcelan.style.left = 0;
            bgcelan.style.transition = 0.5 + 's';
        }, 200)
    }
    OFF.onmouseover = function () {
        this.style.top = 5 + "px";
        this.style.transform = "rotate(90deg)";
    }
    OFF.onmouseout = function () {
        this.style.top = 4 + "px";
        this.style.transform = "rotate(-90deg)";
    }
    OFF.onclick = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            ON.style.left = -50 + "px"
            ON.style.transition = 0.2 + 's'
        }, 300)
        bgcelan.style.left = -100 + '%';
        bgcelan.style.transition = 0.2 + 's';
    }
}
function lvyoujv() {
    var Banner = document.getElementsByClassName('foot-main-banner')[0];
    var Bul = Banner.getElementsByTagName('ul')[0];
    var num = 0;
    setInterval(function () {
        num += 90;
        if (num == Bul.offsetHeight - 90) {
            num = 0;
        }
        Bul.style.top = -num + "px";
    }, 2000)
}
function foot_click() {
    var oK = document.getElementsByClassName('foot-K-right')[0];
    var oB = document.getElementsByClassName('foot-K-botton')[0];
    var oKb = document.getElementsByClassName('foot-K-right-two')[0];
    oB.onclick = function () {
        oK.style.display = "none";
        oKb.style.display = "block";
    }
}
function foot_lunbo() {
    var oF = document.getElementsByClassName('foot-I-ul')[0];
    var oul = oF.getElementsByTagName('ul')[0];
    var ali = oF.getElementsByTagName('li');
    var w = 0;
    var timer;
    var width = 0;
    var j = 0;
    for (var i = 0; i < ali.length; i++) {
        w += ali[i].offsetWidth;
    }
    oul.style.width = w + 1 + 'px';
    timer = setInterval(function () {
        if (j > ali.length - 1) {
            j = 0;
        }
        width += ali[j].offsetWidth;
        if (width > (w - ali[ali.length - 1].offsetWidth)) {
            width = 0;
        }
        oul.style.left = -width + "px";
        j++;
    }, 3000)
}
function addClass(elem, value) {
    if (!elem.className) {
        elem.className = value; //如果元素没有class，直接加
    } else {
        var newClassName = elem.className;//如果元素已有class，追加
        newClassName += " ";
        newClassName += value;
        elem.className = newClassName;
    }
}
function removeClass(elem, value) {
    var newClassName = elem.className;
    if (newClassName.indexOf(value)) {//查找元素是否有需要删除的class
        elem.className = newClassName.replace(value, " ");//如果有，则替换掉
    }
}
function control(aLi, bLi, aclass, bclass) {
    var aaLi = document.getElementsByClassName(aLi)
    var abLi = document.getElementsByClassName(bLi);
    for (var i = 0,len=aaLi.length; i < len; i++) {
        aaLi[i].index = i;
        aaLi[i].onclick = function () {
            for (var j = 0; j < len; j++) {
                removeClass(aaLi[j], aclass);
                removeClass(abLi[j], bclass);
            }
            addClass(this, aclass);
            addClass(abLi[this.index], bclass);
        }
    }
}