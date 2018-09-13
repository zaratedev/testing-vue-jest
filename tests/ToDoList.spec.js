import { mount } from '@vue/test-utils';
import ToDoList from '@/ToDoList';
import Task from '@/Task';

describe('Component ToDoList', () => {

    test('it renders Task component', () => {
        const wrapper = mount(ToDoList);
        wrapper.setData({ tasks: [1] });
        expect(wrapper.contains(Task)).toBe(true);
    });

    test('it renders as many Task components as tasks', () => {
        const wrapper = mount(ToDoList);
        wrapper.setData({ tasks: [1, 2] });
        const tasks = wrapper.findAll(Task);
        expect(tasks.length).toBe(2);
    });
});