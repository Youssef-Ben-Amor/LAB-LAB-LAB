function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  var elem=document.querySelector('#qty').value;
  var titre=document.querySelector('#titre').value;
  var contenu=document.querySelector('#contenu').value;
  var changer=document.querySelector('#demo');
  changer.textContent = "";
  for(var i=0;i<elem;i++)
  {  
  var h2=document.createElement('h2');
  var p=document.createElement('p')
  h2.textContent=titre+" "+i;
  p.textContent=contenu+" "+i;
  changer.append(h2);
  changer.append(p);
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  var p= document.querySelectorAll('#demo > p');
  var couleur=document.querySelector('#couleur').value;
  p.forEach(p => {p.style.color=couleur;});
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  var btn= document.querySelectorAll('.btn');
  var boutton=document.querySelector('#btnClass').value;
  btn.forEach(btn => { var bt=boutton.split(" ");bt.forEach(bt=>{btn.classList.add(bt);})});
}