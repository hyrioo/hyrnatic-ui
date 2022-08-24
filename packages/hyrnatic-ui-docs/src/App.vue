<template>
    <div class="app">
        <div class="header">
            <div class="container">
                Hyrnatic UI-kit
            </div>
        </div>
        <div class="container">
            <navigation />
            <router-view />
        </div>
    </div>
    <h-dialog-wrapper ref="dialogWrapper" />
    <h-notification-wrapper ref="notificationWrapper" placement="bottom-right" />
</template>

<script lang="ts">
// import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import { nextTick, ref, watch } from 'vue';
import Navigation from './components/Navigation.vue';

export default {
    name: 'App',
    components: {
        Navigation,
    },
    setup() {
        const dialogWrapper = ref();
        const notificationWrapper = ref();
        nextTick(() => {
            watch(() => dialogWrapper.value.dialogsCount, (count) => {
                if (count > 0) {
                    document.body.classList.add('has-dialogs');
                } else {
                    document.body.classList.remove('has-dialogs');
                }
            });
        });

        return {
            dialogWrapper,
            notificationWrapper,
        };
    },
};
</script>

<style lang="scss">
body {
  font-family: sans-serif;
  font-size: 13px;
  margin: 0;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
}

.header {
  height: 48px;
  line-height: 48px;
  background: rgba(#319C9C, .08);
  border-bottom: 2px solid rgba(#319C9C, .32);
  font-size: 18px;
  color: #319C9C;
}

</style>
