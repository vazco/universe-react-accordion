Package.describe({
  name: 'universe:react-accordion',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'React accordion component',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vazco/universe-react-accordion',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'universe:modules@0.6.1',
    'universe:utilities-react@0.5.3'
  ]);
  api.addFiles('Accordion.import.jsx');
  api.addFiles('AccordionItem.import.jsx');
  api.addFiles('AccordionItemBody.import.jsx');
  api.addFiles('AccordionItemTitle.import.jsx');
  api.addFiles('index.import.js');

});
