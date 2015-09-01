widenbot-nowplaying
----

An nowplaying plugin for widenbot.

# Commands

```
"register <lastFmUsername>\t Register your slack username to your lastfm username.\n" +
"nowplaying|np \t Post your now playing.\n",
```

# Installation

1. Add dependency to your bot project:

```
npm install --save widenbot-nowplaying
```

2. Enable in config `plugins`:

```
module.exports = {
    plugins : {
        // ...
        'nowplaying': {}
    }
}
```
