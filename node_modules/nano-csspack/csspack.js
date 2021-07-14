"use strict";

function hex_channel(v) {
	return ('0'+(v|0).toString(16)).substr(-2);
}

module.exports = function css_pack(css) {
	return css.replace(/(?:\/\*(?:.|\n)*?\*\/|\t|\n+)/g, '')
		.replace(/ {2,}/g, ' ')
		.replace(/;?\s*}/g, '}')
		.replace(/\}\n+(\d+%|})/g, '}$1')
		.replace(/\s+([{<>+])\s*/g, '$1')
		.replace(/([{;])\s*([\w-]+)\s*:\s+/g, '$1$2:')
		.replace(/,\s+/g, ',')
		.replace(/url\((['"])(.*?)\1\)/g, 'url($2)') //'
		.replace(/([^\d.]0)(rem|em|ex|px|vw|vh|vmin|vmax|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz)/g, '$1')
		.replace(/rgba\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9\.]+)\s*\)/g, function (m, r,g,b,a) {
			return a*1 === 1 ? '#' + hex_channel(r) + hex_channel(g) + hex_channel(b) : 'rgba('+r+','+g+','+b+','+a+')';
		})
		.replace(/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/g, function (m, r,g,b) {
			return '#' + hex_channel(r) + hex_channel(g) + hex_channel(b);
		})
		.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3/gi, '#$1$2$3')
		.replace(/(margin|padding)\s*:\s*([^;}]+)([;}])/g, function (m, kw, vs, end) {
			var vs = vs.trim().split(/\s+/);
			switch (vs.length) {
			case 4:
				if (vs[1] === vs[3]) {
					vs.splice(3, 1);
					if (vs[0] === vs[2]) {
						vs.splice(2, 1);
						if (vs[0] === vs[1])
							vs.splice(1, 1);
					}
				} else
					return m;
				break;
			case 3:
				if (vs[0] === vs[2]) {
					vs.splice(2, 1);
					if (vs[0] === vs[1])
						vs.splice(1, 1);
				} else
					return m;
				break;
			case 2:
				if (vs[0] === vs[1])
					vs.splice(1, 1);
				else
					return m;
				break;
			}
			return kw+':'+vs.join(' ')+end;
		})
		.replace(/^ /, '').replace(/ $/, '');
};
