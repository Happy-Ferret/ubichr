//--------------------------------------------------------
//
//               Command definitions
//
//--------------------------------------------------------

CmdUtils.CreateCommand({
    name: "amazon-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search Amazon for books matching:",
    author: {},
    icon: "http://www.amazon.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search Amazon for books matching:",
    execute: CmdUtils.SimpleUrlBasedCommand(
        'http://www.amazon.com/s/ref=nb_ss_gw?url=search-alias%3Dstripbooks&field-keywords={text}'
    )
});

CmdUtils.CreateCommand({
    name: "answers-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search Answers.com for:",
    author: {},
    icon: "http://www.answers.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search Answers.com for:",
    execute: CmdUtils.SimpleUrlBasedCommand('http://www.answers.com/{text}')
});

CmdUtils.CreateCommand({
    name: "ask-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search Ask.com for the given words",
    author: {},
    icon: "http://www.ask.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search Ask.com for the given words:",
    execute: CmdUtils.SimpleUrlBasedCommand('http://www.ask.com/web?q={text}')
});

CmdUtils.CreateCommand({
    name: "back",
    takes: {
        "pages": noun_arb_text
    }, // FIXME SHOULD BE INTEGER SOMETHING
    description: "Go back in browser history",
    author: {},
    icon: "",
    homepage: "",
    license: "",
    preview: "Go back {text} steps in history",
    execute: function (directObj) {
        var steps = parseInt(directObj.text);
        steps = -steps - 1;
        history.go(steps);
        CmdUtils.toggleUbiquityWindow();
    }
});

CmdUtils.CreateCommand({
    name: "bugzilla",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Perform a bugzilla search for",
    author: {},
    icon: "http://www.mozilla.org/favicon.ico",
    homepage: "",
    license: "",
    preview: "Perform a bugzilla search for",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "https://bugzilla.mozilla.org/buglist.cgi?query_format=specific&order=relevance+desc&bug_status=__open__&content={text}"
    )
});

CmdUtils.CreateCommand({
    name: "close",
    takes: {},
    description: "Close the current window",
    author: {},
    icon: "",
    homepage: "",
    license: "",
    preview: "Close the current window",
    execute: function (directObj) {
        CmdUtils.toggleUbiquityWindow();
        CmdUtils.closeWindow();
    }
});

CmdUtils.CreateCommand({
    name: "clusty",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Perform a clustered search through clusty.com",
    author: {},
    icon: "http://clusty.com/images/clusty-favicon.ico",
    homepage: "",
    license: "",
    preview: "Perform a clustered search through clusty.com",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://clusty.com/search?query={text}"
    )
});

CmdUtils.CreateCommand({
    name: "code-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search any source code for the given string",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    icon: "http://www.google.com/favicon.ico",
    homepage: "http://codesearch.google.com",
    license: "",
    preview: "Search any source code for the given string",
    execute: CmdUtils.SimpleUrlBasedCommand(
        'http://www.google.com/codesearch?client=opera&sourceid=opera&q={text}'
    )
});

CmdUtils.CreateCommand({
    name: "command-list",
    takes: {},
    description: "Shows the list of Ubiquity commands and what they do",
    author: {},
    icon: "",
    homepage: "",
    license: "",
    preview: "Shows the list of Ubiquity commands and what they do",
    execute: function (directObj) {
        ubiq_show_matching_commands('*all');
    }
});

CmdUtils.CreateCommand({
    name: "cpan",
    icon: "http://search.cpan.org/favicon.ico",
    description: "Search for a CPAN package information",
    homepage: "",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    license: "",
    takes: {
        "package_name": noun_arb_text
    },
    preview: "Search for a CPAN package information",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://search.cpan.org/dist/{text}"
    )
});

