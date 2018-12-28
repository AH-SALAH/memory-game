/**
 * @author Ahmed Salah
 * @github AH-SALAH
 * @create date 2018-12-01 20:15:44
 * @modify date 2018-12-01 20:15:44
 * @desc [app.js]
*/
// ==================================
// import all files from a dir that match regex
let cache = {};
function importAll (r) {
    r.keys().forEach((key) => {
        cache[key] = r(key);

        // get img which need to be converted to base64 by url-loader
        let getimgstr = key.split('/')[1].split('.')[0],
            img = document.querySelector('[alt="'+getimgstr+'"]'),
            imgsArray = []; // list of imgs name
            // console.log("getimgstr: ",getimgstr);
        if(img && /*$.inArray(getimgstr,imgsArray)*/imgsArray.indexOf(getimgstr) > -1){
            img.src = cache[key];
            // console.log("ifistrue: ",img);
        }
    });
}
//================================
// import all imgs
importAll(require.context('../img/', true, /\.(png|jpe?g|gif|svg)$/));
// import front-end necessary files
importAll(require.context('../../../src/', true, /(\.(ico|txt|xml|htaccess|webmanifest)?$|(tile\.png|tile-wide\.png))/));
// import fonts files
importAll(require.context('../scss/fonts/', true, /\.(woff(2)?|ttf|eot)(?=\?[A-Za-z0-9])?$|\.svg$/));
//================================
// import scss
import "../scss/app.scss";
//================================
////import jq
// import "jquery";
//================================
//// Import Bootstrap’s JavaScript
// import "bootstrap";
//// Alternatively, you may import plugins individually as needed:
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
//================================
// import "./about.js";
// import "../../about.html";

