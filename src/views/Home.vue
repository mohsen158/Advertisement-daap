<template>
  <sui-container class="cont">
    <div class="home">
      <Profile />
      <sui-grid divided>
        <sui-grid-row :columns="2">
          <sui-grid-column black :width="12"> <Main /> </sui-grid-column>
          <sui-grid-column :width="4"> <Activity /> </sui-grid-column>
        </sui-grid-row>
        <sui-grid-row :columns="1">
          <sui-grid-column :width="12">
            <AddAdvertiseButton />
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </div>
  </sui-container>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile-panel.vue";
import Main from "@/components/Main-panel.vue";
import Activity from "@/components/Activity-panel.vue";
import AddAdvertiseButton from "@/components/AddAdvertise-button.vue";
import contract from "../contract";
export default {
  name: "Home",
  components: {
    Main,
    Activity,
    Profile,
    AddAdvertiseButton,
  },
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
};
</script>
