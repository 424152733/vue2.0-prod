<template>
  <div id="app">
  <transition name="fadeUp">
    <app-header v-show="step1"></app-header>
  </transition>
  <transition name="fadeRight">
    <app-content v-show="step2"></app-content>
  </transition>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
export default {
  name: 'app',
  data() {
    return {
      step1: false,
      step2: false,
    }
  },
  mounted() {
    setTimeout(_ => {
      this.step1 = true;
      setTimeout(_ => {
        this.step2 = true;
      }, 300)
    }, 300)
  },
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<style lang="sass">
  @import './public/sass/common.scss'
</style>
