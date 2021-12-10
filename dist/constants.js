"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modes = exports.fontFamilies = exports.clusterOptions = exports.buildingBlock = exports.TYPES = exports.SHAPES = void 0;
var FREE = 0;
var DRAG = 1;
var SCALE = 2;
var ROTATE = 3;
var DRAW = 4;
var TYPE = 5;
var EDIT_OBJECT = 6;
var modes = {
  FREE: FREE,
  DRAG: DRAG,
  SCALE: SCALE,
  ROTATE: ROTATE,
  DRAW: DRAW,
  TYPE: TYPE,
  EDIT_OBJECT: EDIT_OBJECT
};
exports.modes = modes;
var TYPES = Object.freeze({
  MAP: 'map',
  TRACK: 'track',
  GATEWAY: 'gateway'
});
exports.TYPES = TYPES;
var SHAPES = Object.freeze({
  // shapes
  arc: 'arc',
  circle: 'circle',
  ellipse: 'ellipse',
  polygon: 'polygon',
  polyline: 'polyline',
  rect: 'rect',
  // others
  gateway: 'gateway',
  image: 'image'
});
exports.SHAPES = SHAPES;
var buildingBlock = Object.freeze({
  WIFI: 'wifi'
});
exports.buildingBlock = buildingBlock;
var clusterOptions = ['standalone', 'cluster'];
exports.clusterOptions = clusterOptions;
var fontFamilies = [{
  name: 'Alegreya Sans',
  family: 'Alegreya Sans'
}, {
  name: 'Alegreya',
  family: 'Alegreya'
}, {
  name: 'American Typewriter',
  family: 'AmericanTypewriter, Georgia, serif'
}, {
  name: 'Anonymous Pro',
  family: 'Anonymous Pro'
}, {
  name: 'Archivo Narrow',
  family: 'Archivo Narrow'
}, {
  name: 'Arvo',
  family: 'Arvo'
}, {
  name: 'Bitter',
  family: 'Bitter'
}, {
  name: 'Cardo',
  family: 'Cardo'
}, {
  name: 'Chivo',
  family: 'Chivo'
}, {
  name: 'Crimson Text',
  family: 'Crimson Text'
}, {
  name: 'Domine',
  family: 'Domine'
}, {
  name: 'Fira Sans',
  family: 'Fira Sans'
}, {
  name: 'Georgia',
  family: 'Georgia, serif'
}, {
  name: 'Helvetica Neue',
  family: '"Helvetica Neue", Arial, sans-serif'
}, {
  name: 'Helvetica',
  family: 'Helvetica, Arial, sans-serif'
}, {
  name: 'Inconsolata',
  family: 'Inconsolata'
}, {
  name: 'Karla',
  family: 'Karla'
}, {
  name: 'Lato',
  family: 'Lato'
}, {
  name: 'Libre Baskerville',
  family: 'Libre Baskerville'
}, {
  name: 'Lora',
  family: 'Lora'
}, {
  name: 'Merriweather',
  family: 'Merriweather'
}, {
  name: 'Monaco',
  family: 'Monaco, consolas, monospace'
}, {
  name: 'Montserrat',
  family: 'Montserrat'
}, {
  name: 'Neuton',
  family: 'Neuton'
}, {
  name: 'Old Standard TT',
  family: 'Old Standard TT'
}, {
  name: 'Open Sans',
  family: 'Open Sans'
}, {
  name: 'PT Serif',
  family: 'PT Serif'
}, {
  name: 'Playfair Display',
  family: 'Playfair Display'
}, {
  name: 'Poppins',
  family: 'Poppins'
}, {
  name: 'Roboto Slab',
  family: 'Roboto Slab'
}, {
  name: 'Roboto',
  family: 'Roboto'
}, {
  name: 'Source Pro',
  family: 'Source Pro'
}, {
  name: 'Source Sans Pro',
  family: 'Source Sans Pro'
}, {
  name: 'Varela Round',
  family: 'Varela Round'
}, {
  name: 'Work Sans',
  family: 'Work Sans'
}];
exports.fontFamilies = fontFamilies;