CmdUtils.CreateCommand({
    name: "currency-converter",
    takes: {
        "currency_spec": noun_arb_text
    },
    description: "Convert currency using xe.com converter service.<br/><i>Ex.: 5000 NOK to EUR</i>",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    icon: "http://www.xe.com/favicon.ico",
    homepage: "http://xe.com/ucc/",
    license: "",
    preview: "Convert currency values using xe.com converter service.",
    execute: function (directObj) {
        var currency_spec = directObj.text;
        var matches = currency_spec.match(/^([\d\.]+)\s+(\w+)\s+to\s+(\w+)$/);
        var amount = matches[1];
        var curr_from = matches[2].toUpperCase();
        var curr_to = matches[3].toUpperCase();
        var xe_url = "http://www.xe.com/ucc/convert.cgi?Amount=" + escape(amount) +
            "&From=" + escape(curr_from) + "&To=" + escape(curr_to);
        Utils.openUrlInBrowser(xe_url);
    }
});

CmdUtils.CreateCommand({
    name: "dictionary",
    description: "Gives the meaning of a word.",
    author: {
        name: "Isidoros Passadis",
        email: "isidoros.passadis@gmail.com"
    },
    help: "Try issuing &quot;dictionary ubiquity&quot;",
    license: "MPL",
    icon: "http://dictionary.reference.com/favicon.ico",
    takes: {
        "word": noun_arb_text
    },
    execute: function (directObj) {
        var word = directObj.text;
        Utils.openUrlInBrowser("http://dictionary.reference.com/search?q=" + escape(word));
    },
    preview: "Gives the meaning of a word.",
});

CmdUtils.CreateCommand({
    name: "dramatic-chipmunk",
    takes: {},
    description: "Prepare for a dramatic moment of your life",
    author: {},
    icon: "http://www.youtube.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Prepare for a dramatic moment of your life",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.youtube.com/watch?v=a1Y73sPHKxw"
    )
});

CmdUtils.CreateCommand({
    name: "ebay-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search ebay for the given words",
    author: {},
    icon: "http://ebay.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search ebay for the given words",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://search.ebay.com/search/search.dll?satitle={text}"
    )
});

CmdUtils.CreateCommand({
    name: "flickr",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search photos on Flickr",
    author: {},
    icon: "http://flickr.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search photos on Flickr",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.flickr.com/search/?q={text}&w=all"
    )
});

CmdUtils.CreateCommand({
    name: "gcalculate",
    takes: {
        "expression": noun_arb_text
    }, // FIXME a different type?
    description: "Examples: 3^4/sqrt(2)-pi,  3 inch in cm,  speed of light,  0xAF in decimal (<a href=\"http://www.googleguide.com/calculator.html\">Command list</a>)",
    author: {},
    icon: "http://www.google.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Examples: 3^4/sqrt(2)-pi,  3 inch in cm,  speed of light,  0xAF in decimal (<a href=\"http://www.googleguide.com/calculator.html\">Command list</a>)",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.google.com/search?client=opera&num=1&q={text}&sourceid=opera&ie=utf-8&oe=utf-8"
    )
});

CmdUtils.CreateCommand({
    name: "google-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search on Google for the given words",
    author: {},
    icon: "http://www.google.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search on Google for the given words",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.google.com/search?client=opera&num=1&q={text}&sourceid=opera&ie=utf-8&oe=utf-8"
    )
});

CmdUtils.CreateCommand({
    name: "help",
    takes: {},
    description: "Provides basic help on using Ubiquity for Opera",
    author: {},
    icon: "",
    homepage: "",
    license: "",
    preview: "Provides basic help on using Ubiquity for Opera",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://people.opera.com/cosimo/ubiquity/help.html"
    )
});

CmdUtils.CreateCommand({
    name: "image-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search on Google for images",
    author: {},
    icon: "http://www.google.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search on Google for images",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://images.google.com/images?hl=en&q={text}&client=opera&sourceid=opera"
    )
});

CmdUtils.CreateCommand({
    name: "imdb",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Searches for movies on IMDb",
    author: {},
    icon: "http://www.imdb.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Searches for movies on IMDb",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.imdb.com/find?s=all&q={text}&x=0&y=0"
    )
});

