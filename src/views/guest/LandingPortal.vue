<!-- @format -->

<template>
  <div class="w-full h-full static bg-gradient">
    <v-img
      src="@/assets/images/nembo.png"
      class="absolute m-4 top-0 left-0"
      width="80px"
    ></v-img>
    <div class="absolute top-0 right-0 m-4 flex flex-row">
      <v-btn
        @click="Login"
        class="bg-primary2 !rounded-lg border-2 border-primary2"
      >
        Connect
      </v-btn>
    </div>
    <div class="h-full w-full flex flex-col justify-center items-center">
      <h2 class="text-4xl text-center font-bold my-4">SECDOC</h2>
      <div class="flex flex-col md:flex-row">
        <div class="p-4 w-60 mx-2 rounded-lg bg-white my-4 md:my-0">
          <h2 class="font-bold text-xl text-primary2">Share Document</h2>
          <span class="text-sm text-center">
            Securely share sensitive documents within your institution and
            across institutions.
          </span>
        </div>
        <div class="p-4 w-60 mx-2 rounded-lg bg-white my-4 md:my-0">
          <h2 class="font-bold text-xl text-primary2">Verify Document</h2>
          <span class="text-sm text-justify">
            Securely share sensitive documents within your institution and
            across institutions.
          </span>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 w-full bg-gray-100 text-center !text-primary2"
    >
      <span class="text-sm"
        >Developed and Maintained by
        <a href="https://ega.go.tz" target="_blank" class="font-bold">eGA</a>
      </span>
    </div>
  </div>
</template>

<script>
import dashboard from "../dashboard.vue";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../../secDocConstants";
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "LandingPortal",
  data() {
    return {
      dialog: false,
      orgs: {},
      path: "",
      connected: false,
    };
  },

  components: { dashboard },
  methods: {
    async connectWallet() {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.dialog = true;
      }
    },

    async Login() {
      if (typeof window.ethereum !== undefined) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
          const user = await contract.operatorLogin(signer.getAddress());

          if (user) {
            this.path = user;
            this.$router.push(this.path);
          } else {
            alert("Unauthorised / unknown address");
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
});
</script>

<style scoped>
.b-left {
  background: white;
}

.b-right {
  background: #1badde;
  border-left: solid white;
  border-bottom: solid transparent;
}

.bg-image {
  background-image: url("../../assets/secdoc.png");
}

.text-big-blue {
  position: absolute;
  left: 7.08%;
  right: 49.17%;
  top: 12.22%;
  bottom: 73.11%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 66px;
  /* or 103% */

  display: flex;
  align-items: center;

  color: #095073;
}

.text-big-blue2 {
  position: absolute;
  left: 7.08%;
  right: 49.17%;
  top: 22.22%;
  bottom: 65.11%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 66px;
  /* or 103% */

  display: flex;
  align-items: center;

  color: #095073;
}

.form-position {
  position: absolute;
  left: 7.08%;
  right: 49.17%;
  top: 42.22%;
  bottom: 45.11%;
  width: 30%;
}
</style>
