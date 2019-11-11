import mutations from '@/store/mutations';

describe('store mutations', () => {
  test('addTask adds a new task to tasks array', () => {
    const state = {
      tasks: [],
    }
    mutations.addTask(state, 'My Task');
    expect(state.tasks).toEqual([
      { name: 'My Task', done: false }
    ]);
  });

  test('completeTask gets task index and sets done to true', () => {
    const state = {
      tasks: [
        { name: 'Got to supermarket', done: false },
        { name: 'Got to gym', done: false },
      ],
    }
    mutations.completeTask(state, 1);
    expect(state.tasks).toEqual([
      { name: 'Got to supermarket', done: false },
      { name: 'Got to gym', done: true },
    ]);
  });

  test('deleteTask gets task index and delete it', () => {
    const state = {
      tasks: [
        { name: 'Got to supermarket', done: false },
        { name: 'Got to gym', done: false },
      ],
    }
    mutations.deleteTask(state, 1);
    expect(state.tasks).toEqual([
      { name: 'Got to supermarket', done: false },
    ]);
  });
});
