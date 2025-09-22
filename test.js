'use strict'

var binding=require('bindings')("hello");

require('assert').equal(binding.hello(),"hello world!");