//=================================
// import needed modules
import LazyLoad from "vanilla-lazyload";
import { setTimeout, clearTimeout, setInterval ,clearInterval } from "timers";
import { isString } from "util";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ███████╗████████╗ █████╗ ██████╗ ████████╗     █████╗ ██████╗ ██████╗          ██╗███████╗
// ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗         ██║██╔════╝
// ███████╗   ██║   ███████║██████╔╝   ██║       ███████║██████╔╝██████╔╝         ██║███████╗
// ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ██╔══██║██╔═══╝ ██╔═══╝     ██   ██║╚════██║
// ███████║   ██║   ██║  ██║██║  ██║   ██║       ██║  ██║██║     ██║         ╚█████╔╝███████║
// ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝          ╚════╝ ╚══════╝
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const MCG = {
    container: document.querySelector("body > .container"),
    deck: document.querySelector(".deck"),
    stars: document.querySelector(".stars"),
    moves: document.querySelector(".moves"),
    // restart: document.querySelector(".restart"),
    countdownEl: document.querySelector('.countdown'),
    countdownNumberEl: document.querySelector('.countdown > .countdown-number'),
    modalContainer: document.querySelector('.modal-container'),
    // modalCloseBtn: document.querySelector('.modal-container > .modal-close'),
    modalBodyEl: document.querySelector('.modal-container > .modal-body'),
    countdown: 60, // time in seconds [60 seconds]
    cardsClasses: ['gem','paper-plane','anchor','bolt','cube','leaf','bicycle','bomb'], // classes to create cards
    cards: [],
    temporaryCards: [],
    winningCards: [],
    movesCount: 0, // initial move counts
    numOfIcons: 3, // # of icons
    moveIconName: 'star', // icon name
    moveIconElements: [],
    firstTimeModal: true, // to check for first modal open
    lazyLoad() {return new LazyLoad({elements_selector: ".lazyload"})},
    Imgs(){ // get imgs from the img folder
        let Imgs = {
            gifs: [],
            jpgs: [],
            pngs: [],
            svgs: [],
            otherFiles: []
        };

        if(cache){
            for (let img in cache) {
                if(cache.hasOwnProperty(img)){
                    if(cache[img].search(/\.(gif)$/i) > -1){
                        Imgs.gifs.push(cache[img]);
                    }else if(cache[img].search(/\.(jpe?g)$/i) > -1){
                        Imgs.jpgs.push(cache[img]);
                    }else if(cache[img].search(/\.(png)$/i) > -1){
                        Imgs.pngs.push(cache[img]);
                    }else if(cache[img].search(/\.(svg)$/i) > -1){
                        Imgs.svgs.push(cache[img]);
                    }else{
                        Imgs.otherFiles.push(cache[img]);
                    }
                }
            }
        }
        return Imgs;
    },
    cardTemplate(cls) {
        return `<div class="card-wrapper animated">
                    <div class="card" data-name="${cls}">
                        <div class="front">
                            <object type="image/svg+xml" data="img/udacity-logo-svg-vector.svg"></object> 
                        </div>
                        <div class="back">
                            <i class="fas fa-${cls}"></i>
                        </div>
                    </div>
                </div>`;
    },
    starTemplate(icon){
        return `<i class="far fa-${icon} animated"></i>`;
    },
    // Modal Start Template
    modalStartTemplate(h2 = 'Click To',btnTxt = 'Start'){
        if(!h2) h2 = 'Click To';
        if(!btnTxt) btnTxt = 'Start';
        return `<h2>${h2} ${btnTxt}</h2><button class="modal-start-btn ${btnTxt.toLocaleLowerCase()}">${btnTxt}</button>`;
    },
    // Winning Modal template
    modalWinningTemplate(){
        let imgs = this.Imgs(),
            gifs = imgs.gifs.slice(0),
            shflImgs = this.shuffle(gifs),
            gif = shflImgs[Math.round(Math.random()*(shflImgs.length-1))],
            trophy = imgs.jpgs.filter((el,i)=> el.search(/trophy/i) > -1 ? el : '')[0];

        return `<div class="winning-template" style="background:rgba(0,0,0,0.5) url(${trophy}) no-repeat top center/cover;">
                    <h1>Congratulation!!</h1>
                    <div class="omedetou">
                        <i class="fas fa-star fa-3x"></i> 
                        <i class="fas fa-star fa-3x"></i>
                        <i class="fas fa-star fa-3x"></i>
                        <i class="fas fa-star fa-3x"></i>
                        <i class="fas fa-star fa-3x"></i>
                    </div>
                    <h2>おめでとう~~~!</h2>
                    <img class="lazyload" src="${gif}" data-src="${gif}" alt="${trophy.split('/')[1].split('.')[0]}" />
                    ${this.modalStartTemplate(null,'Play Again')}
                </div>`;
    },
    // Shuffle function from http://stackoverflow.com/a/2450976
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },
    createCards() {
        for (let c = 0; c < 2; c++) {
            for (let cls of this.cardsClasses) {
                this.cards.push(this.cardTemplate(cls));
            }
        }
        this.shuffle(this.cards);
        this.deck.innerHTML = this.cards.join('');
        this.cards = [];
    },
    createMoveIcons(){
        for(let i = 0; i < this.numOfIcons; i++){
            this.moveIconElements.push(this.starTemplate(this.moveIconName));
        }
        this.stars.innerHTML = this.moveIconElements.join('');
        this.moveIconElements = [];
    },
    openCard(card){
        card.classList.add('flip');
    },
    closeCard(card){
        card.classList.remove('flip');
        card.parentElement.classList.remove('shake');
    },
    checkMatch(){
        let match = false;
        this.temporaryCards[0].dataset.name == this.temporaryCards[1].dataset.name ? 
        match = true :
        match = false;
        return match;
    },
    matched(){
        for (let card of this.temporaryCards) {
            card.classList.add('match');
            card.parentElement.classList.add('tada');
            this.winningCards.push(card);
        }
        this.clearTemporaryCards();
        if(this.winningCards.length == 16){
           this.modalContent(this.modalWinningTemplate());
           this.openModal();
           this.resetTimer();
           this.lazyLoad().update();
           return;
        }
        this.CountDown();
    },
    notMatched(){
        let self = this,
            i = 0,
            promise = new Promise((resolve,reject)=>{
                for (let card of this.temporaryCards) {
                    card.parentElement.classList.add('shake');
                    let tmout = setTimeout(()=>{
                        this.closeCard(card);
                        i++;
                        if(i == this.temporaryCards.length) {
                            clearTimeout(tmout);
                            return resolve({status:"complete",data: this.temporaryCards});
                        }
                        clearTimeout(tmout);
                    },500);
                }
            });
            return promise;
    },
    notMatchedCB(){
        this.notMatched().then((resp)=>{
            // console.log(resp);
            if(resp.status == "complete") {
                this.clearTemporaryCards();
                this.CountUp();
            }
        }).catch((er)=>{
            // console.log(er);
            this.clearTemporaryCards();
        });
    },
    clearTemporaryCards(){
        this.temporaryCards = [];
    },
    clearWinningCards(){
        this.winningCards = [];
    },
    CountUp(){
        this.movesCount += 1;
        this.moves.innerText = this.movesCount;
        this.calcAvg();
        this.fillIcon();
    },
    CountDown(){
        if(this.movesCount == 0) return;
        this.movesCount -= 1;
        this.moves.innerText = this.movesCount;
        this.calcAvg();
        this.fillIcon();
    },
    resetCount(){
        this.movesCount = 0;
        this.moves.innerText = this.movesCount.toLocaleString();
    },
    resetTimer(){
        this.countdown = 60;
        this.countdownNumberEl.innerText = this.countdown.toLocaleString();
        this.countdownEl.classList.remove('bounceInDown','start');
    },
    calcAvg(){
        return Math.floor(this.movesCount/this.numOfIcons);
    },
    fillIcon(){
        let avg = this.calcAvg(),
            stars = this.stars.children;
        if(avg > 0 && stars) {
            for (let i = 0; i < avg; i++) {
                let el = stars[i];
                if(el && !el.classList.contains('fas','pulse')){
                    el.classList.add('fas','pulse');
                    el.classList.remove('far');
                }
            }
        }
    },
    // clickRestart(){
    //     let self = this;
    //     this.restart.addEventListener('click',(e)=>{
    //         let el = e.target;
    //         this.reset(el);
    //     });
    // },
    reset(el){
        if(el && el.classList.value.search(/\s*fa\s*/gi) > -1) el.classList.add('rotate');
        let tmout = setTimeout(() => {
            this.container.classList.add('fade-out');
            this.deck.innerHTML = '';
            this.stars.innerHTML = '';
            this.resetCount();
            this.resetTimer();
            this.clearTemporaryCards();
            this.clearWinningCards();
            this.init();
            clearTimeout(tmout);
            let tout = setTimeout(() => {
                if(el && el.classList.contains('rotate')) el.classList.remove('rotate');
                this.container.classList.remove('fade-out');
                this.timer();
                clearTimeout(tout);
            }, 500);
        }, 500);
    },
    timer(){
        let self = this;
        this.countdownEl.classList.add('bounceInDown','start');
        this.countdownNumberEl.textContent = this.countdown.toLocaleString();

        
        let tinter = setInterval(()=> {
            if(this.winningCards.length == 16) { 
                this.clearWinningCards();
                clearInterval(tinter); 
                return false; 
            }
            self.countdown -= 1;
            self.countdown <= 0 ? self.countdown = 60 : self.countdown;

            self.countdownNumberEl.textContent = self.countdown.toLocaleString();
            if(self.countdown == 60) {
                clearInterval(tinter);
                self.timeOut();
                return false;
            }
        }, 1000);
    },
    timeOut(){
        this.countdownEl.classList.remove('bounceInDown');
        this.countdownEl.classList.add('bounceOutUp');
        let tt = setTimeout(() => {
            this.countdownEl.classList.remove('bounceOutUp','start');
            clearTimeout(tt);
        }, 500);
        this.modalContent(this.modalStartTemplate(null,'Restart'));
        this.openModal();
    },
    openModal(){
        this.modalContainer.classList.add('open');
        let sttout = setTimeout(() => {
            this.modalBodyEl.classList.add('bounceInDown');
            let handleClick = (e)=>{
                // e.preventDefault();
                // e.stopPropagation();
                let cont = e.target,
                txtcont = cont.innerText;
                // if(cont.classList.value.search(/\s*modal-container\s*|\s*modal-close\s*/gi) < 0 ) return;
                if(!cont.classList.contains('modal-start-btn')) return;
                if(cont.classList.contains('modal-start-btn') && cont.classList.value.search(/\s*restart\s*|\s*play\s*again\s*/gi) > -1){
                    if(this.firstTimeModal) this.firstTimeModal = false;
                    this.reset();
                    // this.closeModal();
                    // this.modalContainer.removeEventListener('click',handleClick);
                    // return false;
                } 
                this.closeModal();
                if(this.firstTimeModal) this.timer();
                this.modalContainer.removeEventListener('click',handleClick);
                return false;
            }
            this.modalContainer.addEventListener('click', handleClick);
            clearTimeout(sttout);
        }, 800);
    },
    closeModal(){
        this.modalBodyEl.classList.remove('bounceInDown');
        this.modalBodyEl.classList.add('bounceOutUp');
        let tot = setTimeout(() => {
            this.modalContainer.classList.remove('open');
            this.modalBodyEl.classList.remove('bounceOutUp');
            clearTimeout(tot);
        }, 1000);
    },
    modalContent(cont){
        if(!cont) return console.log("Content param is undefined!");
        this.modalBodyEl.innerHTML = cont;
    },
    // check if it contains the class
    // containsClass(card,cls){
    //     if(!card && !cls) return console.log("both arguments needed!");
    //     if(!isString(cls)) return console.log("classes should be space or comma separated string! ex: <'class1 class2'> || <'class1,class2'> .. ");
    //     let comma = cls.search(',') > -1,
    //         clsArr = comma ? cls.split(',') : cls.split(' '),
    //         classes = [];
    //     for (const cls of clsArr) {
    //         if(card.classList.contains(cls)) classes.push(cls);
    //     }
    //     return classes;
    // },
    clickCard(){
        let self = this;
        this.deck.addEventListener('click',(e)=>{
            let card = e.target.parentElement;
            if(/*self.containsClass(card,'card flip match')*/card.classList.value.search(/\s*flip\s*|\s*match\s*|^((?!card).)*$/gi) > -1 || self.temporaryCards.length >= 2) return;
            self.openCard(card);
            self.temporaryCards.push(card);
            if(self.temporaryCards.length != 2) return;
            if(!self.checkMatch()) {
                self.notMatchedCB(); 
                return;
            }
            self.matched();
            self.clearTemporaryCards();
        });
    },
    init() {
        this.createCards();
        this.createMoveIcons();
        this.clickCard();
        // this.clickRestart();
        if(this.firstTimeModal){
            this.modalContent(this.modalStartTemplate());
            this.openModal();
        }
        this.lazyLoad();
    }
};
MCG.init();





//=================================================================================================
// for hot module
// if (module.hot) {
//     module.hot.accept();
// }