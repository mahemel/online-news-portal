import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "https://mahemel-online-news-portal.vercel.app/"
})

export const { signIn, signUp, useSession } = createAuthClient()