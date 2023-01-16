import { getTombolaCreationUseCase } from "../../src/useCases/tombolaCreation";

describe('tombola creation', () => {
  const testData = {
    tombola: {
      id: "tombola-1",
      name: "Some Tombola",
      frequencyInDays: 10,
      people: ["participant one", "participant two"],
    }
  };

  const dependencies = {
    tombolaRepository: {
      create: jest.fn(
        (name: string, frequencyInDays: number, people: string[]) => testData.tombola
      ),
      remove: jest.fn(),
    }
  };

  test("it uses de repository to create a tombola rotation", () => {
    const createTombola = getTombolaCreationUseCase(dependencies.tombolaRepository);
    const tombola = createTombola(
      testData.tombola.name,
      testData.tombola.frequencyInDays,
      testData.tombola.people
    );
  
    expect(dependencies.tombolaRepository.create).toHaveBeenCalledWith(
      testData.tombola.name,
      testData.tombola.frequencyInDays,
      testData.tombola.people
    );
    expect(tombola).toBe(testData.tombola);
  });  
});
