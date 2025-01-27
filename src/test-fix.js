export const div_1_sizes = [
  [300, 250],
  [320, 100],
  [320, 50],
];

export const loadAd = (name) => {
  window.googletag = window.googletag || { cmd: [] };

  googletag.cmd.push(() => {
    googletag
        .defineSlot('/21668216007/amomama.de_intext_10', div_1_sizes, name)
        .addService(googletag.pubads());

    googletag.enableServices();

    googletag.display(name);
  });
};

// adConfig.js

export const addAdUnits = (pbjsInstance, id, div_1_sizes) => {
  const adUnit = {
    code: id,
    mediaTypes: {
      banner: {
        sizes: div_1_sizes,
      },
    },
    bids: [
      {
        bidder: "appnexus",
        params: {
          placementId: 14049821,
        },
      },
      {
        bidder: "seedtag",
        params: {
          publisherId: "1422-9699-01",
          adUnitId: "31402727",
          placement: "inArticle",
        },
      },
      {
        bidder: "vidazoo",
        params: {
          cid: "638f4064ba1056ce9c0324e4",
          pId: "59ac17c192832d0011283fe3",
        },
      },
      {
        bidder: "medianet",
        params: {
          cid: "8CU1XT34E",
          crid: "928505701",
        },
      },
      {
        bidder: "amx",
        params: {
          tagId: "YW1vbWVkaWEtcm9uLmNvbQ",
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Amomama_DE_midarticle",
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Amomama_DE_hdx",
        },
      },
      {
        bidder: "kueezrtb",
        params: {
          cId: "64d4bb1f226f0c02d40867c9",
          pId: "65lk7c192882r0011813fn9",
        },
      },
      {
        bidder: "openx",
        params: {
          unit: "559907359",
          delDomain: "genesis-d.openx.net",
        },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 13524,
          siteId: 533320,
          zoneId: 3264228,
        },
      },
      {
        bidder: "grid",
        params: {
          uid: "391046",
        },
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158654",
          adSlot: "amomama.de/mweb_rectangle",
        },
      },
    ],
  };

  pbjsInstance.addAdUnits([adUnit]);
};
