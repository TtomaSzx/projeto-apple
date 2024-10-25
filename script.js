// Animação de Fade-in no Carregamento da Página
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 1s ease-in-out";
      document.body.style.opacity = "1";
    }, 100);
  });
  
  // Efeito Hover nas Imagens dos Produtos
  const products = document.querySelectorAll(".product img");
  
  products.forEach((product) => {
    product.addEventListener("mouseover", () => {
      product.style.transform = "scale(1.1)";
    });
    product.addEventListener("mouseout", () => {
      product.style.transform = "scale(1)";
    });
  });
  