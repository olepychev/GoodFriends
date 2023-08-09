import axios from 'axios';

const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

export async function getAccessToken() {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-in/success', {
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
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
  } catch(err) {
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

export async function getRefreshToken() {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-in/refresh', {
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
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
  } catch(err) {
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

export async function signIn({email, password}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-in', {
      email,
      password
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

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
  } catch(err) {
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

export async function signUp({email, authCode, promoCode, password}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-up', {
      email, authCode, promoCode, password
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      }
    });
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
  } catch(err) {
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

export async function signUpEmail({email}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-up/email', {
      email
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      }
    });
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
  } catch(err) {
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

export async function forgotPasswordEmail({email}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/forgot-password/email', {
      email
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      }
    });
		
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
  } catch(err) {
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

export async function forgotPasswordChange({email, authCode, password}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/forgot-password/change', {
      email, authCode, password
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      }
    });
		
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
  } catch(err) {
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

export async function signupSocial({email, password, loginType}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/social/sign-up', {
      email, password, loginType
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      }
    });
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
  } catch(err) {
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

export async function signOut() {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-out', {}, {
    	headers: {
				'GF-API-KEY': GF_API_KEY,
				'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
				'Content-Type': 'application/json',
    	},
    	withCredentials: true,
    });
		
    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
    return {
      success: false,
      data: "Sign in Failed"
    }
  } catch(err) {
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

export async function changeProfileImage({memberIdx, profileImage}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/profile/image', {
      memberIdx,
      profileImage
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
    /// add more case here.
    return {
      success: false,
      data: "Sign in Failed"
    }
  } catch(err) {
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

export async function changeNickname({memberIdx, nick}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/profile/nick', {
      memberIdx,
      nick
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
    /// add more case here.
    return {
      success: false,
      data: "Sign in Failed"
    }
  } catch(err) {
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