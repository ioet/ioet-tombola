import { Tombola } from "../domain/tombola";

export interface TombolaRepository {
  create(name: string, frequency: number, people: string[]): Tombola;
  remove(id: string): void;
}
