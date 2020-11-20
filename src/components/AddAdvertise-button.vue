<template>
  <div>
    <sui-button
      fluid
      content="Add advertise"
      :loading="loading"
      @click.native="toggle"
    />
    <sui-modal v-model="open">
      <sui-modal-header>Select Receive</sui-modal-header>
      <sui-modal-content image>
        <sui-modal-description>
          <p>Set or choose the receivers' address of this advertise.</p>
          <sui-form>
            <sui-form-field>
              <sui-input v-model="Category" placeholder="Category" />
            </sui-form-field>
            <sui-form-field>
              <sui-input
                v-model="GeographicalArea"
                placeholder="GeographicalArea"
              />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="Link" placeholder="Link" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="startYear" placeholder="startYear" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="startMonth" placeholder="startMonth" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="startDay" placeholder="startDay" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="endYear" placeholder="endYear" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="endMonth" placeholder="endMonth" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="endDay" placeholder="endDay" />
            </sui-form-field>
          </sui-form>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="click"> Add </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import { sc } from "../contract";
const Web3 = require("web3");
export default {
  name: "AddAdvertiseButton",
  props: {
    msg: String,
  },
  data() {
    return {
      open: false,
      loading: false,
      Category: "",
      Link: "",
      GeographicalArea: "",
      startYear: "",
      startMonth: "",
      startDay: "",
      endYear: "",
      endMonth: "",
      endDay: "",
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    buttonLoading() {
      this.loading = !this.loading;
    },
    click: function (event) {
      console.log("sd", sc);
      this.toggle();
      // `this` inside methods points to the Vue instance
      this.loading = true;
      try {
        var that = this;
        sc.methods
          .orderAd(
            this.Category,
            this.GeographicalArea,
            this.Link,
            this.startYear,
            this.startMonth,
            this.startDay,
            this.endYear,
            this.endMonth,
            this.endDay
          )
          .send({ from: web3.eth.currentProvider.selectedAddress })
          .then(function (err, res) {
            that.loading = false;
            console.log("err", err, res);
          });
      } catch (err) {
        this.loading = false;
        console.log("try, ", err);
      }
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
