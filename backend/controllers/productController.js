const Product = require("../models/productModels");
const ErrorHandler = require("../utills/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utills/apifeatures");

//create product --ADMIN
exports.createProduct=catchAsyncErrors(async(req,res,next)=>{

  req.body.user=req.user.id
  
    const product =await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
});

//GET ALL PRODUCTS
exports.getAllProducts = catchAsyncErrors(async(req,res)=>{

const resultPerPage=8;
const productsCount = await Product.countDocuments();
const apiFeature = new ApiFeatures(Product.find(),req.query).
search().
filter().pagination(resultPerPage);
    const products=await apiFeature.query;

    res.status(200).json({
        success:true,
        products
    });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
      productCount,
    });
  });

//Update product--ADMIN

exports.updateProduct=catchAsyncErrors(async(req,res,next)=>{
    let product =await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    
      res.status(200).json({
        success: true,
        product
});
});

//Delete Product 

exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return res.status(500).json({ success:false,
        message:"Product not found" })
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product Delete Successfully"
    })}
  
    // Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});