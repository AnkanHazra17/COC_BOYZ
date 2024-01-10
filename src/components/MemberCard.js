import React from "react";

const MemberCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`flex flex-col w-full lg:w-[32%] cursor-pointer h-[300px] ${
        currentCard === cardData.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }`}
      onClick={() => setCurrentCard(cardData?.name)}
    >
      <div className="py-7 px-6 flex flex-col gap-3 items-center">
        <div>
          <div className=" h-[150px] w-[150px] rounded-full">
            <img
              src={cardData?.image}
              alt=""
              className=" object-contain object-center"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
