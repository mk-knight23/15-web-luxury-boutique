import { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
        const errorDetails = {
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            timestamp: new Date().toISOString()
        };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-white">
                    <div className="max-w-md w-full mx-6 p-8 bg-white border border-slate-200 rounded-3xl shadow-2xl text-center">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">⚠</span>
                        </div>
                        <h1 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">System Error</h1>
                        <p className="text-slate-500 mb-8 font-medium">An unexpected error occurred. Please reload the page.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-4 bg-slate-900 hover:bg-gold text-white font-black rounded-xl transition-all uppercase text-xs tracking-widest"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
