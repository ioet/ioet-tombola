import { TombolaRepository } from "./ports/repositories";
import {
  getTombolaCreationUseCase,
  TombolaCreator,
} from "./useCases/tombolaCreation";
import {
  getTombolaDeletionUseCase,
  TombolaDeleter,
} from "./useCases/tombolaDeletion";

export interface TombolaDependencies {
  mainRepository: TombolaRepository;
}

export interface TombolaApp {
  create: TombolaCreator;
  remove: TombolaDeleter;
}

export const createTombolaApp = (
  dependencies: TombolaDependencies
): TombolaApp => {
  return {
    create: getTombolaCreationUseCase(dependencies.mainRepository),
    remove: getTombolaDeletionUseCase(dependencies.mainRepository),
  };
};
