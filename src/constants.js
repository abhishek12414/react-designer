const FREE = 0;
const DRAG = 1;
const SCALE = 2;
const ROTATE = 3;
const DRAW = 4;
const TYPE = 5;
const EDIT_OBJECT = 6;

export const modes = {
	FREE,
	DRAG,
	SCALE,
	ROTATE,
	DRAW,
	TYPE,
	EDIT_OBJECT,
};

export const TYPES = Object.freeze({
	MAP: 'map',
	TRACK: 'track',
	GATEWAY: 'gateway',
});

export const SHAPES = Object.freeze({
	// shapes
	arc: 'arc',
	circle: 'circle',
	ellipse: 'ellipse',
	polygon: 'polygon',
	polyline: 'polyline',
	rect: 'rect',
	// others
	gateway: 'gateway',
	image: 'image',
});

export const buildingBlock = Object.freeze({
	WIFI: 'wifi',
});

export const clusterOptions = ['standalone', 'cluster'];

export const identifierKeys = ['macId', 'devEUI'];

export const hardwareTypes = {
	BLE: 'BLE',
	LoRaBLE: 'LoRaBLE',
};

export const fontFamilies = [
	{ name: 'Alegreya Sans', family: 'Alegreya Sans' },
	{ name: 'Alegreya', family: 'Alegreya' },
	{
		name: 'American Typewriter',
		family: 'AmericanTypewriter, Georgia, serif',
	},
	{ name: 'Anonymous Pro', family: 'Anonymous Pro' },
	{ name: 'Archivo Narrow', family: 'Archivo Narrow' },
	{ name: 'Arvo', family: 'Arvo' },
	{ name: 'Bitter', family: 'Bitter' },
	{ name: 'Cardo', family: 'Cardo' },
	{ name: 'Chivo', family: 'Chivo' },
	{ name: 'Crimson Text', family: 'Crimson Text' },
	{ name: 'Domine', family: 'Domine' },
	{ name: 'Fira Sans', family: 'Fira Sans' },
	{ name: 'Georgia', family: 'Georgia, serif' },
	{ name: 'Helvetica Neue', family: '"Helvetica Neue", Arial, sans-serif' },
	{ name: 'Helvetica', family: 'Helvetica, Arial, sans-serif' },
	{ name: 'Inconsolata', family: 'Inconsolata' },
	{ name: 'Karla', family: 'Karla' },
	{ name: 'Lato', family: 'Lato' },
	{ name: 'Libre Baskerville', family: 'Libre Baskerville' },
	{ name: 'Lora', family: 'Lora' },
	{ name: 'Merriweather', family: 'Merriweather' },
	{ name: 'Monaco', family: 'Monaco, consolas, monospace' },
	{ name: 'Montserrat', family: 'Montserrat' },
	{ name: 'Neuton', family: 'Neuton' },
	{ name: 'Old Standard TT', family: 'Old Standard TT' },
	{ name: 'Open Sans', family: 'Open Sans' },
	{ name: 'PT Serif', family: 'PT Serif' },
	{ name: 'Playfair Display', family: 'Playfair Display' },
	{ name: 'Poppins', family: 'Poppins' },
	{ name: 'Roboto Slab', family: 'Roboto Slab' },
	{ name: 'Roboto', family: 'Roboto' },
	{ name: 'Source Pro', family: 'Source Pro' },
	{ name: 'Source Sans Pro', family: 'Source Sans Pro' },
	{ name: 'Varela Round', family: 'Varela Round' },
	{ name: 'Work Sans', family: 'Work Sans' },
];
