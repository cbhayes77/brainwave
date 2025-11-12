import { Component } from "react";
import Section from "./Section.jsx";
import Container from "./Container.jsx";
import Button from "./Button.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Section>
          <Container className="text-center">
            <h1 className="heading-section text-red-400">Something went wrong</h1>
            <p className="mt-4 body-default">We encountered an unexpected error. Please try refreshing the page.</p>
            <div className="mt-6 space-x-4">
              <Button onClick={() => window.location.reload()} variant="primary">
                Refresh Page
              </Button>
              <Button onClick={() => this.setState({ hasError: false, error: null })} variant="secondary">
                Try Again
              </Button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-red-400 mb-2">Error Details (Development Only)</summary>
                <pre className="bg-red-950/50 text-red-300 p-4 rounded-lg overflow-auto text-sm">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </Container>
        </Section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
