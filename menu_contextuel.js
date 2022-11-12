// programation vanilla.js
// on va charger notre script à l'ouverture de la page
window.onload = () => { // quand on fait l'option flechee ça nous permet de pas ecrire function
    // on a besoin d'ecouter le clique droit peut importe ou nous sommes sur la page
    //menu-contextuel
    //document = page web
    document.addEventListener("contextmenu", function(event){
        //on va ouvrir le menu pour empecher le menu par default de s'ouvrir
        event.preventDefault();

        // on va recuperer l'ID du menu
        let menu = document.querySelector("#context-menu");
        // on va retirer la "class active"
        menu.classList.toggle("active");

        //on ouvre le menu ou se trouve la souris
        //on va recuperer les coordonnees geographique de la souris (où elle se situe)
        let posX = event.clientX; // le clientX c'est là ou se trouve la souris sur l'axe X
        let posY = event.clientY; 

        //on va calculer la position du menu pour eviter qu'il depasse en H, en B, à G et a D
        //la position a droite -(moins) la largeur du menu = 25px 
        let maxX = window.innerWidth - menu.clientWidth - 25;
        //la position Y la plus basse  
        let maxY = window.innerHeight - menu.clientHeight - 25;
        
        if (posX > maxX){
            posX = maxX; 
        }
        if (posY > maxY){
            posY = maxY;
        }
        //on positionne le menu en fonction du click
        menu.style.top = posY + "px";  // haut = Y
        menu.style.left = posX + "px"; // gauche = X      
    });
    //ecouter au click (gauche) pour retirer le menu
    document.addEventListener("click", function(){
        document.querySelector("#context-menu").classList.remove("active");
    });    
}