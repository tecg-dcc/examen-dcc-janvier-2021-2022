import {settings as s} from './settings';
import {fonts} from './fonts';

const tymper = {
    getHTMLElements() {
        this.ulElement = document.querySelector(s.ulSelector);
        this.dataListElement = document.getElementById(s.dataListId);
        this.scoreElement = document.querySelector(s.scoreSelector);
        this.timerElement = document.querySelector(s.timerSelector);
        this.formElement = document.getElementById(s.formId);
        this.fontNameInputElement = document.getElementById(s.userInputFontnameID);
        this.fontFamilyInputElement = document.getElementById(s.userInputFontFamilyId);

    }, generateCards() {
        for (const font of fonts) {
            this.ulElement.insertAdjacentHTML('beforeend', s.liHTML(font.name, font.family, font.author, font.file));
            this.dataListElement.insertAdjacentHTML('beforeend', s.optionHTML(font.name));
        }
    },
    startTimer() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(this.update.bind(this), 1000);
        }
    },
    update() {
        this.remainingTime--;
        if (this.remainingTime === 0) {
            const cardElement = document.querySelector(s.lastCardSelector);
            cardElement.classList.add(s.cardMoveClass, s.cardErrorClass);

            clearInterval(this.intervalId);
            this.intervalId = null;
            this.remainingTime = s.maxSecondsPerCard;
            this.displayTime();

            this.startTimer();

        }
        this.displayTime();
    },
    initData() {
        this.score = 0;
        this.remainingTime = s.maxSecondsPerCard;
        this.intervalId = null;
    }, moveCard(evt) {
        if (evt.propertyName === 'opacity') {
            if (evt.currentTarget.classList.contains(s.cardSuccessClass)) {
                evt.currentTarget.remove();
            } else {
                evt.currentTarget.className = s.liClass;
                document.querySelector(s.wrongCardsUlSelector).insertAdjacentElement('afterbegin', evt.currentTarget.cloneNode(true));
                evt.currentTarget.remove();
            }
        }
    }, addTransitionendListener() {
        for (const liElement of document.getElementsByClassName(s.liClass)) {
            liElement.addEventListener('transitionend', (evt) => {
                this.moveCard(evt);
            });
        }
    }, addSubmitListener() {
        this.formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.play();
        });
    }, addEventListeners() {
        this.addTransitionendListener();
        this.addSubmitListener();
    }, init() {
        this.initData();
        this.getHTMLElements();
        this.generateCards();
        this.displayScore();
        this.displayTime();
        this.addEventListeners();
        this.startTimer();

    }, checkCard() {
        const userInputFontName = this.fontNameInputElement.value;
        const userInputFontFamily = this.fontFamilyInputElement.value;
        const cardElement = document.querySelector(s.lastCardSelector);
        if (userInputFontName === cardElement.dataset.fontName && userInputFontFamily === cardElement.dataset.family) {
            this.score++;
            cardElement.classList.add(s.cardMoveClass, s.cardSuccessClass);
        } else if (userInputFontName === cardElement.dataset.fontName || userInputFontFamily === cardElement.dataset.family) {
            this.score += 0.5;
            cardElement.classList.add(s.cardMoveClass, s.cardErrorClass);
        } else {
            cardElement.classList.add(s.cardMoveClass, s.cardErrorClass);
        }

    }, play() {
        this.checkCard();
        this.displayScore();

    }, displayScore() {
        this.scoreElement.textContent = `${this.score}/${fonts.length}`;
    }, displayTime() {
        const minutes = Math.trunc(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        this.timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
};

tymper.init();