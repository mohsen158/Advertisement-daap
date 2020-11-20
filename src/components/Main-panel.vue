<template>
  <div v-if="ads">
    <a is="sui-label" color="teal" ribbon> Advertises </a>
    <sui-list>
      <sui-container divided v-bind:key="ad.id" v-for="ad in ads">
        <sui-segment raised>
          <sui-label attached="bottom"
            ><sui-icon name="globe" />{{ ad.region }}</sui-label
          >
          <sui-label attached="bottom right">
            <sui-icon name="spinner" loading color="orange" />
          </sui-label>

          <a is="sui-label" color="red" ribbon> <b> Id: </b> {{ ad.id }} </a>
          <sui-grid :columns="3">
            <sui-grid-row>
              <sui-grid-column :width="2">
                <!-- <sui-icon name="linkify icon" link bordered   /> -->
                {{ ad.link }}
              </sui-grid-column>
              <sui-grid-column :width="12">
                <sui-grid>
                  <sui-grid-row :columns="2">
                    <sui-grid-column> </sui-grid-column>
                  </sui-grid-row>

                  <sui-grid-row :columns="3">
                    <sui-grid-column> </sui-grid-column>
                    <sui-grid-column> 44444444444 </sui-grid-column>
                    <sui-grid-column>
                      <div v-if="ad.recForMe">
                      <a is="sui-label" color="teal" tag> Received </a>
                      </div>
                    </sui-grid-column>
                  </sui-grid-row>
                </sui-grid>
              </sui-grid-column>
              <sui-grid-column :width="2">
                <SendAdvertiseButton :adId="ad.id" />
              </sui-grid-column>
            </sui-grid-row>
          </sui-grid>
        </sui-segment>
        <sui-divider />
      </sui-container>
      <!-- <sui-image avatar :src="randomAvatar()" shape="circular" size="mini" />

        <sui-list-content>
          <a is="sui-list-header">{{ ad.text }}</a>

          <sui-list-description>
            Last seen watching
            <a>
              <b>Arrested Development</b>
            </a>

            just now.
         
         
          </sui-list-description>
          
        </sui-list-content>
           <sui-segment floated="right" >
              <p>This segment will appear to the right</p>
            </sui-segment>
          
        <sui-divider />
      </sui-list-item> -->
    </sui-list>
  </div>
  <!-- <div v-if="ads">
    <div v-bind:key="item" v-for="ad in ads">
      <sui-segment aligned="left"
        ><sui-message success> <p>Left</p> </sui-message>
      </sui-segment>
    </div>
     
  </div> -->
</template>

<script>
import { sc } from "../contract";
import SendAdvertiseButton from "./SendAdvertise-button.vue";
export default {
  name: "Main",
  components: {
    SendAdvertiseButton,
  },
  data: function () {
    return {
      ads: [],
      recId: "0x3AEF5014F1cd54d6EAa69E0F5D77f4632dA10B3E",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    randomAvatar: function () {
      var r = Math.floor(Math.random() * 24) + 1;
      return require(`@/assets/` + r + ".png");
    },
  },
  mounted: function () {
    console.log(sc);
    var that = this;
    // var dt = sc.methods
    //   .owner()
    //   .call()
    //   .then(function (data) {
    //     that.ads.push({ key: 3, text: data });
    //   });
    var dt2 = sc.methods
      .getListOfAds()
      .call()
      .then(function (data) {
        for (var i = 0; i < data[1]; i++) {
          let id = data[0][i];
          sc.methods
            .getAdContents(id)
            .call()
            .then(function (content) {
              sc.methods
                .getAdReceivers(id)
                .call()
                .then(function (adArray) {
                  var mineAdd = web3.eth.currentProvider.selectedAddress;
                  const newAdArray = adArray.map((name) => name.toLowerCase());

                  let obj = {
                    id: id,
                    link: content[0],
                    category: content[1],
                    region: content[2],
                    date: content[3],
                    budget: content[4],
                    recArray: adArray,
                    recForMe: newAdArray.includes(mineAdd.toLowerCase()),
                  };
                  console.log(id);
                  that.ads.push(obj);
                });
            });
        }
        // that.ads.push({ key: 3, text: data });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cntr {
  text-align: center;
}
.link {
  float: left;
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

