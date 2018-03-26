Package.describe({
  name: 'granth:table-helper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Core functionality used to create reactive tables. Use this to build table templates for Blaze.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/GrantOnGit/granth-table-helper.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript@0.9.0');
  api.use(['tracker'], 'client'); // Core deps
  api.mainModule('table-helper.js', 'client');
});
