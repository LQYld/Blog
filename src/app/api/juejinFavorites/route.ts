export async function POST(request: Request) {
  const fetchResponse = await fetch(
    `https://api.poozhu.cn/juejinFavorites/getList`,
    {
      method: 'POST',
      body: JSON.stringify({
        pageNum: 1,
        pageSize: 10
      })
    }
  )
  return new Response(JSON.stringify(await fetchResponse.json()))
}
