var sig1 = document.getElementById('Siguiente1');
var footer1 = document.getElementById('footer1');
var pag1 = document.getElementById('page0');
var sig2 = document.getElementById('Siguiente2');
var footer2 = document.getElementById('footer2');
var pag2 = document.getElementById('page1');
var sig3 = document.getElementById('Siguiente3');
var footer3 = document.getElementById('footer3');
var pag3 = document.getElementById('page2');
var sig4 = document.getElementById('Siguiente4');
var footer4 = document.getElementById('footer4');
var pag4 = document.getElementById('page3');
var sig5 = document.getElementById('Siguiente5');
var footer5 = document.getElementById('footer5');
var pag5 = document.getElementById('page4');
console.log('funca js');
function Siguiente1() {
    footer1.style.display = 'none'
    footer2.style.display = 'block'
    pag1.style.display = 'none'
    pag2.style.display = 'block'
}

function Siguiente2() {
    footer2.style.display = 'none'
    footer3.style.display = 'block'
    pag2.style.display = 'none'
    pag3.style.display = 'block'
}

function Atras2() {
    footer2.style.display = 'none';
    footer1.style.display = 'block';
    pag2.style.display = 'none';
    pag1.style.display = 'block';
}

function Siguiente3() {
    sig4.style.display = 'block'
    sig3.style.display = 'none'
    footer3.style.display = 'none'
    footer4.style.display = 'block'
    pag3.style.display = 'none'
    pag4.style.display = 'block'
}

function Atras3() {
    sig3.style.display = 'block'
    sig2.style.display = 'none'
    footer3.style.display = 'none';
    footer2.style.display = 'block';
    pag3.style.display = 'none';
    pag2.style.display = 'block';
}

function Siguiente4() {
    sig4.style.display = 'none'
    sig5.style.display = 'block'
    footer4.style.display = 'none'
    footer5.style.display = 'block'
    pag4.style.display = 'none'
    pag5.style.display = 'block'
}

function Atras4() {
    sig4.style.display = 'none';
    sig3.style.display = 'block';
    footer4.style.display = 'none';
    footer3.style.display = 'block';
    pag4.style.display = 'none';
    pag3.style.display = 'block';
}
function Siguiente5() {
    sig5.style.display = 'none'
    footer4.style.display = 'none'
    footer5.style.display = 'block'
    pag5.style.display = 'block'
    pag4.style.display = 'none'
}

function Atras5() {
    sig5.style.display = 'none';
    sig4.style.display = 'block';
    footer5.style.display = 'none';
    footer4.style.display = 'block';
    pag5.style.display = 'none';
    pag4.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", e => {
    console.log('funca DOM')
    document.getElementById('Siguiente1').addEventListener('click', function () {
        Siguiente1()
    })
    document.getElementById('Siguiente2').addEventListener('click', function () {
        Siguiente2()
    })
    document.getElementById('Anterior2').addEventListener('click', function () {
        Atras2()
    })
    document.getElementById('Siguiente3').addEventListener('click', function () {
        Siguiente3()
    })
    document.getElementById('Anterior3').addEventListener('click', function () {
        Atras3()
    })
    document.getElementById('Siguiente4').addEventListener('click', function () {
        Siguiente4()
    })
    document.getElementById('Anterior4').addEventListener('click', function () {
        Atras4()
    })
    document.getElementById('Siguiente5').addEventListener('click', function () {
        Siguiente5()
    })
    document.getElementById('Anterior5').addEventListener('click', function () {
        Atras5()
    })






})