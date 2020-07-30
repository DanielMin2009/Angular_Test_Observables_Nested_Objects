// API response to GET /gnomes/id
export interface Brastlewark {
}
export interface Gnome {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: string[];
  friends?: Gnome[];
  brastlewark: new () => Brastlewark;
}
