var test = require('tape');

var nowplaying = require('../index');

test('sanity check', function(t){
    t.plan(2);
    t.ok(nowplaying);

    var brain = { get: function(foo, cb) { return cb(null, 'plugitin'); } };

    nowplaying.respond({
        brain: brain,
        command: 'np',
        log: {
            info: console.log,
            error: console.error
        },
        args: '',
        plugin: {
            options: {
                api_key: process.env.LASTFM_API_KEY,
                secret: process.env.LASTFM_SECRET
            }
        },
        incoming_message: {
            user_name: 'feltnerm'
        }
    }).then(function(result){
        t.pass(result);
    }).catch(function(error){
        t.fail();
    });


});
