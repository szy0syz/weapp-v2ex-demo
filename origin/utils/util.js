function formatUTC(num) {
  return new Date(num * 1000).toLocaleString()
}

module.exports = {
  formatUTC: formatUTC
}
