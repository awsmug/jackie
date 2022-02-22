let mix = require('laravel-mix');

mix
    .ts('src/ts/editor.ts', 'assets/js')
    .sourceMaps();

mix
    .ts('src/ts/frontend.ts', 'assets/js')
    .sourceMaps();

mix
    .sass('src/scss/editor.scss', 'assets/css')
    .sourceMaps()
    .options({
        processCssUrls: false
    });

mix
    .sass('src/scss/frontend.scss', 'assets/css' )
    .sourceMaps()
    .options({
        processCssUrls: false
    });

mix.minify( 'assets/css/editor.css' );
mix.minify( 'assets/css/frontend.css' );

mix.minify( 'assets/js/editor.js' );
mix.minify( 'assets/js/frontend.js' );