CmdUtils.CreateCommand({
    name: "instant-rimshot",
    takes: {},
    description: "Instant Rimshot at your fingertips!",
    author: {},
    icon: "",
    homepage: "http://instantrimshot.com",
    license: "",
    preview: "Instant Rimshot at your fingertips!",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://instantrimshot.com/rimshot.swf"
    )
});

//
// From Ubiquity feed:
// https://ubiquity.mozilla.com/herd/all-feeds/9b0b1de981e80b6fcfee0659ffdbb478d9abc317-4742/
//
// Modified to get the current window domain
//
CmdUtils.CreateCommand({
    name: "isdown",
    icon: "http://downforeveryoneorjustme.com/favicon.ico",
    description: "Check if selected/typed URL is down",
    homepage: "http://www.andyfilms.net",
    author: {
        name: "Andy Jarosz",
        email: "andyfilms1@yahoo.com"
    },
    license: "GPL",
    takes: {
        URL: noun_arb_text
    },
    preview: function (pblock, directObject) {
        //ubiq_show_preview(urlString);
        //searchText = jQuery.trim(directObject.text);
        searchText = directObject.text;
        var words = searchText.split(' ');
        var host = words[1];
        if (searchText.length < 1) {
            pblock.innerHTML = "Checks if URL is down";
            return;
        }
        var previewTemplate = "Checks if <b>" + host + "</b> is down";
        pblock.innerHTML = previewTemplate;
    },
    execute: function (directObject) {
        var url = "http://downforeveryoneorjustme.com/{QUERY}";
        var query = directObject.text;
        // Get the hostname from url
        if (!query) {
            var host = window.location.href;
            var url_comp = host.split('/');
            query = url_comp[2];
        }
        var urlString = url.replace("{QUERY}", query);
        //Utils.openUrlInBrowser(urlString);
        ubiq_xml_http(urlString, function (ajax) {
            if (!ajax) return;
            var text = ajax.responseText;
            if (!text) return;
            var pblock = document.getElementById('ubiq-command-preview');
            if (text.match('is up.')) {
                pblock.innerHTML = '<br/><p style="font-size: 18px;">It\'s just you. The site is <b>up!</b></p>';
            } else {
                pblock.innerHTML = '<br/><p style="font-size: 18px;">It\'s <b>not</b> just you. The site is <b>down!</b></p>';
            }
        });
    }
});

CmdUtils.CreateCommand({
    name: "lastfm",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Listen to some artist radio on Last.fm",
    author: {},
    icon: "http://last.fm/favicon.ico",
    homepage: "",
    license: "",
    preview: "Listen to some artist radio on Last.fm",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.lastfm.com/listen/artist/{text}/similarartists"
    )
});

CmdUtils.CreateCommand({
    name: "maps",
    takes: {
        "address": noun_arb_text
    },
    description: "Shows a location on the map",
    author: {},
    icon: "http://www.google.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Shows a location on the map",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://maps.google.com/maps?q={text}"
    )
});

CmdUtils.CreateCommand({
    name: "msn-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search MSN for the given words",
    author: {},
    icon: "http://www.msn.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Searches MSN for the given words",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://search.msn.com/results.aspx?q={text}"
    )
});

CmdUtils.CreateCommand({
    name: "new-tab",
    takes: {
        "URL": noun_arb_text
    }, // FIXME URL type??
    description: "Open a new tab (or window) with the specified URL",
    author: {},
    icon: "",
    homepage: "",
    license: "",
    preview: "Open a new tab (or window) with the specified URL",
    execute: function (directObj) {
        var url = 'about:';
        if (directObj) {
            url = directObj.text;
        }
        CmdUtils.toggleUbiquityWindow();
        window.open(url);
    }
});

CmdUtils.CreateCommand({
    name: "opera-cache",
    takes: {},
    description: "Show Opera browser cache contents",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    icon: "http://www.opera.com/favicon.ico",
    homepage: "http://www.opera.com",
    license: "",
    preview: "Show Opera browser cache contents",
    execute: CmdUtils.SimpleUrlBasedCommand("opera:cache")
});

