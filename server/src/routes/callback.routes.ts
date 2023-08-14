import express, { Router, Request, Response } from 'express';
import * as casinoMiddlewares from '../middlewares/casino.middlewares';
import * as casinoControllers from "../controllers/casino.controllers";

import * as gfpayMiddlewares from "../middlewares/gfpay.middlewares"


const router: Router = express.Router();


//// casino - honor-link ////
// balance (Callback URL)
router.get("/honor-link/balance", casinoMiddlewares.queryUserCheck, casinoControllers.responseBalance);
// changeBalance (Callback URL)
router.post("/honor-link/changeBalance", casinoMiddlewares.postUserCheck, casinoControllers.changeBalance)


//// payment - gfpay ////
// deposit notice (Callback URL)
router.post("/pay/gfpay/deposit", gfpayMiddlewares.gfpayNotificationCheck, )
// withdrawal notice (Callback URL)
router.post("/pay/gfpay/withdraw", gfpayMiddlewares.gfpayNotificationCheck, )



export default router;