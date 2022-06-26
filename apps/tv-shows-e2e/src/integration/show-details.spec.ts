import {
  castCard,
  clickOnCastTab,
  episodes,
  genre,
  language,
  rating,
  seasons,
  summary,
  title
} from '../support/show-details.po';

describe('show-details', () => {
  beforeEach(() => cy.visit('/show-details/169'));

  it('should contain show title', () => {
    title().contains('Breaking Bad');
  });

  it('should contain show genres', () => {
    genre().contains('Drama');
    genre().contains('Crime');
    genre().contains('Thriller');
  });

  it('should contain show rating', () => {
    rating().contains('Rating: 9.2');
  });

  it('should contain show language', () => {
    language().contains('Language: English');
  });

  it('should contain show summary', () => {
    summary().contains('Breaking Bad');
  });

  it('should contain show seasons', () => {
    seasons().contains('Season 1');
  });

  it('should contain episode cards', () => {
    episodes().contains('1. Pilot');
  });

  it('should contain cast cards', () => {
    clickOnCastTab();
    castCard().contains('Bryan Cranston');
  });
});
