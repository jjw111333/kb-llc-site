
export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>現場から、確実に。<br/>物流とサービスで市場をつなぐ。</h1>
        <p>
          合同会社K&Bは、インバウンド対応から物流・3PL、
          サービス運営まで一気通貫で支援。
          B2B/B2C双方にスピードと実行力で応えます。
        </p>
        <a href="mailto:t-osa@gmail.com" className="btn">Contact</a>
      </section>

      <section>
        <div className="container">
          <h2 style={{marginBottom:"40px",fontSize:"32px"}}>Our Solutions</h2>
          <div className="grid">
            <div className="card">
              <h3>Inbound Operations</h3>
              <p>訪日市場向け現場運営、CS、多言語対応。</p>
            </div>
            <div className="card">
              <h3>Logistics / 3PL</h3>
              <p>保管・出荷・返品まで統合管理。</p>
            </div>
            <div className="card">
              <h3>Business Services</h3>
              <p>日本市場で“回る仕組み”を構築。</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{marginBottom:"40px",fontSize:"32px"}}>Osaka Based. Field Ready.</h2>
          <p>
            スピード、正確性、柔軟性。
            オサカ拠点ならではの実行力で、
            市場と顧客をつなぎます。
          </p>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} 合同会社K&B / K&B LLC
      </footer>
    </main>
  )
}
