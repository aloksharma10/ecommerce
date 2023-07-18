import Image from "next/image";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  const images = [
    "https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F1.webp&w=1920&q=75",
    "https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F1.webp&w=1920&q=75",
    "https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F3.webp&w=1920&q=75",
    "https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F3.webp&w=1920&q=75",
    // Add more image URLs as needed
  ];
  const Mimages = [
    "https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fsquarebanner%2F1.webp&w=1080&q=75"
  ]
  return (
    <>
      <Carousel images={images} Mimages={Mimages}  />
    </>
  );
}
