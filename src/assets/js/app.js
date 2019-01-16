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
// import { setTimeout, clearTimeout, setInterval, clearInterval } from "timers";
import { isString } from "util";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ███████╗████████╗ █████╗ ██████╗ ████████╗     █████╗ ██████╗ ██████╗          ██╗███████╗
// ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗         ██║██╔════╝
// ███████╗   ██║   ███████║██████╔╝   ██║       ███████║██████╔╝██████╔╝         ██║███████╗
// ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ██╔══██║██╔═══╝ ██╔═══╝     ██   ██║╚════██║
// ███████║   ██║   ██║  ██║██║  ██║   ██║       ██║  ██║██║     ██║         ╚█████╔╝███████║
// ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝          ╚════╝ ╚══════╝
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var tInterval = setInterval(()=> {
            
//     // if(MemoCardGame.countdown == 61) { //if at any case returned to 61 clear current interval 
//     //     MemoCardGame.countdown = 60;
//     //     clearInterval(tInterval);
//     //     // return false;
//     // }
//     // else{
//     //     MemoCardGame.countdown;
//     // }
    
//     if(MemoCardGame.winningCards.length == 16) { // if there are 16 card matched exit
//         MemoCardGame.clearWinningCards();
//         clearInterval(tInterval);
//         tInterval = 0;
//         return false;
//     }
        
        
//     MemoCardGame.countdown -= 1;
//     MemoCardGame.countdownNumberEl.textContent = MemoCardGame.countdown.toLocaleString();
    
//     if(MemoCardGame.countdown <= 0) { //if reached to zero it's timeout
//         clearInterval(tInterval);
//         tInterval = 0;
//         MemoCardGame.timeOut();
//         //return false;
//     }

// },1000);

const MemoCardGame = {
    body: document.querySelector("body"),
    firstLoad: true,
    container: document.querySelector("body > .container"),
    deck: document.querySelector(".deck"),
    stars: document.querySelector(".stars"),
    moves: document.querySelector(".moves"),
    restart: document.querySelector(".restart"),
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
    successfulMoves: 0,
    wrongMoves: 0,
    numOfIcons: 5, // # of icons
    moveIconName: "star", // icon name
    moveIconElements: [],
    firstTimeModal: true, // to check for first modal open
    restartBtnClicked: false, // to check for for restart btn click
    timerReset: false,
    winningStarsElements: [],
    // tInterval: ()=>{},
    // timeInterval(cb) {
    //     this.tInterval = setInterval(cb,1000);
    //     return this.tInterval;
    // }, //set the timeinterval fn
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
                            <!--<object type="image/svg+xml" data="img/udacity-logo-svg-vector.svg" style="display:none;" class="front-svg"></object>-->
                            <img src="img/udacity-logo-svg-vector.svg" class="front-svg" style="display:none;"> 
                        </div>
                        <div class="back">
                            <i class="fas fa-${cls}"></i>
                        </div>
                    </div>
                </div>`;
    },
    starTemplate(icon){
        return `<i class="fas fa-${icon} animated"></i>`;
    },
    // Modal Start Template
    modalStartTemplate(h2 = 'Click To',btnTxt = 'Start'){
        if(!h2) h2 = 'Click To';
        if(!btnTxt) btnTxt = 'Start';
        let tOut = `<div class="timeout">
                        <h2>
                            <i class="fas fa-stopwatch fa-2x"></i>
                        </h2>
                        <h1>Time Out</h1>
                    </div>`;
        return `${btnTxt.toLocaleLowerCase() == 'restart' ? tOut:''}
                <h2>${h2} ${btnTxt}</h2>
                <button class="modal-start-btn ${btnTxt.toLocaleLowerCase()}">${btnTxt}</button>`;
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
                    <!--<i class="fas fa-star fa-3x"></i> 
                        <i class="fas fa-star fa-3x"></i>
                        <i class="fas fa-star fa-3x"></i>
                        <i class="fas fa-star fa-3x"></i>
                        <i class="fas fa-star fa-3x"></i>-->
                        <div class="stars" style="font-size:2em;">
                            ${this.winningStarsElements.length == 0 ? "With No Stars!": this.winningStarsElements.join('')}
                        </div>
                        <div class="result">
                            <h3>Records</h3>
                            <div class="moves-count data">
                                <span><i class="fas fa-exchange-alt"></i> Moves</span>
                                <span>
                                    「<span style="color:mediumseagreen;">${this.successfulMoves} </span>
                                    |<span style="color:crimson;"> ${this.wrongMoves} </span>」<span> ${this.wrongMoves + this.successfulMoves}</span>
                                </span>
                            </div>
                            <div class="num-of-stars data">
                                <span></pan><i class="fas fa-star"></i> Stars</span>
                                <span>${this.winningStarsElements.length}</span>
                            </div>
                            <div class="time data">
                                <span><i class="fas fa-stopwatch"></i> Time</span>
                                <span>${60-this.countdown}s</span>
                            </div>
                        </div>
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
        if(!this.temporaryCards[0].dataset || !this.temporaryCards[1].dataset) {
            this.temporaryCards = [];
            return;
        }
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
        this.successfulMoves +=1;
        this.clearTemporaryCards();
        if(this.winningCards.length == 16){
            this.winningStars();
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
                this.wrongMoves +=1;
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
    clearWinningStars(){
        this.winningStarsElements = [];
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
        // this.timerReset = true;
        // if(tInterval) {
        //     clearInterval(tInterval);
        //     // tInterval.unref();
        //     // tInterval = 0;
        // }
    },
    calcAvg(){
        return Math.floor(this.movesCount/this.numOfIcons);
    },
    fillIcon(){
        let avg = this.calcAvg(),
            stars = this.stars.children;
        if(avg > 0 && stars) {
            for (let i = 0; i < avg; i++) {
                let el = stars[(stars.length-1)-i];
                if(el && !el.classList.contains('far','pulse')){
                    el.classList.add('far','pulse');
                    el.classList.remove('fas');
                }
            }
        }
    },
    winningStars(){
        let strs = this.stars.children;
        if(strs) {
            for (let i = 0; i < strs.length; i++) {
                let el = strs[i];
                if(el && el.classList.contains('fas')){
                    this.winningStarsElements.push(el.outerHTML);
                }
            }
        }
    },
    handleResetClk(e){
        let el = e.target;
        if(!el && el.classList.value.search(/\s*fa\s*/gi) < 0) return;
            
        el.classList.add('rotate');
        this.restartBtnClicked = true;

        this.reset(el);
        this.restart.removeEventListener('click',this.handleResetClk);
    },
    clickRestart(){
        let self = this;
            // emit = new Promise((resolve)=>{
                this.restart.addEventListener('click',this.handleResetClk.bind(this));
                // resolve("restart clicked");
            // });
            // function clk(e){
            //     let el = e.target;
            //     this.reset(el);
            //     this.restart.removeEventListener('click',clk);
            // }
            // return emit;
    },
    // clickRestartCb(timer){
    //     this.clickRestart().then((resp)=>{
    //         if(resp == "restart clicked" && timer) clearInterval(timer); 
    //     });
    // },
    reset(el){
        // if(el && el.classList.value.search(/\s*fa\s*/gi) > -1) {
        //     el.classList.add('rotate');
        //     this.restartBtnClicked = true;
        // }
        let prom = new Promise((resolve,reject)=>{
            let tmout = setTimeout(() => {
                this.container.classList.add('fade-out');
                this.deck.innerHTML = '';
                this.stars.innerHTML = '';
                this.resetCount();
                this.resetTimer();
                this.clearTemporaryCards();
                this.clearWinningCards();
                this.clearWinningStars();
                this.init();
                clearTimeout(tmout);
                resolve("done");
            }, 500);
        });

        prom.then((resp)=>{
            if(resp == "done"){
                let tout = setTimeout(() => {
                    if(el && el.classList.contains('rotate')){
                        el.classList.remove('rotate');
                        this.restartBtnClicked = false;
                    }
                    this.container.classList.remove('fade-out');
                    this.timer();
                    this.showSvgLogo();
                    clearTimeout(tout);
                }, 500);
            }
        });
    },
    timer(){
        let self = this;
        this.countdownEl.classList.add('bounceInDown','start');
        this.countdownNumberEl.textContent = this.countdown.toLocaleString();
        
        if(tInterval) {
            clearInterval(tInterval);
        }
        
        // setImmediate(() => {
        //     tInterval.ref();
        // });

        let tInterval = setInterval(()=> {

            // if(this.timerReset){
            //     clearInterval(tInterval);
            //     tInterval = 0;
            //     this.timerReset = false;
            //     return false;
            // }
                
            if(this.restartBtnClicked /*|| this.timerReset*/) { //if restart btn clicked, exit
                clearInterval(tInterval);
                tInterval = 0;
                return false;
            }
            
            if(this.winningCards.length == 16) { // if there are 16 card matched, exit
                this.clearWinningCards();
                clearInterval(tInterval);
                tInterval = 0;
                return false;
            }
                
                
            self.countdown -= 1;
            self.countdownNumberEl.textContent = self.countdown.toLocaleString();
            
            if(self.countdown <= 0) { //if reached to zero it's timeout
                clearInterval(tInterval);
                tInterval = 0;
                self.timeOut();
                //return false;
            }
        
        
        
        },1000);

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
        this.showSvgLogo();
    },
    showSvgLogo(){
        let objSvgs = [...document.querySelectorAll(".card-wrapper .front-svg")];
        objSvgs.map((svg) => {svg.style.display = "block"});
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
            let trgt = e.target,
                card = e.target.parentElement;
            if(trgt.classList.contains("front-svg")) card = e.target.parentElement.parentElement;
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
        if(this.firstLoad) {
            this.body.style.display = 'block';
            this.clickCard();
            this.clickRestart();
            this.firstLoad = false;
        }
            
        this.createCards();
        this.createMoveIcons();
        // if(!this.restartBtnClicked) {
        //     this.clickCard();
        //     this.clickRestart();
        // }
        if(this.firstTimeModal && !this.restartBtnClicked){
            this.modalContent(this.modalStartTemplate());
            this.openModal();
        }
        this.lazyLoad();
    }
};
MemoCardGame.init();



//TO DO:
// # Modularization

//=================================================================================================
// for hot module
// if (module.hot) {
//     module.hot.accept();
// }