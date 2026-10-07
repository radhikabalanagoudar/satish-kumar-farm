import React, { useState } from 'react';
import { Sprout } from 'lucide-react';

/**
 * ImageWithFallback
 * Highly stable image component that renders a graceful agricultural placeholder
 * if an image fails to load or is unavailable, preventing layout shifts and broken UI.
 */
export default function ImageWithFallback({
  src,
  alt = 'Agricultural Farm Asset',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  fallbackLabel = 'Farm Produce',
  loading = 'lazy',
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#ECE5D8] ${aspectRatio} ${className}`}>
      {/* Fallback Display */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#E8EFE7] p-4 text-center text-[#173F35]">
          <div className="w-12 h-12 rounded-full bg-[#7C9A78]/20 flex items-center justify-center mb-2">
            <Sprout className="w-6 h-6 text-[#173F35]" />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#7C9A78]">
            {fallbackLabel}
          </span>
          <span className="text-xs text-[#76543A] mt-1 font-serif italic max-w-[200px] truncate">
            {alt}
          </span>
        </div>
      ) : (
        <>
          {/* Skeleton placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE5D8] via-[#F6F1E7] to-[#ECE5D8] animate-pulse" />
          )}

          <img
            src={src}
            alt={alt}
            loading={loading}
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
        </>
      )}
    </div>
  );
}
