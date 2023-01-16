import { Tombola } from "../domain/tombola";
import { TombolaRepository } from "../ports/repositories";

export type TombolaCreator = (
  name: string,
  frequencyInDays: number,
  people: string[]
) => Tombola;

export const getTombolaCreationUseCase =
  (tombolaRepository: TombolaRepository) =>
  (name: string, frequencyInDays: number, people: string[]): Tombola =>
    tombolaRepository.create(name, frequencyInDays, people);
