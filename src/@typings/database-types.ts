export type Location = {
  name: string;
  category: LocationCategory;
  areas: ChapterArea[];
  avatar: string;
};

export type LocationCategory = "alliances" | "dlc" | "neutral";

export type ChapterArea = {
  name: string;
  avatar?: string;
};

export interface Antiquity {
  item: string;
  rarity: string;
  location: string;
  type: string;
  difficulty: string;
  //TODO: When moved to backend I should change file name and this to dropArea:
  drop_area: string;
  image_path: string;
}
