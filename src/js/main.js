import {settings as s} from './settings';
import {fonts} from './fonts';

const tymper = {
    getHTMLElements() {
        this.ulElement = document.querySelector(s.ulAppSelector);
        this.dataListElement = document.getElementById(s.dataListId);
        this.scoreElement = document.querySelector(s.scoreElementSelector);
        this.timeElement = document.querySelector(s.timeElementSelector);
        this.formElement = document.getElementById(s.formElementID);
        this.fontNameInputElement = document.getElementById(s.fontNameInputId);
        this.fontFamilyInputElement = document.getElementById(s.fontFamilyInputId);
        this.wrongCardsUlElement = document.querySelector(s.wrongCardsUlElementSelector);
    }, generateHTMLCards() {
        for (const font of fonts) {
            this.ulElement.insertAdjacentHTML('beforeend', s.liHTML(font.name, font.file, font.family, font.author));
            this.dataListElement.insertAdjacentHTML('beforeend', s.optionHTML(font.name));
        }
    }, initData() {
        this.score = 0;
        this.maxCards = fonts.length;
        this.remainingTime = s.maxTimePerCard;
        this.intervalId = null;
    }, moveCards(evt) {
        if (evt.propertyName === 'opacity') {
            if (evt.currentTarget.classList.contains(s.moveCardSuccesClass)) {
                evt.currentTarget.remove();
            } else {
                evt.currentTarget.className = s.liCardClass;
                this.wrongCardsUlElement.insertAdjacentElement('afterbegin', evt.currentTarget.cloneNode(true));
                evt.currentTarget.remove();
            }
        }
    }, addTransitionendListener() {
        for (const liElement of document.getElementsByClassName(s.liCardClass)) {
            liElement.addEventListener('transitionend', (evt) => {
                this.moveCards(evt);
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
    }, startTimer() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(this.updateTime.bind(this), 1000);
        }
    }, init() {
        this.initData();
        this.getHTMLElements();
        this.generateHTMLCards();
        this.displayScore();
        this.displayTime();
        this.addEventListeners();
        this.startTimer();
    },
    resetTime() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.remainingTime = s.maxTimePerCard;
        this.displayTime();
        this.startTimer();
    }, updateTime() {
        this.remainingTime--;
        if (this.remainingTime === 0) {
            const lastCard = document.querySelector(s.lastCardSelector);
            lastCard.classList.add(s.moveCardClass, s.moveCardErrorClass);
            this.resetTime();
        }
        this.displayTime();
    },
    play() {
        const userFamily = this.fontFamilyInputElement.value;
        const userFontName = this.fontNameInputElement.value;
        const lastCard = document.querySelector(s.lastCardSelector);

        if (lastCard.dataset.fontName === userFontName && lastCard.dataset.family === userFamily) {
            this.score++;
            lastCard.classList.add(s.moveCardClass, s.moveCardSuccesClass);
        } else if (lastCard.dataset.fontName === userFontName || lastCard.dataset.family === userFamily) {
            this.score += 0.5;
            lastCard.classList.add(s.moveCardClass, s.moveCardErrorClass);
        } else {
            lastCard.classList.add(s.moveCardClass, s.moveCardErrorClass);
        }

        this.displayScore();
    }, displayScore() {
        this.scoreElement.textContent = `${this.score}/${this.maxCards}`;
    }, displayTime() {
        const minutes = Math.trunc(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        this.timeElement.textContent = `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
    },
};

tymper.init();