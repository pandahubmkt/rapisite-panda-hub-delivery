"use client";

import { useEffect } from "react";

export default function Home() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá Filipe, quero saber mais sobre o Panda Hub Delivery!";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1697206165469-9227e6e3aa0a?auto=format\u0026fit=crop\u0026q=80\u0026w=2000')" }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-up">
              <span className="hero-part1" style={{fontSize: '2.2rem', fontWeight: 700, display: 'block'}}>Independência Digital encontra</span>
              <span className="drama-text" style={{fontSize: '7rem', display: 'block', lineHeight: 0.9, color: 'var(--accent)'}}>Sua Precisão.</span>
            </h1>
            <p className="animate-up" style={{ margin: '2.5rem 0', maxWidth: '650px', fontSize: '1.25rem', opacity: 0.8 }}>
              Desenvolvemos tecnologia de elite para restauradores que buscam autonomia. Cardápio digital integrado à IA de atendimento via WhatsApp.
            </p>
            <div className="animate-up">
              <a href={whatsappLink} target="_blank" className="btn btn-primary">
                Assinar a plataforma
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="servicos" className="section">
        <div className="container">
          <div style={{ marginBottom: '6rem' }}>
            <span className="mono-text" style={{ color: 'var(--accent)' }}>01 / ECOSSISTEMA</span>
            <h2 className="drama-text" style={{ fontSize: '4.5rem', marginTop: '1rem' }}>Sua Máquina de Vendas.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <div className="card animate-up">
              <span className="mono-text">Solução</span>
              <h3 style={{ margin: '1.5rem 0', fontSize: '1.8rem' }}>Cardápio Digital</h3>
              <p style={{ opacity: 0.7 }}>Catálogo online responsivo com carrinho, pagamentos Pix e gestão completa de pedidos em tempo real.</p>
            </div>
            <div className="card animate-up">
              <span className="mono-text">Inteligência</span>
              <h3 style={{ margin: '1.5rem 0', fontSize: '1.8rem' }}>IA no WhatsApp</h3>
              <p style={{ opacity: 0.7 }}>Automatize 100% do atendimento. Nossa IA entende o cliente, tira dúvidas e finaliza a venda sozinha.</p>
            </div>
            <div className="card animate-up">
              <span className="mono-text">Gestão</span>
              <h3 style={{ margin: '1.5rem 0', fontSize: '1.8rem' }}>ERP & Fidelização</h3>
              <p style={{ opacity: 0.7 }}>Painel completo com CRM, LTV, indicadores financeiros e programa de fidelidade para seu cliente voltar sempre.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="drama-text" style={{ fontSize: '4.5rem' }}>Planos Estratégicos.</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.6 }}>Escolha a escala ideal para o seu restaurante.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card animate-up" style={{ borderTop: '4px solid #C0C0C0' }}>
              <span className="mono-text" style={{ color: '#C0C0C0' }}>PLANO PRATA</span>
              <h4 style={{ fontSize: '2.5rem', margin: '1.5rem 0' }}>R$ 49,90<span style={{ fontSize: '1rem', opacity: 0.5 }}>/mês</span></h4>
              <ul style={{ listStyle: 'none', opacity: 0.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>✓ Até 50 produtos</li>
                <li>✓ 100 pedidos /mês</li>
                <li>✓ Catálogo Responsivo</li>
                <li>✓ Pagamento Pix</li>
              </ul>
              <a href={whatsappLink} target="_blank" className="btn btn-outline" style={{ marginTop: '2.5rem', width: '100%' }}>Começar</a>
            </div>
            <div className="card animate-up" style={{ borderTop: '4px solid var(--accent)', background: 'rgba(255,255,255,0.02)' }}>
              <span className="mono-text">PLANO GOLD</span>
              <h4 style={{ fontSize: '2.5rem', margin: '1.5rem 0' }}>R$ 249,90<span style={{ fontSize: '1rem', opacity: 0.5 }}>/mês</span></h4>
              <ul style={{ listStyle: 'none', opacity: 0.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>✓ Até 200 produtos</li>
                <li>✓ 500 pedidos /mês</li>
                <li>✓ Vitrine de Produtos</li>
                <li>✓ Cupons e Combos</li>
                <li>✓ Gestão de Clientes</li>
              </ul>
              <a href={whatsappLink} target="_blank" className="btn btn-primary" style={{ marginTop: '2.5rem', width: '100%' }}>Mais Popular</a>
            </div>
            <div className="card animate-up" style={{ borderTop: '4px solid #E5E4E2' }}>
              <span className="mono-text" style={{ color: '#E5E4E2' }}>PLANO PLATINUM</span>
              <h4 style={{ fontSize: '2.5rem', margin: '1.5rem 0' }}>R$ 399,90<span style={{ fontSize: '1rem', opacity: 0.5 }}>/mês</span></h4>
              <ul style={{ listStyle: 'none', opacity: 0.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>✓ Pedidos Ilimitados</li>
                <li>✓ WhatsApp com IA</li>
                <li>✓ API de Integração</li>
                <li>✓ Dashboard Avançado</li>
                <li>✓ Suporte VIP</li>
              </ul>
              <a href={whatsappLink} target="_blank" className="btn btn-outline" style={{ marginTop: '2.5rem', width: '100%' }}>Full Power</a>
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            <div className="animate-up">
              <span className="mono-text">02 / MANIFESTO</span>
              <h2 className="drama-text" style={{ fontSize: '4rem', marginTop: '1rem' }}>Focamos no seu Lucro.</h2>
              <p style={{ marginTop: '2rem' }}>Diferente dos marketplaces, nós não cobramos taxas por pedido. Você é dono dos seus dados e do seu faturamento.</p>
            </div>
            <div className="animate-up" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { t: "IA Avançada", d: "Atendimento que entende intenções e finaliza compras." },
                { t: "Suporte Dedicado", d: "Time sênior focado em resolver seus desafios diários." },
                { t: "Facilidade de Uso", d: "Configure e comece a vender em minutos, sem fricção." }
              ].map((item, i) => (
                <div key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '2rem' }}>
                  <h3>{item.t}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="card animate-up" style={{ background: '#0a0a0a', border: 'none', padding: '100px 40px' }}>
            <h2 className="drama-text" style={{ fontSize: '4.5rem' }}>Pronto para o Próximo Nível?</h2>
            <p style={{ fontSize: '1.25rem', margin: '2rem 0 4rem', opacity: 0.6 }}>Assine agora e tenha a inteligência da Panda Hub no seu delivery.</p>
            <a href={whatsappLink} target="_blank" className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.2rem' }}>
              Iniciar Ativação
            </a>
          </div>
        </div>
      </section>

      <footer className="section" style={{ padding: '80px 0 20px', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>PANDA HUB</div>
              <p style={{ opacity: 0.4, maxWidth: '300px', marginTop: '1rem', fontSize: '0.9rem' }}>Desenvolvemos instrumentos digitais de alta performance para o setor alimentício.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#00ff00', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>● SYSTEM OPERATIONAL</div>
              <div style={{ opacity: 0.4, marginTop: '10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>BUILD v4.2 // MAR 2026</div>
            </div>
          </div>
          <div style={{ marginTop: '80px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.75rem', opacity: 0.3 }}>
            Created by <a href="https://rapisite.com.br" target="_blank" style={{ textDecoration: 'underline' }}>RapiSite</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .animate-up { opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
        .animate-up.active { opacity: 1; transform: translateY(0); }
      `}</style>
    </main>
  );
}
