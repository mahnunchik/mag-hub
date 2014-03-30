NODE_BIN ?= node_modules/.bin

MOCHA ?= $(NODE_BIN)/mocha
JSHINT ?= $(NODE_BIN)/jshint

TEST_DIR := test
LIB := index.js

.SUFFIXES:
.PHONY: all lint test

all: lint test

test:
	@$(MOCHA) --reporter spec

lint:
	@$(JSHINT) $(LIB) $(TEST_DIR)
