import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(response.data);
    };
    getData();
  }, [index]);
    

  let printUserData = (
    <img src="https://i.giphy.com/L05HgB2h6qICDs5Sms.webp" width={100}></img>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div
          key={idx}
          className="text-white w-80 h-70 rounded-md mt-10 overflow-hidden"
        >
          <img className="h-[85%] object-cover mb-2" src={elem.download_url} />
          <h1 className="text-xl ml-2 text-white">{elem.author}</h1>
        </div>
      );
    });
  }

  return (
    <div className="bg-black w-full min-h-screen text-white">
      <div className="flex flex-wrap gap-10 p-5 justify-center">
        {printUserData}
      </div>


      <div className="flex justify-center gap-20">
        <button
          className="px-5 py-2 text-black font-bold text-xl rounded-xl bg-amber-300 mb-10 mt-10 cursor-pointer active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Previous
        </button>

        <button
          className="px-5 py-2 text-black font-bold text-xl rounded-xl bg-amber-300 mb-10 mt-10 cursor-pointer active:scale-95"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
