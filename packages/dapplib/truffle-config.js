require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remind essay grace depth food select'; 
let testAccounts = [
"0x7f3a83e077d90d121c1a576986a7b13ab544445a86e479d275a0cd3e7073dadf",
"0x8a533b40f2ddaa4465ce452230494a53461871d13af1e3eb73aa6c8431d0d985",
"0x26f18ec2a0fe0a32c8f59518adddd0f4837d59e9db52a92bf4287ad2f04f1fc8",
"0x1a94cabe452d736f2dd24ea2d25aee85cc64032d11f949ef30ba62f47a4804b3",
"0x662d801f815ee485a9541c390c2ee5cb0a2b7334d9282511eddcff4f54870618",
"0x140d1e710648b5fc38e9ce83a96de13a9d42b2a9aabdad50dbfd1ddf1dd96481",
"0xafb22bea044997ddd438832644251db63c678e702221a0f7108874a66b813540",
"0xd32a035e71b9c23f30f6c52f0bac3aaa0c14e5e351b6bc4385d1ec615cf36455",
"0x2e785c6f1625c272a50b30961c51f8993baa1014db0d93f4643e9edfb51fa1a6",
"0x702d53c443c465a8e5787987a425ddf1d7d4f7bff16b762cb08b8aa9f9048d43"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

