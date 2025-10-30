import { useState } from "react";
import "./index.css";

function App() {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setDetails("");

    const copyTask = [...task];

    copyTask.push({ title, details });
    setTask(copyTask);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }


  return (
    <>
      <div className="flex flex-col lg:flex-row bg-black h-full text-amber-50">
        <div className="w-full lg:w-1/2 h-auto border gray-100 flex justify-center items-center flex-col">
          <h1 className="text-5xl">Add Notes</h1>

          <form
            className="w-[60%] m-10 h-[fit-content] gap-4 flex flex-col"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className="m-1 rounded-md outline-0 p-2 text-2xl border h-13"
              type="text"
              placeholder="enter..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea name="text" rows={5} cols={20} placeholder="enter" className="resize-none border outline-0 p-2 text-2xl rounded-2xl"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}>

            </textarea>

            <div className="m-1 w-[fit-content] h-[fit-content]">
              <button
                type="submit"
                className="p-3 cursor-pointer hover:bg-sky-500 w-20 rounded-2xl bg-sky-900"
              >
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 border gray-100">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold m-5">My recent notes</h1>
          <div className="flex flex-wrap gap-7 mt-6 h-screen overflow-auto">

            {task.map(function (elem, idx) {
              return <div key={idx} className="relative ml-3.5 h-53 bg-cover w-44 rounded-2xl text-black pt-10 pl-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScg-F0-n7uC3MnEu_TQl_-7bxIAmE54TlBQ&s')]">
                <i onClick={()=>{deleteNote(idx)}} className="ri-close-line absolute bg-red-600 pl-1 pr-1 cursor-pointer active:bg-red-400 right-1 top-7"></i>
               <h3 className="font-bold text-2xl mt-2">{elem.title}</h3>
               <p className="">{elem.details}</p>
              </div>
            })}

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
