export default function Sobre() {
  return (
    <main className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 className="drama-text" style={{ fontSize: "5rem", color: 'var(--primary)' }}>Nossa Missão.</h2>
              <p style={{ marginTop: '2.5rem', fontSize: '1.2rem' }}>
                Somos uma empresa de tecnologia que realmente sentiu a dor dos restaurantes. Como proprietários de negócios na área alimentícia, vimos como é prejudicial depender exclusivamente de grandes marketplaces.
              </p>
              <p style={{ marginTop: '1.5rem', opacity: 0.7 }}>
                Nossa missão é trazer tecnologia de ponta para o pequeno e médio empreendedor, devolvendo o controle da marca e dos dados aos donos de restaurantes.
              </p>
            </div>
            <div className="glass-panel" style={{ textAlign: 'center', padding: '5rem' }}>
              <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>🥡</div>
              <h3 style={{ color: 'var(--primary)' }}>Por Restauranteurs, para Restauranteurs.</h3>
            </div>
          </div>

          <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--primary)' }}>Visão</h3>
              <p>Ser a ferramenta de automação indispensável para todo restaurante que busca independência digital.</p>
            </div>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--primary)' }}>Valores</h3>
              <p>Agilidade na entrega, transparência nos dados e inovação constante em IA.</p>
            </div>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--primary)' }}>Equipe</h3>
              <p>Especialistas em desenvolvimento de software e consultoria em food delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
