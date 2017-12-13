$(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()-900){
        $('.MoveUp').addClass('active');
    } else {
        $('.MoveUp').removeClass('active');
    }
});

$('.MoveUp').click(function () {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

var iframe = document.getElementById('frame_info');
var img1 = document.getElementById('funk_img');
var img2 = document.getElementById('for_img');
var img12 = document.getElementById('funk_img2');
var img22 = document.getElementById('for_img2');

$("#zah_info").on("click", function () {
    document.getElementById('info_title').innerHTML = "Загальна інформація";
    iframe.setAttribute("src", "doc/info.pdf");
});

$("#ant_algo").on("click", function () {
    document.getElementById('info_title').innerHTML = "Мурашиний алгоритм";
    iframe.setAttribute("src", "doc/ant.pdf");
});

$("#bee_algo").on("click", function () {
    document.getElementById('info_title').innerHTML = "Бджолиний алгоритм";
    iframe.setAttribute("src", "doc/bee.pdf");
});

$("#bats_algo").on("click", function () {
    document.getElementById('info_title').innerHTML = "Алгоритм кажанів";
    iframe.setAttribute("src", "doc/bats.pdf");
});

var sfera = document.getElementById('sfera');
var elip = document.getElementById('elip');
var shef = document.getElementById('shef');
var rozen = document.getElementById('rozen');
var rastr = document.getElementById('rastr');
var sel = document.getElementById('sel');

var sfera2 = document.getElementById('sfera2');
var elip2 = document.getElementById('elip2');
var shef2 = document.getElementById('shef2');
var rozen2 = document.getElementById('rozen2');
var rastr2 = document.getElementById('rastr2');
var sel2 = document.getElementById('sel2');



$( sel ).change(
    function () {
       
        if (sfera.selected) {
            img1.setAttribute("src", "img/sfera.png");
            img2.setAttribute("src", "img/sfer.gif");
        }

        if (elip.selected) {
             img1.setAttribute("src","img/elips.gif");
             img2.setAttribute("src", "img/elip_f.png");
        }

        if (shef.selected) {
             img1.setAttribute("src", "img/shafel.png");
             img2.setAttribute("src", "img/shafel_f.png");
        }

        if (rozen.selected) {
             img1.setAttribute("src", "img/rozenbr.png");
             img2.setAttribute("src", "img/rozenbr_f.png");
        }

        if (rastr.selected) {
             img1.setAttribute("src", "img/rastrigin.png");
             img2.setAttribute("src", "img/rastrigin_f.png");
        }

    })
.change();

$( sel2 ).change(
    function () {
       
        if (sfera2.selected) {
            img12.setAttribute("src", "img/sfera.png");
            img22.setAttribute("src", "img/sfer.gif");
        }

        if (elip2.selected) {
             img12.setAttribute("src","img/elips.gif");
             img22.setAttribute("src", "img/elip_f.png");
        }

        if (shef2.selected) {
             img12.setAttribute("src", "img/shafel.png");
             img22.setAttribute("src", "img/shafel_f.png");
        }

        if (rozen2.selected) {
             img12.setAttribute("src", "img/rozenbr.png");
             img22.setAttribute("src", "img/rozenbr_f.png");
        }

        if (rastr2.selected) {
             img12.setAttribute("src", "img/rastrigin.png");
             img22.setAttribute("src", "img/rastrigin_f.png");
        }

    })
.change();



//----------------------------------------------------------------------------------------
var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');

    tabContent2 = document.getElementsByClassName('tabContent2');
    tab2 = document.getElementsByClassName('tab2');
   


    hideTabsContent(1);
    hideTabsContents2(1);

}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}

document.getElementById('tabs2').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab2') {
       for (var i=0; i<tab2.length; i++) {
           if (target == tab2[i]) {
              showTabsContents2(i);
              break;
           }
       }
    }
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function hideTabsContents2(a) {
    for (var i=a; i<tabContent2.length; i++) {
        tabContent2[i].classList.remove('show');
        tabContent2[i].classList.add("hide");
        tab2[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

function showTabsContents2(b){
    if (tabContent2[b].classList.contains('hide')) {
        hideTabsContents2(0);
        tab2[b].classList.add('whiteborder');
        tabContent2[b].classList.remove('hide');
        tabContent2[b].classList.add('show');
    }
}