
<template>
<div>
              <sui-button fluid  color="green" content="Send" :loading="loading"  @click.native="toggle"  />
<sui-modal v-model="open">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content image>
        
        <sui-modal-description>
          <sui-header>Select Receiver</sui-header>
          <p>
            Set or choose the receivers' address of this advertise.
          </p>

  <sui-input  v-model="recAdd" placeholder="Address" />
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button  positive  @click.native="click">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
</div>
</template>
 
<script>
import {sc} from "../contract"
const Web3 = require("web3");
export default {
  name: "SendAdvertiseButton",
  props: {
    adId: String,
    
    
  }, methods: {
    toggle() {
      this.open = !this.open;
    },
    buttonLoading(){
      this.loading = !this.loading;
    },
    click: function (event) {
        console.log("sd", this.recAdd);
        this.toggle();
      // `this` inside methods points to the Vue instance
          this.loading=true
          try{
            var that= this
       sc.methods.sendAd(this.adId, this.recAdd).send({from:  web3.eth.currentProvider.selectedAddress }).then(function(err,res){
          that.loading=false
          console.log("err",err,res);
      })}
      catch(err)
      {
                  this.loading=false

        console.log('try, ',err)
      }
   
    },
  },data() {
    return { open: false,recAdd: '',loading:false };
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