import { mount } from '@vue/test-utils';

import TaskList from '../../src/components/TaskList.vue';

// Our story imported here
import { WithPinnedTasks } from '../../src/components/TaskList.stories';

test('renders pinned task at the start of the list', () => {
    const wrapper = mount (TaskList, {
        // Story's args used with our test
        data: WithPinnedTasks
    });
    const firstPinnedTask = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
    expect(firstPinnedTask).not.toBe(null);
});