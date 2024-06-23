import { create } from 'zustand';

const usePaletteStore = create((set) => ({
  palette: [],

  updatePalette: (palette) => set(() => ({ palette: palette })),
}));

export default usePaletteStore;
