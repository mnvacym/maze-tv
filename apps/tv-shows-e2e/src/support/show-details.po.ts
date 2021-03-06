export const title = () => cy.get('.????-show-title');
export const genre = () => cy.get('.????-show-genre');
export const rating = () => cy.get('.????-show-rating');
export const language = () => cy.get('.????-show-language');
export const summary = () => cy.get('.????-show-summary');
export const seasons = () => cy.get('.????-show-seasons');
export const episodes = () => cy.get('.????-show-episodes');
export const clickOnCastTab = () => cy.contains('Cast').click();
export const castCard = () => cy.get('.????-cast-card');
