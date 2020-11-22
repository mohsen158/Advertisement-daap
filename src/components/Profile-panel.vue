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
        <sui-grid-column> Wallet Addres {{myAddress}}</sui-grid-column>
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

export default {
  name: "Profile",
  props: {
    msg: String,
  },
  computed: {
    randomAvatar: function () {
      var r = Math.floor(Math.random() * 24) + 1;
      return require(`@/assets/` + r + ".png");
    },
    myAddress: function () {
      var mineAdd = web3.eth.currentProvider.selectedAddress;
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
