import axios from "axios"
import {UserType} from "../types/types"

export type ApiResponseType<D = {}, RC = resultCodeEnum> = {
    data: D
    messages: [string]
    resultCode: RC

}
export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export enum resultCodeEnum  {
    Succes = 0,
    Error = 1
}

export enum captchEnum {
    CaptchaIsRequired = 10
}

export const axiosApi = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "68ceb127-9ac7-484b-a56d-b7a3ffc4fd83"
    }
})







