import { createTombolaApp, TombolaDependencies } from "../../src/index";
import { Tombola } from "../../src/domain/tombola";

test("creates a tombola rotation using an external tombola repository", () => {
  const expectedTombola: Tombola = {
    id: "some-tombola",
    name: "Tombola One",
    frequencyInDays: 10,
    people: ["person 1", "person 2"],
  };
  const appDependencies: TombolaDependencies = {
    mainRepository: {
      create: jest.fn(() => expectedTombola),
      remove: jest.fn(),
    },
  };

  const tombolaApp = createTombolaApp(appDependencies);
  const tombola = tombolaApp.create(
    expectedTombola.name,
    expectedTombola.frequencyInDays,
    expectedTombola.people
  );

  expect(appDependencies.mainRepository!.create).toHaveBeenCalledWith(
    expectedTombola.name,
    expectedTombola.frequencyInDays,
    expectedTombola.people
  );
  expect(tombola).toBe(expectedTombola);
});
