const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "img/1.jpg", name: "mc1"},
    { imgSrc: "img/2.jpg", name: "mc2"},
    { imgSrc: "img/3.jpg", name: "mc3"},
    { imgSrc: "img/4.jpg", name: "mc4"},
    { imgSrc: "img/5.jpg", name: "mc5"},
    { imgSrc: "img/6.jpg", name: "mc6"},
    { imgSrc: "img/7.jpg", name: "mc7"},
    { imgSrc: "img/8.jpg", name: "mc8"},
    { imgSrc: "img/1.jpg", name: "mc1"},
    { imgSrc: "img/2.jpg", name: "mc2"},
    { imgSrc: "img/3.jpg", name: "mc3"},
    { imgSrc: "img/4.jpg", name: "mc4"},
    { imgSrc: "img/5.jpg", name: "mc5"},
    { imgSrc: "img/6.jpg", name: "mc6"},
    { imgSrc: "img/7.jpg", name: "mc7"},
    { imgSrc: "img/8.jpg", name: "mc8"},
]

const randomize = ()=> {
    const cardData = getData();
    cardData.sort(()=> Math.random() -0.5);
    console.log(cardData);
    return cardData;
};

const cardGenerator =() => {
const cardData = randomize();

cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    
    face.src= item.imgSrc;
    card.setAttribute('name', item.name);
  
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);
    });
    });
};

const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
     const toggleCard = document.querySelectorAll(".toggleCard");
   console.log(flippedCards);

   if(flippedCards.length ===2){
    if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
        console.log("match");
        flippedCards.forEach(card => {
            card.classList.remove("flipped");
           card.style.pointerEvents = "none";
        });
    } else{
        console.log("wrong");
        flippedCards.forEach(card =>{
            card.classList.remove("flipped");
            setTimeout(()=> card.classList.remove("toggleCard"), 1000);
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if(playerLives ===0){
            restart("👎TRY AGAIN");
        }
    }
   }

   if(toggleCard.length === 16){
    restart("🤟YOU WON");
   }
};

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvent ="none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove("toggleCard");

        setTimeout(() =>{
            cards[index].style.pointerEvents = 'all';
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        },1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text),100);
};

cardGenerator();
