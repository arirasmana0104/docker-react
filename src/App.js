import './App.css';

function App() {
  const hearts = Array.from({ length: 18 });

  return (
    <div className="card-container">
      <div className="floating-hearts">
        {hearts.map((_, i) => {
          const left = (i * 53) % 100;
          const delay = (i % 9) * 1.1;
          const duration = 9 + (i % 5) * 2;
          const size = 0.9 + (i % 4) * 0.4;
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
              {i % 3 === 0 ? '♥' : i % 3 === 1 ? '💖' : '✨'}
            </span>
          );
        })}
      </div>

      <div className="romantic-card">
        <div className="card-glow" />

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
          I choose you—now and always. ❤️
        </p>

        <div className="divider">
          <span />
          <span className="divider-heart">♥</span>
          <span />
        </div>

        <h2 className="love-you">I LOVE YOU</h2>
        <h3 className="name-tag">MY CLINGY ADIKA</h3>

        <p className="footer">Forever &amp; always ♥</p>
      </div>
    </div>
  );
}

export default App;
