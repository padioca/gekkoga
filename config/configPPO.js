const randomExt = require('random-ext');

const config = {
  stratName: 'PPO',
  gekkoConfig: {
    watch: {
      exchange: 'poloniex',
      currency: 'USDT',
      asset: 'BTC'
    },

    //daterange: 'scan',

    /*daterange: {
      from: '2017-10-22 23:39',
      to: '2018-01-22 19:39'
    },*/

    daterange: {
      from: '2018-01-15 00:00',
      to: '2018-01-22 22:48'
    },
    

    simulationBalance: {
      'asset': 0.065,
      'currency': 100
    },

    slippage: 0.05,
    feeTaker: 0.25,
    feeMaker: 0.25,
    feeUsing: 'maker', // maker || taker

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
  candleValues: [60],
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

    ppo_short: randomExt.integer(15,5),
    ppo_long: randomExt.integer(31,15),
    //ppo_signal: randomExt.integer(9,9),
    ppo_signal: 9,
    //ppo_down: randomExt.float(-0.015,-0.035).toFixed(4),
    ppo_down: 0,
    //ppo_up: randomExt.float(0.035,0.015).toFixed(4),
    ppo_up: 0,
    ppo_persistence: 2,

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length -1, 0)]

  })
};

module.exports = config;
