import React from 'react';
import { Sprout, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Farm Website UI Caught Error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F6F1E7] flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-white border border-[#7C9A78]/30 rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#173F35]/10 flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-[#173F35]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#173F35] mb-2">
              Gentle Pause in the Field
            </h2>
            <p className="text-sm text-[#76543A] mb-6 leading-relaxed">
              We encountered a temporary interface hiccup while rendering the farm pages. The land remains steady.
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#173F35] hover:bg-[#23584B] text-white text-sm font-medium rounded-full transition-colors cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              Return to Farm Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
