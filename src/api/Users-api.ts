import { ApiResponseType, axiosApi, GetItemsType } from "./api";


export const usersApi = {

    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await axiosApi.get <GetItemsType>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async follow(userID: number) {
        const res = await axiosApi.post<ApiResponseType>(`follow/${userID}`);
        return res.data;
    },
    unFollow(userID: number) {
        return axiosApi.delete(`follow/${userID}`).then(res=> res.data ) as Promise<ApiResponseType>
    }
}