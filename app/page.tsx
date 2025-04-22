import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyTryswitch from "./components/WhyTryswitch";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import VideoCard from "./components/VideoCard";
import Form from "./components/Form";
import {videoCardObject} from "../objects/videoCardObject";
import Signup from "./components/Signup";
import CarouselAutoPlay from "./components/CarouselAutoPlay";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <WhyTryswitch />
      <Features />
      <CarouselAutoPlay />
      <Solutions />
      {videoCardObject.map((card, index) => (
      <VideoCard key={index} heading={card.heading} para={card.para} src={card.src} rowReverse={card.rowReverse} playButton={card.playButton} video={card.video} />
      ))}
      <Form />
      <Signup />
    </div>
  );
}