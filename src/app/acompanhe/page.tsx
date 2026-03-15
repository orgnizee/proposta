export default function Acompanhe() {
  return (
    <main>
      {/* HEADER */}
      <h1 className="p-2 sm:p-0 sm:ml-1 mt-8 text-5xl sm:text-6xl text-start">
        Center Truck
      </h1>

      <div className="mt-2 overflow-hidden">
        <div className="overflow-auto flex">
          <div className="overflow-x-auto scrollbar-hidden snap-x snap-mandatory flex px-1 pt-1 pb-5 gap-4 font-bold">
            <div className="snap-start relative min-w-77.25 min-h-40 sm:min-w-100 sm:min-h-55 shrink-0 rounded-md bg-secondary/20 overflow-hidden"></div>
            <div className="snap-start relative min-w-77.25 min-h-40 sm:min-w-150 sm:min-h-55 shrink-0 rounded-md bg-secondary/10 overflow-hidden"></div>
            <div className="snap-start relative min-w-77.25 min-h-40 sm:min-w-200 sm:min-h-55 shrink-0 rounded-md bg-secondary/10 overflow-hidden"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
