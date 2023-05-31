import * as Vsmth from './vsmth.js';
import arc from 'https://cdn.skypack.dev/svg-arc';


function ring(lo, hi, r) {
  return ['g',
    ['path', {d: arc({x: 200, y: 200, R: r*200, r: r*200 - 5, start: -hi, end: -lo})}],
    ['path', {d: arc({x: 200, y: 200, R: r*200, r: r*200 - 5, start: lo, end: hi})}],
  ];
}

function* genRings(dists, props) {
  const propsum = props.reduce((a, b) => a + b);
  let s = 0;
  let lo = 0;
  for (let i in dists) {
    const m = props[i] / propsum;
    const d = dists[i];
    const hi = 180/Math.PI * Math.acos(1 - (m + s)); //PI not pi...
    yield ring(lo, hi, d);
    s += m;
    lo = hi;
  }
}

function view(draw) {
  const dists = [3/12, 4/12, 6/12, 8/12, 9/12, 12/12]; //reverse?
  const props = [1, 2, 1, 2, 1, 3];
  return ['svg', {style: 'width: 400px; height: 200px'},
    ...Array.from(genRings(dists, props))
  ];
}

Vsmth.init(view, document.body);

console.log(genRings)
