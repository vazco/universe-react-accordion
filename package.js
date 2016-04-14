Package.describe({
  name: 'universe:react-accordion',
  version: '0.1.3',
  // Brief, one-line summary of the package.
  summary: 'React accordion component',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vazco/universe-react-accordion',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'random',
    'ecmascript',
    'universe:utilities-react@1.0.0'
  ]);
  api.addFiles('Accordion.jsx');
  api.addFiles('AccordionItem.jsx');
  api.addFiles('AccordionItemBody.jsx');
  api.addFiles('AccordionItemTitle.jsx');
  api.addFiles('index.js');

});
