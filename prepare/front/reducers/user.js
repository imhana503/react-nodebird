export const initialState = {
    isLoggingIn : false,//로그인 시도 중
    isLoggedIn : false,
    istLoggingOut : false, //로그아웃 시도 중
    me : null,
    signUpData :{},
    loginData:{},
}

export const loginAction = (data) => {
  return {
    type:'LOG_IN',
    data,
  }
}

export const logoutAction = (data) => {
  return {
    type:'LOG_OUT',
    data,
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOG_IN_REQUEST' : 
      return {
        ...state,
        isLoggingIn:true,
      };
      case 'LOG_IN_SUCCESS' : 
      return {
        ...state,
        isLoggedIn:true,
        isLoggingIn:false,
        me:{...action.data, nickname:'zerocho'}
      };
      case 'LOG_IN_FAILURE' : 
      return {
        ...state,
        isLoggedIn:false,
        isLoggingIn:false, 
      };
      case 'LOG_OUT_REQUEST' : 
      return {
        ...state,
        istLoggingOut:true,
      };
      case 'LOG_OUT_SUCCESS' : 
      return {
        ...state,
        istLoggingOut:false,
        isLoggedIn:false,
        me:null,
      };
      case 'LOG_OUT_FAILURE' : 
      return {
        ...state,
        istLoggingOut:false,
        isLoggedIn:false,
      };
    default:
      return state;
  }
}

export default reducer;