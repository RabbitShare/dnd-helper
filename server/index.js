import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
    type Book {
        id: ID
        title: String
        author: Author
    }

    type Author {
        id: ID
        name: String
        books: [Book]
    }

    type Query {
        books: [Book]
        authors: [Author]
    }
`

const books = [
    {
        id: 1,
        title: 'The Awakening',
        authorId: 1,
    },
    {
        id: 2,
        title: 'City of Glass',
        authorId: 2,
    },
]

const authors = [
    {
        id: 1,
        name: 'Kate Chopin',
    },
    {
        id: 2,
        name: 'Paul Auster',
    },
]

const resolvers = {
    Query: {
        books: () => books.map(book => ({...book, author: authors.find(a => a.id === book.authorId)})),
        authors: () => authors
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
