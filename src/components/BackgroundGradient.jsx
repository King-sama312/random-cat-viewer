import React from "react";

function BackgroundGradient() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-amber-500/4 blur-[120px]">
        </div>
          <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full bg-orange-600/4 blur-[100px]"></div>
      </div>
    </>
  );
}

export default BackgroundGradient;
