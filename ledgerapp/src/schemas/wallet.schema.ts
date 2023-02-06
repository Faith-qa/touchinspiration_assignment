import * as mongoose from 'mongoose';

export const WalletSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true},

    walletname: {type: String, required: true, unique: true},
    Debit: [{type: mongoose.Schema.Types.ObjectId, ref: 'Debit'}],
    Credit: [
        {
            creditid: {type: mongoose.Schema.Types.ObjectId, ref: 'Credit'}, 
            creditAmount:{type: Number}
        }
    ],
    Total: {type: Number,default: 0},

},
{
    timestamps: true,
})