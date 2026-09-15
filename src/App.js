import './App.css';

function App() {
  const hearts = Array.from({ length: 7 });

  return (
    <div className="card-container">
      <div className="floating-hearts" aria-hidden="true">
        {hearts.map((_, i) => {
          const left = 10 + i * 13;
          const delay = i * 1.1;
          const duration = 7 + (i % 4) * 2;
          const size = 0.9 + (i % 3) * 0.35;

          return (
            <span
              key={i}
              className="heart-particle"
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                fontSize: `${size}rem`,
              }}
            >
              ♥
            </span>
          );
        })}
      </div>

      <main className="romantic-card">
        <div className="heart">♥</div>
        <h1>To My Dearest</h1>

        <p className="message">
          Among all the souls in this world,
          <br />
          my heart found its home in you.
        </p>

        <p className="message">
          With every sunrise,
          <br />
          I choose you—now and always.
        </p>

        <div className="divider" aria-hidden="true">
          <span />
          <span className="divider-heart">♥</span>
          <span />
        </div>

        <h2 className="love-you">I love you</h2>
        <h3 className="name-tag">MY CLINGY ADIKA</h3>
        <p className="signature-line">for you, always</p>

        <p className="footer">Forever &amp; always ♥</p>
      </main>
    </div>
  );
}

export default App;
