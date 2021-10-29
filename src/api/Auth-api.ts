import { ApiResponseType, axiosApi } from "./api";


type AuthDataType = {
    id: number
    email: string
    login: string
}

type LoginDataType = {
    userId: number
}

export const authApi = {
    async me() {
        const res = await axiosApi.get<ApiResponseType<AuthDataType>> (`auth/me`);
        return res.data;
    },
    async login(email: string, password: string, rememberMe = true) {
        const res = await axiosApi.post<ApiResponseType<LoginDataType>>(`auth/login`, { email, password, rememberMe });
        return res.data;
    },
    logout() {
        return axiosApi.delete(`auth/login`);
    }
}


