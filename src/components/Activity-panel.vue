<template>
  <sui-segment basic>
    <a is="sui-label" color="blue" ribbon> Activities </a>

    <sui-list v-bind:key="act.hash" v-for="act in activityList">
      <sui-message  color="olive" v-if="act.type == 'addAdvertise'">
         <sui-message-header>
          <i class="share circle icon"></i> Add new  advertises'
          transaction</sui-message-header
        >
        <sui-message-list>
          <sui-message-item v-if="act.hash">
            Transaction hash is {{ act.hash.substr(0, 40) }} ...
          </sui-message-item>
          <sui-message-item>
            Deployed transactions' time is {{ act.time.getHours() + ":" +  act.time.getMinutes() + ":" +  act.time.getSeconds()}}
          </sui-message-item>
          <sui-message-item v-if="act.confirmationNumber">
            {{ act.confirmationNumber }} Block confirmations
          </sui-message-item>
        </sui-message-list>
      </sui-message>
      <sui-message color="blue" v-if="act.type == 'sendAdvertise'">
        <sui-message-header>
          <i class="share circle icon"></i> Send advertises'
          transaction</sui-message-header
        >
        <sui-message-list>
          <sui-message-item v-if="act.hash">
            Transaction hash is {{ act.hash.substr(0, 40) }} ...
          </sui-message-item>
          <sui-message-item v-if="act.confirmationNumber">
            {{ act.confirmationNumber }} Block confirmations
          </sui-message-item>
           <sui-message-item>
            Deployed transactions' time is {{ timeDisplayed(act.time) }}
          </sui-message-item>
        </sui-message-list>
      </sui-message>
    </sui-list>
  </sui-segment>
</template>

<script>
export default {
  name: "Activity",
  props: {
    msg: String,
  },
  methods: {
    timeDisplayed: function (time){
      var d= new Date(time);
     return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    }
  },
  computed: {
    activityList: function () {
      return this.$store.getters.activities;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cntr {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
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
