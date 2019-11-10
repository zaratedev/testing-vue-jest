import { allTasks, completedTasks, uncompletedTasks } from '@/store/getters';

describe('store getters', () => {
    test('allTasks return tasks state', () => {
        const state = {
            tasks: [1, 2]
        };

        expect(allTasks(state)).toEqual([1, 2]);
    });

    test('completedTasks return only the tasks state with done = true', () => {
        const state = {
            tasks: [
                { name: 'Go the supermarket', done: true },
                { name: 'Go the gym', done: false },
            ]
        };

        expect(completedTasks(state)).toEqual([
            { name: 'Go the supermarket', done: true },
        ]);
    });

    test('uncompletedTasks return only the tasks state with done = false', () => {
        const state = {
            tasks: [
                { name: 'Go the supermarket', done: true },
                { name: 'Go the gym', done: false },
            ]
        };

        expect(uncompletedTasks(state)).toEqual([
            { name: 'Go the gym', done: false },
        ]);
    });
});
