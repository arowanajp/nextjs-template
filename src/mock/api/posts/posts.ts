import { MockedRequest, ResponseResolver, restContext } from "msw"

export const mockGetPosts: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  const posts = [...Array(10).keys()].map((val) => ({
    id: val,
    title: `タイトル${val}`,
    url: "https://source.unsplash.com/Mv9hjnEUHR4",
    description: "テスト・テスト・テスト",
  }))
  return res(
    ctx.status(200),
    ctx.json({
      posts,
    })
  )
}
