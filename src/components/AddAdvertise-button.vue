<template>
              <sui-button fluid content="Fits container" v-on:click="click" />

</template>

<script>
import {sc} from "../contract"
const Web3 = require("web3");
export default {
  name: "AddAdvertiseButton",
  props: {
    msg: String,
  }, methods: {
    click: function (event) {
        console.log("sd",sc)
 
      // `this` inside methods points to the Vue instance
      sc.methods.setName("mohsen").send({from:  web3.eth.currentProvider.selectedAddress }).then(function(err,res){
          console.log(err,res);
      })
   
    },
  },
  computed: {
    randomAvatar: function () {
      var r = Math.floor(Math.random() * 24) + 1;
      return require(`@/assets/` + r + ".png");
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
