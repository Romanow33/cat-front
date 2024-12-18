import { Cat, CreateCatInput, UpdateCatInput } from "@/types/cats"
import resNormalizer from "./axiosConfig"

export async function getAllUserCats(): Promise<Cat[] | false> {

    try {
        const res = await resNormalizer({
            path: '/cats',
            method: "get",
        })

        return res

    } catch (error) {

        console.log(error)
        return false
    }
}


export async function updateCat(input: UpdateCatInput): Promise<Cat | false> {
    try {
        const res = await resNormalizer({
            path: `/cats/${input.id}`,
            method: "patch",
            data: {
                name: input.name,
                age: Number(input.age)
            }
        })

        return res

    } catch (error) {

        console.log(error)
        return false
    }
}

export async function deleteCatById(catId: number): Promise<number | false> {
    try {
        const res = await resNormalizer({
            path: `/cats/${catId}`,
            method: "delete",
        })

        return res

    } catch (error) {

        console.log(error)
        return false
    }
}

export async function createCatApi(input: CreateCatInput): Promise<Cat | false> {
    try {
        const res = await resNormalizer({
            path: `/cats`,
            method: "post",
            data: input
        })

        return res

    } catch (error) {

        console.log(error)
        return false
    }
}