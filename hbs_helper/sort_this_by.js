const arraySort = require('array-sort')
const helper = function() {}

function byString(o, s) {
    s = String(s).replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

helper.prototype.register = function() {
    enduro.templating_engine.registerHelper('sort_this_by', function(context, sortby, options) {


        if (!context || !(Object.keys(context).length || context.length)) {
            return ''
        }
        let newcontext = arraySort(context, sortby)
        let out = ''
        let subcontext = []
        let lastcontext = newcontext[0]

        for (let key in newcontext) {
            let last_sort = byString(lastcontext, sortby)
            let this_sort = byString(newcontext[key], sortby)
            if (last_sort != this_sort) {
                out += options.fn(subcontext)
                subcontext = []
            }
            subcontext.push(newcontext[key])
            lastcontext = newcontext[key]
        }

        out += options.fn(subcontext)
        return out
    })
}
module.exports = new helper()