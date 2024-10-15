import { trustees } from "../data/index";

const TrusteesGrid = () => {
  return (
    <div className="pt-[40px] lg:mb-[40px]">
      <h2 className="text-center text-2xl font-bold mb-2">
        BOARD OF TRUSTEES
      </h2>
      <div className="w-full py-12 px-[20px] lg:px-[20px]">
        {trustees?.map((trustee, index) => {
          let layoutClasses =
            " my-10 md:flex md:justify-between md:my12 md:gap-x-[20px] md:items-center lg:h-[350px] md:gap-y-12 lg:my-12";
          let textArea = "text-justify  text-sm font-Open-Sans";
          if (index % 2 === 1) {
            layoutClasses += " md:flex-row-reverse";
            textArea +=
              " lg:text-justify  text-sm font-Open-Sans lg:flex self-start";
          }

          return (
            <section key={index} className={layoutClasses}>
              <div className="w-full lg:w-3/5 rounded-md ">
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className="h-96 w-[800px] object-center rounded-md"
                />
              </div>
              <div className="w-full lg:w-3/5  lg:px-0 ">
                <h1 className="text-bold text-lg font-bold">{trustee.name}</h1>
                <p className={textArea}>{trustee.description}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default TrusteesGrid;
