import { mount, shallowMount } from '@vue/test-utils';
import ToDoList from '@/components/ToDoList';
import Task from '@/components/Task';

let mocks;

describe('Component ToDoList', () => {
    beforeEach(() => {
        mocks = {
            $route: {}
        };
    });
    
    test('it renders Task component', () => {
        const wrapper = mount(ToDoList, { mocks });
        wrapper.setData({ tasks: ['1'] });
        expect(wrapper.contains(Task)).toBe(true);
    });

    test('it renders as many Task components as tasks', () => {
        const wrapper = mount(ToDoList, { mocks });
        wrapper.setData({ tasks: ['1', '2'] });
        const tasks = wrapper.findAll(Task);
        expect(tasks.length).toBe(2);
    });

    test('it passes right props to Task component', () => {
        const wrapper = mount(ToDoList, { mocks });
        wrapper.setData({ tasks: ['1'] });
        const task = wrapper.find(Task);
        expect(task.props()).toEqual({ task: '1' });
    });

    test('it calls deleteTask method when task component emits delete event', () => {
        const deleteTask = jest.fn();
        const wrapper = shallowMount(ToDoList, {
          methods: { deleteTask },
          mocks
        });
        wrapper.setData({ tasks: ['MY PROP'] });
        const task = wrapper.find(Task);
        task.vm.$emit('delete');
        expect(deleteTask).toHaveBeenCalledTimes(1);
        expect(deleteTask.mock.calls[0][0]).toBe('MY PROP');
    });

    test('it gets params from $route', () => {
        const wrapper = shallowMount(ToDoList, {
          mocks: {
            $route: {
              params: 'MY PARAMS'
            }
          }
        });
        expect(wrapper.vm.params).toBe('MY PARAMS');
    });
});