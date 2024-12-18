import { Breed } from "@/types/breed"
import resNormalizer from "./axiosConfig"

export async function getAllBreeds(): Promise<Breed[] | false> {

    try {
        const res = await resNormalizer({
            path: '/breeds',
            method: "get",
        })

        return res

    } catch (error) {

        console.log(error)
        return false
    }
}
