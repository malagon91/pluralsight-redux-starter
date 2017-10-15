/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. this will take a moment...'.blue);


webpack(webpackConfig).run((err,stats) => {
   if (err){ // So fatal error occurred. stop here
       console.log(err.bold.red);
   }

   const jsonStats = stats.toJson();

   if( jsonStats.hasErrors){
       return jsonStats.errors.map( error => console.log(error.red));
   }

   if(jsonStats.hasWarnings){
       console.log('Webpack generated the following warnings: '.bold.yellow);
       jsonStats.warnings.map( warning => console.log(warning.yellow));
   }

   console.log(`Webpack stats: ${stats}`);

   console.log('You app has been compiled in production mode and writte to /dist'. green);

   return 0;
});


/*
xas
 */