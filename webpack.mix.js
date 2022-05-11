let mix = require('laravel-mix');
const domain = 'ecologyofpractices.com.test';
const homedir = require('os').homedir();

mix.options({ manifest: false });
mix.disableNotifications();

mix.js('./src/input.js', 'main.js')
  .postCss('./src/input.css', './style.css', [
    require('tailwindcss'),
  ])
  .browserSync({
    proxy: 'https://' + domain,
    host: domain,
    open: 'external',
    https: {
      key: homedir + '/.config/valet/Certificates/' + domain + '.key',
      cert: homedir + '/.config/valet/Certificates/' + domain + '.crt'
    },
    notify: false,
    files: [
      './index.html',
    ],
  })
