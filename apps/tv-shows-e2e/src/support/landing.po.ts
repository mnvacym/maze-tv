export const genreTitles = () => cy.get('.🤖-genre-title');
export const searchBox = () => cy.get('.🤖-search-box');
export const searchBoxInput = () => cy.get('.🤖-search-box-input');
export const searchResult = () => cy.get('.🤖-search-result');
export const tvShowCard = () => cy.get('.🤖-tv-show-card');
export const clickOnShowCard = (name: string) =>
  cy.get('.🤖-tv-show-card').contains(name).click();
export const expectedRoute = (route: string) =>
  cy.location().then(data => data.pathname.includes(route));
