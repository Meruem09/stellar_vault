import { BackgroundLines } from "../components/ui/background-lines";


export default function Home() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-32 max-w-5xl mt-8">
      <div className="text-justify">
        <BackgroundLines>
          <div className="relative z-10 text-center justify-center items-center mt-[45%]">
            <h1 className="text-4xl font-bold">Hello World</h1>
            <p className="text-lg">This is inside BackgroundLines</p>
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
}
