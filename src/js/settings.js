export const settings = {
    ulAppSelector: '.app',
    dataListId: 'fonts',
    scoreElementSelector: '.information__score span',
    timeElementSelector: '.information__time span',
    maxTimePerCard: 20,
    formElementID: 'play',
    fontNameInputId: 'font',
    lastCardSelector: '.app li:last-child',
    moveCardClass: 'app__item--move',
    moveCardSuccesClass: 'app__item--move--success',
    moveCardErrorClass: 'app__item--move--error',
    wrongCardsUlElementSelector: '.wrong-cards',
    liCardClass: 'app__item',
    optionHTML(name) {
        return `<option value="${name}">`;
    },

    liHTML(name, file, family, author) {
        return `<li data-font-name="${name}" data-family="${family}" class='app__item'>
  <div class="app__item__info"><span class="app__item__info__name">${name}</span>
    <span class="app__item__info__info">${family} - ${author}</span>
  </div>
  <img class='app__item__font' src='./assets/fonts/${file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
</li>`;
    },
    fontFamilyInputId: 'family'
};