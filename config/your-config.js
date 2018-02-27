const randomExt = require('random-ext');

const config = {
  stratName: 'RSI',
  gekkoConfig: {
    watch: {
      exchange: 'poloniex',
      currency: 'USDT',
      asset: 'LTC'
    },

    //daterange: 'scan',

    daterange: {
      from: '2017-10-22 23:39',
      to: '2018-01-22 19:39'
    },
    

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
  populationAmt: 20,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 0.5,

  // How many components maximum to mutate at once
  mutateElements: 7,

  // How many parallel queries to run at once
  parallelqueries: 5,

  // profit || score 
  // score = profit * sharpe -- feedback?
  // profit = recommended!
  mainObjective: 'profit',

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
  candleValues: [5,10,15,30,60,120],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*
    historySize: randomExt.integer(100, 20),

    macd_short: randomExt.integer(15,5),
    macd_long: randomExt.integer(40,15),
    macd_signal: randomExt.integer(12,6),
    macd_up: randomExt.float(20,0).toFixed(2),
    macd_down: randomExt.float(0,-20).toFixed(2),
    */

    rsi_interval: randomExt.integer(14,14),
    rsi_low: randomExt.integer(50,0),
    rsi_high: randomExt.integer(100,50),
    rsi_persistence: randomExt.integer(3,1),

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length -1, 0)]

  })
};

module.exports = config;
