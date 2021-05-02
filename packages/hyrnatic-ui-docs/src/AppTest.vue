<template>
    <div class="app">
        Hello
    </div>
</template>

<script lang="ts">

export default {
    name: 'App',
    components: {
    },
    setup() {
        return {
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
    background: #D4E6E6;
    border-bottom: 2px solid #319C9C;
    font-size: 18px;
    color: #319C9C;
}

</style>
