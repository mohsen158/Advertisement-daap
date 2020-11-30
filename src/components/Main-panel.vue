<template>
<div v-if="ads">
    <a is="sui-label" color="teal" ribbon> Advertises </a>
    <sui-tab :menu="{ secondary: true }">
        <sui-tab-pane title="My seed" :attached="false">
            <sui-list>
                <sui-container divided v-bind:key="ad.id" v-for="ad in seedRandomChoosers">
                    <sui-segment raised>
                        <sui-label attached="bottom">
                            <sui-icon name="globe" />{{ ad.region }}</sui-label>
                        <sui-label attached="bottom right">
                            <span v-if="ad.ended">
                                Ended in {{ ad.dateEnd[0] }},{{ ad.dateEnd[1] }},{{
                    ad.dateEnd[2]
                  }}
                                <sui-icon name="calendar check outline icon" loading color="green" />
                            </span>

                            <span v-if="ad.inProgress">
                                InProgress
                                <sui-icon name="spinner" loading color="orange" />
                            </span>

                            <span v-if="ad.noStarted">
                                Will start in {{ ad.dateStart[0] }},{{ ad.dateStart[1] }},{{
                    ad.dateStart[2]
                  }}
                                <sui-icon name="calendar alternate outline" loading color="blue" />
                            </span>
                        </sui-label>

                        <a is="sui-label" color="red" ribbon>
                            <b> Id: </b> {{ ad.id }}
                        </a>
                        <sui-label v-if="ad.recCount > 0" color="teal" floating>
                            {{ ad.recCount }}
                        </sui-label>
                        <sui-grid>
                            <sui-grid-row>
                                <sui-grid-column :width="9">
                                    <!-- <sui-icon name="linkify icon" link bordered   /> -->
                                    <sui-grid-row> <a :href="ad.link">Advertise link: {{ ad.link }}</a> </sui-grid-row>
                                    <sui-divider />
                                    <sui-grid-row>Share link: https://refGateway.io/ {{ad.id}}/ {{myAdd}} </sui-grid-row>
                                </sui-grid-column>
                                <sui-grid-column :width="3">
                                    <sui-grid>
                                        <sui-grid-row>
                                            <sui-grid-column>
                                                <sui-label>
                                                    <sui-icon name="money bill alternate icon" />
                                                    {{ ad.budget }} Ether</sui-label>
                                            </sui-grid-column>
                                        </sui-grid-row>

                                        <sui-grid-row :columns="3">
                                            <sui-grid-column>
                                                <a is="sui-label" tag> {{ ad.category }} </a>
                                            </sui-grid-column>
                                            <sui-grid-column>
                                                <div>
                                                </div>
                                            </sui-grid-column>
                                        </sui-grid-row>
                                    </sui-grid>
                                </sui-grid-column>
                                <sui-grid-column :width="4">
                                    <sui-grid-row>
                                        <SendAdvertiseButton :adId="ad.id" />
                                    </sui-grid-row>
                                    <sui-divider />

                                    <sui-grid-row> <a is="sui-label" color="pink" fluid tag> Seed </a>
                                    </sui-grid-row>
                                </sui-grid-column>
                            </sui-grid-row>
                        </sui-grid>
                    </sui-segment>
                    <sui-divider />
                </sui-container>
            </sui-list>
        </sui-tab-pane>
        <!-- ------------------------------------------------------------------------ -->
        <sui-tab-pane title="Received inprogress ads" :attached="false">
            <sui-list>
                <sui-container divided v-bind:key="ad.id" v-for="ad in receivedInProgressedAdvertisements">
                    <sui-segment raised>
                        <sui-label attached="bottom">
                            <sui-icon name="globe" />{{ ad.region }}</sui-label>
                        <sui-label attached="bottom right">
                            <span v-if="ad.ended">
                                Ended in {{ ad.dateEnd[0] }},{{ ad.dateEnd[1] }},{{
                    ad.dateEnd[2]
                  }}
                                <sui-icon name="calendar check outline icon" loading color="green" />
                            </span>

                            <span v-if="ad.inProgress">
                                InProgress
                                <sui-icon name="spinner" loading color="orange" />
                            </span>

                            <span v-if="ad.noStarted">
                                Will start in {{ ad.dateStart[0] }},{{ ad.dateStart[1] }},{{
                    ad.dateStart[2]
                  }}
                                <sui-icon name="calendar alternate outline" loading color="blue" />
                            </span>
                        </sui-label>

                        <a is="sui-label" color="red" ribbon>
                            <b> Id: </b> {{ ad.id }}
                        </a>
                        <sui-label v-if="ad.recCount > 0" color="teal" floating>
                            {{ ad.recCount }}
                        </sui-label>
                        <sui-grid>
                            <sui-grid-row>
                                <sui-grid-column :width="9">
                                    <!-- <sui-icon name="linkify icon" link bordered   /> -->
                                    <sui-grid-row> <a :href="ad.link">Advertise link: {{ ad.link }}</a> </sui-grid-row>
                                    <sui-divider />
                                    <sui-grid-row>Share link: https://refGateway.io/ {{ad.id}}/ {{myAdd}} </sui-grid-row>
                                </sui-grid-column>
                                <sui-grid-column :width="3">
                                    <sui-grid>
                                        <sui-grid-row>
                                            <sui-grid-column>
                                                <sui-label>
                                                    <sui-icon name="money bill alternate icon" />
                                                    {{ ad.budget }} Ether</sui-label>
                                            </sui-grid-column>
                                        </sui-grid-row>

                                        <sui-grid-row :columns="3">
                                            <sui-grid-column>
                                                <a is="sui-label" tag> {{ ad.category }} </a>
                                            </sui-grid-column>
                                            <sui-grid-column>
                                                <div>
                                                </div>
                                            </sui-grid-column>
                                        </sui-grid-row>
                                    </sui-grid>
                                </sui-grid-column>
                                <sui-grid-column :width="4">
                                    <sui-grid-row>
                                        <SendAdvertiseButton :adId="ad.id" />
                                    </sui-grid-row>
                                    <sui-divider />

                                    <sui-grid-row> <a is="sui-label" color="teal" tag> Received </a>

                                    </sui-grid-row>
                                </sui-grid-column>
                            </sui-grid-row>
                        </sui-grid>
                    </sui-segment>
                    <sui-divider />
                </sui-container>
            </sui-list>
        </sui-tab-pane>
        <!-- ------------------------------------------------------------------------- -->
        <sui-tab-pane title="All ads" :attached="false">
            <sui-list>
                <sui-container divided v-bind:key="ad.id" v-for="ad in allAds">
                    <sui-segment raised>
                        <sui-label attached="bottom">
                            <sui-icon name="globe" />{{ ad.region }}</sui-label>
                        <sui-label attached="bottom right">
                            <span v-if="ad.ended">
                                Ended in {{ ad.dateEnd[0] }},{{ ad.dateEnd[1] }},{{
                    ad.dateEnd[2]
                  }}
                                <sui-icon name="calendar check outline icon" loading color="green" />
                            </span>

                            <span v-if="ad.inProgress">
                                InProgress
                                <sui-icon name="spinner" loading color="orange" />
                            </span>

                            <span v-if="ad.noStarted">
                                Will start in {{ ad.dateStart[0] }},{{ ad.dateStart[1] }},{{
                    ad.dateStart[2]
                  }}
                                <sui-icon name="calendar alternate outline" loading color="blue" />
                            </span>
                        </sui-label>

                        <a is="sui-label" color="red" ribbon>
                            <b> Id: </b> {{ ad.id }}
                        </a>
                        <sui-label v-if="ad.recCount > 0" color="teal" floating>
                            {{ ad.recCount }}
                        </sui-label>
                        <sui-grid>
                            <sui-grid-row>
                                <sui-grid-column :width="9">
                                    <!-- <sui-icon name="linkify icon" link bordered   /> -->
                                    <sui-grid-row> <a :href="ad.link">Advertise link: {{ ad.link }}</a> </sui-grid-row>
                                    <sui-divider />
                                    <sui-grid-row>Share link: https://refGateway.io/ {{ad.id}}/ {{myAdd}} </sui-grid-row>
                                </sui-grid-column>
                                <sui-grid-column :width="3">
                                    <sui-grid>
                                        <sui-grid-row>
                                            <sui-grid-column>
                                                <sui-label>
                                                    <sui-icon name="money bill alternate icon" />
                                                    {{ ad.budget }} Ether</sui-label>
                                            </sui-grid-column>
                                        </sui-grid-row>

                                        <sui-grid-row :columns="3">
                                            <sui-grid-column>
                                                <a is="sui-label" tag> {{ ad.category }} </a>
                                            </sui-grid-column>
                                            <sui-grid-column>
                                                <div>
                                                </div>
                                            </sui-grid-column>
                                        </sui-grid-row>
                                    </sui-grid>
                                </sui-grid-column>
                                <sui-grid-column :width="4">
                                    <sui-grid-row>
                                        <SendAdvertiseButton :adId="ad.id" />
                                    </sui-grid-row>
                                    <sui-divider />

                                </sui-grid-column>
                            </sui-grid-row>
                        </sui-grid>
                    </sui-segment>
                    <sui-divider />
                </sui-container>
            </sui-list>
        </sui-tab-pane>
    </sui-tab>
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
import {
    sc
} from "../contract";
const Web3 = require("web3");
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7b3a02e10a0043feb895438cb1ad9230"));
// web3.eth.getBlock("latest", (error, result) => {
//   console.log('error:', error);
//   console.log('results', result);
// });
var web3;
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
        window.ethereum.enable().then(function () {
            // User has allowed account access to DApp...
        });
    } catch (e) {
        // User has denied account access to DApp...
    }
}
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
            myAdd: '',
        };
    },
    props: {
        msg: String,
    },
    computed: {
        allAds: function () {
            return this.ads.sort((a, b) => (a.inProgress == true ? -1 : false));
        },
        seedRandomChoosers: function () {
            return this.ads.filter((ad) => {
                return !ad.recForMe && ad.inProgress && Math.random() > 0.7;
            });
        },
        receivedInProgressedAdvertisements: function () {
            return this.ads
                .filter((ad) => {
                    return ad.recForMe && ad.inProgress;
                })
                .sort((a, b) => (a.inProgress == true ? -1 : false));
        },
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
        this.myAdd = web3.eth.currentProvider.selectedAddress
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
                            console.log("connnn", content);
                            sc.methods
                                .getAdReceivers(id)
                                .call()
                                .then(function (adArray) {
                                    var mineAdd = web3.eth.currentProvider.selectedAddress;
                                    const newAdArray = adArray.map((name) => name.toLowerCase());
                                    sc.methods
                                        .getAdReceivedCount(mineAdd, id)
                                        .call()
                                        .then(function (count) {
                                            let dNow = new Date();
                                            let dStart = new Date(
                                                content[3][0],
                                                content[3][1],
                                                content[3][2]
                                            );
                                            let dEnd = new Date(
                                                content[4][0],
                                                content[4][1],
                                                content[4][2]
                                            );

                                            let obj = {
                                                id: id,
                                                link: content[0],
                                                category: content[1],
                                                region: content[2],
                                                dateStart: content[3],
                                                dateEnd: content[4],
                                                budget: content[5],
                                                recArray: adArray,
                                                recForMe: newAdArray.includes(mineAdd.toLowerCase()),
                                                recCount: count,
                                                ended: dEnd < dNow,
                                                inProgress: dEnd > dNow && dStart < dNow,
                                                noStarted: dStart > dNow,
                                            };
                                            console.log(id);
                                            that.ads.push(obj);
                                            console.log("ads", that.ads);
                                        });
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
