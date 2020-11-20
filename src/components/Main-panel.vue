<template>
  <div v-if="ads">
    Advertises
    <sui-list>
      <sui-container v-bind:key="ad.id" v-for="ad in ads">
        <sui-grid :columns="3">
          <sui-grid-row>
            <sui-grid-column text-align="center"  :width="2">
              {{ad}}
            </sui-grid-column>
            <sui-grid-column :width="12">
              <sui-grid>
                <sui-grid-row :columns="2">
                  <sui-grid-column> </sui-grid-column>
                </sui-grid-row>

                <sui-grid-row :columns="3">
                  <sui-grid-column> </sui-grid-column>
                  <sui-grid-column> 44444444444 </sui-grid-column>
                  <sui-grid-column> 55555555555 </sui-grid-column>
                </sui-grid-row>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="2">
              <sui-button text-align="center" basic color="teal"
                >Send</sui-button
              >
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>

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
export default {
  name: "Main",
  data: function () {
    return {
      ads: [ ],
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
    var dt2 = sc.methods.getListOfAds().call().then(function (data) {
      for(var i=0 ; i<data[1];i++)
      {
        console.log(data[0][i])
        let obj ={"id":data[0][i]}
       that.ads.push(obj)

      }
      console.log("array", data);
      // that.ads.push({ key: 3, text: data });
    });

      console.log("dt",dt2)
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
