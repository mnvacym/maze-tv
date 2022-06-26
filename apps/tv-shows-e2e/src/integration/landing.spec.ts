import {
  clickOnShowCard,
  expectedRoute,
  genreTitles,
  searchBox,
  searchBoxInput,
  searchResult,
  tvShowCard
} from '../support/landing.po';

describe('landing', () => {
  beforeEach(() => cy.visit('/'));

  it('should contain search-box component', () => {
    searchBox().contains('Search for a show');
  });

  it('should search for a show and filter it', () => {
    searchBoxInput().click();
    searchBoxInput().type('Breaking Bad');
    searchResult().contains('Breaking Bad');
  });

  it('should click on a search result and navigate to correct route', () => {
    searchBoxInput().click();
    searchBoxInput().type('Breaking Bad');
    searchResult().contains('Breaking Bad').click();
    expectedRoute('show-details/169');
  });

  it('should contain genre titles', () => {
    genreTitles().contains('Drama');
  });

  it('should contain tv show cards', () => {
    tvShowCard().contains('Breaking Bad');
  });

  it('should click on tv show and navigate to correct route', () => {
    clickOnShowCard('Breaking Bad');
    expectedRoute('show-details/169');
  });
});
