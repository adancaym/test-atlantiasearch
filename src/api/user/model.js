import mongoose, {Schema} from 'mongoose'


const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,

  },
  city: {
    type: String,
    required: true,

  }

}, {
  timestamps: true
})


const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
