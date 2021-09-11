module.exports = {
  spec: ['./test/*'],
  reporter: 'mochawesome',
  'reporter-option': [
    'overwrite=true',
    'reportTitle=Open Weather API Tests',
    'showPassed=false',
    'timestamp=isoDateTime',
    'html=true',
    'json=false',
    'charts=true',
    'recursive=true',
  ],
  timeout: 10000,
};
