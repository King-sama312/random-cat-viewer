export default function CatCard({ cat, loading }) {
  if (loading || !cat) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="animate-fade-up rounded-2xl border border-white/6 bg-(--surface)/60 backdrop-blur-sm overflow-hidden">
      {/* Image */}
      <div className="relative aspect-4/3 sm:aspect-video bg-(--surface)">
        <img
          src={cat.url}
          alt={`Photo of a ${cat.breed} cat`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Breed badge */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-block px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
            {cat.breed}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            {cat.breed}
          </h2>
          <p className="text-sm text-(--text-muted) mt-1">
            {cat.temperament}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-(--text-muted)">
          {cat.description}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <StatBlock label="Origin" value={cat.origin} />
          <StatBlock label="Lifespan" value={`${cat.lifeSpan} yrs`} />
          <StatBlock label="Weight" value={`${cat.weight} kg`} />
        </div>
      </div>
    </div>
  );
}

function StatBlock({ label, value }) {
  return (
    <div className="rounded-lg bg-white/3 border border-white/4 p-3 text-center">
      <p className="text-[10px] uppercase tracking-wider text-(--text-muted) mb-1">
        {label}
      </p>
      <p className="text-xs sm:text-sm font-medium truncate">{value}</p>
    </div>
  );
}

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
