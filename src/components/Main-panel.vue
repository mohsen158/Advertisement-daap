<template>
  <div v-if="ads">
    Advertises
    <sui-list>
      <sui-list-item v-bind:key="ad.key" v-for="ad in ads">
        <sui-image avatar :src="randomAvatar()" shape="circular" size="mini" />

        <sui-list-content>
          <a is="sui-list-header">{{ad.text}}</a>

          <sui-list-description>
            Last seen watching
            <a>
              <b>Arrested Development</b>
            </a>

            just now.
          </sui-list-description>
        </sui-list-content>
        <sui-divider />
      </sui-list-item>
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
import {sc} from "../contract"
export default {
  name: "Main",
  data: function () {
    return {
      ads: [{key:1,text:"sdfsd"}, {key:2,text:"sdaaaafsd"}],
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
    var dt = sc.methods.owner().call().then(console.log); 
    // console.log(dt)
     this.ads.push({key:3,text:dt})

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
