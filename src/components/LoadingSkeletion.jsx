import React from "react";

function LoadingSkeleton() {
  return (
    <div className="rounded-2xl border border-white/6 bg-(--surface)/60 backdrop-blur-sm overflow-hidden">
      {/* Image placeholder */}
      <div className="aspect-4/3 sm:aspect-video shimmer" />

      {/* Text placeholders */}
      <div className="p-5 sm:p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-6 w-48 rounded shimmer" />
          <div className="h-4 w-72 rounded shimmer" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded shimmer" />
          <div className="h-3 w-5/6 rounded shimmer" />
          <div className="h-3 w-2/3 rounded shimmer" />
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="h-16 rounded-lg shimmer" />
          <div className="h-16 rounded-lg shimmer" />
          <div className="h-16 rounded-lg shimmer" />
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
