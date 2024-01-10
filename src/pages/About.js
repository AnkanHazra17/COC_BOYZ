import React, { useState } from "react";
import { TeamMembers } from "../data/TeamMembers";
import MemberCard from "../components/MemberCard";

const tabName = ["Head", "Member"];

const About = () => {
  const [currentTab, setCurrentTab] = useState(tabName[0]);
  const [members, setMembers] = useState(TeamMembers[0].data);
  const [currentCard, setCurrentCard] = useState(TeamMembers[0].data[0].name);

  const setMemberCard = (value) => {
    setCurrentTab(value);
    const result = TeamMembers.filter((member) => member.tag === value);
    setMembers(result[0].data);
    setCurrentCard(result[0].data[0].name);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className=" w-11/12 max-w-maxContent mx-auto">
        <div className="flex flex-col items-center">
          <h1 className=" text-4xl font-semibold text-pink-300">Our Team</h1>
          <div className=" h-1 w-20 mt-4 bg-caribbeangreen-50"></div>
          <p className=" text-lg text-richblack-200 mt-2">
            Meet Our Members Here
          </p>
        </div>

        <div className="flex my-10 px-2 py-1 rounded-full bg-richblack-800 justify-between w-[220px]">
          {tabName.map((ele, i) => (
            <div
              className={`${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5"
                  : "text-richblack-200"
              } text-[16px] py-2 px-5 rounded-full cursor-pointer hover:bg-richblack-900 transition-all duration-200`}
              onClick={() => setMemberCard(ele)}
            >
              {ele}
            </div>
          ))}
        </div>

        <div className="flex w-full items-center flex-wrap gap-5 overflow-x-hidden">
          {members.map((element, index) => {
            return (
              <MemberCard
                key={index}
                cardData={element}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              ></MemberCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
