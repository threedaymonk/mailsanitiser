SOURCES=background.js COPYING.md icon128.png icon48.png icon.svg manifest.json README.md

.PHONY: clean

mailcleaner.crx: $(SOURCES)
	mkdir -p build/mailcleaner
	cp $(SOURCES) build/mailcleaner/
	google-chrome --pack-extension=build/mailcleaner --pack-extension-key=mailcleaner.pem

clean:
	rm -rf build
