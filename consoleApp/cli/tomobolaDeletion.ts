import { createTombolaApp } from "tombola";

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

export const remove = (id: string) => {
    tombolaApp.remove(id);
};
