
export default function Page(){
  return(
    <main>
      <header>
        <div className="container">
          <div className="logo">K & B LLC</div>
          <div className="lang">
            <a href="/jp">JP</a> | <a href="/en">EN</a> | <a href="/kr">KR</a>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <h1>Connecting Japan and Korea<br/>from the field.</h1>
          <p>Operational Bridge Based in Japan</p>
          <a href="mailto:t-osa@gmail.com" className="btn">Contact</a>
        </div>
      </section>
      <footer>© 2026 K&B LLC</footer>
    </main>
  )
}
