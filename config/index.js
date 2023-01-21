export const config = {
  env: "local",
  LOCAL_API_URL: "localhost:3000",
  API_URL:
    "https://eth-goerli.g.alchemy.com/v2/AbjInDgpoFrJBlXHhCd3Ve-2PuxQRncf",
  COLLECTION_NAME: "DETSBKNFT",
  COLLECTION_TITLE: "DET SBK NFTs",
  COLLECTION_DESCRIPTION:
    "DET SBK is a collection of NFTs based on skills, background and knowledge gained",
  COLLECTION_IMG_LINK:
    "https://ipfs.filebase.io/ipfs/QmcfsZCGdcXyHJP8MupMQwYuSET8TFJCHUhAaoJwe4EJuP/",
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "goerli", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0x305c8701Ddb85a398562D5df9F11e7b2682bE814", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
