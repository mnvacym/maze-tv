module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 120],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'tv-shows',
        'tv-shows-e2e',
        'show-details',
        'general',
        'shared',
        'landing',
        'data-access',
        'ui',
        'utils'
      ]
    ],
    'subject-case': [1, 'never', []],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'core',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'version'
      ]
    ]
  }
};
