import { mount } from '@vue/test-utils';
import Task from '@/components/Task';

test('it renders task prop', () => {
    const wrapper = mount(Task, {
      propsData: { task: 'My new Task' }
    });
    expect(wrapper.text()).toContain('My new Task');
});

test('it renders task prop', () => {
    const wrapper = mount(Task);
    wrapper.setProps({ task: 'My new Task' });
    expect(wrapper.text()).toContain('My new Task');
});