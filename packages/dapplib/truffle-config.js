require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stool regret oven erosion inflict another army gesture'; 
let testAccounts = [
"0x37b45cb43e7cbba641bcc5dc0b1222773138576968bc49609d9b55ec2c4aa46b",
"0xac4b01005aaf00f0382c836bd580289d938a5a35680482fc06d7cf64164ea98b",
"0x7aa125e1961f277c04f5f5ad2f84ab99b04dbbc3fd41995fd4c4dd7b184d63b4",
"0xd34200f712207ceec0a73d3681e44f340ceb773ed9dffd7e38764fe85bd7362d",
"0xcee4aa622c6b9dcf5fc5f4b7ace68e87d42a0fe233c007cabda9f5f765cf1954",
"0x76e3252a8846d5e5997b36121d7544d2f3b85c908552d0da74fe15bc52ca47bf",
"0xa40a28e27cd491fe3c69ae1823b9b3129fca85054f685079cb2117684be4d849",
"0x1bd2f29ad4eb3e4e1d9c8b8d434d431c08318e0a771c2aa3f068c0953d01b1a5",
"0xa4d21c2def4c93c3925083f3ea9f67ad28841e87df0389fb6178839b47c743e6",
"0xf1cf157beac365a1cacebf3e46879df33e55ffc13192729182af118eb022b1d9"
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

