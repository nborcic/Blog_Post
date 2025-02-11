import { Marquee } from "./magicui/marquee";
import { ScrollProgress } from "./magicui/scroll-progress";
import { ReviewCard } from "../Components/magicui/Marqueee";
import { reviews } from "./magicui/Marqueee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <>
      <section
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
          <h1 className="text-4xl mb-8 bg-gradient-to-r from-[#00f7ff] to-[#ff00e6] text-transparent bg-clip-text">
            𝐸𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒 𝐿𝓊𝓍𝓊𝓇𝓎 ��𝓃 𝒫𝒶𝓇𝒶𝒹𝒾𝓈𝑒
          </h1>
          <p className="text-4xl mb-8 text-gray-300">
            𝐼𝓃𝒹𝓊𝓁𝑔𝑒 𝒾𝓃 𝓉𝒽𝑒 𝓊𝓁𝓉𝒾𝓂𝒶𝓉𝑒 𝑔𝑒𝓉𝒶𝓌𝒶𝓎 𝒶𝓉 𝑜𝓊𝓇 𝑒𝓍𝓆𝓊𝒾𝓈𝒾𝓉𝑒 𝓋𝒾𝓁𝓁𝒶
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#00f7ff] to-[#ff00e6] text-white rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300">
            Explore Our Home
          </button>
        </div>
      </section>
      <section className="max-w-[1440px] my-40  py-20 rounded-xl">
        <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-[#00f7ff] to-[#ff00e6] text-transparent bg-clip-text">
          Testimonials
        </h2>
        <div className="flex gap-8 flex-col md:flex-row">
          {/* Image Carousel */}
          <div className="w-full md:w-1/2">
            <Slider
              autoplay
              autoplaySpeed={3000}
              infinite
              speed={1000}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              fade={true}
            >
              <div className="h-[50dvh]">
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
                  alt="Luxury Interior 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[50dvh]">
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
                  alt="Luxury Interior 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[50dvh]">
                <img
                  src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc"
                  alt="Luxury Interior 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Slider>
          </div>

          {/* Reviews with Marquee */}
          <div className="w-full md:w-1/2 m-10 p-2">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s] my-8">
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
        </div>
      </section>
      <section className=" py-20 bg-white  max-w-[1400px] mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex gap-4 h-[600px] md:flex-row flex-col">
            {["Master Suite", "Garden View", "Ocean Suite", "Tech Suite"].map(
              (room, index) => (
                <div
                  key={room}
                  className={`relative h-full md:flex-[0.5] flex-1 transition-[flex] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden rounded-xl cursor-pointer hover:flex-[2] group 
                ${
                  index === 0
                    ? "md:flex-[2] md:h-full h-[400px]"
                    : "md:h-full h-[300px]"
                }`}
                >
                  <img
                    src={
                      [
                        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
                        "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
                        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
                        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
                      ][index]
                    }
                    alt={room}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white 
                  transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0
                  md:opacity-0 md:translate-y-5 opacity-100 translate-y-0"
                  >
                    <h3 className="text-2xl mb-2 bg-gradient-to-r from-[#00f7ff] to-[#ff00e6] bg-clip-text text-transparent">
                      {room}
                    </h3>
                    <p className="text-lg opacity-90">
                      {index === 0 &&
                        "Experience ultimate luxury in our flagship suite"}
                      {index === 1 && "Peaceful retreat with nature views"}
                      {index === 2 && "Breathtaking views of the horizon"}
                      {index === 3 && "Smart room with cutting-edge amenities"}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
