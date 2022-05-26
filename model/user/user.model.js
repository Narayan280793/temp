const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const User = new Schema(
	{
		designation: {
			type: String,
			enum: ['Producer', 'Buyer', 'Transporter', 'Admin']
		},
		// Buyer Schema
		firstName: {
			type: String
		},
		lastName: {
			type: String
		},
		companyName: {
			type: String
		},
		email: {
			type: String
		},
		password: {
			type: String
		},
		country: {
			type: String
		},
		mobileNumber: {
			type: String
		},
		tAndC: {
			type: Boolean,
			default: false
		},
		hereAboutUs: {
			type: String
		},
		deviceToken: {
			type: String
		},
		topProducts: {
			type: Array,
		},
		productPreference: {
			type: String,
		},
		yourMarket: {
			type: Array,
			
		},
		subscribe:{
			type: Boolean,
			default: false
		},
		status:{
			type: String,
			default: 'active'
		},

		// Producer Schema

		farmsDetails: {
			farmNameAndNumber: String,
			farmPhysicalAdd: String,
			farmRegion: String,
			farmDistrict: String,
			certification: {
				type: String,
			},
			ValidMarketingPermit: {
				type: String,
			}
		},
		charcoalProductionYear: {
			type: String,
		},
		
		mainProduct: {
			type: String,
		},

		// Transporters Schema
		fleetDetails: {
			noOfSuperLinkTrucks: Number,
			noOfOpenFlatBeds: Number,
			noOfTaultliners: Number,
			fleetRoadworthinessAllValid: {
				type: String,
			},
			goodsTransitInsurence: {
				type: String,
			}
		},
		mainAreaInterestTransportation: {
			type: String,
		}
		// avatar: String,
		// loginType: {
		// 	type: String,
		// 	enum: [ 'Google', 'Facebook', 'Password', 'OTP' ],
		// 	default: 'Password',
		// 	required: true
		// },

		// wallet: Number,
		// username: String,
		// status: {
		// 	type: String,
		// 	default: 'active'
		// },
		// encryptedEmail: String,
		// gender: {
		// 	type: String,
		// 	enum: [ 'Male', 'Female' ]
		// },

		// dob: String,
		// resetPasswordToken: String,
		// resetPasswordExpire: Date,
		// isMobileVerified: {
		//   type: String,
		//   enum: ["Not", "Verified"],
		//   default: "Not",
		// },
		// isEmailVerified: {
		//   type: String,
		//   enum: ["Not", "Verified"],
		//   default: "Not",
		// },
		// otp: {
		// 	type: String
		// },
		// customerId: {
		// 	type: String
		// }
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model('User', User);
