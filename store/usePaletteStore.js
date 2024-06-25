import { create } from 'zustand';

const usePaletteStore = create((set) => ({
  palette: [
    { hexCode: '#018471', isLocked: false },
    { hexCode: '#018471', isLocked: false },
    { hexCode: '#018471', isLocked: false },
    { hexCode: '#018471', isLocked: false },
    { hexCode: '#018471', isLocked: false },
  ],

  updatePalette: (palette) => set(() => ({ palette: palette })),
}));

export default usePaletteStore;
