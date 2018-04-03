import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {
  const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT })


  // middleware
  // this is unnecessary for now:
  // const middlewareLink = new ApolloLink((operation, forward) => {
  //   const token = process.server ? ctx.req.session : window.__NUXT__.state.session

  //   operation.setContext({
  //     headers: { authorization: `Bearer ${token}` }
  //   })
  //   return forward(operation)
  // })
  
  const link = /* also unnecessary: middlewareLink.concat( */ httpLink /* )*/
  return {
    link,
    cache: new InMemoryCache()
  }
}
