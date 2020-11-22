import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adEvents: [],
    adActivity: [],
  },
  getters: {
    activities: (state) => {
      return state.adActivity.sort((a, b) =>
        a.time > b.time ? -1 : a.time < b.time ? 1 : 0
      );
    },
  },
  mutations: {
    addAd(state, ad) {
      state.adAd.push(ad); //{add object}
    },
    addErrorActivity(state, message) {
      state.adActivity.push({ type: "error", message: message });
    },
    addHashTransaction(
      state,
      payload //type means {addAdvertise or sendAdvertise}
    ) {
      state.adActivity.push({
        type: payload.type,
        hash: payload.hash,
        time: Date.now(),
      });
    },
    addConfirmationActivity(state, payload) {
      console.log("in store", payload);
      try {
        state.adActivity = [
          ...state.adActivity.filter(
            (element) => element.hash !== payload.receipt.transactionHash
          ),
          {
            hash: payload.receipt.transactionHash,
            type: state.adActivity.filter(
              (element) => element.hash === payload.receipt.transactionHash
            )[0].type,
            time: state.adActivity.filter(
              (element) => element.hash === payload.receipt.transactionHash
            )[0].time,
            confirmationNumber: payload.confirmationNumber,
            receipt: payload.receipt,
          },
        ];
      } catch (err) {
        console.log(err);
      }
    },
  },
  actions: {},
  modules: {},
});
