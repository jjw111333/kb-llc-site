import LandingPage from '../components/LandingPage'

const DATA = {
  hero: {
    title: ['日本と韓国を、', '現場からつなぐ。'],
    sub: 'JAPAN-BASED OPERATIONAL BRIDGE',
    cta: 'お問い合わせ',
  },
  about: {
    label: 'ABOUT US',
    title: '現地にいるから、できること。',
    desc: 'K&B LLCは大阪を拠点に、日本国内での実務対応を一手に担うオペレーション・パートナーです。仕入れ・検品・梱包・発送まで、現地だからこそ可能なスピードと品質で、韓国をはじめ海外のクライアントのビジネスを支えます。',
    highlights: [
      { num: '大阪', label: '拠点' },
      { num: '24h', label: '対応体制' },
      { num: '3ヶ国語', label: '対応言語' },
    ],
  },
  services: {
    label: 'SERVICES',
    title: '事業内容',
    items: [
      {
        icon: '📦', title: '仕入れ・買付代行',
        desc: '日本国内の商品を迅速に買付。限定品やメーカー直送品にも対応します。',
        tags: ['買付', '限定品', 'メーカー直送'],
      },
      {
        icon: '🔍', title: '検品・品質管理',
        desc: '一点ずつ丁寧に検品し、写真付きレポートで安心をお届けします。',
        tags: ['検品', '写真レポート', '品質保証'],
      },
      {
        icon: '🚀', title: '梱包・海外発送',
        desc: '安全な梱包と最適な配送ルートで、韓国・海外へ確実にお届けします。',
        tags: ['梱包', '国際配送', '韓国直送'],
      },
      {
        icon: '🤝', title: '現地ハンドリング',
        desc: '展示会同行、メーカー交渉、倉庫管理など、現場対応をトータルサポート。',
        tags: ['展示会', '交渉', '倉庫管理'],
      },
      {
        icon: '🌐', title: 'インバウンドサポート',
        desc: '海外企業の日本進出をサポート。市場調査からローカライズまで対応可能。',
        tags: ['市場調査', 'ローカライズ', '進出支援'],
      },
      {
        icon: '📊', title: 'コンサルティング',
        desc: 'クロスボーダー事業の戦略立案から実行まで、経験に基づいた提案を行います。',
        tags: ['戦略', 'クロスボーダー', '実行支援'],
      },
    ],
  },
  process: {
    label: 'PROCESS',
    title: 'ご利用の流れ',
    steps: [
      { num: '01', title: 'ご相談', desc: 'ご要望をヒアリングし、最適なサービスプランをご提案します。' },
      { num: '02', title: 'お見積り', desc: '内容に応じた明確なお見積りをご提示します。' },
      { num: '03', title: '実行', desc: '大阪の拠点から迅速に対応。随時進捗をご報告します。' },
      { num: '04', title: '納品・発送', desc: '検品後、最適ルートで海外へ確実にお届けします。' },
    ],
  },
  contact: {
    label: 'CONTACT',
    title: 'まずはお気軽にご相談ください。',
    sub: 'B2B2C、物流、現地対応、コンサルティング\nどんな規模のご相談でもお待ちしております。',
    cta: 'メールで問い合わせ',
    email: 't-osa@kandbcorp.com',
    info: [
      { label: 'EMAIL', value: 't-osa@kandbcorp.com' },
      { label: 'TEL', value: '06-7777-1837' },
      { label: 'LOCATION', value: 'Osaka, Japan' },
      { label: 'HOURS', value: '10:00–18:00 JST' },
    ],
  },
  footer: '© 2026 K&B LLC / 合同会社K&B',
}

export default function JpPage() {
  return <LandingPage lang="jp" data={DATA} />
}
