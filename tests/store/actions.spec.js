import actions from '@/store/actions';

describe('store actions', () => {
  let store;
  let commit;

  beforeEach(() => {
    commit = jest.fn();
    store = { commit };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('addTask action calls addTask mutation', () => {
    actions.addTask(store, 'My Task');

    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls[0][0]).toBe('addTask');
    expect(commit.mock.calls[0][1]).toBe('My Task');
  });

  test('deleteTask action calls deleteTask mutation', () => {
    actions.deleteTask(store, 1);

    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls[0][0]).toBe('deleteTask');
    expect(commit.mock.calls[0][1]).toBe(1);
  });

  test('completeTask action calls completeTask mutation', () => {
    actions.completeTask(store, 1);

    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls[0][0]).toBe('completeTask');
    expect(commit.mock.calls[0][1]).toBe(1);
  });
});
