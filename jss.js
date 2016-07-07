'use strict'
var jss = {
    import: function(index) {
        include(index);
    }
}

function include(index) {
    $.get(index, function(data) { imported(data) });
}

function imported(data) {
    var blocks = data.split('\n\n');
    for (var a = 0; a < blocks.length; a++) {
        var block = data.split('\n\n')[a];
        console.log(block)
        var lines = block.split('\n');

        if (!(block[0].indexOf(':') > -1) && !(block[0].indexOf('@') > -1)) {
            var line = 0;
            if (block.split('\n')[1] == '{') {
                line = 2;
            } else {
                line = 1;
            }
            for (var b = 0; b < block.length; b++) {
                if (block.split('{')[1].split(';')[b].trim().indexOf('}') > -1) break;
                $(block.split('{')[0].trim().split(':')[0].split(' ')[0]).css(block.split('{')[1].split(';')[b].trim().split(':')[0].trim(), block.split('{')[1].split(';')[b].trim().split(':')[1].trim());
                if (block.split('{')[1].split(';')[b].trim() == '}') break;
            }
        } else {
            $("body").append('<style>' + block + '</style>');
        }

    }
}
