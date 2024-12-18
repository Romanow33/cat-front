import { publicResNormalizer } from "./axiosConfig"

export async function authUser({
    email,
    password
}: {
    email: string,
    password: string
}): Promise<{ token: string, email: string } | false> {

    try {
        const res: {
            token: string, email: string
        } = await publicResNormalizer({
            path: '/auth/login',
            method: "post",
            data: {
                email,
                password
            }
        })

        return res

    } catch (error) {
        console.log(error)
        return false
    }
}