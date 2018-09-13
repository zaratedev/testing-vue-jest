import { mount, shallowMount } from '@vue/test-utils';
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

test('it emits delete event when delete button is clicked', () => {
    const wrapper = mount(Task);
    const button = wrapper.find('#delete');
    button.trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
});

test('it renders default slot', () => {
    const wrapper = shallowMount(Task, {
      slots: {
        default: '<div id="close"></div>'
      }
    });
    expect(wrapper.contains('#close')).toBe(true);
});