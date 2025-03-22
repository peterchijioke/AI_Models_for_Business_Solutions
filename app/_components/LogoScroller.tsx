const companies = [
  { name: "Layers", logo: "/Logomark.svg" },
  { name: "Sisyphus", logo: "/comlogo.svg" },
  { name: "Circooles", logo: "/comlogo2.svg" },
  { name: "Catalog", logo: "/Logomark.svg" },
  { name: "Quotie", logo: "/comlogo3.svg" },
  { name: "Layers", logo: "/Logomark.svg" },
  { name: "Sisyphus", logo: "/comlogo.svg" },
  { name: "Circooles", logo: "/comlogo2.svg" },
  { name: "Catalog", logo: "/Logomark.svg" },
  { name: "Quotie", logo: "/comlogo3.svg" },
  { name: "Sisyphus", logo: "/comlogo.svg" },
  { name: "Circooles", logo: "/comlogo2.svg" },
  { name: "Catalog", logo: "/Logomark.svg" },
  { name: "Quotie", logo: "/comlogo3.svg" },
  { name: "Layers", logo: "/Logomark.svg" },
  { name: "Sisyphus", logo: "/comlogo.svg" },
  { name: "Circooles", logo: "/comlogo2.svg" },
  { name: "Catalog", logo: "/Logomark.svg" },
];
export default function LogoScroller() {
  return (
    <div className="w-full bg-white py-6">
      <p className="text-center text-gray-500 mb-4">
        Join 4,000+ companies already growing
      </p>
      <div className="w-screen overflow-auto py-5">
        <div className="flex space-x-8 px-6 whitespace-nowrap w-f">
          {companies.map((company, index) => (
            <div
              key={index}
              className="inline-flex items-center space-x-3 min-w-[150px]"
            >
              <img src={company.logo} alt={company.name} className="h-8 w-8" />
              <span className="font-medium text-black">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
