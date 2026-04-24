
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const skillTags = [
     "Fullstack Development",
     "AI Systems",
     "Data Science",
     "Machine Learning",
     "Python",
     "Deployment",
     "TensorFlow",
     "Production AI",
   ];
  return (
    //     <section className='relative bg-black text-white min-h-[700px] flex items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat !pt-10   overflow-hidden'>

    <section className='  bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover relative min-h-screen w-full flex flex-col items-center justify-center bg-& !px-6 !pt-12 overflow-hidden'>
      
      {/* Header Text */}
      <div className="text-center !mb-8 z-10">
         
        <div className="absolute inset-0 flex flex-col items-center justify-start z-10 !pt-13 md:!pt-17 text-center pointer-events-none !px-4">
         <h2 className="font-bartle text-white text-5xl md:text-9xl font-black uppercase leading-none max-w-7xl mx-auto">
          Karima BEN IHDA
        </h2>
       </div>
        {/* <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
          I'm <span className="text-orange-600">Jenny,</span>
          <br />
          Product Designer
        </h1> */}
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        
        {/* Testimonial (Left) */}
        <div className="hidden lg:block absolute left-0 top-2/4 max-w-[200px] z-20 ">
          <span className="text-4xl text-gray-300 font-serif">“</span>
          <p className="text-white text-sm leading-relaxed italic">
            Jenny's exceptional product design ensured our website's success. Highly recommended!
          </p>
          <div className="mt-6">
            <p className="text-2xl font-bold text-gray-900">450+</p>
            <p className="text-gray-500 text-sm">Client Served</p>
          </div>
        </div>

        {/* Hero Image & Circle Background */}
        <div className="relative flex justify-center items-end">
          {/* Large Orange Semi-Circle */}
          <div className="absolute -bottom-15 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#d8cae9] rounded-full translate-y-12"></div>
          
          {/* User Image */}
          <div className="relative -bottom-19 z-10">
            <Image
              src="/assets/hero_karima.png"
                            unoptimized={true} 

              alt="Jenny - Product Designer"
              width={500}
              height={600}
              className="object-contain"
              priority
            />

             
          </div>

          {/* CTA Buttons - Overlapping the image/circle */}
          <div className="absolute bottom-10 z-20 flex gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
            <Link 
              href="#portfolio" 
              className="bg-[ #d8cae9] text-[ #23222a] !px-8 !py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-[#d8cae9bd] transition-colors"
            >
              Portfolio ↗
            </Link>
            <Link 
              href="#contact" 
              className="bg-white text-gray-900 !px-8 !py-2.5 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Experience Stats (Right) */}
        {/* <div className="hidden lg:block absolute right-0 top-2/3 z-20 text-right">
          <div className="flex justify-end gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-orange-500">★</span>
            ))}
          </div>
          <p className="text-4xl font-bold text-gray-900">10 Years</p>
          <div className="h-[2px] w-full bg-gray-900 my-2"></div>
          <p className="text-gray-500 text-lg">Experts</p>
        </div> */}
        
        <div className="hidden lg:block absolute -right-10 top-2/3 z-20 ">  {/*// max-w-sm */}
                     <div className="grid grid-cols-1 md:grid-cols-2 flex justify-right gap-2 mb-2">

             {skillTags.map((tag, index) => {
               const isAccent = index % 3 === 0;  
              
                return (
                 <span 
                 key={tag}
                 className={`!px-6 !py-2.5 rounded-full text-sm font-medium transition cursor-default  
                   ${isAccent 
                     ? 'bg-[#d8cae9] text-black shadow-lg hover:shadow-[#A6FF5D]/30' 
                     : 'bg-white/5 border border-white/10 text-gray-200 hover:border-white/20'
                   }`}
                   >
                   {tag}
                 </span>
               );
             })}
           </div>
           </div>

      </div>
    </section>
  );
}

















// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[600px] w-full bg-[#020617] flex items-center justify-center px-10 py-20">
      
//       {/* Main Container */}
//       <div className="flex flex-col items-center w-full max-w-7xl">
        
//         {/* Top Row: Image + Text */}
//         <div className="flex items-center gap-8 w-full justify-center">
          
//           {/* pill-shaped image container */}
//           <div className="relative w-400 h-64 overflow-hidden rounded-r-full bg-[#7f0019]">
//             <Image
//               src="/assets/hero_karima.png" // Using your requested file name
//               alt="Portrait"
//               fill
//               className="object-cover object-top contrast-125 grayscale-[0.2]"
//             />
//           </div>

//           {/* Large Condensed Text */}
//           <div className="flex items-baseline gap-4">
//             <h1 className="text-[120px] md:text-[160px] font-black uppercase tracking-tighter text-gray-300 leading-none">
//               Portfolio
//             </h1>
//             <span className="text-4xl md:text-6xl font-light text-gray-500 italic font-serif">
//               2025
//             </span>
//           </div>
//         </div>

//         {/* Bottom Label */}
//         <div className="mt-12 flex items-center gap-3">
//           <div className="w-4 h-4 bg-white rotate-45" /> {/* Small diamond/square icon */}
//           <p className="uppercase tracking-[0.3em] text-sm font-medium text-gray-400">
//             Content Creator
//           </p>
//         </div>

