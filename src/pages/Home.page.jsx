import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premiere from "../components/Premiere/premiere.component";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>

                
                <div className="bg-bms-800 py-12">
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        <div className="hidden md:flex ">
                            <img 
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                                alt="Premiere" 
                                className="w-full h-full"
                            />
                        </div>
                        <Premiere />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;