const message = "Ayant depuis l'enfance une fascination pour l'informatique, j'ai tourné mes études vers elle. Pour autant, le monde de l'informatique est vaste, alors vers quel domaine vais-je me retrouver ? Au départ je voulais devenir GameDesigner, puis cette idée me semblait beaucoup trop vague pour le futur. En faisant des petits boulots ici et là, en essayant de trouver ma voie, j'ai travaillé à domicile en suivant des cours sur Youtube ou sur OpenClassRoom. J'ai trouvé une formation intéressante pour Dévelloppeur web et en réalité, c'est génial, aussi vaste que l'informatique, tellement de possibilité. Actuellement en recherche d'un stage, je suis dynamique, créative et sociable. Voici les langagues que j'ai vu et que j'aime.";
const msg = "Voici mes différents projets";
let msgCount = 0;
let msgCount1 = 0;
let timer;
let timer1;
const messageLabel = document.querySelector('.aboutMe');
const msgLabel = document.querySelector('.subProj')

function textFunc() {
    if (msgCount == message.length) {
        clearInterval(timer);
    } else{
        msgCount++;
    }
    messageLabel.innerHTML = message.substring(0, msgCount);
   
}
function textFunc1() {
    if (msgCount1 == msg.length) {
        clearInterval(timer1);
    } else{
        msgCount1++;
    }
    msgLabel.innerHTML = msg.substring(0, msgCount1);
   
}
