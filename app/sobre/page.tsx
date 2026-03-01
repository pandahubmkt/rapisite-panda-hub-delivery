export default function Sobre() {
  return (
    <main className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "6rem" }}>
            <span className="mono-text" style={{ color: "var(--accent)" }}>02 / QUEM SOMOS</span>
            <h2 className="drama-text" style={{ fontSize: "5rem", marginTop: "1rem" }}>A Panda Hub.</h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
                Somos uma empresa de tecnologia que realmente sentiu a dor dos restaurantes. Como também temos negócios na área alimentícia, vimos como é prejudicial depender exclusivamente de marketplaces tradicionais.
              </p>
              <p style={{ marginBottom: "2rem", opacity: 0.7 }}>
                Nossa missão é trazer tecnologia inovadora para o meio desse ramo, empoderando o dono de restaurante com ferramentas que antes eram acessíveis apenas às grandes redes.
              </p>
              <div className="card" style={{ background: "rgba(255,255,255,0.02)", border: "none" }}>
                <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Nossa Essência</h3>
                <p>Inovação, Agilidade e Resultados Reais. Não construímos apenas software, criamos instrumentos de lucro.</p>
              </div>
            </div>
            <div className="card" style={{ height: "600px", padding: "0", overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1511495366194-31561af5b3d7?auto=format\u0026fit=crop\u0026q=80\u0026w=1000" alt="Sobre nós" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
