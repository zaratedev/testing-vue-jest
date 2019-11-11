import { mount, shallowMount, config } from '@vue/test-utils';
import ToDoList from '@/components/ToDoList';
import Task from '@/components/Task';
import { shallow } from 'vue-test-utils';

let mocks;
config.stubs['router-link'] = '<div />';

describe('Component ToDoList', () => {
  beforeEach(() => {
    mocks = {
      $store: {
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
    mocks.$store.getters.allTasks = ['STRING'];
    const wrapper = shallow(ToDoList, { mocks });
    expect(wrapper.contains(Task)).toBe(true);
  });

  test('it renders as many Task components as tasks', () => {
    mocks.$store.getters.allTasks = [1, 2];
    const wrapper = shallow(ToDoList, {mocks});
    wrapper.setData({
      tasks: ['1', '2']
    });
    const tasks = wrapper.findAll(Task);
    expect(tasks.length).toBe(2);
  });

  test('it passes right props to Task component', () => {
    mocks.$store.getters.allTasks = ['1'];
    const wrapper = mount(ToDoList, {mocks});
    wrapper.setData({tasks: ['1']});
    const task = wrapper.find(Task);
    expect(task.props()).toEqual({task: '1'});
  });

  test('it calls deleteTask method when task component emits delete event', () => {
    const deleteTask = jest.fn();
    const wrapper = shallowMount(ToDoList, {
      methods: { deleteTask },
      mocks,
      computed: {
        allTasks: () => ['MY PROP']
      }
    });
    
    const task = wrapper.find(Task);
    task.vm.$emit('delete');
    expect(deleteTask).toHaveBeenCalledTimes(1);
    expect(deleteTask.mock.calls[0][0]).toBe('MY PROP');
  });

  test('it renders activeTask ', () => {
    mocks.$store.state.activeTask = { name: 'Task Name' };
    const wrapper = shallow(ToDoList, { mocks });

    expect(wrapper.text()).toContain('Task Name')
  });
  
});