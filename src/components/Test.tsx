import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const EXCHANGE_RATES = gql`
    query GetBooks {
        books {
            id
            title
            author {
                id
                name
            }
        }
    }
`

export const Test = () => {
    const { data: book } = useQuery(EXCHANGE_RATES)
    if (!book) return null
    return book.books.map(({ title, author, id }: any) => (
        <div key={id}>
            <p>
                {title}: {author.name}
            </p>
        </div>
    ))
}
