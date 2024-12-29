import React from "react";
import FirstHighlight from "../../Components/Sections/FirstHighlight";
import SecondHighlight from "../../Components/Sections/SecondHighlight";
import ThirdHighlight from "../../Components/Sections/ThirdHighlight";
import FourthHighlight from "../../Components/Sections/FourthHighlight";
import FifthHighlight from "../../Components/Sections/FifthHighlight";
import SixthHighlight from "../../Components/Sections/SixthHighlight";
import YoutubeVideos from "../../Components/YoutubeVideos/YoutubeVideos";

function Home() {
  return (
    <>
      <FirstHighlight />
      <SecondHighlight />
      <ThirdHighlight />
      <FourthHighlight />
      <FifthHighlight />
      <SixthHighlight />
      <YoutubeVideos />
    </>
  );
}

export default Home;