CmdUtils.CreateCommand({
    name: "opera-config",
    takes: {
        "config_option": noun_arb_text
    },
    description: "Show Opera browser preferences (filtered by given words)",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    icon: "http://www.opera.com/favicon.ico",
    homepage: "http://www.opera.com",
    license: "",
    preview: "Show Opera browser preferences (filtered by given words)",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "opera:config#{text}"
    )
});

CmdUtils.CreateCommand({
    name: "print",
    takes: {},
    description: "Print the current page",
    author: {},
    icon: "",
    homepage: "",
    license: "",
    preview: "Print the current page",
    execute: function (directObj) {
        CmdUtils.toggleUbiquityWindow();
        window.print();
    }
});

CmdUtils.CreateCommand({
    name: "refresh",
    takes: {},
    description: "Reloads the current document",
    author: {},
    icon: "",
    homepage: "",
    license: "",
    preview: "Reloads the current document",
    execute: function (directObj) {
        CmdUtils.toggleUbiquityWindow();
        CmdUtils.getLocation().reload();
    }
});

CmdUtils.CreateCommand({
    name: "search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search on Google for the given words",
    author: {},
    icon: "http://www.google.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search on Google for the given words",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.google.com/search?client=opera&num=1&q={text}&sourceid=opera&ie=utf-8&oe=utf-8"
    )
});

var bitly_api_user = "ubiquityopera";
var bitly_api_key = "R_59da9e09c96797371d258f102a690eab";
CmdUtils.CreateCommand({
    name: "shorten-url",
    icon: "http://bit.ly/static/images/favicon.ico",
    description: "Shorten your URLs with the least possible keystrokes",
    homepage: "http://bit.ly",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    license: "GPL",
    takes: {
        URL: noun_arb_text
    },
    preview: function (pblock, directObject) {
        var searchText = directObject.text;
        var words = searchText.split(' ');
        var host = words[1];
        if (searchText.length < 1) {
            pblock.innerHTML = "Shortens an URL (or the current tab) with bit.ly";
            return;
        }
        var previewTemplate = "Shortens the URL '" + host + "' with bit.ly";
        pblock.innerHTML = previewTemplate;
    },
    execute: function (directObject) {
        var url = "http://api.bit.ly/shorten?version=2.0.1&longUrl={QUERY}&login=" +
            bitly_api_user + "&apiKey=" + bitly_api_key;
        var query = directObject.text;
        // Get the url from current open tab if none specified
        if (!query || query == "") query = window.location.href;
        var urlString = url.replace("{QUERY}", query);
        ubiq_xml_http(urlString, function (ajax) {

            if (!ajax) return;
            var api_response = ajax.responseText;
            if (!api_response) return;

            var pblock = document.getElementById('ubiq-command-preview');
            var err_code = api_response.errorCode;
            var err_msg = api_response.errorMessage;
            // Received an error from bit.ly API?
            if (err_code > 0 || err_msg) {
                pblock.innerHTML = '<br/><p style="font-size: 18px; color:orange">' +
                    'Bit.ly API error ' + err_code + ': ' + err_msg + '</p>';
                return;
            }

            // API successful. URL has been shortened
            eval('api_response=' + api_response);
            var short_url = api_response.results[query].shortUrl;
            pblock.innerHTML = '<br/><p style="font-size: 24px; font-weight: bold; color: #ddf">' +
                '&rarr; <a href="' + short_url + '">' + short_url + '</a>' +
                '</p>';
        });
    }
});

CmdUtils.CreateCommand({
    name: "slideshare",
    icon: "http://www.slideshare.com/favicon.ico",
    description: "Search for online presentations on SlideShare",
    homepage: "",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    license: "",
    takes: {
        "search_term": noun_arb_text
    },
    preview: "Search for online presentations on SlideShare",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.slideshare.net/search/slideshow?q={text}&submit=post&searchfrom=header&x=0&y=0"
    )
});

