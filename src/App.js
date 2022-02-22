import Body from './components/Body';

function App() {
  return (
    // bg-[#141414]
    <div className="bg-[#141414]">
      {/* <h1 className="text-3xl font-bold underline">
       Hello world!</h1> */}
      <div className="w-2/4 m-auto bg-black rounded-lg text-white p-3 my-10">
        {' '}
        🎉 Get 100% off Today Only !!
      </div>
      <Body />
    </div>
  );
}

export default App;
