import {createStore} from 'vuex'
import {ethers} from "ethers";
import {abi, contractAddress} from "../../../../secDocConstants";
import swal from "sweetalert2";
import {notifyError, notifySuccess, notifyWarning} from "@/services/notificationService";
import {getSignerContract} from "@/interfaces/global.interface";

export const UserStore = {
    state: {
        allUsers: []
    },
    getters: {
        getAllUsers(state) {
            return state.allUsers
        }
    },
    mutations: {
        addUser(state, user) {
            state.allUsers.push(user)
        },
        setAllUsers(state, users) {
            users.forEach((user) => {
                state.allUsers.push({
                    name: user.name,
                    organization: user.organisation,
                    position: user.position,
                    userAddress: user.userAddress
                })
            })
        },
        clearUsers(state) {
            state.allUsers = []
        }
    },
    actions: {
        clearUsers(context) {
            context.commit('clearUsers')
        },
        async fetchAllUsers(context) {
            const signerContract = await getSignerContract()
            await signerContract.contract.testingAddress(signerContract.signer.getAddress());
            const users = await signerContract.contract.getAllOperators();
            console.log(users)
            context.commit('setAllUsers', users)
        },
        async addUser(context, userData) {

            const contract = (await getSignerContract()).contract
            const signer = (await getSignerContract()).signer

            let result = await contract.isAvailable(userData.userWallet);

            if (!result) {
                const organization = await contract.testingAddress(signer.getAddress());
                try {
                    const response = await contract.addOperator(
                        userData.userName,
                        organization.orgName,
                        userData.userWallet,
                        userData.userPosition
                    );
                    if (response.hash) {
                        context.commit('addUser', {
                            name: userData.userName,
                            userAddress: userData.userWallet,
                            position: userData.userPosition
                        })
                        await notifySuccess("Added user successfully!")
                    }
                } catch (error) {
                    await notifyError("Failed to save user!")
                }
            } else {
                await notifyWarning(`Address ${userData.userWallet} already exists!`)
            }
        }
    },
    modules: {}
}
