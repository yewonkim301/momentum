const quotes = [
    {
        quote: "행복은 습관이다, 그것을 몸에 지니라.",
        author: "허버드"
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테"
    },
    {
        quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author: "아인슈타인"
    },
    {
        quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "톨스토이"
    },
    {
        quote: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
        author: "생떽쥐베리"
    },
    {
        quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
        author: "알랭"
    },
    {
        quote: "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지 못한 것을 후회하라.",
        author: "탈무드"
    },
    {
        quote: "모든 것들에는 나름의 경이로움과 심지어 어둠과 침묵이 있고, 내가 어떤 상태에 있더라도 나는 그 속에서 만족하는 법을 배운다.",
        author: "헬렌켈러"
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤"
    },
    {
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author: "괴테"
    },
]

const quote = document.querySelector("#quote__content span:first-child");
const author = document.querySelector("#quote__content span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `" ${todaysQuote.quote} "`;
author.innerText = `- ${todaysQuote.author} -`;