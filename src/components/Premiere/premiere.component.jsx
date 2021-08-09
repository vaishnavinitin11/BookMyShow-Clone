import React from "react";
import Slider from "react-slick";

//Components
import Poster from "../Poster/poster.component";

// Configs
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremiereImages from "../../config/TempPosters.config";

const Premiere = () => {

    return (
        <>
            <div className="flex flex-col items-start ">
                <h3 className="text-white text-xl font-bold">Premieres</h3>
                <p className="text-white text-sm">Brand new releases every Friday</p>
            </div>
            <Slider {...PosterCarouselSettings} >
                {PremiereImages.map((image) => (
                    <Poster {...image} isDark />
                ))}
            </Slider>
        </>
    );
};

export default Premiere;