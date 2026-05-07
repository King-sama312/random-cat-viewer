import React from "react";

function Sidebar({ history }) {
  return (
    <>
      <aside className="order-3 lg:order-2">
        <div className="rounded-2xl border border-white/6 bg-(--surface)/60 backdrop-blur-sm p-5">
          <h2 className="text-xs tracking-[0.2em] uppercase text-(--text-muted) mb-5">
            Recent Cats
          </h2>

          {history.length === 0 ? (
            <p className="text-sm text-(--text-muted) italic">No cats yet...</p>
          ) : (
            <div className="space-y-3">
              {history.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/3 transition-colors cursor-default"
                >
                  <div className="w-10 h-10 rounded-md overflow-hidden shrink-0 bg-(--surface-light)">
                    <img
                      src={item.url}
                      alt={item.breed}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-(--text-primary) truncate">
                      {item.breed}
                    </p>
                    <p className="text-[10px] text-(--text-muted) truncate">
                      {item.origin}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
