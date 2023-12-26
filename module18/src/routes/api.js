const express = require("express");
const router = express.Router();

const ProductController = require("../controller/ProductController");
const UserController = require("../controller/UserController");
const AuthVerification = require("../middleware/AuthVerification");
const WishListController = require("../controller/WishListController");
const CartListController = require("../controller/CartListController");

router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get(
  "/ProductListByBrand/:BrandID",
  ProductController.ProductListByBrand
);

router.get(
  "/ProductListByCategory/:CategoryID",
  ProductController.ProductListByCategory
);

router.get(
  "/ProductListBySmilier/:CategoryID",
  ProductController.ProductListBySmilier
);

router.get(
  "/ProductListByKeyword/:Keyword",
  ProductController.ProductListByKeyword
);

router.get(
  "/ProductListByRemark/:Remark",
  ProductController.ProductListByRemark
);
router.get("/ProductDetails/:ProductID", ProductController.ProductDetails);
router.get(
  "/ProductReviewList/:ProductID",
  ProductController.ProductReviewList
);

//User
router.get("/UserOTP/:email", UserController.UserOTP);
router.get("/VerifyLogin/:email/:otp", UserController.VerifyLogin);
router.get("/UserLogout", AuthVerification, UserController.UserLogout);
router.post("/CreateProfile", AuthVerification, UserController.CreateProfile);
router.post("/UpdateProfile", AuthVerification, UserController.UpdateProfile);
router.get("/ReadProfile", AuthVerification, UserController.ReadProfile);

//wish
router.get("/WishList", AuthVerification, WishListController.WishList);
router.post("/SaveWishList", AuthVerification, WishListController.SaveWishList);
router.delete(
  "/RemoveWishList",
  AuthVerification,
  WishListController.RemoveWishList
);

//Cart
router.get("/CartList", AuthVerification, CartListController.CartList);
router.post("/SaveCartList", AuthVerification, CartListController.SaveCartList);
router.post(
  "/UpdateCartList/:cartID",
  AuthVerification,
  CartListController.UpdateCartList
);

router.delete(
  "/RemoveCartList",
  AuthVerification,
  CartListController.RemoveCartList
);

module.exports = router;
