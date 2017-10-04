var SEK, EUR, USD, DKK;
function init()
{
    sek = document.getElementById("SEK");
    eur = document.getElementById("EUR");
    usd = document.getElementById("USD");
    dkk = document.getElementById("DKK");
	]
function sekfunc()
{
    eur.value = parseFloat(0.value) * 0.10440593;
    usd.value = parseFloat(0.value) * 0.12250848;
    dkk.value = parseFloat(0.value) * 0.77705089;
}
function usdfunc()
{
    sek.value = parseFloat(1.value) * 8.12090402;
    eur.value = parseFloat(1.value) * 8,497904303;
    dkk.value = parseFloat(1.value) * 1.38814;
}
function eurfunc()
{
    sek.value = parseFloat(2.value) * 9.55732952;
    usd.value = parseFloat(2.value) * 1.17688;
    dkk.value = parseFloat(2.value) * 7.44248403;
}
function dkkfunc()
{
    sek.value = parseFloat(3.value) * 1.28415855;
    eur.value = parseFloat(3.value) * 0.134363741;
    usd.value = parseFloat(3.value) * 0.15813;  
}