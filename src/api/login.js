import request from '@/utils/request.js'

// 注册
export const register = (data) =>{
    return request({
        url: '/register',
        methode: 'POST',
        data
    })
}

// 登陆
export const login