CmdUtils.CreateCommand({
    name: "stackoverflow-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Searches questions and answers on stackoverflow.com",
    author: {
        name: "Cosimo Streppone",
        email: "cosimo@cpan.org"
    },
    icon: "http://stackoverflow.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Searches questions and answers on stackoverflow.com",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://stackoverflow.com/search?q={text}"
    )
});

CmdUtils.CreateCommand({
    name: "torrent-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search PirateBay, Isohunt, and Torrentz in new tabs.",
    author: {
        name: "Axel Boldt",
        email: "axelboldt@yahoo.com"
    },
    homepage: "http://math-www.uni-paderborn.de/~axel/",
    license: "Public domain",
    preview: "Search for torrent on PirateBay, Isohunt and Torrentz.",
    execute: function (directObj) {
        var search_string = encodeURIComponent(directObj.text);
        Utils.openUrlInBrowser("http://thepiratebay.org/search.php?q=" + search_string);
        Utils.openUrlInBrowser("http://isohunt.com/torrents/?ihq=" + search_string);
        Utils.openUrlInBrowser("http://www.torrentz.com/search?q=" + search_string);
    }
});

CmdUtils.CreateCommand({
    name: "translate",
    takes: {
        "words": noun_arb_text
    },
    description: "Translates the given words (or text selection, or the current window) to English",
    author: {},
    icon: "http://www.google.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Translates the given words (or text selection, or the current window) to English",
    execute: function (directObj) {
        CmdUtils.toggleUbiquityWindow();
        var text = directObj.text;
        // HARD !!!
        //alert(ubiq_element.innerHTML);
        //var html = ubiq_element.innerHTML.replace(text, 'blah blah blah');
        //ubiq_element.innerHTML = html;
        var words = text.split(/\s+/);
        var dest = 'auto';

        // Detect the destination language ("translate ... to it")
        if (words.length >= 3 && words[words.length - 2].toLowerCase() == 'to') {
            // Get destination language
            dest = words.pop();
            // Remove the 'to'
            words.pop();
            // Update the text to be translated
            text = words.join('');
        }

        // Translate text or current URL
        var url = 'http://translate.google.com/translate_t?#auto|' + dest + '|';
        if (!text || text.length == 0 || text.match('^https?://')) {
            if (!text) text = CmdUtils.getLocation();
            url = 'http://translate.google.com/translate?prev=_t&ie=UTF-8&sl=auto&tl=' + dest + '&history_state0=&u=';
        }
        CmdUtils.openWindow(url + text);
    }
});

CmdUtils.CreateCommand({
    name: "validate",
    icon: "http://www.imageboo.com/files/uhee2ii315oxd8akq0nm.ico",
    description: "Checks the markup validity of the current Web document",
    preview: "Sends this page to the W3C validator",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://validator.w3.org/check?uri={location}"
    )
});

CmdUtils.CreateCommand({
    name: "wayback",
    homepage: "http://www.pendor.com.ar/ubiquity",
    author: {
        name: "Juan Pablo Zapata",
        email: "admin@pendor.com.ar"
    },
    description: "Search old versions of a site using the Wayback Machine (archive.org)",
    help: "wayback <i>sitio a buscar</i>",
    icon: "http://web.archive.org/favicon.ico",
    takes: {
        "Site to search": noun_arb_text
    },
    preview: function (pblock, theShout) {
        pblock.innerHTML = "Buscar versiones antiguas del sitio <b>" + theShout.text + "</b>"
    },
    execute: function (directObj) {
        CmdUtils.toggleUbiquityWindow();
        var url = directObj.text;
        if (!url) url = CmdUtils.getLocation();
        var wayback_machine = "http://web.archive.org/web/*/" + url;
        // Take me back!
        CmdUtils.openWindow(wayback_machine);
    }
});

CmdUtils.CreateCommand({
    name: "weather",
    takes: {
        "location": noun_arb_text
    },
    description: "Show the weather forecast for",
    author: {},
    icon: "http://www.accuweather.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Show the weather forecast for",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.wunderground.com/cgi-bin/findweather/getForecast?query={text}"
    )
});