//       </div>

//       {/* Background Subtle Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/10 to-transparent pointer-events-none" />
//     </section>
//   );
// }









//  "use client";
// import Image from "next/image";

// export default function Hero() {
//   // --- Define Your Role Tags Here ---
//   const skillTags = [
//     "Fullstack Development",
//     "AI Systems",
//     "Data Science",
//     "Machine Learning",
//     "Python",
//     "Deployment",
//     "TensorFlow",
//     "Production AI",
//   ];

//   return (
//     <header className='relative bg-black text-white min-h-[700px] flex items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat !pt-10   overflow-hidden'>
//       <div className="w-full max-w-7xl mx-auto !px-10">

//       {/* --- The Heading (Positioned behind the portrait, as requested) --- */}
//       <div className="absolute inset-0 flex flex-col items-center justify-start z-10 !pt-13 md:!pt-17 text-center pointer-events-none !px-4">
//         <h2 className="font-bartle text-white text-5xl md:text-9xl font-black uppercase leading-none max-w-7xl mx-auto">
//           Karima BEN IHDA
//         </h2>
//       </div>

//       {/* --- THREE COLUMN LAYOUT CONTAINER (z-index higher than heading) --- */}
//       <div className="relative w-full max-w-7xl mx-auto z-20 !px-6 !mt-48 md:mt-0 grid md:grid-cols-12 gap-10 md:gap-4 items-center">
        
//         {/* === LEFT COLUMN (Text & Buttons) === */}
//         <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-10 md:gap-14 bg-black/40 backdrop-blur-sm rounded-3xl">
          
//           {/* Quote Section */}
//           <div className="relative">
//             {/* Custom Quote Icon using CSS/SVG */}
//             <div className="text-[120px] font-serif text-[#d8cae9] leading-none absolute -top-16 -left-8">“</div>
//             <p className="font-light text-gray-200 text-lg md:text-xl leading-relaxed">
//               As a Fullstack AI Developer and Data Scientist, I bridge the gap between robust software engineering and complex data intelligence, building scalable AI systems from data pipeline to production.
//             </p>
//           </div>

//           {/* TWO BUTTONS (Bottom of Left Column) */}
//           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//             <button className="bg-[#d8cae9] text-[#191919] !px-10 !py-2 rounded-full font-semibold flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition">
//               Hire Me
//               <span className="bg-[#ffff] p-1.5 rounded-full text-black">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d8cae9" strokeWidth="3">
//                   <path d="M5 12h14M12 5l7 7-7 7"/>
//                 </svg>
//               </span>
//             </button>
//             <button className="bg-white/10 border border-white/20 text-white !px-10 !py-2 rounded-full font-semibold hover:bg-white/20 transition">
//               Contact Me
//             </button>
//           </div>
//         </div>

//         {/* === CENTER COLUMN (Portrait Image) === */}
//         <div className="md:col-span-4 flex justify-center items-end h-full relative">
          
//           {/* Glowing Back Shape */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%]   rounded-full blur-[80px] opacity-40" />

//           <div className="relative">
//             <Image
//               src="/assets/hero_karima.png"
//               unoptimized={true} 
//               alt="Karima"
//               width={900}
//               height={900}
//               className="object-contain"
//               priority
//               />
//           </div>
//         </div>

//         {/* === RIGHT COLUMN (Skill Tags) === */}
//         <div className="md:col-span-4 flex justify-center md:justify-end">
//           <div className="flex flex-row md:flex-col flex-wrap justify-center gap-3 max-w-sm">
//             {skillTags.map((tag, index) => {
//               // Alternating color logic (orange and black) like the reference
//               const isAccent = index % 3 === 0; // Every third tag is accent color
              
//               return (
//                 <span 
//                 key={tag}
//                 className={`!px-6 !py-2.5 rounded-full text-sm font-medium transition cursor-default grid grid-col-4
//                   ${isAccent 
//                     ? 'bg-[#d8cae9] text-black shadow-lg hover:shadow-[#A6FF5D]/30' 
//                     : 'bg-white/5 border border-white/10 text-gray-200 hover:border-white/20'
//                   }`}
//                   >
//                   {tag}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//             </div>
//     </header>
//   );
// }









// "use client";
// import Image from "next/image";

// export default function Hero() {
//   return (
// <header className='relative bg-black text-white min-h-[800px] flex flex-col items-center justify-end bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat overflow-hidden'>      
//       <div className="relative z-10 text-center">
//         <span className="text-gray-400 block mb-4">• Hello</span>
//        <h2 className="font-bartle text-white text-3xl md:!text-8xl font-black uppercase text-center !pt-9 md:!pt-15">
// Karima BEN IHDA</h2>
//       </div>
//       <div className="relative w-full max-w-5xl flex justify-center items-end h-[400px]">
//          <div/>

//          <div className="relative z-20 w-full max-w-[700px]">

//               <Image
//   src="/assets/hero_karima.png"
//   unoptimized={true} 
//   alt="Karima"
//   width={1000}
//   height={1000}
// />
//         </div>
 
       
//       </div>

//     </header>
//   );
// }