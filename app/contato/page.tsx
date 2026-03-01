export default function Contato() {
  return (
    <main className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 className="drama-text" style={{ fontSize: "5rem", color: 'var(--primary)' }}>Fale conosco.</h2>
              <p style={{ marginTop: "30px", fontSize: "1.2rem" }}>
                Pronto para ver sua operação decolar com nossa IA?
              </p>
              
              <div style={{ marginTop: "60px" }}>
                <div style={{ marginBottom: "30px" }}>
                  <span style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", color: "var(--primary)", textTransform: "uppercase" }}>Suporte & Comercial</span>
                  <a href="https://wa.me/5532998214116" target="_blank" style={{ fontSize: "1.8rem", fontWeight: "800" }}>32 99821-4116</a>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", color: "var(--primary)", textTransform: "uppercase" }}>Região</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>Atendimento em todo o território nacional.</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ background: 'var(--bg-soft)', border: 'none' }}>
              <form action="#" method="POST">
                <div style={{ marginBottom: "25px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "bold", marginBottom: "8px", opacity: 0.7 }}>NOME DO RESTAURANTE</label>
                  <input type="text" required style={{ width: "100%", padding: "1.2rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white" }} />
                </div>
                <div style={{ marginBottom: "25px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "bold", marginBottom: "8px", opacity: 0.7 }}>WHATSAPP</label>
                  <input type="tel" required style={{ width: "100%", padding: "1.2rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white" }} />
                </div>
                <div style={{ marginBottom: "35px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "bold", marginBottom: "8px", opacity: 0.7 }}>TIPO DE COZINHA</label>
                  <input type="text" required style={{ width: "100%", padding: "1.2rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white" }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Solicitar Demonstração</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
