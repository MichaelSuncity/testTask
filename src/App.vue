<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import FormLayout from './views/layouts/FormLayout.vue';

export default {
  components: {
    FormLayout,
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'form') + '-layout';
    },
  },
};
</script>

<style lang="scss"></style>
