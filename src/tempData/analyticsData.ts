import flights from '../assets/icons/flights.png';
import clients from '../assets/icons/clients.png';
import orders from '../assets/icons/orders.png';
import posts from '../assets/icons/posts.png';
import user from '../assets/icons/user.png';

export type Card = {
  title: string;
  number: number;
  proc: string;
  img: string;
}

export const cardData: Card[] = [
  {
    title: 'Total Flights',
    number: 14,
    proc: '+2.8%',
    img: flights
  },
  {
    title: 'Total Clients',
    number: 54,
    proc: '-2.8%',
    img: clients
  },
  {
    title: 'Total Orders',
    number: 37,
    proc: '+22.4%',
    img: orders
  },
  {
    title: 'Total Posts',
    number: 24,
    proc: '-2.8%',
    img: posts
  },
  {
    title: 'New Users',
    number: 7,
    proc: '-3.4%',
    img: user
  }
]

export const graphType = 'Line';
export const graphData = {
  labels: ['12.11', '13.11', '14.11', '15.11', '16.11', '17.11', '18.11', '19.11', '20.11', '21.11'],
  series: [
    [11, 14, 11, 14, 20, 21, 24, 17, 28, 22],
    [20, 16, 25, 26, 35, 30, 40, 49, 45, 55],
    [15, 12, 20, 23, 30, 21, 32, 45, 38, 47],
  ],
  seriesIndex: [
    'test',
    'test1',
    'test2'
  ]
};
export const graphOptions = {
  high: 55,
  low: 0,
  // axisX: {
  //   labelInterpolationFnc: function (value: number, index: number) {
  //     return index % 2 === 0 ? value : null;
  //   }
  // },
  lineSmooth: 1,
  showPoint: false,
  fullWidth: true,
  height: 400,
  chartPadding: {
    right: 40,
    top: 40
  },
};


export const reviews = [
  {
    name: "Sally D.",
    review: "It is over qualified and easy to use",
    rank: "5/5"
  },
  {
    name: "Michael K.",
    review: "An improvement is needed asap.",
    rank: "2/5"
  },
  {
    name: "Deniz T.",
    review: "Works well!",
    rank: "5/5"
  },
  {
    name: "Melissa",
    review: "Great service and useful interfaces.",
    rank: "4/5"
  }
]

export const destinations = [
  {
    city: 'Venice',
    rank: 95
  },
  {
    city: 'Livorno',
    rank: 41
  },
  {
    city: 'Genoa',
    rank: 12
  },
  {
    city: 'Sardinia',
    rank: 14
  },
  {
    city: 'Sicily',
    rank: 22
  },
  {
    city: 'Trieste',
    rank: 31
  },

]