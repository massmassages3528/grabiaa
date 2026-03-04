// ★ Amazon Associates IDをここで変更してください
export const ASSOCIATE_ID = 'yoursite-22'

export const affiliateLink = (asin) =>
  `https://www.amazon.co.jp/dp/${asin}/ref=nosim?tag=${ASSOCIATE_ID}`

export const googleBooksImg = (isbn) =>
  `https://books.google.com/books/content?vid=ISBN:${isbn}&printsec=frontcover&img=1&zoom=3&edge=curl`

export const amazonImg = (asin) =>
  `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`

export const idols = [
  {
    id: 1, rank: 1,
    name: '加藤玲菜', reading: 'かとうれな',
    nameZh: '加藤玲菜', nameKo: '카토 레나', nameEn: 'Rena Kato',
    title: '日本一、ビキニが似合う19歳',
    titleZh: '日本第一適合比基尼的19歲',
    titleKo: '일본 최고, 비키니가 어울리는 19세',
    titleEn: "Japan's #1 Bikini Body at 19",
    publisher: '集英社 週プレ', release: '2026.02', price: 'デジタル版',
    isbn: null, asin: 'B0GLX9WVS4',
    accent: '#FF4081', bg: '#1a0010',
    tag: { zh: '2026新星', ko: '2026 신성', en: '2026 RISING' },
    desc: {
      zh: '現役護理系學生兼寫真女神，以「かとれな」暱稱在SNS爆紅。19歲清純外表下蘊藏驚人魅力，2026年格拉維亞界最受矚目的新生代。',
      ko: "현역 간호학과 학생이자 그라비아 여신. SNS에서 'かとれな'라는 애칭으로 폭발적 인기. 2026년 그라비아계 최고 주목주.",
      en: "Active nursing student turned gravure sensation. Known as 'Katorena' online — 19 years old and already 2026's most-watched newcomer.",
    },
    youtubeId: 'zhzqdUJl0z8',
  },
  {
    id: 2, rank: 2,
    name: '豊島心桜', reading: 'とよしまここさ',
    nameZh: '豐島心櫻', nameKo: '토요시마 코코사', nameEn: 'Kokosa Toyoshima',
    title: '心桜ばかり',
    titleZh: '滿滿都是心櫻',
    titleKo: '온통 코코사',
    titleEn: 'All About Kokosa',
    publisher: '集英社', release: '2023.09.29', price: '¥3,300',
    isbn: '9784087901870', asin: '4087901874',
    accent: '#FF80AB', bg: '#1a0014',
    tag: { zh: '1st寫真集', ko: '1st 화보집', en: 'DEBUT BOOK' },
    desc: {
      zh: '清純外表下藏著令人心動的魅力。1st寫真集在巴里島拍攝，充滿青春活力，完全展現了她最自然、最真實的一面。',
      ko: '청순한 외모 속에 숨겨진 설레는 매력. 1st 화보집은 발리에서 촬영, 가장 자연스럽고 생생한 모습을 담아냈다.',
      en: 'Beneath her innocent looks lies a captivating allure. Her debut photobook shot in Bali captures her most natural, authentic self.',
    },
    youtubeId: '8XRtOTMd-Es',
  },
  {
    id: 3, rank: 3,
    name: '沢口愛華', reading: 'さわぐちあいか',
    nameZh: '澤口愛華', nameKo: '사와구치 아이카', nameEn: 'Aika Sawaguchi',
    title: 'でらあいか',
    titleZh: '超愛愛華',
    titleKo: '데라아이카',
    titleEn: 'Dera Aika',
    publisher: '講談社', release: '2019.03.27', price: '¥3,080',
    isbn: '9784065150283', asin: '4065150280',
    accent: '#FF6F00', bg: '#160900',
    tag: { zh: 'Miss雜誌冠軍', ko: '미스매거진 그랑프리', en: 'MISS MAG GRAND PRIX' },
    desc: {
      zh: "2018年Miss Magazine冠軍。在夏威夷與名古屋故鄉拍攝，「でら」是名古屋方言的「超級」，純真魅力滿溢的1st寫真集。",
      ko: "미스 매거진 2018 그랑프리. 하와이와 나고야에서 촬영. 「でら」는 나고야 방언으로 「매우」, 순수한 매력이 넘치는 1st 화보집.",
      en: "Miss Magazine 2018 Grand Prix. Shot in Hawaii and Nagoya. 'Dera' means 'super' in the Nagoya dialect — a sparkling debut full of charm.",
    },
    youtubeId: '9_CNke-PdCs',
  },
  {
    id: 4, rank: 4,
    name: '菊地姫奈', reading: 'きくちひな',
    nameZh: '菊地姬奈', nameKo: '기쿠치 히나', nameEn: 'Hina Kikuchi',
    title: 'memory',
    titleZh: 'memory',
    titleKo: '메모리',
    titleEn: 'memory',
    publisher: '講談社', release: '2025.03.19', price: '¥3,300',
    isbn: '9784065379851', asin: '4065379857',
    accent: '#00BCD4', bg: '#001418',
    tag: { zh: '2024年度グランプリ', ko: '2024 그랑프리', en: '2024 GRAND PRIX' },
    desc: {
      zh: 'グラジャパ！アワード2024グランプリ。3rd写真集『memory』初版3万部が即重版。令和グラビア界の頂点に君臨。',
      ko: '그라지아파 어워드 2024 그랑프리. 3rd 화보집 『memory』 초판 3만 부 즉시 증쇄. 레이와 그라비아계 정점.',
      en: "Grajapa Award 2024 Grand Prix. 3rd photobook 'memory' sold 30,000 copies instantly — the undisputed queen of Reiwa gravure.",
    },
    youtubeId: 'fgw1dF7bJ5Q',
  },
  {
    id: 5, rank: 5,
    name: '溝端葵', reading: 'みぞばたあおい',
    nameZh: '溝端葵', nameKo: '미조바타 아오이', nameEn: 'Aoi Mizobata',
    title: 'ガチでブレイクする5秒前',
    titleZh: '爆紅前的5秒鐘',
    titleKo: '진짜 브레이크하기 5초 전',
    titleEn: '5 Seconds Before Breaking Through',
    publisher: '集英社 週プレ', release: '2025.03', price: 'デジタル版',
    isbn: null, asin: 'B0DZM9ZRPJ',
    accent: '#00E676', bg: '#001a08',
    tag: { zh: '2025年グランプリ', ko: '2025 그랑프리', en: '2025 GRAND PRIX' },
    desc: {
      zh: 'グラジャパ！アワード2025グランプリ。2025年3月デビュー即話題を席巻、同年6月には初表紙。笑顔と圧倒的スタイルで2025年最大ブレイク。',
      ko: '그라지아파 어워드 2025 그랑프리. 2025년 3월 데뷔 즉시 화제 석권, 6월 첫 표지. 웃음과 압도적 스타일로 2025년 최대 브레이크.',
      en: 'Grajapa Award 2025 Grand Prix. Debuted March 2025, first cover by June — the biggest breakout of 2025.',
    },
    youtubeId: '6YDQPm2bsEk',
  },
  {
    id: 6, rank: 6,
    name: '高野真央', reading: 'たかのまお',
    nameZh: '高野真央', nameKo: '타카노 마오', nameEn: 'Mao Takano',
    title: '恋の温度が1℃上がった瞬間',
    titleZh: '戀愛溫度升高1℃的瞬間',
    titleKo: '사랑의 온도가 1℃ 오른 순간',
    titleEn: 'The Moment Love Rose 1°C',
    publisher: '集英社 週プレ', release: '2025.12', price: 'デジタル版',
    isbn: null, asin: 'B0G57RRNMZ',
    accent: '#F50057', bg: '#1a0008',
    tag: { zh: 'ガチ恋必至', ko: '진심 연애 각', en: 'MUST FALL IN LOVE' },
    desc: {
      zh: '天然魅力讓人不知不覺認真愛上。豐滿撩人的身材與迷人笑靨令無數粉絲心甘情願淪陷。SNS上被粉絲譽為「最讓人ガチ恋的女神」。',
      ko: '자연스럽게 진심으로 빠져들게 만드는 천연 매력. 풍만한 몸매와 매혹적인 미소로 수많은 팬을 진심 연애시키는 여신.',
      en: "Her natural charm pulls you in before you realize it. With an irresistible figure and warm smile, she's the idol fans genuinely fall in love with.",
    },
    youtubeId: 'vHQ1ggfRDKo',
  },
]
