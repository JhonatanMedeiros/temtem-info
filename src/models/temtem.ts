export interface Temtem {
  number: number;
  name: string;
  types: string[];
  portraitWikiUrl: string;
  lumaPortraitWikiUrl: string;
  wikiUrl: string;
  stats: {
    hp: number;
    sta: number;
    spd: number;
    atk: number;
    def: number;
    spatk: number;
    spdef: number;
    total: number;
  };
  traits: string[];
  details: {
    height: {
      cm: number;
      inches: number;
    };
    weight: {
      kg: number;
      lbs: number;
    };
  };
  techniques: { name: string; source: string; levels: number }[];
  trivia: string[];
  evolution: {
    evolves: boolean;
  };
  wikiPortraitUrlLarge: string;
  lumaWikiPortraitUrlLarge: string;
  locations: any[];
  icon: string;
  lumaIcon: string;
  genderRatio: {
    male: number;
    female: number;
  };
  catchRate: number;
  hatchMins: number;
  tvYields: {
    hp: number;
    sta: number;
    spd: number;
    atk: number;
    def: number;
    spatk: number;
    spdef: number;
  };
  gameDescription: string;
  wikiRenderStaticUrl: string;
  wikiRenderAnimatedUrl: string;
  wikiRenderStaticLumaUrl: string;
  wikiRenderAnimatedLumaUrl: string;
  renderStaticImage: string;
  renderStaticLumaImage: string;
  renderAnimatedImage: string;
  renderAnimatedLumaImage: string;
}
