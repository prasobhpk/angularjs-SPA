var src = 'app';
var build = 'build';
var development = 'build/development/';
var production = 'build/production/';
var srcAssets = 'app';
var developmentAssets = 'build/development/assets';
var productionAssets = 'build/production/assets';

var developmentDist = 'build/development/app';
var productionDist = 'build/production/app';

var vendor = 'bower_components';

module.exports = {
    delete: {
        src: [development, production]
    },
    sass: {
        src: srcAssets + '/**/*.{sass,scss}',
        dest: developmentAssets + '/css',
        //dest: developmentAssets,
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemap: true,
            sourcemapPath: '../../_assets/scss'
        }
    },
    webp: {
        src: productionAssets + '/**/*.{jpg,jpeg,png,webp}',
        dest: productionAssets + '/images/webp',
        //dest: productionAssets + '/images/',
        options: {}
    },
    gzip: {
        src: production + '/**/*.{html,xml,json,css,js}',
        dest: production,
        options: {}
    },
    copyfonts: {
        development: {
            src: srcAssets + '/fonts/*',
            dest: developmentAssets + '/fonts'
        },
        production: {
            src: developmentAssets + '/fonts/*',
            dest: productionAssets + '/fonts'
        }
    },
    base64: {
        src: developmentAssets + '/css/*.css',
        dest: developmentAssets + '/css',
        //src: developmentAssets + '/*.css',
        //dest: developmentAssets + '/',
        options: {
            baseDir: build,
            extensions: ['png'],
            maxImageSize: 20 * 1024, // bytes
            debug: false
        }
    },
    watch: {
        sass: srcAssets + '/**/*.{sass,scss}',
        scripts: srcAssets + '/**/*.js',
        images: srcAssets + '/**/*.{jpg,jpeg,png,webp}',
        html: srcAssets + '/**/*.html',
        svg: srcAssets + '/fonts/*'
    },
    jshint: {
        src: srcAssets + '/**/*.js'
    },
    concat: {
        js: {
            src: srcAssets + '/**/*.js',
            dest: developmentAssets + '/js/',
            //dest: developmentAssets + '/',
            options: {}
        },
        vendorJs: {
            src: [vendor + '/modernizr/modernizr.js',
                vendor + '/jquery/dist/jquery.min.js',
                vendor + '/bootstrap/dist/js/bootstrap.min.js',
                vendor + '/angularjs/angular.min.js',
                vendor + '/angular-route/angular-route.min.js'],
            dest: developmentAssets + '/js/',
            //dest: developmentAssets + '/',
            options: {}
        },
        css: {
            src: [vendor + '/bootstrap/dist/css/bootstrap.min.css',
                developmentAssets + '/css/*.css'
            ],
            dest: developmentAssets + '/css/'
        }

    },
    optimize: {
        css: {
            src: developmentAssets + '/css/*.css',
            dest: productionAssets + '/css/',
            //src: developmentAssets + '/*.css',
            //dest: productionAssets + '/',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            src: developmentAssets + '/js/*.js',
            dest: productionAssets + '/js/',
            //src: developmentAssets + '/*.js',
            //dest: productionAssets + '/',
            options: {}
        },
        images: {
            src: developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
            dest: productionDist + '/images/',
            //src: developmentAssets + '/**/*.{jpg,jpeg,png,gif}',
            //dest: productionAssets + '/',
            options: {
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            }
        },
        html: {
            src: developmentDist + '/**/*.html',
            dest: productionDist,
            options: {
                collapseWhitespace: true
            }
        }
    },
    copy: {
        images: {
            src: srcAssets + '/**/*.{jpg,jpeg,png,webp}',
            dest: developmentAssets + '/images'
        },
        html: {
            src: srcAssets + '/**/*.html',
            dest: developmentDist
        },
        assets: {
            src: developmentAssets + '/**/*',
            dest: developmentDist
        },
        prodAssets: {
            src: productionAssets + '/**/*',
            dest: productionAssets
        }
    },
    revision: {
        src: {
            assets: [
                productionAssets + '/css/*.css',
                productionAssets + '/js/*.js'/*,
                 productionAssets + '/images/**/
            ],
            base: productionAssets
        },
        dest: {
            assets: productionDist,
            manifest: {
                name: 'manifest.json',
                path: productionAssets
            }
        }
    },
    collect: {
        src: [
            productionAssets + '/manifest.json',
            productionDist + '/**/*.{html,xml,txt,json,css,js}'
        ],
        dest: productionDist
    }
};
