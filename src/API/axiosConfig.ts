import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuthStore } from '@/store/auth'

const BASEURL = 'http://localhost:3000/api/v1'

interface ResNormalizerProps {
    path: string,
    method: 'get' | 'post' | 'patch' | 'delete';
    data?: unknown;
}

export default async function resNormalizer({ path, method, data = {} }: ResNormalizerProps) {
    const auth = useAuthStore()

    try {
        const token = auth.tkn
        if (!token) throw new Error('No token');

        const config: AxiosRequestConfig = {
            method,
            url: `${BASEURL}${path}`,
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        };

        const res: AxiosResponse = await axios(config);
        return res.data;
    } catch (error: unknown) {
        console.log(error)
    }
}

export async function publicResNormalizer({ path, method, data = {} }: ResNormalizerProps) {

    try {

        const config: AxiosRequestConfig = {
            method,
            url: `${BASEURL}${path}`,
            data,
            withCredentials: true,
        };

        const res: AxiosResponse = await axios(config);
        return res.data;
    } catch (error: unknown) {

        console.log(error)
        return false
    }
}