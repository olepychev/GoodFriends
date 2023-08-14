import { Request, Response, NextFunction } from 'express';
import * as dataAccess from '../utils/dataAccess.utils'
import * as response from "../config/response"

//gfpay
export const gfpayNotificationCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {apiKey} = req.body
    
    if(apiKey === process.env.GF_AFFILIATE_CODE) {
        next()
    } else {
        res.status(400).json(response.gfpayValidationError)
    }
}