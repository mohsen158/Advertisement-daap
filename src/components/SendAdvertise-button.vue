
<template>
  <div>
    <sui-button
      fluid
      color="green"
      content="Send"
      :loading="loading"
      @click.native="toggle"
    />
    <sui-modal v-model="open">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content image>
        <sui-modal-description>
          <sui-header>Select Receiver</sui-header>
          <p>Set or choose the receivers' address of this advertise.</p>

          <sui-input v-model="recAdd" placeholder="Address" />
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="click"> OK </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>
 
<script>
import { sc } from "../contract";
const Web3 = require("web3");
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7b3a02e10a0043feb895438cb1ad9230"));
// web3.eth.getBlock("latest", (error, result) => {
//   console.log('error:', error);
//   console.log('results', result);
// });
var web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.enable().then(function() {
      // User has allowed account access to DApp...
    });
  } catch (e) {
    // User has denied account access to DApp...
  }
}export default {
  name: "SendAdvertiseButton",
  props: {
    adId: String,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    buttonLoading() {
      this.loading = !this.loading;
    },
    click: function ( ) {
      console.log("sd", this.recAdd);
      this.toggle();
      // `this` inside methods points to the Vue instance
      this.loading = true;
      try {
         sc.methods
          .sendAd(this.adId, this.recAdd)
          .send({ from: web3.eth.currentProvider.selectedAddress })
          .on("transactionHash", (hash) => {
            this.$store.commit("addHashTransaction", {
              type: "sendAdvertise",
              hash: hash,
            });
          })
          .on("confirmation", (confirmationNumber, receipt) => {
            this.$store.commit("addConfirmationActivity", {
              receipt: receipt,
              confirmationNumber: confirmationNumber,
            });
          })
          .on("receipt", (receipt) => {
            // receipt example
            console.log(receipt);
            this.loading = false;
          });
      } catch (err) {
        this.loading = false;
        console.log("try, ", err);
      }
    },
  },
  data() {
    return { open: false, recAdd: "", loading: false };
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