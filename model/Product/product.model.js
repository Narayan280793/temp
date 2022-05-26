const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Product = new Schema({
  productName: {
    type: String,
    enum: [
      "All",
      "Restaurant Charcoal",
      "barbecue Charcoal",
      "Charcoal Fines",
      "Shisha Charcoal",
      "Briquettes",
      "Firewood",
    ],
    required: [true, "Please enter Product Name"],
  },
  description: {
    productionDate: {
      type: Date,
      required: [true, "Please enter Production Date"],
    },
    productionMethod: {
      type: String,
      required: [true, "Please enter Production Method"],
    },
    CountryOfOrigin: {
      type: String,
      required: [true, "Please enter Country of Origin"],
    },
    district: {
      type: String,
      required: [true, "Please enter District"],
    },
    encroacherBushType: {
      type: String,
      required: [true, "Please enter Encroacher Bush Type"],
    },
    harvestingAndMarketingPermit: {
      type: String,
      required: [true, "Please enter Harvesting And Marketing Permit"],
    },
    certification: {
      type: String,
      required: [true, "Please enter Certification"],
    },
  },
  listingId: {
    type: String,
  },
  sellerId: {
    type: String,
  },
  lotNumber: {
    type: Number,
  },
  lotSize: {
    type: String,
  },
  fixedCarbon: {
    type: String,
  },
  highestBid: {
    type: String,
  },
  minBidQty: {
    type: String,
  },
  highestBid: {
    type: String,
  },
  minBidPerMT: {
    type: String,
  },
  totalBids: {
    type: Number,
  },
  bidIncrement: {
    type: String,
  },
  watching: {
    type: Number,
  },
  currentBid: {
    type: String,
  },
  image: {
    type: String,
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  review: [
    {
      name: {
        type: String,
        // required: true,
      },
      rating: {
        type: String,
        // required: true,
      },
      // comment: {
      //   type: String,
      //   // required: true,
      // },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", Product);