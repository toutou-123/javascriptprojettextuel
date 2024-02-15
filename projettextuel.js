const prompt = require("prompt-sync")()

let choice = 0
let victory = 0
let fail = 0
let poison = 0
let toxic = 0
let reality = 0
while (victory != 1) {
    console.log("Bien le bonjour ! Vous arrivez devant un château.");
    console.log(choice = prompt('voulez-vous : passez par la porte (1)? ou utiliser la fissure dimensionnelle derrière un buisson (2)?')); // choix 1
    if (choice == 1) { // partie toxic
        console.log("vous vous retrouvez dans le hall mais un magicien qui garde le château vous remarque et vous propose un deal");
        console.log("'C'est un bien interréssant parchemin que tu as sur toi donne le moi et tu seras sain et sauf'");
        console.log(choice = prompt("Voulez-vous accepter le deal (1)? ou utiliser le parchemin sur le magicien (2)?")); //choix 2
        if (choice == 1) {
            console.log("je te remercie pour ce parchemin aventurier, en échange je t'offre une amulette magique.");
            console.log("Vous décidez de porter l'amulette magique et vous vous sentez protégé par l'objet");
            toxic = 1
            console.log("Le magicien vous montre un chemin rapide vers le maître du château mais vous voyez des escaliers aux loin");
            console.log(choice = prompt("faites vous confiance au magicien (1)? ou non (2)?")); // choix 3
            if (choice == 1) {
                console.log("Vous décidez de prendre le chemin pointé par le magicien. Au bout de quelques marches montés, vous vous trouvez devant un simple couloir avec des armures exposés.");
                console.log(choice = prompt("la porte se trouve au bout du couloir et rien semble vous en empêcher. Voulez vous y aller tranquillement (1)? ou restez sur vos gardes (2) ?")); // choix 4
                if (choice == 1) {
                    console.log("Vous arrivez sans problème au bout du couloir et en ouvrant la porte, vous vous trouvez devant le maître du château endormi sur son trône.");
                    console.log("Vous remarquez que des pièges se trouvent un peu partout dans la salle.");
                    console.log("YOOLLOOOOOO (1)? ou bien en mode discret (2)?"); // choix 5
                    if(choice == 1){
                        console.log("Vous décidez de foncer tête baissée mais mais piège s'ouvre sous vos pieds, vous plongeant dans un puit à pics.");
                        console.log("vous êtes mort si proche de la fin");
                        fail = fail + 1
                    }
                    else if(choice == 2){
                        console.log("Vous décidez d'éviter les pièges mais au fur et à mesure que vous progressez, vous vous transformez en statue.");
                        console.log("Confus vous regardez les alentours, par crainte d'avoir activé un piège puis vous remarquez les statues portant toutes la même amulette que vous.");
                        console.log("Vous devenez une des statues, signifiant la fin de votre aventure");
                        fail = fail + 1
                        console.log("Vous êtes mort" + fail + "fois.");
                        console.log("petit secret : écrivez dès le début du jeu 'surprise'");
                        if (fail == 0){
                            console.log("soit vous êtes un champion, ou bien vous y avez déjà joué");
                        }
                        if (fail >= 5){
                            console.log("vous vous êtes plutôt bien débrouillé bien joué");
                        }
                        if (fail >= 10){
                            console.log("vous avez bien galéré à ce que je vois");
                        }
                        if (fail >= 15){
                            console.log("ça va ? pas trop ragé ?");
                        }
                        if (fail >= 100){
                            console.log("vous avez apprécié la surprise ? XD");
                        }
                        if (poison >= 0){
                            console.log("vous avez apprécié le goût du saussiçon sinon ?");
                        }
                        if (toxic >= 0){
                            console.log("il ne faut jamais prendre les trucs des inconnus");
                        }
                        if (reality >= 0){
                            console.log("vous voulez peut être laissé un avis ?");
                            console.log(prompt("votre avis (gardez le un peu court, j'aime pas les listes) :"));
                        }
                        victory = 1
                    }
                    else {
                        console.log("choix invalide. rentrez un choix valide");
                    }
                }
                else if (choice == 2){
                    console.log("vous décidez de vous déplacer lentement en état de paranoïa en pensant qu'un garde se camoufle parmi les armures exposées.");
                    console.log("vous êtes tellement en paranoïa que vous faites une crise cardiaque à la moitié du chemin");
                    fail = fail + 1
                }
                else {
                    console.log("choix invalide. rentrez un choix valide");
                }
            }
            else if(choice ==2){
                console.log("Vous dites au magicien que vous allez prendre les escaliers principaux. en arrivant au bout vous finissez brûlé par un piège magique.");
                console.log("avant d'activer le piège, vous avez juré avoir entendu la musique Fireball");
                fail = fail + 1
            }
            else {
                console.log("choix invalide. rentrez un choix valide");
            }
        }
        else if (choice == 2) {
            console.log("vous décidez d'utiliser le parchemin en espérant que cela le tue, mais avant que vous ayez pu posez vos yeux");
            console.log("sur le parchemin il se met à crier 'PELINUS EXPLOSION'. vous êtes mort dans la plus grandes des souffrances qui existe.");
            fail = fail + 1
        }
        else {
            console.log("choix invalide. rentrez un choix valide");
        }
    }
    else if (choice == 2) { // partie normale
        console.log("en traversant la fissure dimensionnelle, vous vous retrouvez téléporter dans la salle des armes et un aveugle vous demande 'Halte, qui va là ?'.");
        console.log(choice = parseInt(prompt("voulez-vous : frapper la personne aveugle (1)? ou dire un mensonge (2)?"))); // choix 2
        if (choice == 1) {
            console.log("Vous décidez de le frapper pour éviter qu'il alerte les gardes. Dès le premier coup il se cogne contre le mur et se retrouve assommé");
            console.log("En sortant, vous vous trouvez devant 2 portes.");
            console.log(choice = parseInt(prompt("voulez-vous : prendre la porte à droite (1)? ou la porte à gauche (2)? ou bien ??? (3) ?"))); // choix 3
            if (choice == 1) {
                console.log("en prenant la porte de droite, vous vous trouvez devant une salle gardé par un sphinx");
                console.log("'répond à ma question et tu pourras passer, répond faux et la mort t'attendra.'");
                console.log("'what's 9+10 ?'");
                console.log(choice = prompt("19 (1)? ou 21 (2)?")); //choix 4
                if (choice == 2){
                    console.log("'you stupid'");
                    console.log("vous êtes mort");
                    fail = fail + 1
                }
                else if (choice == 1){
                    console.log("'bonne réponse, vous pouvez passer.'");
                    console.log("en passant le sphinx, vous vous retrouvez devant le maître du château endormi sur son trône");
                    console.log(choice = prompt("voulez vous en finir le plus vite possible (1)? ou prendre votre temps (2)?")); //choix 5
                    if (choice = 1) {
                        console.log("en fonçant sur le propriétaire, vous vous retrouvez stoppé par une flèche tiré dans votre jambe : vous avez activé un des nombreux pièges présents.");
                        console.log("dans votre chute, vous activez un nombre de pièges impressionnant, vous tuant violemment (sérieusement vous avez oublié les pièges ?)");
                        fail = fail + 1
                    }
                    else if (choice == 2){
                        console.log("en prenant votre temps vous remarquez le nombre de pièges incalculable présents dans la salle.");
                        console.log("vous les évitez tous sans problème et vous dégainez votre épée, puis tuez dans son sommeil le propriétaire");
                        console.log("Vous avez vaincu le jeu bravo !!!");
                        console.log("vous êtes mort" + fail + "fois.");
                        if (fail == 0){
                            console.log("soit vous êtes un champion, ou bien vous y avez déjà joué");
                        }
                        if (fail >= 5){
                            console.log("vous vous êtes plutôt bien débrouillé bien joué");
                        }
                        if (fail >= 10){
                            console.log("vous avez bien galéré à ce que je vois");
                        }
                        if (fail >= 15){
                            console.log("ça va ? pas trop ragé ?");
                        }
                        if (fail >= 100){
                            console.log("vous avez apprécié la surprise ? XD");
                        }
                        if (poison >= 0){
                            console.log("vous avez apprécié le goût du saussiçon sinon ?");
                        }
                        if (toxic >= 0){
                            console.log("il ne faut jamais prendre les trucs des inconnus");
                        }
                        if (reality >= 0){
                            console.log("vous voulez peut être laissé un avis ?");
                            console.log(prompt("votre avis (gardez le un peu court, j'aime pas les listes) :"));
                        }
                        victory = 1
                    }
                    else {
                        console.log("choix invalide. rentrez un choix valide");
                    }
                }
                else {
                    console.log("choix invalide. rentrez un choix valide");
                }
            }
            else if (choice == 2) {
                console.log("Vous êtes rentré dans le garde manger et le boucher se trouve à l'intérieur. Effrayé, il vous propose de la nourriture en échange de l'épargner");
                console.log(choice = prompt("Acceptez vous son offre (1)? ou bien voulez vous le tuer (2)?")); // choix 4
                if (choice == 1) { // partie poison
                    console.log("Il vous donne un appétissant saucisson que vous décidez de manger car la faim vous a pris.");
                    poison = 1
                    console.log("Vous revenez par la porte et rentrez dans celle de droite. Vous remarquez le maître du château endormi sur son trône et vous remarquez que des pièges ont été placés un peu partout.");
                    console.log(choice = prompt("LEEERRROOOOYYYY JENKINS (1)? ou voulez vous être discret (2)?"));
                    if (choice == 1) { // fin sacrifice
                        console.log("Vous foncez tête baissée en activant le moindre piège sur votre trajectoire mais vous êtes tellement rapide qu'ils ne vous touchent pas.");
                        console.log("Le temps que le propriétaire se réveille, vous avez déjà votre épée prête à lui transpercer le coeur. il n'a pas pu éviter ce coup, signant sa mort.");
                        console.log("Vous avez réussi mais le poison se trouvant dans le saucisson prend effet et vous mourrez en tant que héros.");
                        fail = fail + 1
                        console.log("Vous êtes mort" + fail + "fois, considérant cette mort comme héroique");
                        console.log("petit secret : écrivez dès le début du jeu 'surprise'");
                        if (fail == 0){
                            console.log("soit vous êtes un champion, ou bien vous y avez déjà joué");
                        }
                        if (fail >= 5){
                            console.log("vous vous êtes plutôt bien débrouillé bien joué");
                        }
                        if (fail >= 10){
                            console.log("vous avez bien galéré à ce que je vois");
                        }
                        if (fail >= 15){
                            console.log("ça va ? pas trop ragé ?");
                        }
                        if (fail >= 100){
                            console.log("vous avez apprécié la surprise ? XD");
                        }
                        if (poison >= 0){
                            console.log("vous avez apprécié le goût du saussiçon sinon ?");
                        }
                        if (toxic >= 0){
                            console.log("il ne faut jamais prendre les trucs des inconnus");
                        }
                        if (reality >= 0){
                            console.log("vous voulez peut être laissé un avis ?");
                            console.log(prompt("votre avis (gardez le un peu court, j'aime pas les listes) :"));
                        }
                        victory = 1
                    }
                    else if (choice == 2) {
                        console.log("Vous décidez de le prendre par surprise en faisant attention de ne pas activer un seul piège, mais le poison présent dans le saucisson vous fais effondrer sur un des pièges, vous tuant une 2e fois");
                        fail = fail + 2
                    }
                    else {
                        console.log("choix invalide. rentrez un choix valide");
                    }
                }
                else if (choice == 2) {
                    console.log("Vous décidez de le tuer mais votre épée reste bloqué dans son fourreau, laissant le temps au boucher de vous trancher le cou avec un couteau de cuisine");
                    console.log("Les ustensiles de cuisine sont dangereux rappelez vous en les enfants");
                    fail = fail + 1
                }
                else {
                    console.log("choix invalide. rentrez un choix valide");
                }
            }
            else if (choice == 3) {
                console.log("Vous utilisez un parchemin magique que vous avez volé dans la salle des armes. Vous êtes maintenant piégé devant un ordi en train de jouer a ce jeu.");
                console.log("La curiosité est un vilain défaut");
                fail = fail + 1
                reality = 1
            }
            else {
                console.log("choix invalide. rentrez un choix valide");
            }
        }
        else if (choice == 2) {
            console.log("Vous tenter de vous faire passer pour le propriétaire du château et l'aveugle vous répond 'je suis peut être aveugle mais j'suis pas stupide non plus. GARDES!!!'. Vous êtes mort.");
            fail = fail + 1
        }
        else {
            console.log("choix invalide. rentrez un choix valide");
        }
    }
    else if (choice == "stop") {
        console.log("arrêt du jeu (allez toucher de l'herbe va)");
        break
    }
    else if (choice == "surprise"){
        console.log("SURPRISE !!!");
        console.log("vous avez maitenant + 100 morts au compteur");
        fail = fail + 100
    }
    else {
        console.log("choix invalide. rentrez un choix valide");
    }
}

