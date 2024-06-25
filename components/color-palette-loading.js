const Block = () => (
  <div className="p-3 space-y-3 rounded-md">
    <div className="rounded-sm h-44 dark:bg-slate-500 bg-neutral-100 animate-pulse"></div>
    <div className="flex items-center justify-between">
      <div className="w-20 h-6 rounded-sm dark:bg-slate-500 bg-neutral-100 animate-pulse"></div>
      <div className="flex justify-end space-x-3">
        <div className="w-6 h-6 rounded-sm dark:bg-slate-500 bg-neutral-100 animate-pulse"></div>
        <div className="w-6 h-6 rounded-sm dark:bg-slate-500 bg-neutral-100 animate-pulse"></div>
      </div>
    </div>
  </div>
);

const ColorPaletteLoading = () => {
  return (
    <div className="mt-10 overflow-hidden text-gray-800 rounded-lg dark:text-white ">
      <div className="grid grid-cols-5">
        {[0, 0, 0, 0, 0].map((item, index) => (
          <Block key={index} />
        ))}
      </div>
    </div>
  );
};

export default ColorPaletteLoading;
