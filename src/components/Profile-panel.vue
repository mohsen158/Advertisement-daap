<template>
    <sui-grid  :columns="2"     >


   <sui-grid-row stretched>
      <sui-grid-column :width="2">
         
               <sui-image avatar :src="randomAvatar" circular shape="circular" size="tiny" style="background-color: #F2F2F2;" />
 
      </sui-grid-column>
      <sui-grid-column :width="14">
 <sui-segment piled>
    <sui-grid   >
     
      <sui-grid-row :columns="2"  >
        <sui-grid-column>
          Mohammad Ali Shahsavand
         </sui-grid-column>
      </sui-grid-row>
      </div>
      <sui-grid-row :columns="3">
        <sui-grid-column> Wallet Addres {{mineAdd}}</sui-grid-column>
        <sui-grid-column>   </sui-grid-column>
        <sui-grid-column>   </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-segment>         
      </sui-grid-column>
     
    </sui-grid-row>


 
      </sui-grid>

</template>

<script>
import { sc } from "../contract";
const Web3 = require("web3");
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7b3a02e10a0043feb895438cb1ad9230"));
// web3.eth.getBlock("latest", (error, result) => {
//   console.log('error:', error);
//   console.log('results', result);
// });

export default {
  name: "Profile",
  props: {
    msg: String,
  },
  data: function () {
    return {
      mineAdd: "",
    };
  },
  mounted: function () {var web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.enable().then(function () {
      // User has allowed account access to DApp...
    });
  } catch (e) {
console.log("errrr",e)  }
}
 this.mineAdd = web3.eth.currentProvider.selectedAddress;
  },
  computed: {
    randomAvatar: function () {
      var r = Math.floor(Math.random() * 24) + 1;
      return require(`@/assets/` + r + ".png");
    },
    myAddress: function () {
      var mineAdd = web3.eth.currentProvider.selectedAddress;

      console.log("myAddress::::::::", mineAdd);
      return mineAdd;
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
