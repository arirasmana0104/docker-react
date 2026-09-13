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

        <h1>For My Favorite Person</h1>

        <p className="message">
          In a world full of people,
          <br />
          somehow I found you.
        </p>

        <p className="message">
          And honestly...
          <br />
          you're the one I want to
          <br />
          keep choosing every day. ❤️
        </p>

        <div className="divider">
          <span />
          <span className="divider-heart">♥</span>
          <span />
        </div>

        <h2 className="love-you">I LOVE YOU</h2>
        <h3 className="name-tag">ADIKAA</h3>

        <p className="footer">Forever &amp; always ♥</p>
      </div>
    </div>
  );
}

export default App;
