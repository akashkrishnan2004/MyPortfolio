import AppRoute from "./AppRoute";

function App() {
  return (
    <div className="bg-gray-900">
      <AppRoute />
    </div>
  );
}

export default App;

// import Galaxy from "./Ui/galaxy";

// function App() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-black">

//       {/* Galaxy Background */}
//       <div className="absolute inset-0 z-0">
//         <Galaxy
//           focal={[0.5, 0.5]}
//           rotation={[1, 0]}
//           starSpeed={0.5}
//           density={1}
//           hueShift={140}
//           speed={1}
//           glowIntensity={0.3}
//           saturation={0}
//           mouseInteraction={true}
//           mouseRepulsion={true}
//           repulsionStrength={2}
//           twinkleIntensity={0.3}
//           rotationSpeed={0.1}
//           transparent={true}
//         />
//       </div>

//       {/* Your actual content */}
//       <div className="relative z-10">
//         <section className="flex min-h-screen items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-6xl font-bold">
//               Akash Krishnan
//             </h1>

//             <p className="mt-4 text-xl text-zinc-400">
//               Full Stack Developer
//             </p>
//           </div>
//         </section>
//       </div>

//     </main>
//   );
// }

// export default App;
