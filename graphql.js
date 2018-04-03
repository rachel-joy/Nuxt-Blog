import gql from 'graphql-tag'

export const CREATE_POST = gql`
mutation CreatePost($title: String!, $description: String!, $content: String!) {
  createPost(
    title: $title,
    description: $description,
    content: $content
    ) {
        id
        createdAt
        title
        description
        content
      }
  }`
