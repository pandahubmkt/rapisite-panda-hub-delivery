import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panda Hub Delivery | Inteligência em Atendimento",
  description: "A tecnologia definitiva para restaurantes. Cardápio digital integrado com IA de atendimento via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <nav className="navbar">
          <div className="logo" style={{fontWeight: 800, fontSize: '1.2rem'}}>PANDA HUB</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
          <a href="https://wa.me/5511999999999" target="_blank" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.75rem' }}>
            Assinar Agora
          </a>
        </nav>
        {children}
        <a href="https://wa.me/5511999999999?text=Olá, vim pelo site e quero saber mais sobre o Panda Hub Delivery!" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}
