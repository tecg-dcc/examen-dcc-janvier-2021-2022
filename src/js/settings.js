export const settings = {
    ulSelector: '.app',
    dataListId: 'fonts',
    scoreSelector: '.information__score span',
    maxSecondsPerCard: 20,
    formId: 'play',
    userInputFontnameID: 'font',
    userInputFontFamilyId: 'family',
    lastCardSelector: '.app li:last-child',
    cardMoveClass: 'app__item--move',
    cardSuccessClass: 'app__item--move--success',
    cardErrorClass: 'app__item--move--error',
    liClass: 'app__item',
    wrongCardsUlSelector: '.wrong-cards',
    optionHTML(name) {
        return `<option value="${name}">`;
    },
    liHTML(name, family, author, file) {
        return `<li data-font-name="${name}" data-family="${family}" class='app__item'>
  <div class="app__item__info"><span class="app__item__info__name">${name}</span>
    <span class="app__item__info__info">${family} - ${author}</span>
  </div>
  <img class='app__item__font' src='./assets/fonts/${file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
</li>`;
    },
    timerSelector: '.information__time span'
};