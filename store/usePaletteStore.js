import { create } from 'zustand';

const usePaletteStore = create((set) => ({
  palette: null,

  updatePalette: (palette) => set(() => ({ palette: palette })),
}));

export default usePaletteStore;
