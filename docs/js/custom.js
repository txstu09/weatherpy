//Hide navbar dropdown after click.
$('.navbar-collapse ul li a').click(function(){$('.navbar-toggle:visible').click();});

//Prevent navbar from covering beginning of section.
window.addEventListener("hashchange", function() { scrollBy(0, -50) });

//Remove whitespace in pre tag but keep Python indentation.
[].forEach.call(document.querySelectorAll('pre'), function($pre) {
var lines = $pre.textContent.split('\n');
var matches;
var indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
if (!!indentation) {
    lines = lines.map(function(line) {
    return line.replace(indentation, '');
    });
    return $pre.textContent = lines.join('\n').trim();
}
});