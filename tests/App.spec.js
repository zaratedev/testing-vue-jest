import App from '@/App';
import { shallow } from 'vue-test-utils';
import ToDoList from '@/components/ToDoList';

describe('component App', () => {
    test('component has a name', () => {
        const wrapper = shallow(App);
        expect(wrapper.name()).toBe('App');
    });

    test('renders ToDoList component', () => {
        const wrapper = shallow(App);
        expect(wrapper.contains(ToDoList)).toBeTruthy();
    });
});
