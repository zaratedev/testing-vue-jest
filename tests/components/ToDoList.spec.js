import { mount, shallowMount, config } from '@vue/test-utils';
import ToDoList from '@/components/ToDoList';
import Task from '@/components/Task';

let mocks;

describe('Component ToDoList', () => {
  beforeEach(() => {
    mocks = {
      $store: {
        dispatch: jest.fn(),
        getters: {
          allTasks: []
        },
        state: {
          activeTask: {}
        }
      }
    };
  });

  test('it renders Task component', () => {
    mocks.$store.getters.allTasks = [{ name: 'STRING' }];
    const wrapper = shallowMount(ToDoList, { mocks });
    expect(wrapper.contains(Task)).toBe(true);
  });

  test('it renders as many Task components as tasks', () => {
    mocks.$store.getters.allTasks = [{ name: 'STRING' }, { name: 'STRING' }];
    const wrapper = shallowMount(ToDoList, {mocks});
    wrapper.setData({
      tasks: [{ name: 'STRING' }, { name: 'STRING' }]
    });
    const tasks = wrapper.findAll(Task);
    expect(tasks.length).toBe(2);
  });

  test('it passes right props to Task component', () => {
    mocks.$store.getters.allTasks = [{ name: '1' }];
    const wrapper = mount(ToDoList, {mocks});
    wrapper.setData({tasks: [{ name: '1' }]});
    const task = wrapper.find(Task);
    expect(task.props()).toEqual({task: { name: '1' }});
  });

  test('it calls deleteTask method when task component emits delete event', () => {
    const wrapper = shallowMount(ToDoList, {
      mocks,
      computed: {
        allTasks: () => [{ name: 'MY PROP' }]
      }
    });
    
    const task = wrapper.find(Task);
    task.vm.$emit('delete');
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toBe('deleteTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toBe(0);
  });

  test('it renders activeTask ', () => {
    mocks.$store.state.activeTask = { name: 'Task Name' };
    const wrapper = shallowMount(ToDoList, { mocks });

    expect(wrapper.text()).toContain('Task Name')
  });

  test('it calls addTask action when button is clicked ', () => {
    const wrapper = shallowMount(ToDoList, { mocks });

    const input  = wrapper.find('input[type=text]');
    input.element.value = 'My new task';
    input.trigger('input');

    const button = wrapper.find('button');
    button.trigger('click');

    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toBe('addTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toBe('My new task');
    expect(input.element.value).toBe('');
  });
});