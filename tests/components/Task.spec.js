import { mount, shallowMount, RouterLinkStub, config } from '@vue/test-utils';
import Task from '@/components/Task';

config.stubs['router-link'] = '<div />';
describe('Component Task', () => {
  test('it renders task prop', () => {
    const wrapper = mount(Task, {
      propsData: {
        task: 'My new Task'
      }
    });
    expect(wrapper.text()).toContain('My new Task');
  });

  test('it renders task prop', () => {
    const wrapper = mount(Task);
    wrapper.setProps({task: 'My new Task'});
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

  test('it renders the TaskView router-link ', () => {
    const wrapper = shallowMount(Task, {
      stubs: {
        'router-link': RouterLinkStub
      },
      propsData: { task: 'My Task' },
    });

    expect(wrapper.find(RouterLinkStub).props().to).toEqual({
      path: '/task',
      params: {
        task: 'My Task',
      }
    });
  });

  test('it emits complete event when button is clicked', () => {
    const wrapper = shallowMount(Task);
    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().complete).toBeTruthy();
  });
});
