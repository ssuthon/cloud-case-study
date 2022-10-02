const cfg = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 8111,
  tickId: process.env.TICK_ID || '1',
}

module.exports = cfg;