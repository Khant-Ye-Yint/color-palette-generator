'use client';
import { LockOpen, Lock, Brush } from 'lucide-react';
import usePaletteStore from '@/store/usePaletteStore';
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';

const ColorBlock = ({ index }) => {
  const [open, setOpen] = useState(false);

  const palette = usePaletteStore((state) => state.palette);
  const updatePalette = usePaletteStore((state) => state.updatePalette);

  const { hexCode, isLocked } = palette[index];

  const toggleLock = () => {
    updatePalette(
      palette.map((color, colorIndex) =>
        colorIndex === index
          ? {
              ...color,
              isLocked: !color.isLocked,
            }
          : color
      )
    );
  };

  const updateColor = (updatedColor) => {
    updatePalette(
      palette.map((color, colorIndex) =>
        colorIndex === index
          ? {
              ...color,
              hexCode: updatedColor,
            }
          : color
      )
    );
  };

  return (
    <div className="relative flex flex-col ">
      <div
        className={`h-52`}
        style={{ backgroundColor: palette[index].hexCode }}
      ></div>
      <div className="flex items-center justify-between p-1 ">
        <div>{hexCode.toUpperCase()}</div>
        <div className="flex items-end space-x-2 ">
          <div className="iconBtn" onClick={toggleLock}>
            {isLocked ? <Lock size={15} /> : <LockOpen size={15} />}
          </div>
          <div className="iconBtn" onClick={() => setOpen((prev) => !prev)}>
            <Brush size={15} />
          </div>
        </div>
      </div>
      {open && (
        <HexColorPicker
          className="absolute z-50"
          color={hexCode}
          onChange={updateColor}
        />
      )}
    </div>
  );
};

export default ColorBlock;
