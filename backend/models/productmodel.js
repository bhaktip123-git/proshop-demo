import mongoose

const productSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },  
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true  
    },
    category: {
    type: String,
    required: true      
    },
    description: {
    type: String,
    required: true      
    },
    reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true, 
    default: 0
    },
    numreviews: {
    type: Number,
    required: true,
    default: 0
    },
  price: {
    type: Number,
    required: true
  },
    countinstock: { 
    type: Number,
    required: true,
    default: 0
  } 
});

const Product = mongoose.model('Product', productSchema);

export default Product;