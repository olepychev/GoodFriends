import axios from 'axios';

const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

export async function getFilterMenu() {
  const endPoint = SEVER_URL + '/api/casino/filter-menu'
  const headers = {
    'GF-API-KEY': GF_API_KEY,
    'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
    'Content-Type': 'application/json'
  }
  const options = {
    headers: headers,
    withCredentials: true
  }
  
  try {
    const res = await axios.post(endPoint,{}, options);
    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }

    return {
      success: false,
      data: "Api Error"
    }
  } catch( err ) {
    if(err.response && err.response.request.status == 400)
      return {
        success: false,
        data: err.response.data
      }
    return {
      success: false,
      data: {
        'message': "Bad Internet Connection"
      }
    }
  }
}

export async function getCasinoList({title, vendor, type, page}) {
  const endPoint = SEVER_URL + '/api/casino/list'
  const data = {
    search: {
      title,
      vendor,
      type,
      page
    }
  }
  const headers = {
    'GF-API-KEY': GF_API_KEY,
    'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
    'Content-Type': 'application/json'
  }
  const options = {
    headers: headers,
    withCredentials: true
  }
  
  try {
    const res = await axios.post(endPoint, data, options);
    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
    
    return {
      success: false,
      data: "Api Error"
    }
  } catch( err ) {
    if(err.response && err.response.request.status == 400)
      return {
        success: false,
        data: err.response.data
      }
    return {
      success: false,
      data: {
        'message': "Bad Internet Connection"
      }
    }
  }
}

export async function getCasinoInfo(idx) {
  const endPoint = SEVER_URL + '/api/casino/info'
  const data = {
    idx
  }
  const headers = {
    'GF-API-KEY': GF_API_KEY,
    'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
    'Content-Type': 'application/json'
  }
  const options = {
    headers: headers,
    withCredentials: true
  }
  
  try {
    const res = await axios.post(endPoint, data, options);
    if(res.status == 200) {
      return res.data
    }
    
    if(err.response && err.response.request.status == 400) {
      return err.response.data
    }
  } catch (err) {
    return {
      data: {
        // 'message': "Bad Internet Connection"
        'message': err
      }
    }
  }
}

export async function LaunchCasino(idx, nick) {
  const endPoint = SEVER_URL + '/api/casino/launch'
  const data = {
    "idx": idx, 
    "nick": nick
  }
  const headers = {
    'GF-API-KEY': GF_API_KEY,
    'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
    'Content-Type': 'application/json'
  }
  const options = {
    headers: headers,
    withCredentials: true
  }
  
  try {
    const res = await axios.post(endPoint, data, options);
    if(res.status == 200) {
      return res.data
    }
    
    if(err.response && err.response.request.status == 400) {
      return err.response.data
    }
  } catch (_) {
    return {
      data: {
        'message': "Bad Internet Connection"
      }
    }
  }
}

export async function getBetResult(page, search) {
  const endPoint = SEVER_URL + '/api/casino/bet-result'
  const data = {
  }
  const headers = {
    'GF-API-KEY': GF_API_KEY,
    'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
    'Content-Type': 'application/json'
  }
  const options = {
    headers: headers,
    withCredentials: true
  }
  
  try {
    const res = await axios.post(endPoint, data, options);
    if(res.status == 200) {
      return res.data
    }
    
    if(err.response && err.response.request.status == 400) {
      return err.response.data
    }
  } catch (_) {
    return {
      data: {
        'message': "Bad Internet Connection"
      }
    }
  }
}