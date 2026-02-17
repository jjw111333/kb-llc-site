
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
          <h1>일본과 한국을,<br/>현장에서 연결합니다.</h1>
          <p>일본 기반 실행 파트너</p>
          <a href="mailto:t-osa@gmail.com" className="btn">Contact</a>
        </div>
      </section>
      <footer>© 2026 K&B LLC</footer>
    </main>
  )
}
