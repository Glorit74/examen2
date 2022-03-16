const data = [
  {
    title: 'Apple',
    sub: 'AAPL',
    text: '$ 2.690 T',
  },
  {
    title: 'Microsoft',
    sub: 'MSFT',
    text: '$ 2.228 T',
  },
  {
    title: 'Saudi Aramco',
    sub: '2222.SR',
    text: '$ 2.205 T',
  },
  {
    title: 'Alphabet (Google)',
    sub: 'GOOG',
    text: '$ 1.778 T',
  },
  {
    title: 'Amazon',
    sub: 'AMZN',
    text: '$ 1.565 T',
  },
  {
    title: 'Tesla',
    sub: 'TSLA',
    text: '$ 837.00 B',
  },
  {
    title: 'Nvidia',
    sub: 'NVDA',
    text: '$ 601.99 B',
  },
];

function loadEvent() {
  const rootElement = document.getElementById('container');

  for (let i = 0; i < data.length; i++) {
    let element = `  
      <section class="card">          
            <div class="up">${data[i].sub}</div>
            <h2>${data[i].title}</h2>
            <p>${data[i].text}</p>
            <div class="down"><button>Visit</button>
			<span class="material-icons arrow">
			east</span>
			</div>
        </section>
        `;
    rootElement.insertAdjacentHTML('beforeend', element);
  }
}
window.addEventListener('load', loadEvent);
