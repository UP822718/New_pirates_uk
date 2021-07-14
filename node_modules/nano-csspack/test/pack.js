"use strict";
var test = require('tape');

var pack = require('../csspack.js');

var pairs = [
	['      ', '' ],
	[' * { font-size: normal; /* dfsfdf */ } ', '*{font-size:normal}' ],
	[' * { margin: 1px 1px 1px 1px; } ', '*{margin:1px}' ],
	[' * { margin: 1px 1px 2px 1px; } ', '*{margin:1px 1px 2px}' ],
	[' * { margin: 1px 2px 1px 2px; } ', '*{margin:1px 2px}' ],
	[' * { margin: 1px 2px 1px 3px; } ', '*{margin:1px 2px 1px 3px}' ],
	[' * { padding: 1px 1px 1px; } ', '*{padding:1px}' ],
	[' * { padding: 1px 2px 1px; } ', '*{padding:1px 2px}' ],
	[' * { padding: 1px 2px 3px; } ', '*{padding:1px 2px 3px}' ],
	[' * { padding: 1px 2px; } ', '*{padding:1px 2px}' ],
	[' * { padding: 1px 1px; } ', '*{padding:1px}' ],
	['i { margin: 0px; }', 'i{margin:0}' ],
	['i { margin: 1.0px; }', 'i{margin:1.0px}' ],
	['p{color: #000000; color: #111111; color: #222222; color: #333333;}', 'p{color:#000;color:#111;color:#222;color:#333}' ],
	['p{color: #aaaaaa; color: #ffffff; color: #0099AA; color: #FFAA55;}', 'p{color:#aaa;color:#fff;color:#09A;color:#FA5}' ],
	[' * { color: rgba( 17, 17, 17, 1); } ', '*{color:#111}' ],
	[' * { color: rgba( 68, 69, 70, .5 ); } ', '*{color:rgba(68,69,70,.5)}' ],
	[' * { color: rgb( 68, 69, 70 ); } ', '*{color:#444546}' ],
	['@keyframes  nojs  {\n\t0%  { opacity: 1 }\n\t46% { opacity: 1 }\n\t50% { opacity: 0 }\n\t96%  { opacity: 0 }\n\t100% { opacity: 1 }\n}\n',
	 '@keyframes nojs{0%{opacity:1}46%{opacity:1}50%{opacity:0}96%{opacity:0}100%{opacity:1}}'],
	[' div { background: url("/images/yoy.js") black }', 'div{background:url(/images/yoy.js) black}' ]
];

test('first', function (t) {
	t.plan(pairs.length);
	pairs.forEach(function (pair) {
		t.equal(pack(pair[0]), pair[1]);
	});
	t.end();
});
