const mongoose = require("mongoose");
const BrandModel = require("../model/BrandModel");
const CategoryModel = require("../model/CategoryModel");
const ProductSliderModel = require("../model/ProductSliderModel");
const ProductModel = require("../model/ProductModel");
const ReviewModel = require("../model/ReviewModel");

const ObjectId = mongoose.Types.ObjectId;

const BrandListServices = async () => {
  try {
    let data = await BrandModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const CategoryListServices = async () => {
  try {
    let data = await CategoryModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const SliderListServices = async () => {
  try {
    let data = await ProductSliderModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const ListByBrandService = async (req) => {
  try {
    let BrandID = new ObjectId(req.params.BrandID);
    let MatchStage = { $match: { brandID: BrandID } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; // For convert object
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      UnwindBrandStage,
      JoinWithCategoryStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const ListByCategoryService = async (req) => {
  try {
    let CategoryID = new ObjectId(req.params.CategoryID);
    let MatchStage = { $match: { categoryID: CategoryID } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; // For convert object
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      UnwindBrandStage,
      JoinWithCategoryStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const ListBySmilerService = async (req) => {
  try {
    let CategoryID = new ObjectId(req.params.CategoryID);
    let MatchStage = { $match: { categoryID: CategoryID } };
    let limitStage = { $limit: 20 };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; // For convert object
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      limitStage,
      JoinWithBrandStage,
      UnwindBrandStage,
      JoinWithCategoryStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const ListByKeyWordService = async (req) => {
  try {
    let SearchRegex = { $regex: req.params.Keyword, $options: "i" };
    let SearchParams = [{ title: SearchRegex }, { shortDes: SearchRegex }];
    let SearchQuery = { $or: SearchParams };
    let MatchStage = { $match: SearchQuery };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; // For convert object
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const ListByRemarkService = async (req) => {
  try {
    let Remark = req.params.Remark;
    let MatchStage = { $match: { remark: Remark } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; // For convert object
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      UnwindBrandStage,
      JoinWithCategoryStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const DetailsService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let MatchStage = { $match: { _id: ProductID } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithDetailsStage = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; // For convert object
    let UnwindCategoryStage = { $unwind: "$category" };
    let UnwindDetailsStage = { $unwind: "$details" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      UnwindBrandStage,
      JoinWithCategoryStage,
      UnwindCategoryStage,
      JoinWithDetailsStage,
      UnwindDetailsStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const ReviewListService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let MatchStage = { $match: { productID: ProductID } };

    let JoinWithProfilesStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };

    let UnwindProfileStage = { $unwind: "$profile" };
    let ProjectionStage = {
      $project: {
        des: 1,
        rating: 1,
        "profile.cus_name": 1,
      },
    };

    let data = await ReviewModel.aggregate([
      MatchStage,
      JoinWithProfilesStage,
      UnwindProfileStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

module.exports = {
  BrandListServices,
  CategoryListServices,
  SliderListServices,
  ListByBrandService,
  ListByCategoryService,
  ListBySmilerService,
  ListByKeyWordService,
  ListByRemarkService,
  DetailsService,
  ReviewListService,
};
