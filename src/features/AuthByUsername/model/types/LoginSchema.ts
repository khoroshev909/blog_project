export interface LoginSchema {
    username: string,
    password: string,
    error: string | undefined,
    loading: boolean
}
