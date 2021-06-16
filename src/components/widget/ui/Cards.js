export const BlogCards = () => {
  return (
    <div className="md:max-w-xs max-w-full my-3 md:my-0 rounded overflow-hidden shadow-md  mx-3 relative bg-white">
      <div className="h-56 w-auto ">
        <img
          className="h-full w-full object-cover"
          src="Images/ship-1.jpg"
          alt="ship"
        />
      </div>

      <div className="-mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L120,186.7C240,181,480,171,720,144C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* <div className="-mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L120,250.7C240,245,480,235,720,208C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div> */}

      <div className="px-6 py-4">
        <div
          className="font-normal text-xl mb-2"
          style={{ color: "#16162d" }}
        >
          Lorem ipsum dolor sit amet, consectetur.
        </div>
        <p className="text-gray-700 text-base" style={{ color: "#869ab8" }}>
          Lorem ipsum dolor sit amet, consectetue adipiscing elit. Duis nec
          condimentum quam.
        </p>
      </div>
      <div
        className="w-52 mx-auto h-0.5"
        style={{ backgroundColor: "#f2f4f8" }}
      />
      <div className="px-6 pt-4 pb-4 flex justify-between">
        <div className="flex my-auto ">
          <img src="Images/avatar.jpg" alt="avatar" />

          <p className="text-xs ml-2 my-auto" style={{ color: "#869ab8" }}>
            David john
          </p>
        </div>
        <p className="text-xs my-auto" style={{ color: "#869ab8" }}>
          May 02
        </p>
      </div>
    </div>
  );
};

export const CustomerCarouselCard = ({ image, title, name, intro }) => {
  return (
    <div className=" w-full max-w-6xl md:h-96  md:flex  md:rounded-tl-2xl md:rounded-bl-2xl  rounded-lg overflow-hidden shadow-md bg-white">
      <div
        className="  md:w-2/4 overflow-hidden"
        style={{
          flex: 0.5,
          height: "auto",
          borderTopRightRadius: "2% 25%",
          borderBottomRightRadius: "5% 70%",
        }}
      >
        <img
          src={image}
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className=" bg-white   p-10 flex flex-col justify-between leading-normal"
        style={{ flex: 0.5 }}
      >
        <div className="mb-8 mt-10">
          <div
            className=" text-center uppercase"
            style={{ color: "#3962e2", fontWeight: 300, fontSize: 30 }}
          >
            {title}
          </div>
          <p
            className="text-base text-center mt-7"
            style={{ color: "#16162d" }}
          >
            " {intro} "
          </p>

          <div className="text-sm mt-10">
            <p
              className=" leading-none text-center"
              style={{ color: "#869ab8" }}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceCards = (props) => {
  const { no, intro } = props;
  return (
    <div className="my-8">
      <img src="images/service.png" className="h-8 w-8" />
      <div className="my-3">
        <h3 className="text-xl font-semibold" style={{ color: "#161c2d" }}>
          <spna>Service 0</spna>
          {no}
        </h3>
      </div>
      <div>
        <p
          className="text-base leading-6 font-normal"
          style={{ color: "#869ab8" }}
        >
          {intro}
        </p>
      </div>
    </div>
  );
};

export const ShippingCards = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex md:pd-0 p-1 ">
      <div className="md:h-40  md:w-62  bg-cover rounded-2xl text-center overflow-hidden">
        <img
          src="Images/placeholder.png"
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r px-3 py-3  flex flex-col justify-between leading-normal ml-4">
        <div className="mb-8">
          <div
            className="text-gray-900 text-xl mb-2"
            style={{ fontWeight: 600 }}
          >
            Lorem ipsum dolor
          </div>
          <p className="text-base " style={{ color: "#506690" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla!
          </p>
        </div>
      </div>
    </div>
  );
};
