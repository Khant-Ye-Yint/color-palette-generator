const useFetchData = async (input) => {
  const res = await fetch(
    'http://colormind.io/api/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'default',
        input: input,
      }),
    },
    { cache: 'no-store' }
  );

  const { result } = await res.json();

  return result;
};

export default useFetchData;
