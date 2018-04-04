import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost($title: String!, $description: String!, $content: String!) {
    createPost(input: {post: {
      title: $title,
      description: $description,
      content: $content
      }}) {
        post {
          id
          createdAt
          title
          description
          content
        }
      }
    }`
