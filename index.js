const { ethers } = require("ethers");

// BSC RPC
const RPC_URL = "https://bsc-dataseed.binance.org/";

// MelegaSwap Router
const ROUTER_ADDRESS = "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5";

// Minimal ABI
const ROUTER_ABI = [
    "function factory() external view returns (address)"
];

async function getFactory() {
    try {
        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const router = new ethers.Contract(
            ROUTER_ADDRESS,
            ROUTER_ABI,
            provider
        );

        const factoryAddress = await router.factory();
        console.log("✅ Factory Address:", factoryAddress);
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

getFactory();
