import LandingPage from '../components/LandingPage'

const DATA = {
  hero: {
    title: ['일본과 한국을,', '현장에서 연결합니다.'],
    sub: 'JAPAN-BASED OPERATIONAL BRIDGE',
    cta: '문의하기',
  },
  about: {
    label: 'ABOUT US',
    title: '현지에 있으니까, 가능한 일.',
    desc: 'K&B LLC는 오사카를 거점으로 일본 현지 실무를 전담하는 오퍼레이션 파트너입니다. 매입부터 검품, 포장, 발송까지 — 현지이기에 가능한 속도와 품질로 한국을 비롯한 해외 클라이언트의 비즈니스를 지원합니다.',
    highlights: [
      { num: '오사카', label: '거점' },
      { num: '24h', label: '대응 체제' },
      { num: '3개국어', label: '대응 언어' },
    ],
  },
  services: {
    label: 'SERVICES',
    title: '사업 내용',
    items: [
      {
        icon: '📦', title: '매입·구매대행',
        desc: '일본 내 상품을 신속하게 매입합니다. 한정품, 메이커 직송품도 대응 가능합니다.',
        tags: ['매입', '한정품', '메이커 직송'],
      },
      {
        icon: '🔍', title: '검품·품질관리',
        desc: '한 점 한 점 꼼꼼하게 검품하고, 사진 리포트로 안심을 드립니다.',
        tags: ['검품', '사진 리포트', '품질 보증'],
      },
      {
        icon: '🚀', title: '포장·해외배송',
        desc: '안전한 포장과 최적의 배송 루트로 한국·해외에 확실하게 배송합니다.',
        tags: ['포장', '국제배송', '한국 직송'],
      },
      {
        icon: '🤝', title: '현지 핸들링',
        desc: '전시회 동행, 메이커 협상, 창고 관리 등 현장 대응을 토탈 서포트합니다.',
        tags: ['전시회', '협상', '창고 관리'],
      },
      {
        icon: '🌐', title: '인바운드 서포트',
        desc: '해외 기업의 일본 진출을 지원합니다. 시장 조사부터 현지화까지 대응 가능합니다.',
        tags: ['시장 조사', '현지화', '진출 지원'],
      },
      {
        icon: '📊', title: '컨설팅',
        desc: '크로스보더 사업의 전략 수립부터 실행까지, 경험에 기반한 제안을 드립니다.',
        tags: ['전략', '크로스보더', '실행 지원'],
      },
    ],
  },
  process: {
    label: 'PROCESS',
    title: '이용 방법',
    steps: [
      { num: '01', title: '상담', desc: '요구 사항을 파악하고 최적의 서비스 플랜을 제안합니다.' },
      { num: '02', title: '견적', desc: '내용에 맞는 명확한 견적을 제시합니다.' },
      { num: '03', title: '실행', desc: '오사카 거점에서 신속하게 대응하며, 수시로 진행 상황을 보고합니다.' },
      { num: '04', title: '납품·발송', desc: '검품 후 최적 루트로 해외에 확실하게 배송합니다.' },
    ],
  },
  contact: {
    label: 'CONTACT',
    title: '편하게 문의해 주세요.',
    sub: 'B2B2C, 물류, 현지 대응, 컨설팅\n어떤 규모의 문의든 환영합니다.',
    cta: '이메일 문의',
    email: 't-osa@kandbcorp.com',
    info: [
      { label: 'EMAIL', value: 't-osa@kandbcorp.com' },
      { label: 'TEL', value: '06-7777-1837' },
      { label: 'LOCATION', value: 'Osaka, Japan' },
      { label: 'HOURS', value: '10:00–18:00 JST' },
    ],
  },
  footer: '© 2026 K&B LLC / 합동회사 K&B',
}

export default function KrPage() {
  return <LandingPage lang="kr" data={DATA} />
}
