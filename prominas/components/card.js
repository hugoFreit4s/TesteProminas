import React from "react";

const card = ({ content, image }) => {
    return (
        // <div className="mt-[100px]" style={{ width: "384px", height: "273px", border: "2px solid white", borderRadius: "8px", gridRow: "3" }}></div>

        <div className="mx-auto flex min-h-screen max-w-screen-sm mt-[100px]" style={{ gridRow: "3" }}>
            <div className="h-[275px] w-[384px] rounded-md bg-gradient-to-r from-[#7500FF] to-[#7500FF00] p-1">
                <div className=" h-full w-full bg-black p-[30px]">
                    <div className="h-[82px] w-[82px] bg-[#7500FF] flex justify-center items-center">
                        <img className="h-[64px] w-[64px]" src={image} alt="Imagem" />
                    </div>
                    <p style={{ color: "white", fontFamily: "Poppins, sans-serif", fontWeight: "700", fontSize: "30px", marginTop: "20px" }}>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default card;