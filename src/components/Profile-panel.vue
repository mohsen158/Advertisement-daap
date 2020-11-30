<template>
<sui-grid :columns="2">

    <sui-grid-row  >
        <sui-grid-column class="cntr" :width="2">

            <sui-image avatar :src="randomAvatar" circular shape="circular" size="tiny"   style="background-color: #F2F2F2; height:100px" />

        </sui-grid-column>
        <sui-grid-column :width="14">
            <sui-segment piled>
                <sui-grid>

                    <sui-grid-row :columns="2">

                        <sui-grid-column>
                            <a is="sui-label" color="black" ribbon>
                                Mohammad Ali Shahsavand
                            </a>

                        </sui-grid-column>
                    </sui-grid-row>
                    </div>
                    <sui-grid-row :columns="2">
                        <sui-grid-column>
                            <sui-list divided selection>
                                <sui-list-item>
                                    <sui-label color="red" horizontal>
                                        Favorite categories:
                                    </sui-label> 
                                    <a is="sui-label" tag>
                                        Management</a> <a is="sui-label" tag>
                                        Blockchain</a>
                                </sui-list-item>
                                <sui-list-item>
                                    <sui-label color="purple" horizontal>
                                        Wallet Address:
                                    </sui-label>
                                    <a is="sui-label" tag>

                                        {{mineAdd ? mineAdd : "0xbDb7dd6019fA22F9ab4266739Eab92c43405eB02"}}</a>
                                </sui-list-item>

                            </sui-list>
                            <!-- <sui-grid-row>

                                <sui-label color="grey" horizontal>
                                    Favorite categories :

                                </sui-label>
                                <sui-label>

                                    <sui-label-detail>Management</sui-label-detail>
                                </sui-label>
                            </sui-grid-row>
                            <sui-grid-row>

                                Wallet Addres {{mineAdd}}
                            </sui-grid-row> -->
                        </sui-grid-column>

                        <sui-grid-column> </sui-grid-column>
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
      mineAdd: '',
    };
  },
  mounted: function () {
    var web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      var that=this
      try {
        window.ethereum.enable().then(function () {
          // User has allowed account access to DApp...
          that.mineAdd = web3.eth.currentProvider.selectedAddress;
         }) ;
      } catch (e) {
        console.log("errrr", e);
      }
    }
  },
  computed: {
    randomAvatar: function () {
      var r = Math.floor(Math.random() * 24) + 1;
      return require(`@/assets/` + r + ".png");
    },
    myAddress: function () {
    var mineAddd = web3.eth.currentProvider.selectedAddress;

       return mineAddd;
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
