"use client";
import { useEffect, useRef, useState } from "react";
import { X, Minus, Plus, Trash2, ArrowRight, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import gsap from "gsap";
import { SITE_NAME, WHATSAPP_NUMBER } from "@/lib/data";

export default function CartModal() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem } = useCart();
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [isLocating, setIsLocating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "mtn_money", // mtn_money, moov_money, cash
  });

  // Reset step when cart opens/closes
  useEffect(() => {
    if (!isCartOpen) {
      setStep("cart");
    }
  }, [isCartOpen]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        visibility: "visible",
      });
      gsap.fromTo(
        contentRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "unset";
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (modalRef.current) modalRef.current.style.visibility = "hidden";
        },
      });
      gsap.to(contentRef.current, { x: "100%", duration: 0.3 });
    }
  }, [isCartOpen]);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleLocate = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLocating(false);
          // Petit feedback visuel
          if (!formData.address) {
            setFormData((prev) => ({
              ...prev,
              address: "Position GPS partagée",
            }));
          }
        },
        (error) => {
          console.error(error);
          alert(
            "Impossible de vous localiser. Veuillez activer le GPS ou saisir l'adresse."
          );
          setIsLocating(false);
        }
      );
    } else {
      alert("Votre navigateur ne supporte pas la géolocalisation.");
      setIsLocating(false);
    }
  };

  const handleCheckout = () => {
    // Basic validation
    if (!formData.name || !formData.phone) {
      alert("Veuillez remplir votre Nom et Téléphone.");
      return;
    }

    // On exige soit l'adresse texte, soit la localisation GPS
    if (!formData.address && !location) {
      alert("Veuillez saisir une adresse ou partager votre localisation.");
      return;
    }

    // Format items list
    const itemsList = items
      .map(
        (item) =>
          `- ${item.name} (x${item.quantity}) : ${(
            item.price * item.quantity
          ).toLocaleString()} FCFA`
      )
      .join("\n");

    const paymentMethods: Record<string, string> = {
      mtn_money: "MTN Money",
      moov_money: "Moov Money",
      cash: "Espèces à la livraison",
    };
    const paymentLabel = paymentMethods[formData.paymentMethod];

    // Build Address String with Google Maps Link if available
    let addressString = formData.address;
    if (location) {
      const mapsLink = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
      addressString += `\n📍 Position: ${mapsLink}`;
    }

    // WhatsApp Message
    const message = `*NOUVELLE COMMANDE - ${formData.name}*
    
*Client:* ${formData.name}
*Tél:* ${formData.phone}
*Adresse:* ${addressString}
*Paiement:* ${paymentLabel}

*COMMANDE:*
${itemsList}

*TOTAL: ${subtotal.toLocaleString()} FCFA*`;

    // Encode and redirect
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // Clear cart (optional, maybe wait for confirmation?)
    // For MVP, we open new tab and clear cart
    window.open(url, "_blank");
    // closeCart(); // Optional: close cart after redirect
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[200] bg-black/50 invisible opacity-0"
      onClick={closeCart}
    >
      <div
        ref={contentRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-[#F5F1E8] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {step === "checkout" && (
              <button
                onClick={() => setStep("cart")}
                className="p-1 hover:bg-black/5 rounded-full"
              >
                <ArrowRight className="rotate-180" size={20} />
              </button>
            )}
            <h2 className="font-anton text-3xl">
              {step === "cart" ? "VOTRE PANIER" : "LIVRAISON"}
            </h2>
          </div>
          <button onClick={closeCart} className="p-2 hover:bg-black/5 rounded-full">
            <X size={24} />
          </button>
        </div>

        {step === "cart" ? (
          /* VUE PANIER */
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <span className="text-6xl mb-4">🛒</span>
                  <p className="font-anton text-2xl">VOTRE PANIER EST VIDE</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-anton text-lg leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.price.toLocaleString()} FCFA
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600 font-medium">Sous-total</span>
                  <span className="font-anton text-2xl">
                    {subtotal.toLocaleString()} FCFA
                  </span>
                </div>
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full py-4 bg-red-500 text-white font-anton text-xl tracking-widest hover:bg-red-600 transition-colors"
                >
                  COMMANDER
                </button>
              </div>
            )}
          </>
        ) : (
          /* VUE CHECKOUT (FORMULAIRE) */
          <div className="flex-1 flex flex-col p-6 overflow-y-auto">
            <div className="space-y-6 flex-1">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Vos Coordonnées</h3>
                <input
                  type="text"
                  placeholder="Nom complet"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 bg-white rounded-lg border border-gray-200 outline-none focus:border-black transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-4 bg-white rounded-lg border border-gray-200 outline-none focus:border-black transition-colors"
                />
                <div className="flex flex-col gap-2">
                  <textarea
                    placeholder="Adresse de livraison (Quartier...)"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full p-4 bg-white rounded-lg border border-gray-200 outline-none focus:border-black transition-colors min-h-[80px]"
                  />
                  <button
                    onClick={handleLocate}
                    className={`flex items-center justify-center gap-2 py-3 rounded-lg border-2 transition-all ${
                      location
                        ? "bg-green-100 border-green-500 text-green-700"
                        : "bg-white border-gray-200 text-gray-700 hover:border-black"
                    }`}
                  >
                    <MapPin size={20} />
                    {isLocating
                      ? "Localisation..."
                      : location
                      ? "Position partagée !"
                      : "Ma Position GPS"}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">Moyen de Paiement</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: "mtn_money", label: "MTN Money", color: "bg-yellow-400" },
                    { id: "moov_money", label: "Moov Money", color: "bg-blue-600 text-white" },
                    { id: "cash", label: "Espèces à la livraison", color: "bg-green-600 text-white" },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() =>
                        setFormData({ ...formData, paymentMethod: method.id })
                      }
                      className={`p-4 rounded-lg border-2 text-left font-medium transition-all ${
                        formData.paymentMethod === method.id
                          ? "border-black bg-gray-50"
                          : "border-transparent bg-white"
                      }`}
                    >
                       <div className="flex items-center justify-between">
                          <span>{method.label}</span>
                          {formData.paymentMethod === method.id && <div className="w-3 h-3 bg-black rounded-full" />}
                       </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600 font-medium">Total à payer</span>
                  <span className="font-anton text-2xl">
                    {subtotal.toLocaleString()} FCFA
                  </span>
                </div>
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-green-600 text-white font-anton text-xl tracking-widest hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                VALIDER SUR WHATSAPP <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
