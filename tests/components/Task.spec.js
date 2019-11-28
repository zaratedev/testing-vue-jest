import { mount, shallowMount, RouterLinkStub, config } from '@vue/test-utils';
import Task from '@/components/Task';

config.stubs['router-link'] = '<div />';
describe('Component Task', () => {
  let mocks;

  beforeEach(() => {
    mocks = {
      $store: {
        dispatch: jest.fn()
      }
    }
  });

  test('it renders task prop', () => {
    const wrapper = mount(Task, {
      propsData: {
        task: { name: 'My new Task' }
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
      propsData: { task: { name: 'My Task' } },
    });

    expect(wrapper.find(RouterLinkStub).props().to).toEqual({
      path: '/task',
      params: {
        task: { name: 'My Task' },
      }
    });
  });

  test('checkbox is checked if task.done is true', () => {
    const wrapper = shallowMount(Task, {
      propsData: {
        task: { name: 'My Task', done: true },
      }
    });

    const checkbox = wrapper.find('input[type="checkbox"]');

    expect(checkbox.element.checked).toBeTruthy();
  });

  test('checkbox is not checked if task.done is false', () => {
    const wrapper = shallowMount(Task, {
      propsData: {
        task: { name: 'My Task', done: false },
      }
    });

    const checkbox = wrapper.find('input[type="checkbox"]');

    expect(checkbox.element.checked).toBeFalsy();
  });

  test('it calls to completeTask action when checkbox is clicked and is false', () => {
    const wrapper = shallowMount(Task, {
      mocks,
      propsData: {
        task: { name: 'My task' }
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.element.checked = false;
    checkbox.trigger('click');

    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toEqual('completeTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toEqual({ name: 'My task' });
  });

  test('it calls to uncompleteTask action when checkbox is clicked and is true', () => {
    const wrapper = shallowMount(Task, {
      mocks,
      propsData: {
        task: { name: 'My task' }
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.element.checked = true;
    checkbox.trigger('click');

    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toEqual('uncompleteTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toEqual({ name: 'My task' });
  });
});
