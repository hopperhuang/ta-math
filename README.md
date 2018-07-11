
Technical analysis math [![Dependency Status][depstat-image]][depstat-url]
=========

Tiny library for indicators and overlays with ohlcv data written in ES6.

### Supporting indicators and overlays

* sma     -   Simple Moving Average
* ema     -   Exponential Moving Average
* std     -   Standard Deviation
* bband   -   Bollinger Band
* macd    -   Moving Average Convergence/Divergence
* zigzag  -   ZigZag Indicator

### Installation

`npm i ta-math`

### Usage

In source you can find example of usage with bitcoin prices from ccxt library and nwd3 charts. Here simple sample.
```
  let TA = require('./ta-math');
  let ohlcv = [[t0,o0,h0,l0,c0,v0],  ...  ,[tN,oN,hN,lN,cN,vN]];
  let ta = TA(ohlcv);
  let ema_line = ta.ema(15);
  let bband_line = ta.bband(15, 2);  
```

### Contributing

Feel free to contribute. Here reference how to implement new indicators [StockCharts](http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators).
