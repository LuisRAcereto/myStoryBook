<template>
    <PureInboxScreen :error="error" />
</template>

<script>
  import { computed } from 'vue';

  import { useStore } from 'vuex';

  import PureInboxScreen from './PureInboxScreen';

  export default {
    name: 'InboxScreen',
    components: { PureInboxScreen },
    setup() {
        // Create store instance
        const store = useStore();
        // Retrieve the error from the store's state
        const error = computed(() => store.state.error );
        return {
            error
        };
    }
}
</script>