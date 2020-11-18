import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import Web3 from "web3";
// import VueWeb3 from "vue-web3";
// Vue.use(VueWeb3, { web3: new Web3(web3.currentProvider) });

// let myContract = new web3.eth.Contract(MyContract, '0xbA911C4A817e69998Ffd3626d3c5366038e8480F')

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // web3: {
  //   // can bind to calls
  //   lastUpdated: {
  //     contract: myContract,
  //     method: "getLastUpdated",
  //     arguments: [],
  //   },
  //   // can also bind to events
  //   transfers: {
  //     contract: myContract,
  //     event: "OwnershipTransferred",
  //     options: {
  //       fromBlock: 2,
  //     },
  //   },
  // },
  render: (h) => h(App),
}).$mount("#app");
