import { mount } from 'vue-test-utils';
import App from '@/App';

test('component has a name', () => {
    const wrapper = mount(App);
    expect(wrapper.name()).toBe('App');
});

test('default data is correct', () => {
    const wrapper = mount(App);
    expect(wrapper.vm.msg).toBe('');
});

test('msg data is displayed', () => {
    const wrapper = mount(App);
    wrapper.setData({ msg: 'Hello world!'});
    expect(wrapper.text()).toContain('Hello world!');
});

test('msg changes when button is clicked', () => {
    const wrapper = mount(App);
    const input = wrapper.find('input');
    input.element.value = 'Updated text';
    input.trigger('input');
    expect(wrapper.html()).toContain('Updated text');
});

test('fullName computed is firstName and lastName', () => {
    const wrapper = mount(App);
    wrapper.setData({
        firstName: 'John',
        lastName: 'Doe'
    });
    expect(wrapper.vm.fullName).toBe('John Doe');
});

test('fullName computed is displayed', () => {
    const wrapper = mount(App, {
        computed: {
            fullName: () => 'John Doe'
        }
    });
    expect(wrapper.text()).toContain('John Doe');
});

test('firstName is in uppercase when button is clicked', () => {
    const wrapper = mount(App);
    wrapper.setData({
        firstName: 'John',
    });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.firstName).toBe('JOHN');
});

test('firstName is in uppercase when toUppercase method is called', () => {
    const wrapper = mount(App);
    wrapper.setData({
      firstName: 'John'
    });
    wrapper.vm.toUppercase();
    expect(wrapper.vm.firstName).toBe('JOHN');
});