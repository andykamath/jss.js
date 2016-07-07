#JSS.js

Sometimes, writing regular CSS is just too simple.

JSS.js complicates your process by taking your CSS, processing it via jQuery, then returning your CSS back to you

##Install
1) Download jss.js to your project directory
2) Add the following to your HTML <code><head></head></head></code> code:
	<code>
		<script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>
		<script src="/path/to/jss.js"></script>
	</code>
3) Import all your CSS right after you import the JS files
	<code>
		<script type="text/javascript">jss.import('/path/to/your/css.css');</script>
	</code>
	<strong>Do that as many times as you need to for all your CSS files</strong>
4) Add CSS to your CSS files!