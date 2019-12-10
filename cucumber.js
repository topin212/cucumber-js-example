let common = [
  'test/*.feature',
  '--require-module ts-node/register',
  '--require test/step_definitions/*Steps.ts',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty'
].join(' ');

module.exports = {
  default: common
};