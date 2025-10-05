
  document.addEventListener("DOMContentLoaded", () => {
    const waFloat = document.getElementById("whatsapp-float");
    if (waFloat) {
      waFloat.addEventListener("click", () => {
        console.log("WhatsApp floating button clicked!");
      });
    }
  });
