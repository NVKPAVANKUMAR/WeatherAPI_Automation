module.exports = {
  spec: ['test/*.test.js'],
  reporter: 'node_modules/mochawesome',
  'reporter-option': [
    'overwrite=true',
    'reportTitle=Open Weather API Tests',
    'showPassed=false',
    'timestamp=isoDateTime',
  ],
  timeout: 5000,
};
