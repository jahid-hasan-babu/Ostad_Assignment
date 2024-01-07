const SalesModels = require("../model/SalesModel");

//For insert data
exports.Create = async (req, res) => {
  try {
    let reqBody = req.body;
    const result = await SalesModels.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

//TotalRevenue
exports.TotalRevenue = async (req, res) => {
  try {
    const totalRevenue = await SalesModels.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);
    res
      .status(200)
      .json({ status: "success", totalRevenue: totalRevenue[0].total });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};
//QuantityByProduct total
exports.QuantityByProduct = async (req, res) => {
  try {
    const quantityByProduct = await SalesModels.aggregate([
      {
        $group: {
          _id: "$product",
          totalQuantity: { $sum: "$quantity" },
        },
      },
    ]);

    res.status(200).json({ status: "success", data: quantityByProduct });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

//top products
exports.TopProducts = async (req, res) => {
  try {
    const topProducts = await SalesModels.aggregate([
      {
        $group: {
          _id: "$product",
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
      { $sort: { totalRevenue: -1 } },
      { $limit: 5 },
    ]);

    res.status(200).json({ status: "success", data: topProducts });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

//avg price
exports.AveragePrice = async (req, res) => {
  try {
    const averagePrice = await SalesModels.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: "$price" },
        },
      },
    ]);
    res
      .status(200)
      .json({ status: "success", averagePrice: averagePrice[0].averagePrice });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

exports.RevenueByMonth = async (req, res) => {
  try {
    const revenueByMonth = await SalesModels.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);
    res.status(200).json({ status: "success", data: revenueByMonth });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

exports.HighestQuantitySold = async (req, res) => {
  try {
    const highestQuantitySold = await SalesModels.aggregate([
      {
        $sort: { quantity: -1 },
      },
      { $limit: 1 },
    ]);
    res.status(200).json({ status: "success", data: highestQuantitySold });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

exports.DepartmentSalaryExpense = async (req, res) => {
  try {
    const departmentSalaryExpense = await SalesModels.aggregate([
      {
        $group: {
          _id: "$department",
          totalSalaryExpense: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);

    res.status(200).json({ status: "success", data: departmentSalaryExpense });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};
