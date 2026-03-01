export default function Contato() {
  return (
    <main className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 className="drama-text" style={{ fontSize: "5rem", color: 'var(--accent)' }}>Conecte-se.</h2>
              <p style={{ marginTop: "30px", fontSize: "1.2rem", opacity: 0.8 }}>
                Pronto para ver sua operação decolar com nossa inteligência artificial?
              </p>
              
              <div style={{ marginTop: "60px" }}>
                <div style={{ marginBottom: "30px" }}>
                  <span className="mono-text">WhatsApp Central</span>
                  <a href="https://wa.me/5511999999999" target="_blank" style={{ fontSize: "1.8rem", fontWeight: "800", display: "block", color: "white" }}>11 99999-9999</a>
                </div>
                <div>
                  <span className="mono-text">Comercial</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: "600", display: "block", color: "white" }}>Atendimento em todo o território nacional.</span>
                </div>
              </div>
            </div>
            
            <div className="card" style={{ background: 'rgba(255,255,255,0.02)', border: 'none' }}>
              <form action="#" method="POST">
                <div style={{ marginBottom: "25px" }}>
                  <label className="mono-text" style={{ display: "block", marginBottom: "8px" }}>RESTAURANTE</label>
                  <input type="text" required style={{ width: "100%", padding: "1.2rem", background: "#000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", color: "white", fontFamily: "inherit" }} />
                </div>
                <div style={{ marginBottom: "25px" }}>
                  <label className="mono-text" style={{ display: "block", marginBottom: "8px" }}>WHATSAPP</label>
                  <input type="tel" required style={{ width: "100%", padding: "1.2rem", background: "#000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", color: "white", fontFamily: "inherit" }} />
                </div>
                <div style={{ marginBottom: "35px" }}>
                  <label className="mono-text" style={{ display: "block", marginBottom: "8px" }}>QUAL SEU VOLUME ATUAL?</label>
                  <select style={{ width: "100%", padding: "1.2rem", background: "#000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", color: "white", fontFamily: "inherit" }}>
                    <option value="1">Até 100 pedidos/mês</option>
                    <option value="2">Até 500 pedidos/mês</option>
                    <option value="3">Pedidos ilimitados</option>
                  </select>
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
