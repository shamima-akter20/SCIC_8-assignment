import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[550px] lg:h-[700px] bg-cover"
        style={{
          backgroundImage:
            "url( https://i.ibb.co/0K2zYHN/Project-management-plan.png )",
        }}
      >
        <div className="hero-overlay bg-opacity-80  bg-gradient-to-r from-[#293333] to-[rgba(21, 21, 21, 0)] "></div>
        <div className="hero-content text-start text-neutral-content">
          <div className="max-w-md p-7 md:p-0">
            <h1 className="mb-2 md:mb-5 text-base md:text-5xl font-bold">Hello there</h1>
            <p className="mb-2 text-xs md:text-base md:mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

          <Link to='/dashboard'>
            <button className="btn btn-sm md:btn-md btn-outline text-white">Explore
            <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
