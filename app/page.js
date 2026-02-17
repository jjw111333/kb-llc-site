
export default function Home() {
  return (
    <main>

      <header>
        <div className="container">
          <div className="logo">K & B LLC</div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>
            日本と韓国を、<br/>
            現場からつなぐ。
          </h1>
          <p>Japan-based Operational Bridge</p>
          <a href="mailto:t-osa@gmail.com" className="btn">Contact</a>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">What We Do</div>
          <div className="card">Inbound Operations Support</div>
          <div className="card">Business Operations in Japan</div>
          <div className="card">Logistics / 3PL Management</div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">Why K&B</div>
          <div className="card">Execution Focused</div>
          <div className="card">Field-Based Approach</div>
          <div className="card">Trilingual Support (JP / EN / KR)</div>
          <div className="card">Reliable & Structured Operations</div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} K&B LLC / 合同会社K&B
      </footer>

    </main>
  )
}
