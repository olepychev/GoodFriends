import express, { Router, Request, Response } from 'express';
import * as controllers from "../controllers/casino.controllers";

const router: Router = express.Router();


// casino-list
router.post("/list", controllers.getList)

// get vendor and type
router.post("/filter-menu", controllers.getFilterMenu)

// casino launch
router.post("/launch", controllers.launch)

// casino info
router.post("/info", controllers.info)

// bet-result
router.post("/bet-result", controllers.betHistoryResult)

import * as test from "../services/casino.services"

router.post("/test", async (req:Request, res:Response) => {
    res.json(await test.getGameList())
})

export default router;