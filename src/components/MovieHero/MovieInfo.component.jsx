import React from "react";

const MovieInfo = () => {
    return (
        <>
            <div>
                <div className="flex items-center gap-3">
                    <div className="w-40 h-8">
                        <img 
                            src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premiere"
                            className="w-full h-full"
                        />
                    </div>
                    <span className="bg-bms-700 p-2 text-white rounded-md">
                        Streaming now
                    </span>
                </div>
                <h1></h1>
                <div></div>
                <div></div>
            </div> 
        </>
    );
};

export default MovieInfo;
