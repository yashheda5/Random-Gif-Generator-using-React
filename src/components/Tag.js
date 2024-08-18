import React, { useState } from 'react';
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

export const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, Loading, fetchData } = useGif(); // Initialize without a tag

  function changeHandler(event) {
    setTag(event.target.value);
  }

  function submitHandler() {
    fetchData(tag); // Fetch GIF based on the current tag when the button is clicked
  }

  return (
    <div className="w-1/2 bg-blue-600 flex flex-col items-center rounded-lg border-black border-2 gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {Loading ? (
        <Spinner />
      ) : (
        gif && <img src={gif} alt="" width="450" />
      )}
      <input
        type="text"
        value={tag}
        className="w-10/12 text-lg py-2 rounded-lg mb-[7px] text-center"
        onChange={changeHandler}
        placeholder="Enter a tag"
      />
      <button
        onClick={submitHandler}
        className="mb-[15px] w-9/12 bg-yellow-600 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};
