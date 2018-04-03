import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {
  const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT })


  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    console.log(process.server)
    console.log(ctx.req)
    console.log(window.__NUXT__.state)
    const token = process.server ? ctx.req.session : window.__NUXT__.state.session

    operation.setContext({
      headers: { authorization: `Bearer ${token}` }
    })
    return forward(operation)
  })
  const link = middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache()
  }
}
