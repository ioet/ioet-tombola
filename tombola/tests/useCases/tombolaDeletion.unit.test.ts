import { getTombolaDeletionUseCase } from "../../src/useCases/tombolaDeletion";

describe("tombola deletion", () => {
  const testData = {
    tombola: {
      id: "tombola-1",
      name: "Some Tombola",
      frequency: 10,
      people: ["participant one", "participant two"],
    },
  };

  const dependencies = {
    tombolaRepository: {
      create: jest.fn(),
      remove: jest.fn((id: string) => undefined),
    },
  };

  test("it uses de repository to delete a tombola rotation", () => {
    const deleteTombola = getTombolaDeletionUseCase(
      dependencies.tombolaRepository
    );

    deleteTombola(testData.tombola.id);

    expect(dependencies.tombolaRepository.remove).toHaveBeenCalledWith(testData.tombola.id);
  });
});
