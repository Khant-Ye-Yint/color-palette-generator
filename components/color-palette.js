'use client';

import { useEffect, useState } from 'react';
import ColorBlock from './color-block';
import rgbHex from 'rgb-hex';
import hexRgb from 'hex-rgb';
import ColorPaletteLoading from './color-palette-loading';

const ColorPalette = () => {
  const [palette, setPalette] = useState(null);

  useEffect(() => {
    fetch(
      'http://colormind.io/api/',
      {
        method: 'POST',
        body: JSON.stringify({
          model: 'default',
          input: ['N', 'N', 'N', 'N', 'N'],
        }),
      },
      { cache: 'no-store' }
    )
      .then((res) => res.json())
      .then(({ result }) => {
        const initialPalette = result.map((color) => ({
          hexCode: `#${rgbHex(color[0], color[1], color[2])}`,
          isLocked: false,
        }));
        setPalette(initialPalette);
      });
  }, [setPalette]);

  const formatRGB = (hex) => {
    const rgb = hexRgb(hex);
    const formattedRgb = [rgb.red, rgb.green, rgb.blue];
    return formattedRgb;
  };

  const generateNewPalette = () => {
    const input = palette.map((color) =>
      color.isLocked ? formatRGB(color.hexCode) : 'N'
    );

    fetch(
      'http://colormind.io/api/',
      {
        method: 'POST',
        body: JSON.stringify({
          model: 'default',
          input: input,
        }),
      },
      { cache: 'no-store' }
    )
      .then((res) => res.json())
      .then(({ result }) => {
        const initialPalette = result.map((color, index) => ({
          hexCode: `#${rgbHex(color[0], color[1], color[2])}`,
          isLocked: palette[index].isLocked,
        }));
        setPalette(initialPalette);
      });
  };

  return (
    <>
      {palette ? (
        <div className="mt-10 overflow-hidden text-gray-800 rounded-lg dark:text-white bg-slate-100 dark:bg-neutral-900">
          <div className="grid grid-cols-5">
            {palette.map((color, index) => (
              <ColorBlock
                key={index}
                index={index}
                palette={palette}
                setPalette={setPalette}
              />
            ))}
          </div>
        </div>
      ) : (
        <ColorPaletteLoading />
      )}

      <div className="flex items-center justify-center mt-4 ">
        <button onClick={generateNewPalette} className="px-2 py-1 btn">
          Generate
        </button>
      </div>
    </>
  );
};

export default ColorPalette;
