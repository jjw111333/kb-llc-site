
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
          <h1>日本と韓国を、<br/>現場からつなぐ。</h1>
          <p>Japan-based Operational Bridge</p>
          <a href="mailto:t-osa@gmail.com" className="btn">Contact</a>
        </div>
      </section>
      <footer>© 2026 K&B LLC / 合同会社K&B</footer>
    </main>
  )
}
