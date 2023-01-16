import { createTombolaApp } from "tombola";

type CreationCommandOptions = {
    frequency: string
    people: string
};

const dependencies = {
    mainRepository: {
        create: (name: string, frequencyInDays: number, people: string[]) => {
            console.log('------- saving tombola', name, frequencyInDays, people);
            return {
                id: 'id',
                name: 'name',
                frequencyInDays: 10,
                people: ['a', 'b'],
            }
        },
        remove: (id: string) => {
            console.log('------- removing tombola', id);
        },
    }
};
const tombolaApp = createTombolaApp(dependencies);

export const create = (name: string, options: CreationCommandOptions) => {
    tombolaApp.create(name, parseInt(options.frequency), options.people.split(','))
};
