import { Marquee } from "./magicui/marquee";
import { ScrollProgress } from "./magicui/scroll-progress";
import { ReviewCard } from "../Components/magicui/Marqueee";
import { reviews } from "./magicui/Marqueee";

const Home = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <>
      <div
        className="h-[90dvh] w-screen max-w-[1440px] flex items-center justify-center bg-cover bg-center text-white text-center relative rounded-xl"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          borderRadius: "20px",
        }}
      >
        <ScrollProgress className="top-[0px]" />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
        <div className="relative z-10 px-5 rounded-xl">
          <h1 className="text-4xl mb-8">𝐸𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒 𝐿𝓊𝓍𝓊𝓇𝓎 𝒾𝓃 𝒫𝒶𝓇𝒶𝒹𝒾𝓈𝑒</h1>
          <p className="text-2xl mb-8">
            𝐼𝓃𝒹𝓊𝓁𝑔𝑒 𝒾𝓃 𝓉𝒽𝑒 𝓊𝓁𝓉𝒾𝓂𝒶𝓉𝑒 𝑔𝑒𝓉𝒶𝓌𝒶𝓎 𝒶𝓉 𝑜𝓊𝓇 𝑒𝓍𝓆𝓊𝒾𝓈𝒾𝓉𝑒 𝓋𝒾𝓁𝓁𝒶
          </p>
          <button className="px-4 py-2 text-base bg-green-500 text-white border-none rounded cursor-pointer">
            Explore Our Home
          </button>
        </div>
      </div>
      <section className="max-w-[1440px]  px-2 flex py-96 w-full  items-center justify-center">
        <div>
          //*Carousel with images on the left and on the right 𝒯𝑒𝓈𝓉𝒾𝓂𝑜𝓃𝒾𝒶𝓁𝓈 adjast height with Carousel*//
        </div>
        <div className="w-[50%] m-10 p-2">
          {" "}
          <h2 className="text-4xl  mb-8 text-center">𝒯𝑒𝓈𝓉𝒾𝓂𝑜𝓃𝒾𝒶𝓁𝓈</h2>
          <Marquee pauseOnHover className="[--duration:20s] mb-8">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Home;
