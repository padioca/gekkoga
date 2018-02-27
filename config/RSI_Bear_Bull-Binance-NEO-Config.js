const randomExt = require('random-ext');

const config = {
  stratName: 'RSI_BULL_BEAR_ADX',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'ETH',
      asset: 'NEO'
    },

    //daterange: 'scan',

    daterange: {
      from: '2017-11-05 03:56',
      to: '2018-02-27 02:56'
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
  candleValues: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    historySize: 1300, // max possible SMA_long

    SMA_long: randomExt.integer(27, 10) * 50, // From 1300 to 500 in steps of 50
    SMA_short: randomExt.integer(60, 40),

    BULL_RSI: randomExt.integer(13, 7),
    BULL_RSI_high: randomExt.integer(85, 70),
    BULL_RSI_low: randomExt.integer(65, 40),

    BEAR_RSI: randomExt.integer(20, 10),
    BEAR_RSI_high: randomExt.integer(60, 40),
    BEAR_RSI_low: randomExt.integer(30, 10),

    //MODIFY RSI (depending on ADX)
    BULL_MOD_high: randomExt.integer(5, 0),
    BULL_MOD_low: randomExt.integer(0, -5),
    BEAR_MOD_high: randomExt.integer(15, 0),
    BEAR_MOD_low: randomExt.integer(0, -5),

    ADX: randomExt.integer(5, 2),
    ADX_high: randomExt.integer(80, 60),
    ADX_low: randomExt.integer(60, 40),

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length -1, 0)]

  })
};

module.exports = config;
