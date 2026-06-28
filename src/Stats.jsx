// ... inside your map function, change the card div className:

<div 
  key={index} 
  // FIX: Swapped 'bg-white' for 'bg-white/90' (a soft 90% opacity white)
  // Added 'backdrop-blur-sm' for a premium glass effect
  className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 overflow-hidden group"
>
  {/* Image layer: Increased opacity to 15% so they show up better behind the semi-transparent card */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-15 transition-opacity duration-500"
    style={{ backgroundImage: `url(${item.image})` }}
  ></div>
  
  {/* Content layer remains the same */}
  <div className="relative z-10">
    <div className="bg-[#28A78D] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
      <Icon className="text-white text-2xl" />
    </div>
    <h3 className="text-xl font-bold text-[#2D4B7A] mb-3">{item.title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
  </div>
</div>