Package.describe({
  name: 'universe:react-accordion',
  version: '0.1.4',
  summary: 'React accordion component',
  git: 'https://github.com/vazco/universe-react-accordion',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'random',
    'ecmascript',
    'universe:utilities-react@1.0.0'
  ]);
  api.mainModule('index.js');

});
