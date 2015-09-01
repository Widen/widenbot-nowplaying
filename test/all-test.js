var test = require('tape');

var nowplaying = require('../index');

test('sanity check', function(t){
    t.plan(1);
    t.ok(nowplaying);
});
