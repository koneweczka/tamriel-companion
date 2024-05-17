type Rarity = 'Green' | 'Blue' | 'Purple' | 'Gold';
type Difficulty = 'Simple' | 'Intermediate' | 'Advanced' | 'Master' | 'Ultimate';
type Location = {
  name: string;
  areas: ChapterArea[];
  avatar: string;
};

type ChapterArea = {
  name: string;
  avatar?: string;
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
    areas: [
      { name: 'Khenarthi\'s Roost' },
      { name: 'Auridon' },
      { name: 'Grahtwood' },
      { name: 'Greenshade' },
      { name: 'Malabal Tor' },
      { name: 'Reaper\'s March' },
    ],
    avatar: 'https://images.uesp.net/9/9d/ON-icon-alliance-Aldmeri.png',
  },
  {
    name: 'Daggerfall Covenant',
    areas: [
      { name: 'Stros M\'Kai' },
      { name: 'Betnikh' },
      { name: 'Glenumbra' },
      { name: 'Stormhaven' },
      { name: 'Rivenspire' },
      { name: 'Alik\'r Desert' },
      { name: 'Bangkorai' },
    ],
    avatar: 'https://images.uesp.net/a/a3/ON-icon-alliance-Daggerfall.png',
  },
  {
    name: 'Ebonheart Pact',
    areas: [
      { name: 'Bleakrock Isle' },
      { name: 'Bal Foyen' },
      { name: 'Stonefalls' },
      { name: 'Deshaan' },
      { name: 'Shadowfen' },
      { name: 'Eastmarch' },
      { name: 'The Rift' }],
    avatar: 'https://images.uesp.net/9/9e/ON-icon-alliance-Ebonheart.png',
  },
  {
    name: 'Neutral',
    areas: [
      {
        name: 'Coldharbour',
        avatar: 'https://images.uesp.net/a/a2/ON-icon-alliance-Coldharbour.png',
      },
      {
        name: 'Craglorn',
        avatar: 'https://images.uesp.net/7/71/ON-icon-Craglorn.png',
      },
      {
        name: 'Cyrodiil',
        avatar: 'https://images.uesp.net/thumb/4/4a/ON-mapicon-Battle.png',
      },
      {
        name: 'Eyevea',
        avatar: 'https://images.uesp.net/thumb/2/27/ON-icon-MagesGuild.png',
      }],
    avatar: 'https://images.uesp.net/f/f6/ON-icon-Voip_Area.png',

  },
  {
    name: 'DLC Areas',
    areas: [
      {
        name: 'Wrothgar',
        avatar: 'https://images.uesp.net/6/6a/ON-icon-store-Orsinium.png',
      },
      {
        name: 'Hew\'s Bane',
        avatar: 'https://images.uesp.net/5/51/ON-icon-Thieves_Guild.png',
      },
      {
        name: 'Gold Coast',
        avatar: 'https://images.uesp.net/1/16/ON-icon-Dark_Brotherhood.png',
      },
      {
        name: 'Vvardenfell',
        avatar: 'https://images.uesp.net/3/3e/ON-icon-alliance-Vivec.png',
      },
      {
        name: 'Clockwork City',
        avatar: 'https://images.uesp.net/thumb/8/8a/ON-icon-Sotha_Sil.png',
      },
      {
        name: 'Summerset',
        avatar: 'https://images.uesp.net/thumb/8/8c/ON-icon-alliance-Alinor.png',
      },
      {
        name: 'Artaeum',
        avatar: 'https://images.uesp.net/thumb/1/15/ON-icon-Psijic_Order.png',
      },
      {
        name: 'Murkmire',
        avatar: 'https://images.uesp.net/0/0e/ON-icon-store-Murkmire.png',
      },
      {
        name: 'Northern Elsweyr',
        avatar: 'https://images.uesp.net/thumb/9/98/ON-icon-alliance-Elsweyr.png',
      },
      {
        name: 'Southern Elsweyr',
        avatar: 'https://images.uesp.net/d/d7/ON-icon-store-Dragonhold.png',
      },
      {
        name: 'Western Skyrim',
        avatar: 'https://images.uesp.net/0/02/ON-icon-alliance-Solitude.png',
      },
      {
        name: 'The Reach',
        avatar: 'https://images.uesp.net/3/35/ON-icon-store-Markarth.png',
      },
      {
        name: 'Blackwood',
        avatar: 'https://images.uesp.net/archive/e/ec/20210704171201%21ON-icon-Blackwood_02.png',
      },
      {
        name: 'Deadlands',
        avatar: 'https://images.uesp.net/8/8f/ON-icon-store-Deadlands.png',
      },
      {
        name: 'High Isle',
        avatar: 'https://images.uesp.net/0/06/ON-icon-High_Isle_02.png',
      },
      {
        name: 'Galen',
        avatar: 'https://images.uesp.net/3/38/ON-icon-store-Firesong.png',
      },
      {
        name: 'Telvanni Peninsula',
        avatar: 'https://images.uesp.net/f/f1/ON-icon-alliance-Necrom.png',
      },
      {
        name: 'Apocrypha',
        avatar: 'https://images.uesp.net/thumb/9/9e/ON-icon-alliance-Apocrypha.png',
      },
    ],
    avatar: 'https://images.uesp.net/e/e7/ON-icon-Zone_DLC.png',
  },
];

// Proper colors from UESP:
// Green: '#2dc50e',
// Blue: '#3a92ff',
// Purple: '#a02ef7',
// Gold: '#ccaa1a',
