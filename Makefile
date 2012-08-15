SOURCES=background.js COPYING.md icon128.png icon48.png icon.svg manifest.json README.md

.PHONY: clean

mailcleaner.zip: $(SOURCES)
	zip $@ $(SOURCES)

clean:
	rm -f mailcleaner.zip
