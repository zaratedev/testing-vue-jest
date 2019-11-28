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
    const homework = { name: 'Study English', done: false };
    const state = {
      tasks: [
        { name: 'Got to supermarket', done: false },
        homework,
      ],
    }
    mutations.completeTask(state, homework);
    expect(state.tasks).toEqual([
      { name: 'Got to supermarket', done: false },
      { name: 'Study English', done: true },
    ]);
  });

  test('un-completeTask gets task index and sets done to false', () => {
    const homework = { name: 'Study English', done: true };
    const state = {
      tasks: [
        { name: 'Got to supermarket', done: true },
        homework
      ],
    }

    mutations.uncompleteTask(state, homework);
    expect(state.tasks).toEqual([
      { name: 'Got to supermarket', done: true },
      { name: 'Study English', done: false },
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