CmdUtils.CreateCommand({
    name: "wikipedia",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search Wikipedia for the given words",
    author: {},
    icon: "http://en.wikipedia.org/favicon.ico",
    homepage: "",
    license: "",
    preview: function wikipedia_preview(previewBlock, args) {
        var args_format_html = "English";
        var searchText = args.text.trim();
        if (!searchText) {
            previewBlock.innerHTML = "Searches Wikipedia in " + args_format_html + ".";
            return;
        }
        previewBlock.innerHTML = "Searching Wikipedia for <b>" + args.text + "</b> ...";

        function onerror() {
            previewBlock.innerHTML =
                "<p class='error'>" + "Error searching Wikipedia" + "</p>";
        }

        var langCode = "en";
        var apiUrl = "http://" + langCode + ".wikipedia.org/w/api.php";
/*
        // works in browser 
              $.ajax({
                url: 'http://en.wikipedia.org/w/api.php',
                data: {
                    action: 'query',
                    list: 'search',
                    srsearch: searchText,
                    srlimit: 5, // is this a good limit?
                    format: 'json'
                },
                dataType: 'jsonp',
                success: function processResult(apiResult) {
                    function generateWikipediaLink(title) {
                        return "http://" + langCode + ".wikipedia.org/wiki/" +title.replace(/ /g, "_")
                    }
                    function wikiAnchor(title) {
                        return "<a href='"+generateWikipediaLink(title)+"'>"+title+"</a>";
                    }
                    previewBlock.innerHTML = "";
                    for (var i = 0; i < apiResult.query.search.length; i++) {
                        previewBlock.innerHTML += "<p>"+wikiAnchor(apiResult.query.search[i].title) + "<br>"+apiResult.query.search[i].snippet+"</p>";
                    }
                }
              });
*/
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+searchText+"&srlimit=5&format=json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // JSON.parse does not evaluate the attacker's scripts.
                var resp = JSON.parse(xhr.responseText);
                function generateWikipediaLink(title) {
                    return "http://" + langCode + ".wikipedia.org/wiki/" +title.replace(/ /g, "_")
                }
                function wikiAnchor(title) {
                    return "<a href='"+generateWikipediaLink(title)+"'>"+title+"</a>";
                }
                previewBlock.innerHTML = "";
                for (var i = 0; i < resp.query.search.length; i++) {
                    previewBlock.innerHTML += "<p>"+wikiAnchor(resp.query.search[i].title) + "<br>"+resp.query.search[i].snippet+"</p>";
                }
            }
        }
        xhr.send();

    },
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://en.wikipedia.org/wiki/Special:Search?search={text}"
    )
});

CmdUtils.CreateCommand({
    name: "yahoo-answers",
    takes: {
        "question": noun_arb_text
    },
    description: "Search Yahoo! Answers for",
    author: {},
    icon: "http://l.yimg.com/a/i/us/sch/gr/answers_favicon.ico",
    homepage: "",
    license: "",
    preview: "Search Yahoo! Answers for",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://answers.yahoo.com/search/search_result;_ylv=3?p={text}"
    )
});

CmdUtils.CreateCommand({
    name: "yahoo-search",
    takes: {
        "search_string": noun_arb_text
    },
    description: "Search Yahoo! for",
    author: {},
    icon: "http://www.yahoo.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search Yahoo! for",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://search.yahoo.com/search?p={text}&ei=UTF-8"
    )
});

CmdUtils.CreateCommand({
    name: "youtube",
    takes: {
        "videos": noun_arb_text
    },
    description: "Search for videos on YouTube",
    author: {},
    icon: "http://www.youtube.com/favicon.ico",
    homepage: "",
    license: "",
    preview: "Search for videos on YouTube",
    execute: CmdUtils.SimpleUrlBasedCommand(
        "http://www.youtube.com/results?search_type=search_videos&search_sort=relevance&search_query={text}&search=Search"
    )
});