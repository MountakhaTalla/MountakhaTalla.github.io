//replace the content of h1
/*
var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello World !';²
var content = document.querySelector('p');
content.textContent = 'Coucou les amis développeurs . Je m\'initie à JS';*/

//fonction autoappelante
/*(document.querySelector.onclick = function(){
	alert('Aie !!! Arrêtez de cliquer !!!!! :)');
}
	)();
*/

/*var monImage = document.querySelector('img');

monImage.onclick = function(){
	
var maSrc = monImage.getAttribute('src');

if(maSrc === 'images/firefox-icon.png'){
	
	monImage.setAttribute('src', 'images/occasioncar.jpg');
}else{
	monImage.setAttribute('src', 'firefox-icon.png');
}
}*/

var monTitre = document.querySelector('h1');

function definirUtilisateur(){
	
	var monNom = prompt('Veuillez entrer votre nom SVP !')
	localStorage.setItem('Nom', monNom);
	monTitre.textContent = 'Bienvenue dans vore Site Web ' +  monNom;
}

if(!localStorage.getItem('Nom')){
definirUtilisateur();
}
else{
	var nomEnregistrer = localStorage.getItem('Nom');
		monTitre.textContent = 'Bienvenue dans votre Site web ' + nomEnregistrer;
}


monBouton.onclick = function(){
	var monBouton = document.querySelector('button');
	definirUtilisateur(); 
}
