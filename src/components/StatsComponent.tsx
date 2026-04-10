
const StatsComponent = () => {
  const stats = [
    { label: 'Trusted Followers', value: '1000 +' },
    { label: 'Success Rate', value: '90 %' },
    { label: 'Projects', value: '100 +' },
    { label: 'Speeches/Posts', value: '400 +' },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid container for stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Value with bold styling */}
              <span className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {stat.value}
              </span>
              {/* Label as seen on kaulbhaskar.com */}
              <span className="text-gray-600 font-medium uppercase tracking-wide text-sm md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
