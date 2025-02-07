const Home = () => {
  return (
    <div
      className="h-screen w-screen max-w-[1440px] flex items-center justify-center bg-cover bg-center text-white text-center relative rounded-xl"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
        borderRadius: "20px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      <div className="relative z-10 px-5 rounded-xl">
        <h1 className="text-4xl mb-8">𝐸𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒 𝐿𝓊𝓍𝓊𝓇𝓎 𝒾𝓃 𝒫𝒶𝓇𝒶𝒹𝒾𝓈𝑒</h1>
        <p className="text-2xl mb-8">
          𝐼𝓃𝒹𝓊𝓁𝑔𝑒 𝒾𝓃 𝓉𝒽𝑒 𝓊𝓁𝓉𝒾𝓂𝒶𝓉𝑒 𝑔𝑒𝓉𝒶𝓌𝒶𝓎 𝒶𝓉 𝑜𝓊𝓇 𝑒𝓍𝓆𝓊𝒾𝓈𝒾𝓉𝑒 𝓋𝒾𝓁𝓁𝒶
        </p>
        <button className="px-4 py-2 text-base bg-green-500 text-white border-none rounded cursor-pointer">
          Explore Our Villa
        </button>
      </div>
    </div>
  );
};

export default Home;
