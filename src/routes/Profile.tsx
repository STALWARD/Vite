import React from 'react';

const profileData = {
  title: "Profile",
  subtitle: "I am a TANTRA and ASTROLOGY mentor.",
  knownAs: "KAULBHASKAR",
  discipleOf: "KULBHUSHANANAD NATH",
  guruAs: "- An Esteemed KAUL of Prayagraj",
  lineage: [
    { label: "Sri Guru", name: "Sri KULBHUSHANANAND NATH Ji" },
    { label: "Grand Guru (Param Guru)", name: "Sri BHARTRIHARYANAND NATH Ji" },
    { label: "Great Grand Guru (Paratpara)", name: "Sri MATSYENDRANAND NATH (Machendra Nath)" },
    { label: "Great-Great Grand Guru", name: "Lord ISHANA (Lord Shiva)" },
    { label: "Great-Great-Great Grand Guru", name: "Sri ADINATHANAND NATH (PARAMA SHIVA)" },
  ]
};

const Profile: React.FC = () => {
  return (
    // Changed bg-white to bg-stone-950 and text to stone-300
    <div className="bg-stone-950 min-h-screen font-serif text-stone-300 selection:bg-orange-500/30 pt-32">
      
      {/* Header Section */}
      <header className="bg-stone-900/50 border-b border-stone-800 py-20 px-6 text-center shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
          {profileData.title}
        </h1>
        <div className="h-1 w-24 bg-orange-600 mx-auto mb-6 shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
        <p className="text-xl md:text-2xl italic text-orange-400 font-medium max-w-2xl mx-auto">
          "{profileData.subtitle}"
        </p>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6">
        {/* Core Identity Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-stone-900 p-8 border-l-4 border-orange-600 shadow-xl">
            <h2 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-2">Known As</h2>
            <p className="text-2xl font-black text-white">{profileData.knownAs}</p>
          </div>
          <div className="bg-stone-900 p-8 border-l-4 border-stone-700 shadow-xl">
            <h2 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-2">Direct Disciple Of</h2>
            <p className="text-2xl font-black text-white">{profileData.discipleOf}</p>
            <p className="text-lg font-semibold text-orange-500">{profileData.guruAs}</p>
          </div>
        </div>

        {/* Biography Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-white border-b-2 border-stone-800 pb-4">
            Biography
          </h2>
          
          {/* Added prose-invert to ensure visibility in dark mode */}
          <div className="prose prose-stone prose-invert prose-xl md:prose-2xl max-w-none text-stone-300 leading-relaxed space-y-10">
            <p className="text-2xl">
              I, of <span className="font-semibold text-white">Kaushik Gotra</span>, was born into a respectable Bhumihar Brahmin Family of Bihar. 
              After completing my <span className="italic">B.Sc. and L.L.B.</span> degrees, I practiced law at the 
              <span className="font-semibold text-white"> Patna High Court</span> until 2020.
            </p>
            
            <p className="text-2xl">
              Transitioning from law to spirituality, I am now a full-time Tantra and Astrology practitioner. 
              For over <span className="text-orange-500 font-bold">30 years</span>, I have dedicated myself to 
              <span className="font-semibold text-white"> SRI VIDYA upasna</span> within the rare 
              <span className="text-orange-700 font-bold"> Dakshina Murti Sampradaya</span>.
            </p>

            <p className="text-2xl">
              As a staunch follower of <span className="uppercase tracking-wide text-white">Kaul Marg</span>, I carry the spiritual discipline of my lineage into my practice. In the realm of <span className="font-semibold text-white"> Astrology </span>, my expertise spans the <span className="font-semibold text-white"> Parasara, Jaimini, </span> and <span className="font-semibold text-white"> Krishnamurthi </span> systems.
            </p>
     
            {/* Darker variant of the highlight box */}
            <p className="bg-orange-950/20 p-8 rounded-xl border-l-8 border-orange-900 italic text-stone-200 text-xl md:text-2xl">
              My spiritual path is shared with my wife, a philanthropist and dedicated upasika of 
              Goddess Dashmayee Bala Tripura Sundari. Her support remains the cornerstone of my success in both worlds.
            </p>
          </div>
        </section>

        {/* Lineage Table - Optimized for overall dark theme */}
        <section className="bg-stone-900 border border-stone-800 text-stone-200 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-orange-500 text-center uppercase tracking-widest">
              Guru-Parampara
            </h2>
            <div className="space-y-0">
              {profileData.lineage.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row py-6 border-b border-stone-800/50 ${
                    index === profileData.lineage.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <div className="md:w-1/3 text-orange-400/80 text-base md:text-lg uppercase font-bold tracking-tighter mb-1 md:mb-0">
                    {item.label}
                  </div>
                  <div className="md:w-2/3 text-lg md:text-xl font-semibold text-white">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
