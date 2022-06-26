export interface TvShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRunTime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: string;
  dvdCountry?: string;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: {
    href: string;
  };
  previousepisode?: {
    href: string;
  };
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network;
  webChannel?: null;
  image: Image;
  summary: string;
  _links: Links;
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday?: null;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
  _links: Links;
}

export interface Actor {
  person: Person;
  character: Character;
}
