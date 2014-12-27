/* Adapted from the "Cloud-to-Butt" extension:
 * https://github.com/panicsteve/cloud-to-butt
 */

walk(document.body);

function walk(node) {
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
			handleText(node); // this is probably a bad idea.
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

	v = v.replace(/\bhouse\b/g, "<font color=\"0000FF\">house</font>");

//	v = v.replace(/\bThe Cloud\b/g, "My Butt");
//	v = v.replace(/\bThe cloud\b/g, "My butt");
//	v = v.replace(/\bthe Cloud\b/g, "my Butt");
//	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	textNode.nodeValue = v;
}
