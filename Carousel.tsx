import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { CompanyCard } from "./CompanyCard";

const Carousel = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setisHoveredRight] = useState(false);

  const slideLeft = () => {
    const slider = document.getElementById("carousel");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("carousel");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="relative flex items-center">
      <div
        id="carousel"
        className="flex h-full w-full overflow-x-scroll scroll-smooth"
      >
        <div className="ml-10 mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
        <div className="mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
        <div className="mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
        <div className="mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
        <div className="mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
        <div className="mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
        <div className="mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
        <div className="mr-10">
          <CompanyCard
            image="/perrito.jpg"
            name="Perrito"
            description="aslkjd alskdja aslkdjasld aldskjasldjk asldkjasd lasdjkasljd aslkdjsads aslkjsd alskdj asldkjsad asldkja sdlksjd aslkdj asdlkasjd salsdkj dlkalasdkjasdkj sdlkajd asldkjas dlaskdjas ldsjkad alskdja laskjd aslkdj asldksja dlskj sdlakjsd laksjd asldkja lsdkj asldkjas dlaskjd aslkdjas ldkjasd laskjd asldkjas dlsakjd sladkjas ldkjas "
          />
        </div>
      </div>
      <MdChevronLeft
        onMouseEnter={() => setIsHoveredLeft(true)}
        onMouseLeave={() => setIsHoveredLeft(false)}
        onClick={slideLeft}
        color={"white"}
        size={40}
        className="absolute left-0 z-10"
        style={{
          height: "-webkit-fill-available",
          backgroundColor: isHoveredLeft && "rgba(140, 184, 255,0.3)",
        }}
      />
      <MdChevronRight
        onClick={slideRight}
        onMouseEnter={() => setisHoveredRight(true)}
        onMouseLeave={() => setisHoveredRight(false)}
        color={"white"}
        size={40}
        className="absolute right-0 z-10"
        style={{
          height: "-webkit-fill-available",
          backgroundColor: isHoveredRight && "rgba(140, 184, 255,0.3)",
        }}
      />
    </div>
  );
};

export default Carousel;
