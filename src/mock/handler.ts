import { rest } from "msw"

import { mockGetPosts } from "./api/posts/posts"

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT || "http://localhost:3000"

export const handlers = [rest.get(`${ENDPOINT}/posts`, mockGetPosts)]
