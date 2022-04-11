<template>
    <PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask" />
</template>

<script>
import PureTaskList from './PureTaskList';

import { computed } from 'vue';

import { useStore } from 'vuex';

export default{
    components: { PureTaskList },
    name: 'TaskList',
    setup() {
        // Create a store instance
        const store = useStore();
        // Retrieve the task from the store's state
        const tasks = computed ( () => store.state.tasks);
        // Dispatch the actions back to the store
        const archiveTask = task => store.dispatch('archiveTask', task);
        const pinTask = task => store.dispatch('pinTask', task);

        return {
            tasks,
            archiveTask,
            pinTask
        };
    }
};
</script>
