import { createTombolaApp, TombolaDependencies } from "../../src/index";
import { Tombola } from "../../src/domain/tombola";

test("removes a tombola rotation using an external tombola repository", () => {
  const existingTombola: Tombola = {
    id: "some-tombola",
    name: "Fake name",
    frequencyInDays: 10,
    people: ["fake person 1", "fake person 2"],
  };
  const appDependencies: TombolaDependencies = {
    mainRepository: {
      create: jest.fn(),
      remove: jest.fn(),
    },
  };

  const tombolaApp = createTombolaApp(appDependencies);
  tombolaApp.remove(existingTombola.id);

  expect(appDependencies.mainRepository!.remove).toHaveBeenCalledWith(
    existingTombola.id
  );
});
