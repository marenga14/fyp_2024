<!-- @format -->

<template>
  <div class="w-full h-full bg-secondary-background relative">
    <div
      :class="{
        headerstyles: scrollPosition > 14,
        headerstyles2: scrollPosition < 14,
      }"
      class="h-14 z-30 flex justify-between fixed top-0 w-full"
    >
      <h2 class="pl-10 text-xl flex items-center font-extrabold flex-row gap-1">
        <v-icon> mdi-key</v-icon>
        SECDOC
      </h2>
      <ul
        class="flex flex-row text-base gap-3 justify-around items-center pr-10"
      >
        <li>Home</li>
        <li>About</li>
        <li>Team</li>
        <li>Contacts</li>
      </ul>
    </div>
    <SvgBackgound1 class="absolute top-0 left-0 ml-[500px]" />
    <SvgBackground2 class="absolute top-0 left-0 ml-[800px] z-10" />

    <v-container fluid class="mt-14 pt-24 px-10 mb-14">
      <div
        class="text-5xl text-secondary-content font-extrabold flex flex-col gap-3"
      >
        <p class="">SECURE YOUR</p>
        <p>DOCUMENTS !</p>
      </div>

      <div class="mt-[5rem]">
        <p class="text-2xl text-secondary-content font-semibold w-1/3">
          Revolutionizing Document Verification Through Blockchain Technology
        </p>
      </div>

      <div class="mt-4">
        <p class="text-sm text-secondary-content font-normal w-1/3">
          With Secdoc, you can bid farewell to the uncertainties and
          vulnerabilities of traditional document handling methods and embrace a
          future where authenticity and integrity are guaranteed. Explore our
          website to learn more about our innovative approach, and discover how
          Secdoc is revolutionizing the way we verify documents in the digital
          age.
        </p>
      </div>

      <div class="mt-[6rem] flex">
        <div class="w-1/3">
          <button
            @click="Login"
            class="rounded-md px-10 py-3 text-lg font-bold text-secondary-background bg-[#22A75D]"
          >
            CONNECT
          </button>
        </div>

        <div
          class="bg-[#22A75D]/50 rounded-md px-10 py-3 text-lg font-bold text-secondary-background flex gap-2 items-center outline"
        >
          <button @click="Login" class="mx-2 hover:bg-[#22A75D]">VERIFY</button>
          <span
            class="animate-ping inline-flex h-[20px] w-[20px] rounded-full bg-red-200 opacity-75"
          ></span>
        </div>
      </div>
    </v-container>

    <v-container fluid class="mt-20 py-10 bg-gray-200 h-[660px]">
      <div class="flex flex-row gap-4">
        <div class="h-96 rounded-md w-1/4 z-20 relative">
          <div
            class="absolute w-[200px] h-[200px] rounded-full bg-[#0d1c3b] top-0 left-[50%] ml-[-100px] z-10 border-4 border-white flex items-center justify-center"
          >
            <SignDocument />
          </div>

          <div
            class="border-2 rounded-md border-gray-300 mt-[100px] bg-[#F2F0F4] h-full"
          ></div>
        </div>
        <div class="h-96 w-1/4 z-20 relative">
          <div
            class="absolute flex justify-center items-center w-[200px] h-[200px] rounded-full bg-secondary-focus top-0 left-[50%] ml-[-100px] z-10 border-4 border-white"
          >
            <VerifyDoc />
          </div>

          <div
            class="border-2 border-gray-300 mt-[100px] bg-[#F2F0F4] h-full rounded-md"
          ></div>
        </div>
        <div class="h-96 w-1/4 z-20 relative">
          <div
            class="absolute w-[200px] h-[200px] rounded-full bg-[#34a75d]/70 top-0 left-[50%] ml-[-100px] z-10 border-4 border-white flex justify-center items-center"
          >
            <CloudStorage />
          </div>

          <div
            class="border-2 border-gray-300 mt-[100px] bg-[#F2F0F4] flex justify-center items-center h-full rounded-md"
          ></div>
        </div>
      </div>
    </v-container>

    <v-container class="mt-20">
      <div
        class="bg-white flex flex-col-reverse sm:flex-row gap-2 items-stretch shadow-md"
      >
        <div class="w-full sm:w-1/2 h-max">
          <FolderLock />
        </div>
        <div class="w-full sm:w-1/2 rounded-sm bg-gray-200 text-xl">
          <div class="flex justify-center h-20 items-center gap-1">
            <span class="font-semibold">INSTITUTION </span
            ><span class="font-semibold text-[#127D77]"> REGISTRATION</span>
          </div>
        </div>
      </div>
    </v-container>
  </div>
  <Footer />
</template>

<script>
import dashboard from "../dashboard.vue";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../../secDocConstants";
import { defineComponent } from "vue";
import SvgBackgound1 from "@/components/icons/svg-backgound-1.vue";
import SvgBackground2 from "@/components/icons/svg-background-2.vue";
import Footer from "@/components/shared/footer.vue";
import FolderLock from "@/components/icons/folder-lock.vue";
import SignDocument from "@/components/icons/file-sign.vue";
import VerifyDoc from "@/components/icons/file-verify.vue";
import CloudStorage from "@/components/icons/file-cloud.vue";
// Components

export default defineComponent({
  name: "LandingPortal",
  data() {
    return {
      scrollPosition: null,
      color: this.appBarColor() || "#000",
      dialog: false,
      orgs: {},
      path: "",
      connected: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.upDateScrollPosition);
  },

  components: {
    dashboard,
    SvgBackgound1,
    SvgBackground2,
    FolderLock,
    Footer,
    SignDocument,
    VerifyDoc,
    CloudStorage,
  },
  methods: {
    async connectWallet() {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.dialog = true;
      }
    },
    appBarColor() {
      return this.scrollPosition > 10
        ? "rgba(240,205,255,1)"
        : "rgba(205,205,255,.5)";
    },
    upDateScrollPosition() {
      this.scrollPosition = window.scrollY;
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
.headerstyles {
  scroll-behavior: smooth;
  background-color: rgb(27 173 222);
}
.headerstyles2 {
  scroll-behavior: smooth;
  background-color: rgb(27 173 222 / 0.4);
  color: rgb(9 80 115 / var(--tw-text-opacity));
}
li {
  padding: 3px 6px 3px 6px;
}
li:hover {
  background: rgb(240 244 245 /0.8);
  border-radius: 2px;
}
</style>

<!-- style="box-shadow: 0.4px 0.4px 2px 2px gray, -0.4px -0.4px 2px 2px gray" -->
