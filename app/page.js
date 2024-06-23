import ColorPalette from '@/components/color-palette';

const HomePage = async () => {
  // const fetchData = async (input) => {
  //   const res = await fetch(
  //     'http://colormind.io/api/',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         model: 'default',
  //         input: input,
  //       }),
  //     },
  //     { cache: 'no-store' }
  //   );

  //   const { result } = await res.json();

  //   return result;
  // };

  // console.log(await fetchData(['N', 'N', 'N', 'N', 'N']));

  return (
    <div className="w-full ">
      <ColorPalette />
    </div>
  );
};

export default HomePage;
