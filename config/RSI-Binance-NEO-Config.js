const randomExt = require('random-ext');

const config = {
  stratName: 'RSI',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'ETH',
      asset: 'NEO'
    },

    daterange: 'scan',

/*
    daterange: {
      from: '2018-01-01 00:33',
      to: '2018-01-30 00:00'
    },
*/

    simulationBalance: {
      'asset': 1,
      'currency': 1
    },

    slippage: 0.05,
    feeTaker: 0.25,
    feeMaker: 0.15,
    feeUsing: 'taker', // maker || taker

  },
  apiUrl: 'http://localhost:3000',

  // Population size, better reduce this for larger data
  populationAmt: 10,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 0.5,

  // How many components maximum to mutate at once
  mutateElements: 7,

  // How many parallel queries to run at once
  parallelqueries: 8,

  // profit || score
  // score = profit * sharpe -- feedback?
  // profit = recommended!
  mainObjective: 'score',

  // optionally recieve and archive new all time high every new all time high

  notifications: {
    email: {
      enabled: false,
      receiver: 'receiver@some.com',
      senderservice: 'gmail',
      sender: 'sender@gmail.com',
      senderpass: 'password',
    },
  },
  candleValues: [5,10,15,30,60,120,240],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    historySize: randomExt.integer(40,10),

    interval: randomExt.integer(21,7),
    low: randomExt.integer(35,5),
    high: randomExt.integer(95,65),
    persistence: randomExt.integer(3,1),

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length -1, 0)]

  })
};

module.exports = config;
