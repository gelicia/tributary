(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['inlet'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"utf-8\"/>\n	<title>Tributary Sandbox</title>\n	<link rel=\"stylesheet\" media=\"all\" href=\"\"/>\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n	<!-- Adding \"maximum-scale=1\" fixes the Mobile Safari auto-zoom bug: http://filamentgroup.com/examples/iosScaleBug/ -->\n\n  <link rel=\"stylesheet\" href=\"/static/css/trib.css\">\n  <link rel=\"stylesheet\" href=\"/static/css/animation.css\">\n  <link href='http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n  <link rel=\"stylesheet\" href=\"/static/css/tipsy.css\">\n\n  <!-- Add jQuery -->\n  <script src=\"/static/lib/jquery-1.7.min.js\"></script>\n\n  \n  <!-- CodeMirror Things -->\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/lib/codemirror.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/lib/util/dialog.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/night.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/vibrant-ink.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/ambiance.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/elegant.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/addon/lint/lint.css\">\n\n<!-- Add EJ modified lesser dark -->\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/ej.css\">\n\n<link rel='stylesheet' type='text/css' href='http://yui.yahooapis.com/2.9.0/build/reset/reset-min.css' />\n<link rel='stylesheet' type='text/css' href='/static/lib/slider/css/humanity/jquery-ui-slider.css' />\n<link href=\"/static/lib/colorpicker/Color.Picker.Classic.css\" rel=\"stylesheet\" type=\"text/css\" />\n\n\n<!-- And the main styles -->\n<link rel=\"stylesheet\" href=\"/static/css/style.css\" type=\"text/css\" media=\"screen\" title=\"Primary Stylesheet\" charset=\"utf-8\">\n\n\n</head>\n<body>\n<div id=\"container\">\n\n	<section id=\"display\">\n	</section>\n  \n	<aside id=\"panel\">\n		<section id=\"files\">\n			<ul id=\"file-list\">\n			</ul>\n		</section>\n\n		<section id=\"config\" >\n			<button id=\"config-toggle\">Config</button>\n			<button id=\"library-toggle\">Add libraries</button>\n			<button id=\"fullscreen\">Fullscreen</button>\n\n\n			<div id=\"config-content\" class=\"config-content\" style=\"display: none;\">\n				<h4>Display <small><i class=\"explain-this-shit icon-help-circled\"></i></small></h4>\n				<select>\n					<option value=\"svg\">SVG</option>\n					<option value=\"canvas\">Canvas</option>\n					<option value=\"webgl\">WebGL</option>\n					<option value=\"div\">HTML</option>\n				</select>\n\n        \n\n        <div id=\"editorcontrols\">\n          <h4>Editor Controls <small><i class=\"explain-this-shit icon-help-circled\"></i></small></h4>\n          <button id=\"logerrors\" data-name=\"log-errors\">Log Errors</button>\n        </div>\n\n        <div id=\"thumbnail-content\">\n          <h4>Add thumbnail <small><i class=\"explain-this-shit icon-help-circled\"></i></small></h4>\n          <img id=\"trib-thumbnail\" style=\"display:none;\"></img>\n          <input type=\"file\" name=\"files[]\" />\n        </div>\n\n			</div>\n\n				<div id=\"library-content\" class=\"config-content\" style=\"display: none;\">\n					<ul id=\"library-checklist\">\n          <!--\n					<li class=\"lib\"> <input type=\"checkbox\" /> Tabletop </li>\n					<li class=\"lib\"> <input type=\"checkbox\" /> Paper.js </li>\n					<li class=\"lib\"> <input type=\"checkbox\" /> Kartogram </li>\n					<li class=\"lib\"> <input type=\"checkbox\" /> TopoJSON </li>\n          -->\n					</ul>\n					<h4>Import URL</h4>\n					<ul id=\"library-links\">\n						<li class=\"add-link\">Title: <input type=\"text\" class=\"library-title\"> URL: <input type=\"text\" class=\"library-url\">\n						<button class=\"add-library\">Add</button>\n						</li>\n					</ul>\n				</div>\n\n		</section>\n		<section id=\"code\">\n\n		</section>\n\n    <section id=\"controls\">\n    </section>\n\n	</aside>\n  \n  <section id=\"plugins\">\n  </section>\n\n</div>\n\n\n\n\n\n\n<!-- Essential 3rd party libraries -->\n<script src=\"/static/lib/d3.min.js\"></script>\n<script src=\"/static/lib/underscore-min.js\"></script>\n<script src=\"/static/lib/underscore.math.js\"></script>\n<script src=\"/static/lib/backbone-min.js\"></script>\n<script src=\"/static/lib/coffee-script.js\"></script>\n<script src=\"/static/lib/require.js\"></script>\n<script src='/static/lib/three.min.js'></script>\n<script src=\"/static/lib/Stats.js\"></script>\n<script src=\"/static/lib/jshint.js\"></script>\n<script src=\"/static/lib/jsonlint.js\"></script>\n<script src=\"/static/lib/handlebars-1.0.rc.1.js\"></script>\n<script src=\"/static/lib/queue.min.js\"></script>\n<!-- extra 3rd party libs \nTODO: add these as defualt libs in the list\n<script src=\"http://d3js.org/topojson.v0.min.js\"></script>\n<script src=\"http://d3js.org/d3.geo.projection.v0.min.js\"></script>\n-->\n\n\n\n<!-- CodeMirror -->\n<script src=\"/static/lib/CodeMirror3/lib/codemirror.js\"></script>\n<script src=\"/static/lib/CodeMirror3/lib/util/searchcursor.js\"></script>\n<script src=\"/static/lib/CodeMirror3/lib/util/search.js\"></script>\n<script src=\"/static/lib/CodeMirror3/lib/util/dialog.js\"></script>\n<script src=\"/static/lib/CodeMirror3/lib/util/runmode.js\"></script>\n\n<script src=\"/static/lib/CodeMirror3/mode/javascript/javascript.js\"></script>\n<script src=\"/static/lib/CodeMirror3/mode/css/css.js\"></script>\n<script src=\"/static/lib/CodeMirror3/mode/xml/xml.js\"></script>\n<script src=\"/static/lib/CodeMirror3/mode/htmlmixed/htmlmixed.js\"></script>\n<script src=\"/static/lib/CodeMirror3/mode/coffeescript/coffeescript.js\"></script>\n<script src=\"/static/lib/CodeMirror3/mode/clike/clike.js\"></script>\n<script src=\"/static/lib/CodeMirror3/keymap/vim.js\"></script>\n<script src=\"/static/lib/CodeMirror3/keymap/emacs.js\"></script>\n\n<script src=\"/static/lib/CodeMirror3/addon/lint/lint.js\"></script>\n<script src=\"/static/lib/CodeMirror3/addon/lint/javascript-lint.js\"></script>\n<script src=\"/static/lib/CodeMirror3/addon/lint/json-lint.js\"></script>\n\n<!-- UI components TODO: replace with pure d3 -->\n<script src=\"/static/lib/jquery-ui.1.8.16.custom.min.js\"></script>\n<script src='/static/lib/slider/js/jquery.ui.slider.js'></script>\n<script src=\"/static/lib/jquery.tipsy.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\n\n<!-- https://github.com/mudcube/Color-Picker -->\n<script src=\"/static/lib/colorpicker/Color.Picker.Classic.js\" type=\"text/javascript\"></script>\n<script src=\"/static/lib/colorpicker/Color.Space.js\" type=\"text/javascript\"></script>\n<script src=\"/static/lib/dat.gui.min.js\"></script>\n\n<!-- Tributary -->\n<script src=\"/static/templates.js\"></script>\n<script src=\"/static/lib/inlet.js\"></script>\n<script src='/static/tributary.js?v=0.8'></script>\n\n<script type=\"text/javascript\">\n  var tb = Tributary();\n  tb._origin = \"";
  foundHelper = helpers.origin;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.origin; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\";\n</script>\n\n\n<script type=\"text/javascript\">\n\n//get rid of selection when dragging things\nif(typeof document.body.style.MozUserSelect!=\"undefined\")\n    document.body.style.MozUserSelect=\"none\";\nelse if(typeof document.body.onselectstart!=\"undefined\")\n    document.body.onselectstart=function(){return false};\nelse\n    document.body.onmousedown=function(){return false};\ndocument.body.style.cursor = \"default\";\n\n$('i').tipsy({fade: true, gravity: 'n', opacity: 0.86});\n\ntb.ui.setup();\n\ntb.events.on(\"loaded\", function() {\n  tb.loadPlugin(\"/static/plugins/play/plugin.json\"\n  , {}\n  , function (err) { console.log(\"plugin load err?\", err) }\n  );\n  tb.loadPlugin(\"/static/plugins/simple/plugin.json\"\n  , {}\n  , function (err) { console.log(\"plugin load err?\", err) }\n  );\n})\n\n\n</script>\n\n\n\n\n\n</body>\n</html>\n";
  return buffer;});
})();
