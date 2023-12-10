const express = require('express')
const router = express.Router()
const StudentsModel = require("../controllers/StudentsModel")
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware')
const studentsWorks = require("../controllers/studentsWorks")


router.post("/registration", StudentsModel.registration)
router.post("/login", StudentsModel.login)


router.post("/profileUpdate",AuthVerifyMiddleware, StudentsModel.ProfileUpdate)
router.get("/profileDetails", AuthVerifyMiddleware, StudentsModel.profileDetails)
router.get("/recoveryByEmail/:email", StudentsModel.recoveryEmail)
router.get("/RecoverVerifyOTP/:email/:otp", StudentsModel.RecoverVerifyOTP);
router.post("/RecoverResetPass", StudentsModel.RecoverResetPass)

router.post("/createWorks", AuthVerifyMiddleware, studentsWorks.createWorks)
router.get("/UpdateWorks/:id/:status", AuthVerifyMiddleware, studentsWorks.updateWorks)
router.get("/listWorksByStatus/:status", AuthVerifyMiddleware, studentsWorks.listWorksByStatus);
router.get("/WorksStatusCount", AuthVerifyMiddleware, studentsWorks.WorksStatusCount);
router.delete("/DeleteWorks/:id", AuthVerifyMiddleware, studentsWorks.DeleteWorks)



module.exports = router