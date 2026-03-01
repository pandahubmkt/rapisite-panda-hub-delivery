export default function Home() {
  const whatsappLink = "https://wa.me/5532998214116?text=Olá Filipe, quero saber mais sobre o Panda Hub Delivery!";

  return (
    <main>
      <header className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1658282687028-09f5b0b5b3ad?auto=format&fit=crop&q=80&w=2000')" }}>
        <div className="container">
          <div className="hero-content">
            <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>O futuro do delivery</span>
            <h1 style={{ marginTop: '1rem' }}>
              Atendimento é a sua <br />
              <span className="drama-text" style={{ fontSize: '6rem', color: 'var(--primary)', lineHeight: 0.9 }}>Vantagem.</span>
            </h1>
            <p style={{ margin: '2.5rem 0', maxWidth: '600px', fontSize: '1.2rem', opacity: 0.9 }}>
              Liberte seu restaurante da dependência do iFood. Atendimento 100% automatizado por IA no WhatsApp que vende e finaliza pedidos para você.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href={whatsappLink} target="_blank" className="btn btn-primary">
                Assinar Plataforma
              </a>
              <a href="#servicos" className="btn btn-outline">
                Conhecer IA
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="servicos" className="section">
        <div className="container">
          <div style={{ marginBottom: '5rem' }}>
            <span className="mono-text" style={{ color: 'var(--primary)' }}>01 / SOLUÇÕES</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Sua operação no <span style={{ color: 'var(--primary)' }}>Automático.</span></h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--primary)' }}>Cardápio Digital</h3>
              <p style={{ marginTop: '1rem' }}>Interface premium ultra-rápida. Seus pratos brilham e a compra acontece em segundos.</p>
            </div>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--primary)' }}>IA no WhatsApp</h3>
              <p style={{ marginTop: '1rem' }}>Um atendente virtual que nunca dorme, tira dúvidas e fecha pedidos sem intervenção humana.</p>
            </div>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--primary)' }}>ERP & Gestão</h3>
              <p style={{ marginTop: '1rem' }}>Controle total de faturamento, estoque e CRM para fidelizar seus clientes e aumentar o LTV.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ opacity: 0.5, marginBottom: '2rem' }}>A maioria do setor foca em: apenas listar produtos.</p>
          <h2 className="drama-text" style={{ fontSize: '5rem' }}>
            Nós focamos em: <span style={{ color: 'var(--primary)' }}>Lucro e Liberdade.</span>
          </h2>
          <p style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0', fontSize: '1.1rem' }}>
            Nossa tecnologia foi criada por quem vive a dor do restaurante. Chega de pagar comissões abusivas e perder tempo com atendimento manual.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              { t: "IA Avançada", d: "Atendimento fluido que entende gírias e variações de pedidos." },
              { t: "Suporte Real", d: "Time de especialistas prontos para otimizar sua operação." },
              { t: "Fácil de Usar", d: "Configure seu cardápio em minutos e comece a vender no mesmo dia." }
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '30px' }}>
                <h3>{item.t}</h3>
                <p style={{ fontSize: '0.95rem' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '80px 40px', background: '#000' }}>
            <h2 className="drama-text" style={{ fontSize: '4rem' }}>Escale seu Delivery.</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Junte-se à revolução da inteligência artificial e recupere o controle da sua marca.</p>
            <a href={whatsappLink} target="_blank" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '20px 80px' }}>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '80px 0 20px', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>PANDA HUB</div>
              <p style={{ opacity: 0.5, maxWidth: '300px', marginTop: '1rem' }}>O elo definitivo entre tecnologia de IA e resultados exponenciais para restaurantes.</p>
            </div>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
              <div style={{ color: '#00ff00' }}>● OPERATIONAL</div>
              <div style={{ opacity: 0.5, marginTop: '5px' }}>v3.4 // CLOUD DEPLOY</div>
            </div>
          </div>
          <div style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.75rem', opacity: 0.3 }}>
            Photos by <a href="https://unsplash.com" target="_blank" style={{ color: '#fff' }}>Unsplash</a> | 
            Created by <a href="https://rapisite.com.br" target="_blank" style={{ color: '#fff' }}>RapiSite</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
