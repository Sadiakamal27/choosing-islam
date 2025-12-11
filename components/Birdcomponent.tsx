export default function Birdcomponent() {
  return (
    <div
      className="fixed right-8 top-1/3 z-30 pointer-events-none hidden lg:block"
      style={{
        width: "250px",          
        height: "250px",         
        backgroundImage: "url(/b.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full  rounded-full flex items-center justify-center">
      </div>
    </div>
  );
}
