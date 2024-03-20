<script setup>
import headvue from "./components/head.vue";
import bodyvue from "./components/body.vue";
</script>

<template>
  <headvue />
  <bodyvue />
</template>

<style scoped>
/* Desktop styles */
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
}

/* Tablet styles */
@media screen and (max-width: 1024px) {
  .container-fluid {
    padding: 0 1rem;
  }

  .target {
    flex-direction: column;
    align-items: center;
  }

  .logo-work {
    width: 100%;
    height: auto;
  }
}

/* Mobile styles */
@media screen and (max-width: 768px) {
  .target {
    margin-top: 5rem;
  }

  .logo-work {
    width: 100%;
    height: auto;
  }
}
</style>
