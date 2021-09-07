import React, { Suspense } from 'react'
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Test } from './components/Test'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

export const App = () => {
    return (
        <Router>
            <ErrorBoundary>
                <Suspense fallback={<div>loading...</div>}>
                    <ApolloProvider client={client}>
                        <Test />
                    </ApolloProvider>
                </Suspense>
            </ErrorBoundary>
        </Router>
    )
}

export default App
