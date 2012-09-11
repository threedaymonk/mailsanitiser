SOURCES=sanitise.js sanitise.css COPYING.md icon128.png icon48.png icon.svg manifest.json README.md

.PHONY: clean

mailsanitiser.zip: $(SOURCES)
	rm -f $@
	zip $@ $(SOURCES)

clean:
	rm -f mailsanitiser.zip
