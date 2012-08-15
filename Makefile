SOURCES=background.js COPYING.md icon128.png icon48.png icon.svg manifest.json README.md

.PHONY: clean

mailcleaner.zip: $(SOURCES)
	mkdir -p build
	cp $(SOURCES) build/
	zip $@ $(SOURCES)

clean:
	rm -rf build
