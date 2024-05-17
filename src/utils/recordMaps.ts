type Rarity = 'Green' | 'Blue' | 'Purple' | 'Gold';
type Difficulty = 'Simple' | 'Intermediate' | 'Advanced' | 'Master' | 'Ultimate';
type Location = {
  name: string;
  areas: string[];
};

export const antiquityRarityColors: Record<Rarity, string> = {
  Green: '#67F149',
  Blue: '##3690FF',
  Purple: '#9A20F6',
  Gold: '#C9A81A',
};

export const antiquityDifficultyColors: Record<Difficulty, string> = {
  Simple: '#67F149',
  Intermediate: '##3690FF',
  Advanced: '#9A20F6',
  Master: '#C9A81A',
  Ultimate: 'C9A81A',
};

export const locations: Location[] = [
  {
    name: 'Aldmeri Dominion',
    areas: ['Khenarthi\'s Roost', 'Auridon', 'Grahtwood', 'Greenshade', 'Malabal Tor', 'Reaper\'s March'],
  },
  {
    name: 'Daggerfall Covenant',
    areas: ['Stros M\'Kai', 'Betnikh', 'Glenumbra', 'Stormhaven', 'Rivenspire', 'Alik\'r Desert', 'Bangkorai'],
  },
  {
    name: 'Ebonheart Pact',
    areas: ['Bleakrock Isle', 'Bal Foyen ', 'Stonefalls', 'Deshaan', 'Shadowfen', 'Eastmarch', 'The Rift'],
  },
  {
    name: 'Neutral',
    areas: ['Coldharbour', 'Craglorn', 'Cyrodiil', 'Eyevea'],
  },
  {
    name: 'DLC Areas',
    areas: ['Wrothgar', 'Hew\'s Bane', 'Gold Coast', 'Vvardenfell', 'Clockwork City', 'Summerset', 'Artaeum', 'Murkmire',
      'Northern Elsweyr', 'Southern Elsweyr', 'Western Skyrim', 'The Reach', 'Blackwood', 'Deadlands',
      'High  Isle', 'Galen', 'Telvanni Peninsula', 'Apocrypha'],
  },
];

// Proper colors from UESP:
// Green: '#2dc50e',
// Blue: '#3a92ff',
// Purple: '#a02ef7',
// Gold: '#ccaa1a',
