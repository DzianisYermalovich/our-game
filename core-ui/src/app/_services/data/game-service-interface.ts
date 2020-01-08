import {OldGame} from '../../_models/old-game';

/**
 * @deprecated for removal
 */
export interface GameServiceInterface {
  create(game: OldGame): OldGame;
  delete(id: string): void;
  getAll(): Array<OldGame>;
  getById(id: string): OldGame;
  update(game: OldGame): OldGame;
}
