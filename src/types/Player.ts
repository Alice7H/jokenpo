import { Options } from "./Options";

export interface Player {
  id: string;
  name: string;
  wins?: number;
  loses?: number;
  ready: boolean;
  choose: Options;
}