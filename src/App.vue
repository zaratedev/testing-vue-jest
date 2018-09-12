<template>
  <div id="app">
    <div id="warning" v-if="!msg">Please fill the message</div>
    <input type="text" v-model="msg">
    <span id="message">{{ msg }}</span>
    <span id="full-name">{{ fullName }}</span>
    <button @click="toUppercase">Change firstName</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '',
      firstName: '',
      lastName: '',
    }
  },

  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },

  methods: {
    toUppercase() {
      this.firstName = this.firstName.toUpperCase();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
