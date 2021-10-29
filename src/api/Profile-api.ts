import { ApiResponseType, axiosApi } from "./api";
import { PhotosType, profileType } from './../types/types';

type SavePhotoResponseDataType = {
    photos: PhotosType
}


export const profileApi = {
    async getProfile(userID: number) {
        const res = await axiosApi.get<profileType>(`profile/` + userID);
        return res.data;
    },
    async getStatus(userID: number) {
        const res = await axiosApi.get<string>(`profile/status/` + userID);
        return res.data;
    },
    async updateStatus(status: string) {
        const res = await axiosApi.put<ApiResponseType>(`profile/status`, { status: status });
        return res.data;
    },
    async savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        const res = await axiosApi.put<ApiResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    },
    async saveProfile(profile: profileType) {
        const res = await axiosApi.put<ApiResponseType>(`profile`, profile);
        return res.data;
    }


}