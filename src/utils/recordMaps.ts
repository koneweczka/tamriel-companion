type Rarity = 'Green' | 'Blue' | 'Purple' | 'Gold';
type Difficulty = 'Simple' | 'Intermediate' | 'Advanced' | 'Master' | 'Ultimate';

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

// Proper colors from UESP:
// Green: '#2dc50e',
// Blue: '#3a92ff',
// Purple: '#a02ef7',
// Gold: '#ccaa1a',
