import { shallow } from "vue-test-utils";
import TaskView from "@/components/TaskView";

let mocks;

describe('component TaskView', () => {
    beforeEach(() => {
        mocks = {
            $route: {
                params: {}
            }
        }
    });
    test('it has a name', () => {
        const wrapper = shallow(TaskView, { mocks });
        expect(wrapper.name()).toBe('TaskView');
    });

    test('it gets the task from the route', () => {
        mocks.$route.params = { task: 'My Task' };

        const wrapper = shallow(TaskView, { mocks });

        expect(wrapper.vm.task).toBe('My Task');
    });
});
