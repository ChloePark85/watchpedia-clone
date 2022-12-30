import { axiosInstance } from "./index";

export const latestApi = () => axiosInstance.get(`/tv/latest`)
export const airingTodayApi = () => axiosInstance.get(`/tv/airing_today`)
export const onTheAirApi = () => axiosInstance.get(`/tv/on_the_air`)
export const popularApi = () => axiosInstance.get(`/tv/popular`)
export const topRatedtApi = () => axiosInstance.get(`/tv/top_rated`)
export const detailApi = (tvId) => axiosInstance.get(`/tv/${tvId}`)
export const similarApi = (tvId) => axiosInstance.get(`/tv/${tvId}/similar`)
export const searchApi = (query) => axiosInstance.get(`search/tv?query=${query}`)