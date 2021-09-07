import React, { Component, ErrorInfo, ReactNode } from 'react'
import { withRouter } from 'react-router-dom'

const ErrorComponent = () => {
    return <h1>Something went wrong</h1>
}

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: { message: '', stack: '' },
        info: { componentStack: '' },
    }

    static getDerivedStateFromError = (error: any) => {
        return { hasError: true }
    }

    componentDidCatch = (error: any, info: any) => {
        this.setState({ error, info })
    }

    render() {
        const { hasError, error, info } = this.state
        const { children } = this.props

        return hasError ? <ErrorComponent /> : children
    }
}
// const ErrorBoundary = withRouter(ErrorBound)

export { ErrorBoundary }
