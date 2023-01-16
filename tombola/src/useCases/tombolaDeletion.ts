import { Tombola } from "../domain/tombola";
import { TombolaRepository } from "../ports/repositories";

export type TombolaDeleter = (id: string) => void;

export const getTombolaDeletionUseCase =
  (tombolaRepository: TombolaRepository) =>
  (id: string): void =>
    tombolaRepository.remove(id);
