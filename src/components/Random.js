import React from 'react';
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

export const Random = () => {
  const { gif, Loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-600 flex flex-col items-center rounded-lg border-black border-2 gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>
      {Loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="" width="450" />
      )}
      <button
        onClick={clickHandler}
        className="mb-[15px] w-9/12 bg-yellow-600 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};
