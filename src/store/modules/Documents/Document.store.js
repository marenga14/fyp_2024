import { ethers } from "ethers";
import { abi, contractAddress, ipfsClient } from "../../../../secDocConstants";
import { notifyError, notifySuccess } from "@/services/notificationService";
import { getFormatedTimeStampStartWithDate } from "@/interfaces/global.interface";

export const DocumentStore = {
  state: {
    allDocuments: [],
  },
  getters: {
    getAllDocuments(state) {
      return state.allDocuments;
    },
    getDocumentByCid: (state) => (documentCid) => {
      return state.allDocuments.find(
        (document) => document.documentCid == documentCid
      );
    },
  },
  mutations: {
    addDocument(state, document) {
      state.allDocuments.push({ ...document });
    },
    setAllDocuments(state, documents) {
      state.allDocuments = documents;
    },
    clearDocuments(state) {
      state.allDocuments = [];
    },
  },
  actions: {
    async fetchAllDocuments(context) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      let allDocuments = await contract.getDocuments(signer.getAddress());
      console.log(allDocuments);
      allDocuments = allDocuments.map((document) => {
        return {
          documentName: document.docName,
          documentDescription: document.description,
          time: document.time,
          documentCid: document.cidValue,
        };
      });
      context.commit("setAllDocuments", allDocuments);
    },
    async addDocument(context, documentData) {
      console.log(documentData);
      const identification = documentData.identification;
      const ownerName = documentData.ownerName;
      const cid = "XXXX-XXXX-XXXX";
      const documentName = `${documentData.ownerName}-${documentData.description}`;
      const documentDescription = documentData.description;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const time = getFormatedTimeStampStartWithDate();

      try {
        const storedResponse = await contract.storeDocument(
          cid,
          time,
          documentDescription,
          documentName,
          ownerName,
          identification
        );

        if (storedResponse.hash) {
          context.commit("addDocument", {
            documentName,
            documentDescription,
            time,
            documentCid: cid,
          });
          await notifySuccess("Added document successfully!");
        } else {
          await notifyError("Failed to add document!");
        }
      } catch (error) {
        console.log(error);
      }
    },

    async updateDocument(context, documentData) {
      const documentName = documentData.file.name;
      const documentDescription = documentData.documentDescription;
      const cid = await ipfsClient.add(documentData.file);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const time = getFormatedTimeStampStartWithDate();

      const storedResponse = await contract.storeDocument(
        cid.path,
        time,
        documentDescription,
        documentName
      );

      if (storedResponse.hash) {
        context.commit("addDocument", {
          documentName,
          documentDescription,
          time,
          documentCid: cid.path,
        });
        await notifySuccess("Added document successfully!");
      } else {
        await notifyError("Failed to add document!");
      }
    },
    clearDocuments(context) {
      context.commit("clearDocuments");
    },
  },
  modules: {},
};
