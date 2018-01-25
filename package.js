Package.describe({
  name: 'ostrio:cron-jobs',
  version: '2.2.0',
  summary: 'Task scheduler. With support of clusters or multiple NodeJS instances.',
  git: 'https://github.com/VeliovGroup/Meteor-CRON-jobs',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.6');
  api.use('ecmascript', 'server');
  api.mainModule('cron-jobs.js', 'server');
});

Package.onTest(function (api) {
  api.use(['ecmascript', 'accounts-base', 'ostrio:cron-jobs', 'practicalmeteor:mocha', 'practicalmeteor:chai', 'meteortesting:mocha'], 'server');
  api.addFiles('tests.js', 'server');
});

Npm.depends({
  'josk': '2.0.1'
});
