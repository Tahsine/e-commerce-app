export default function SpecialMenu() {
  const menuCategories = [
    {
      title: "Gâteaux Signature",
      items: [
        {
          name: "Gâteau au Chocolat Noir",
          description:
            "Chocolat belge 70%, ganache onctueuse, décoration artisanale",
          price: "15,000 FCFA",
        },
        {
          name: "Forêt Noire Classique",
          description: "Génoise chocolat, cerises noires, chantilly maison",
          price: "18,000 FCFA",
        },
        {
          name: "Red Velvet Américain",
          description:
            "Gâteau rouge velours, cream cheese frosting, noix de pécan",
          price: "20,000 FCFA",
        },
      ],
    },
    {
      title: "Tartes & Entremets",
      items: [
        {
          name: "Tarte au Citron Meringuée",
          description: "Pâte sablée, crème citron, meringue italienne flambée",
          price: "12,000 FCFA",
        },
        {
          name: "Tarte aux Fruits de Saison",
          description: "Crème pâtissière vanille, fruits frais du marché",
          price: "14,000 FCFA",
        },
        {
          name: "Tiramisu Traditionnel",
          description: "Biscuits imbibés café, mascarpone, cacao pur",
          price: "10,000 FCFA",
        },
      ],
    },
    {
      title: "Viennoiseries",
      items: [
        {
          name: "Croissants Pur Beurre",
          description: "Pâte feuilletée maison, beurre de Normandie (lot de 6)",
          price: "5,000 FCFA",
        },
        {
          name: "Pain au Chocolat",
          description: "Chocolat noir 65%, feuilletage croustillant (lot de 6)",
          price: "6,000 FCFA",
        },
      ],
    },
  ];

  return (
    <section className="bg-neutral-900 text-white py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="text-amber-500 text-sm font-bold tracking-widest mb-4">
          DÉCOUVREZ PLUS
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
          NOTRE CARTE
        </h2>
        <p className="text-neutral-400 text-sm tracking-wide">
          CLIQUEZ SUR CHAQUE CATÉGORIE POUR DÉCOUVRIR NOS CRÉATIONS
        </p>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {menuCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            {/* Catégorie Title */}
            <h3 className="text-2xl font-black tracking-wider border-b border-amber-500 pb-3">
              › {category.title}
            </h3>

            {/* Items List */}
            <div className="space-y-6">
              {category.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group cursor-pointer transition-all hover:translate-x-2"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-amber-500 group-hover:text-amber-400">
                      {item.name}
                    </h4>
                    <span className="text-neutral-400 font-bold text-sm whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button className="bg-amber-500 text-neutral-900 px-10 py-4 font-black tracking-widest text-sm hover:bg-amber-400 transition-colors">
          COMMANDER MAINTENANT
        </button>
      </div>
    </section>
  );
}
