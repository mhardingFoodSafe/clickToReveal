(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.DM72_00_bg_kitchen_food_potato_salad_label = function() {
	this.initialize(img.DM72_00_bg_kitchen_food_potato_salad_label);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,752,793);


(lib.DM72_04_2_FRED_JUAN_happy_man_meal_server = function() {
	this.initialize(img.DM72_04_2_FRED_JUAN_happy_man_meal_server);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,793);


(lib.DM72_124_01_receiving_truck_approved_supplier = function() {
	this.initialize(img.DM72_124_01_receiving_truck_approved_supplier);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,809);


(lib.DM72_190_01_food_flow_floor_plan = function() {
	this.initialize(img.DM72_190_01_food_flow_floor_plan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,686);


(lib.DM72_190_ACTIVITY_flow_of_food_assembly_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_assembly_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,160);


(lib.DM72_190_ACTIVITY_flow_of_food_assembly_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_assembly_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,160);


(lib.DM72_190_ACTIVITY_flow_of_food_cook_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_cook_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,185);


(lib.DM72_190_ACTIVITY_flow_of_food_cook_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_cook_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,185);


(lib.DM72_190_ACTIVITY_flow_of_food_cooling_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_cooling_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,160);


(lib.DM72_190_ACTIVITY_flow_of_food_cooling_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_cooling_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,160);


(lib.DM72_190_ACTIVITY_flow_of_food_holding_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_holding_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,120);


(lib.DM72_190_ACTIVITY_flow_of_food_holding_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_holding_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,120);


(lib.DM72_190_ACTIVITY_flow_of_food_preparation_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_preparation_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,259);


(lib.DM72_190_ACTIVITY_flow_of_food_preparation_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_preparation_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,259);


(lib.DM72_190_ACTIVITY_flow_of_food_receiving_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_receiving_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,314);


(lib.DM72_190_ACTIVITY_flow_of_food_receiving_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_receiving_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,314);


(lib.DM72_190_ACTIVITY_flow_of_food_reheat_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_reheat_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,185);


(lib.DM72_190_ACTIVITY_flow_of_food_reheat_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_reheat_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,185);


(lib.DM72_190_ACTIVITY_flow_of_food_serving_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_serving_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,130);


(lib.DM72_190_ACTIVITY_flow_of_food_serving_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_serving_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,130);


(lib.DM72_190_ACTIVITY_flow_of_food_storage_orange = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_storage_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,838,509);


(lib.DM72_190_ACTIVITY_flow_of_food_storage_yellow = function() {
	this.initialize(img.DM72_190_ACTIVITY_flow_of_food_storage_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,838,509);


(lib.DM72_34_08_chef_thinks_take_temperature_chicken_thermometer = function() {
	this.initialize(img.DM72_34_08_chef_thinks_take_temperature_chicken_thermometer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1004);


(lib.DM72_34_08_cooked_chicken_skillet = function() {
	this.initialize(img.DM72_34_08_cooked_chicken_skillet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,793);


(lib.DM_140_01_soup_on_counter = function() {
	this.initialize(img.DM_140_01_soup_on_counter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,603);


(lib.DMH_08_06_spaghetti_meatball_chafing_dishes = function() {
	this.initialize(img.DMH_08_06_spaghetti_meatball_chafing_dishes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,793,793);


(lib.DMH_110080_21_02_waitress_contaminate_food = function() {
	this.initialize(img.DMH_110080_21_02_waitress_contaminate_food);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5049,2700);


(lib.DMH_122_01_walkin_temperature = function() {
	this.initialize(img.DMH_122_01_walkin_temperature);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3259,2183);


(lib.DMH_44a_04_HARROON_employee_thermocouple = function() {
	this.initialize(img.DMH_44a_04_HARROON_employee_thermocouple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4560,3613);


(lib.DMH_52_03_fridge_cool_pots_of_soup = function() {
	this.initialize(img.DMH_52_03_fridge_cool_pots_of_soup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,793);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Whitebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhgPAw6MAAAhhzMDAfAAAMAAABhzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-615.9,-312.9,1231.9,626);


(lib.storagebullet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(76.6,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(63.1,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(48.8,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(37.2,61.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(23.9,61.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_5.setTransform(349.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_6.setTransform(337.3,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_7.setTransform(324.8,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(313.9,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(300.6,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIAAAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQAMAIAOAAQANAAAJgHQALgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_10.setTransform(285.7,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_11.setTransform(269.2,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_12.setTransform(255.7,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_13.setTransform(235.1,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_14.setTransform(223.3,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_15.setTransform(207.4,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_16.setTransform(197.9,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_17.setTransform(186.8,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_18.setTransform(173.4,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_19.setTransform(163,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_20.setTransform(147,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_21.setTransform(127,23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_22.setTransform(111.2,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_23.setTransform(96.2,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_24.setTransform(75.5,23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_25.setTransform(63.9,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_26.setTransform(50,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_27.setTransform(36.7,21.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_28.setTransform(24.4,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_29.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet4, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(380.2,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgRAAgVQABgZAIgQQAJgSAPgJQAPgJASgBQAPABALAHQAMAFAEAKIABAAIAAhXIAaAAIAACvIAAAUIACARIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAFALAJAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgJgPABQgMAAgKAGg");
	this.shape_1.setTransform(365.4,58.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(349.1,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_3.setTransform(332.7,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(320.9,57.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_5.setTransform(304.3,59.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_6.setTransform(291.8,61.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_7.setTransform(277.5,61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_8.setTransform(265.3,60.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_9.setTransform(252.5,61.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(239.2,59.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_11.setTransform(229.7,60.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_12.setTransform(218,64.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgRAAgVQgBgZAKgQQAIgSAPgJQAPgJARgBQAQABALAHQAMAFAEAKIABAAIAAhXIAaAAIAACvIABAUIAAARIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgPQgJAIgGAMQgFAMAAARQAAAOAFANQAFALAJAIQAJAHAOAAQANAAALgIQALgJAEgPIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgJgPABQgNAAgKAGg");
	this.shape_13.setTransform(202.1,58.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_14.setTransform(186.5,61.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(172.1,61.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_16.setTransform(160.5,61.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_17.setTransform(136,61.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_18.setTransform(115.2,61.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_19.setTransform(103,61.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_20.setTransform(93.7,57.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_21.setTransform(75.1,64.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_22.setTransform(60.4,61.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAYIAGAWIAAAAIAHgWIAGgYIAYhJIAVAAIAWBIIAIAZIAFAWIACAAIAEgWIAHgZIAUhIIAaAAIguCQg");
	this.shape_23.setTransform(42.6,61.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_24.setTransform(23.9,61.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_25.setTransform(325.1,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_26.setTransform(311.1,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAXIAGAYIAAAAIAHgYIAGgWIAYhKIAVAAIAWBIIAIAYIAFAYIACAAIAEgYIAHgYIAUhIIAbAAIgvCQg");
	this.shape_27.setTransform(285.6,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_28.setTransform(266.2,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_29.setTransform(254.4,19.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_30.setTransform(243.4,23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXBmQgMgHgIgOIgBAAIgCAYIgWAAIAAgSIABgUIAAiuIAaAAIAABbIAAAAQAIgMAMgHQANgHAQgBQASABAOAJQAOAJAHARQAIAPAAAWQAAAagKASQgJARgOAIQgQAJgQAAIgCAAQgNAAgMgGgAgYgNQgLAIgFAPIgBAFIAAAGIAAAaIAAAEIABAFQAEAOALAIQAKAJAPAAQAUAAALgPQALgPABgaQAAgOgFgNQgFgLgKgHQgJgIgOAAQgNAAgLAJg");
	this.shape_31.setTransform(227.8,20.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_32.setTransform(206.5,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAPgJASgBQAPABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIACASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape_33.setTransform(191.7,20.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_34.setTransform(175.4,23.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_35.setTransform(159,23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_36.setTransform(147.2,19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAiBIIgVhFIgIgWIgFgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAGAXIAEAYIABAAIAHgYIAGgWIAYhKIAVAAIAWBIIAIAYIAGAYIABAAIAEgYIAHgYIAUhIIAaAAIguCQg");
	this.shape_37.setTransform(124.7,23.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQgBgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_38.setTransform(106,23.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_39.setTransform(95.1,23.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_40.setTransform(75.5,23.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_41.setTransform(63.9,23.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_42.setTransform(50,23.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_43.setTransform(36.7,21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_44.setTransform(24.4,20.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_45.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet3, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgRgBgVQAAgZAKgQQAIgSAPgJQAPgJARgBQAQABALAHQAMAFAEAKIABAAIAAhXIAaAAIAACvIAAAUIABARIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAEALAKAIQAJAHAOAAQANAAALgIQALgJAEgPIAAgFIABgGIAAgZIgBgFIAAgGQgEgMgJgJQgKgJgPABQgNAAgKAGg");
	this.shape.setTransform(98.2,58.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(82,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(65.5,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(53.7,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(38.6,57.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(25.2,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(366.4,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgIgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(353,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(341.4,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(327.4,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAGgBIACAUIgKACIgOABQgJAAgIgDg");
	this.shape_10.setTransform(314.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(301.6,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(290.7,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_13.setTransform(277.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIACAZIABAAQAIgNAMgHQANgIARAAQARAAAPAJQANAKAIAQQAIARAAAWQAAAagKAQQgIASgQAIQgPAJgQAAQgOAAgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(261.9,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgIgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQAEgGAEgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(240.4,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_16.setTransform(220.4,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_17.setTransform(207.8,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_18.setTransform(193,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_19.setTransform(181.9,23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_20.setTransform(166.7,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_21.setTransform(154.3,23.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_22.setTransform(141.1,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_23.setTransform(128.5,21.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_24.setTransform(115.3,23.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_25.setTransform(103.5,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_26.setTransform(87.8,19.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_27.setTransform(73,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_28.setTransform(58.6,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_29.setTransform(42.8,19.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_30.setTransform(25.8,20.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_31.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet2, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(273.1,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_1.setTransform(259.7,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(248.1,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(234.1,61.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(220.8,59.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(208.3,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(197.4,61.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(184.2,61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAidIgBgZIAAgWIAYAAIABAZIABAAQAIgNAMgHQANgIARAAQASAAANAKQAOAIAIARQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNgBgMgFQgLgGgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAGIAAAZIAAAFIABAFQAEANALAIQALAJAOAAQANAAAJgHQALgHAEgNQAGgLAAgRQAAgPgFgMQgFgMgKgHQgKgIgNAAQgNAAgLAJg");
	this.shape_8.setTransform(168.6,64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(147.1,61.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_10.setTransform(127.1,61.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_11.setTransform(114.5,59.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(99.2,61.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_13.setTransform(86,61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag6BIIAAgOIBBhVIAJgLIAKgMIAAgBIhOAAIAAgVIBtAAIAAARIhABTIgJAMIgJALIAAABIBUAAIAAAUg");
	this.shape_14.setTransform(72.1,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_15.setTransform(58.1,61.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_16.setTransform(43.1,61.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_17.setTransform(31.5,61.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_18.setTransform(22.2,57.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgQAAQgSAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_19.setTransform(321.5,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_20.setTransform(305.2,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_21.setTransform(289.3,23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_22.setTransform(272,23.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_23.setTransform(258.1,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAGgBIACAUIgKACIgOABQgJAAgIgDg");
	this.shape_24.setTransform(244.8,21.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_25.setTransform(232.3,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_26.setTransform(221.4,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_27.setTransform(208.2,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_28.setTransform(191.8,26.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_29.setTransform(180.4,20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_30.setTransform(172.9,23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_31.setTransform(163.6,19.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_32.setTransform(150.9,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_33.setTransform(139.3,23.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_34.setTransform(118.9,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_35.setTransform(107.1,20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_36.setTransform(96,23.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_37.setTransform(84.1,21.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_38.setTransform(70.9,23.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_39.setTransform(59.1,20.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_40.setTransform(48,23.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABOBlIgGhZIgBgcIgBgfIAAgbIgBAAIgMAkIgOAoIgkBiIgSAAIghhhIgNgnQgGgUgEgSIgBAAIgBAbIgBAfIgCAeIgFBXIgZAAIAOjJIAhAAIAjBhIALAjQAFARAEAQIAAAAIAJghIAMgjIAkhhIAhAAIANDJg");
	this.shape_41.setTransform(29.1,20.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_42.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet1, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_122_01_walkin_temperature();
	this.instance.parent = this;
	this.instance.setTransform(496,153,0.209,0.209);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.StorageHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape.setTransform(-208.2,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape_1.setTransform(-225.3,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_2.setTransform(-242,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_3.setTransform(-254.7,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_4.setTransform(-269.6,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgGgGgDgLQgEgKAAgRIAAg6IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QAAANAEAHQADAFALAAIAHAAIAHgBIAAAjQgFACgIABIgRABQgLAAgIgEg");
	this.shape_5.setTransform(-283.9,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBkQgQgDgJgFIAKgmQAKAFANAEQANADAOABQAPgBAJgFQAIgGAAgKQAAgJgIgHQgIgHgRgGQgagIgPgOQgOgPAAgWQAAgRAJgOQAIgNASgIQARgIAXAAQARAAANADQAMADAKAEIgKAlQgHgDgKgDQgLgEgPAAQgOAAgHAGQgHAGAAAIQgBAJAKAGQAIAGATAHQAbAKAMAOQANAOABAVQAAASgJAOQgJAOgSAIQgSAJgbAAQgRAAgQgEg");
	this.shape_6.setTransform(-297.4,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StorageHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.SSHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-79.1,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-96.4,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-109.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_3.setTransform(-117.5,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_4.setTransform(-125.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_5.setTransform(-137.7,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBkQgPgDgKgFIAKgmQAKAFAMAEQAOADAOABQAPgBAJgFQAIgGAAgKQAAgJgIgHQgIgHgRgGQgZgIgQgOQgPgPABgWQgBgRAKgOQAIgNASgIQARgIAXAAQARAAANADQAMADAJAEIgJAlQgHgDgLgDQgKgEgPAAQgOAAgHAGQgHAGAAAIQgBAJAKAGQAJAGASAHQAbAKAMAOQANAOABAVQAAASgJAOQgJAOgSAIQgSAJgbAAQgRAAgQgEg");
	this.shape_6.setTransform(-153.7,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_7.setTransform(-173.1,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_8.setTransform(-188,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape_9.setTransform(-211.9,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_10.setTransform(-229.3,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_11.setTransform(-242.1,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBKIg1iTIAyAAIAUBFIAEARIADASIABAAIADgSIAFgRIAThFIAwAAIg3CTg");
	this.shape_12.setTransform(-254.1,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_13.setTransform(-267.2,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_14.setTransform(-281.3,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgsBkQgQgDgJgFIAKgmQAKAFANAEQANADAOABQAPgBAJgFQAIgGAAgKQAAgJgIgHQgIgHgRgGQgagIgPgOQgOgPAAgWQAAgRAJgOQAIgNASgIQARgIAXAAQARAAANADQAMADAKAEIgKAlQgHgDgKgDQgLgEgPAAQgOAAgHAGQgHAGAAAIQgBAJAKAGQAIAGATAHQAbAKAMAOQANAOABAVQAAASgJAOQgJAOgSAIQgSAJgbAAQgRAAgQgEg");
	this.shape_15.setTransform(-297.4,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.SSBullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(224.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(211,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_2.setTransform(196.7,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(185.1,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(171.8,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_5.setTransform(151.1,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(136.9,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_7.setTransform(126.6,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_8.setTransform(115.9,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_9.setTransform(104.6,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_10.setTransform(91.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_11.setTransform(77.8,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_12.setTransform(67.3,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_13.setTransform(59.1,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_14.setTransform(50.4,19.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(39.4,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_16.setTransform(24.4,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_17.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSBullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.SSBullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape.setTransform(224.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(208.6,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(192.8,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(181.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_4.setTransform(169.4,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_5.setTransform(154.4,26.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_6.setTransform(139,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_7.setTransform(120.7,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(109.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_9.setTransform(94.4,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(77.9,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_11.setTransform(63.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(53.7,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_13.setTransform(40.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_14.setTransform(25.5,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_15.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSBullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.SSbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DM72_04_2_FRED_JUAN_happy_man_meal_server();
	this.instance.parent = this;
	this.instance.setTransform(487,25,0.762,0.762);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSbg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.ReheatHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-177.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-194.7,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-207.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgDgLQgDgKAAgRIAAg6IgTAAIAAgiIATAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANADAHQAFAFAKAAIAIAAIAFgBIAAAjQgEACgIABIgRABQgLAAgIgEg");
	this.shape_3.setTransform(-217.3,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_4.setTransform(-230.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_5.setTransform(-246.3,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYBrIAAhRQAAgPgFgIQgGgIgMAAQgJAAgGAEQgFAEgDAGIgBAFIAAAGIAABXIgtAAIAAjVIAtAAIAABUIAAAAIAJgIIAJgHIALgEQAGgBAHAAQAOAAAMAHQALAGAHAPQAHAOgBAVIAABWg");
	this.shape_6.setTransform(-263.1,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_7.setTransform(-279.8,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeBmQgDgFgDgMIgIgeQgEgTgIgHQgHgHgNAAIgOAAIAABQIgtAAIAAjHIAagCQAQgCATAAQAVAAAQAEQAQADALAJQAJAHAFAKQAFALAAAOQAAANgGALQgFAJgIAHQgIAGgJADIAAABQAKAFAHAJQAGAKAEAOIAGAXIAGAVIAEANgAgXhDIgHACIAAA4IASAAQAQgBAKgHQAJgJAAgNQAAgOgJgHQgIgHgPAAIgOAAg");
	this.shape_8.setTransform(-295.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ReheatHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.reheatbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(352.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_1.setTransform(339.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(327.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(313.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAEAMAKAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgIgQAAQgMgBgKAIg");
	this.shape_4.setTransform(296.4,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_5.setTransform(280.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(266.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(251.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(239.4,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_9.setTransform(225.6,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_10.setTransform(201.4,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_11.setTransform(185,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(169.1,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_13.setTransform(150.8,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(137.6,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(121.8,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_16.setTransform(101.8,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_17.setTransform(81.2,26.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_18.setTransform(68.7,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_19.setTransform(56.9,23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AApBoIAAhSIAAAAQgGALgMAHQgMAIgRAAQgRgBgOgIQgOgJgIgRQgIgQAAgVQAAgcAKgRQAKgSAPgHQAPgJAPAAQAQAAALAIQAMAGAFAMIABAAIAAgXIAZAAIAAATIgBAVIAACkgAgUhLQgKAHgFANQgGANAAAQQAAAPAFALQAFAMAJAHQAKAIANAAQANgBAKgGQAKgIAFgNIACgGIAAgGIAAgcIAAgGIgBgFQgDgNgKgIQgKgJgPAAQgNAAgJAHg");
	this.shape_20.setTransform(39.7,26.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag4BlIAAjJIBsAAIAAAWIhSAAIAAA/IBOAAIAAAVIhOAAIAABJIBXAAIAAAWg");
	this.shape_21.setTransform(25,20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_22.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.reheatbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.reheatbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape.setTransform(349.3,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(333,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(316.6,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(304.8,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(289.7,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(276.3,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(255.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(244.7,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_8.setTransform(231.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(214.9,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(198.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_11.setTransform(177.7,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(157.6,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape_13.setTransform(135.5,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(119.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_15.setTransform(103.3,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_16.setTransform(84.1,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(70.7,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_18.setTransform(55.1,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_19.setTransform(39,26.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_20.setTransform(24.5,20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.reheatbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.reheatbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DMH_44a_04_HARROON_employee_thermocouple();
	this.instance.parent = this;
	this.instance.setTransform(373,-13,0.175,0.175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reheatbg, new cjs.Rectangle(0,-13,1209.3,642.4), null);


(lib.receivingbullet5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgIgQAAQgMgBgKAIg");
	this.shape.setTransform(111,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(94.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(78.3,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(66.5,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(53.7,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_5.setTransform(39.4,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_6.setTransform(24.4,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_7.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet5, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAPgJASgBQAPABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIACASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape.setTransform(234,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(217.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(201.3,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(189.5,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(172.9,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGALAAQAMAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(160.4,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_6.setTransform(146.1,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_7.setTransform(133.9,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_8.setTransform(121.1,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_9.setTransform(107.8,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_10.setTransform(98.3,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_11.setTransform(86.6,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgQAAgXQgBgYAKgQQAIgRAPgKQAPgJARgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIABATIAAASIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHAEgQIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgIgPAAQgNgBgKAIg");
	this.shape_12.setTransform(70.7,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_13.setTransform(55.1,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_14.setTransform(40.7,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAnBmQgDgFgDgMIgIggQgEgUgJgJQgKgJgQgBIgZAAIAABYIgaAAIAAjHIAXgDIAbgBQAUAAAOAEQAOAEAKAJQAHAGAEAKQAEAKAAAMQAAANgFALQgFAKgIAHQgJAGgLAEIAAABQAMAEAHAKQAIAKADAQIAJAkQAEAOADAGgAgdhQIgKACIAABJIAbAAQAUAAAMgKQAMgKAAgSQAAgTgMgKQgNgJgUAAIgQABg");
	this.shape_15.setTransform(25.9,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_16.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet4, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(328.4,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_1.setTransform(315,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(303.4,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(289.4,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(276,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(263.6,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(252.7,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(239.5,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_8.setTransform(223.9,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(202.4,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_10.setTransform(182.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_11.setTransform(169.7,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_12.setTransform(149.6,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_13.setTransform(133.4,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_14.setTransform(116.9,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_15.setTransform(105.1,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_16.setTransform(87.8,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_17.setTransform(73,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_18.setTransform(58.6,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_19.setTransform(42.8,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_20.setTransform(25.8,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet3, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(227.8,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_1.setTransform(214.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(203.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(195.8,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_4.setTransform(182.6,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_5.setTransform(167.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_6.setTransform(157.1,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_7.setTransform(150,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_8.setTransform(139,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAEAMAKAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgKgIgPAAQgMgBgKAIg");
	this.shape_9.setTransform(122.6,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_10.setTransform(103.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_11.setTransform(91.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_12.setTransform(77.3,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_13.setTransform(61.7,26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_14.setTransform(46.7,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_15.setTransform(32.5,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMBlIAAjJIAZAAIAADJg");
	this.shape_16.setTransform(20.6,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_17.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(438.3,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_1.setTransform(428.3,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_2.setTransform(415.1,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_3.setTransform(404.1,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_4.setTransform(397,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_5.setTransform(385.4,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAIgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_6.setTransform(368.4,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_7.setTransform(351.1,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_8.setTransform(336.8,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgQAAQgSAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_9.setTransform(315.7,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAIALQAGALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_10.setTransform(300.2,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_11.setTransform(285.4,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_12.setTransform(269.9,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_13.setTransform(257.7,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIACAZIABAAQAIgNAMgHQANgIARAAQARAAAPAJQANAKAIAQQAIARAAAWQAAAagKAQQgIASgQAIQgPAJgQAAQgOAAgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(243.9,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIAAAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_15.setTransform(226.9,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_16.setTransform(210.3,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_17.setTransform(184.6,23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_18.setTransform(163.8,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_19.setTransform(151.6,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_20.setTransform(142.3,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_21.setTransform(123.3,23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_22.setTransform(109.7,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_23.setTransform(96.2,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_24.setTransform(81.1,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_25.setTransform(66.1,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_26.setTransform(55.2,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_27.setTransform(41.2,23.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_28.setTransform(25.5,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_29.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_124_01_receiving_truck_approved_supplier();
	this.instance.parent = this;
	this.instance.setTransform(294.7,85.7,0.644,0.644);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.receivingtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBCQgFgFAAgIQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIQgBAIgEAFQgFAGgIAAQgHAAgFgGgAgMgmQgFgGAAgIQAAgIAFgFQAFgGAHAAQAIAAAFAGQAEAFABAIQgBAIgEAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(-24.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(-35.8,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(-48.2,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_3.setTransform(-61.4,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgJAXgBQALAAAKACQAKADAFADIgGAUQgEgCgIgCQgIgCgKAAQgRgBgLAIQgLAHgGANQgGAMAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_4.setTransform(-75.5,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(-90.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(-107.3,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgJAXgBQALAAAKACQAKADAFADIgGAUQgEgCgIgCQgIgCgKAAQgRgBgLAIQgLAHgGANQgGAMAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_7.setTransform(-122.1,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(-139.3,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(-152.6,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBrIAAjVIAZAAIAADVg");
	this.shape_10.setTransform(-163.1,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_11.setTransform(-174.9,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgJAXgBQALAAAKACQAKADAFADIgGAUQgEgCgIgCQgIgCgKAAQgRgBgLAIQgLAHgGANQgGAMAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_12.setTransform(-189.7,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_13.setTransform(-200.1,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAANAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgHgDg");
	this.shape_14.setTransform(-208.7,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_15.setTransform(-217.6,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_16.setTransform(-230.9,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgVIAXAAIABAYIACAAQAHgNANgIQANgHARAAQASABAOAIQANAJAIARQAIAQAAAXQAAAagKAQQgJARgPAJQgPAIgQABQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAJgEAOIgBAGIgBAFIAAAZIABAGIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAJgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_17.setTransform(-245.8,6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgOQADgNAKgIQAHgIAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAFgDALQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_18.setTransform(-264.7,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgwBbQgUgMgMgXQgLgXAAgfQAAgfAMgYQAMgYAVgNQAVgNAaAAQAcAAAVANQAUANALAXQALAXAAAeQAAAigNAYQgMAXgVAMQgVAMgaAAQgaAAgVgNgAgjhGQgOAMgHATQgIATAAAVQAAAWAIATQAIASAOAMQAOALAUAAQAVAAAOgLQAPgMAHgTQAIgTAAgWQAAgPgEgPQgEgOgIgMQgIgMgMgHQgMgHgRAAQgUAAgPAMg");
	this.shape_19.setTransform(-280.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingtext, new cjs.Rectangle(-292.5,-20,585.1,40.1), null);


(lib.ReceivingHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-184.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-201.5,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-214.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXBKIg1iTIAyAAIATBFIAGARIACASIABAAIAEgSIAEgRIAThFIAwAAIg3CTg");
	this.shape_3.setTransform(-226.4,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_4.setTransform(-238.4,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_5.setTransform(-250.4,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBDQgRgJgKgRQgKgRAAgWQAAgVAKgSQAJgRAUgLQASgLAbAAIASACIARAEIgIAiIgKgDQgGgBgKgBQgRABgKALQgKALAAASQAAANAEAJQAGAKAIAEQAJAEALAAIAPAAIAMgEIAFAiQgGADgLACQgLABgNAAQgXAAgRgJg");
	this.shape_6.setTransform(-265,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_7.setTransform(-279.8,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeBmQgDgFgDgMIgIgeQgEgTgIgHQgHgHgNAAIgOAAIAABQIgtAAIAAjHIAagCQAQgCATAAQAVAAAQAEQAQADALAJQAJAHAFAKQAFALAAAOQAAANgGALQgFAJgIAHQgIAGgJADIAAABQAKAFAHAJQAGAKAEAOIAGAXIAGAVIAEANgAgXhDIgHACIAAA4IASAAQAQgBAKgHQAJgJAAgNQAAgOgJgHQgIgHgPAAIgOAAg");
	this.shape_8.setTransform(-295.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ReceivingHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.prepbullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape.setTransform(269.4,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(252.8,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(241.1,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(232.5,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(220.1,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(204.9,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_6.setTransform(193.1,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgHgMQgIgLgQgBQgLABgIAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEALAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAIgIQAHgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_7.setTransform(177.1,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(157,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_9.setTransform(145,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(131.8,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_11.setTransform(115.3,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_12.setTransform(100.5,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_13.setTransform(89,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_14.setTransform(78.4,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_15.setTransform(66.5,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_16.setTransform(52.4,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_17.setTransform(40.1,23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_18.setTransform(25.8,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_19.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbullet3, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.prepbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape.setTransform(224.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(208.6,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(192.8,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(181.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_4.setTransform(169.4,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_5.setTransform(154.4,26.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_6.setTransform(139,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_7.setTransform(120.7,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(109.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_9.setTransform(94.4,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(77.9,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_11.setTransform(63.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(53.7,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_13.setTransform(40.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_14.setTransform(25.5,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_15.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.prepbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape.setTransform(272.1,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(260.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(248.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(237.3,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_4.setTransform(224.1,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(207.6,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(192.8,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(172.1,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(160.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(146.5,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(133.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(120.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(109.8,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_13.setTransform(96.6,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIAAAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQAMAIAOAAQANAAAJgHQALgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(81,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(59.5,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_16.setTransform(39.5,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_17.setTransform(24.5,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_18.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.prepbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_110080_21_02_waitress_contaminate_food();
	this.instance.parent = this;
	this.instance.setTransform(225,218,0.151,0.151);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.PrepHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape.setTransform(-154.5,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_1.setTransform(-171.9,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-184.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgGgGgDgLQgEgKAAgRIAAg6IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QAAANAEAHQADAFALAAIAHAAIAHgBIAAAjQgFACgIABIgRABQgLAAgIgEg");
	this.shape_3.setTransform(-194.4,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_4.setTransform(-208,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_5.setTransform(-220.7,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_6.setTransform(-235.3,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhKBpIAAicIAAgbIgBgXIAoAAIACAVIAAAAQAIgMANgGQAMgGAPAAQARAAANAJQAOAJAJARQAIAQAAAYQAAAbgKAQQgJARgQAJQgPAIgQAAQgNAAgKgEQgKgFgFgHIAAAAIAABJgAgRg+QgIAHgCAKIgBAEIAAAEIAAAUIAAAFIABAFQACAIAHAGQAHAGAKAAQAOAAAJgLQAIgKAAgTQAAgMgEgJQgDgJgHgGQgHgFgJAAQgKAAgHAGg");
	this.shape_7.setTransform(-251.5,6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_8.setTransform(-268.7,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_9.setTransform(-281.8,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIBmIAAjHQALgBAPgBQAPgCAVAAQAUAAAPAEQAQAEAKAIQAKAIAGAMQAFAMAAAPQABAPgFANQgFALgJAIQgMALgRAGQgRAEgTAAIgIAAIgIgBIAABJgAgThBIgIABIAAA7IAHABIAJAAQASAAAKgJQAKgIAAgPQAAgOgJgJQgJgHgRgBIgLACg");
	this.shape_10.setTransform(-296.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PrepHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.MainBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_01_food_flow_floor_plan();
	this.instance.parent = this;
	this.instance.setTransform(-32,14,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MainBG, new cjs.Rectangle(-32,14,1238.7,607), null);


(lib.holdingbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgCIAAAVIgJACIgOABQgJAAgHgDg");
	this.shape.setTransform(354.5,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_1.setTransform(342.2,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgIAHQgIAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgHADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_2.setTransform(322.1,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_3.setTransform(295.8,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_4.setTransform(284.2,61.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(270.9,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(251.7,61.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(240.7,59.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_8.setTransform(232.3,58.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(216.3,61.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_10.setTransform(200.3,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_11.setTransform(193.2,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_12.setTransform(175.9,61.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgIgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQAEgGAEgFIAIgIQAHgFAIgDQAHgCALAAQAJAAALAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_13.setTransform(155.8,61.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_14.setTransform(139.8,58.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_15.setTransform(131.2,59.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_16.setTransform(111.7,61.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(95.9,61.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJADQAJADAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_18.setTransform(80,58);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAYIAFAWIABAAIAHgWIAGgYIAYhJIAVAAIAWBIIAIAZIAGAWIABAAIAEgWIAHgZIAUhIIAaAAIguCQg");
	this.shape_19.setTransform(60.7,61.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_20.setTransform(39.2,61.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_21.setTransform(25.2,61.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_22.setTransform(536.9,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgNABgIAGg");
	this.shape_23.setTransform(523.5,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_24.setTransform(511.9,23.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_25.setTransform(497.9,23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_26.setTransform(484.5,21.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_27.setTransform(472.1,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_28.setTransform(461.2,23.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKgBAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_29.setTransform(448,23.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagKAQQgJASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_30.setTransform(432.4,26.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAALAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_31.setTransform(410.9,23.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_32.setTransform(390.9,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_33.setTransform(378.2,21.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_34.setTransform(363,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_35.setTransform(349.8,23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAIgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_36.setTransform(334.2,26.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_37.setTransform(316.9,23.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_38.setTransform(304.7,23.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_39.setTransform(290.9,26.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_40.setTransform(269.4,23.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_41.setTransform(253.4,20.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAGgBIACAUIgKACIgOABQgJAAgIgDg");
	this.shape_42.setTransform(238.5,21.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_43.setTransform(226,23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape_44.setTransform(203.9,20.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_45.setTransform(187.7,23.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_46.setTransform(171.2,23.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_47.setTransform(159.4,19.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_48.setTransform(144.3,19.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_49.setTransform(130.9,23.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_50.setTransform(108.9,23.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_51.setTransform(95.3,23.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_52.setTransform(81.2,23.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_53.setTransform(64.9,26.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_54.setTransform(49.9,23.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_55.setTransform(40.5,20.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag8BmIgWgCIAAjGIAagDIAegBQAbAAAUAHQAUAGAOAMQANANAHASQAIARAAAZQAAAYgIAUQgHATgOAPQgOAOgXAHQgWAIgeAAIgZgBgAgrhQIgNABIAACfIAMABIAPABQApgBAWgWQAWgWAAgoQAAgYgJgSQgJgRgSgKQgTgJgaAAIgSABg");
	this.shape_56.setTransform(27.6,20.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_57.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holdingbullet2, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.Holdingbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape.setTransform(495.4,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgIgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQAEgGAEgFIAIgIQAHgFAIgDQAHgCALAAQAJAAALAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_1.setTransform(475.3,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(459.3,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(450.7,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAPgJASgBQAPABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIACASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape_4.setTransform(430.6,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(414.3,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_6.setTransform(398.4,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgHADgMADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_7.setTransform(377.7,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(366.1,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(352.1,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(338.7,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgLAGQgMAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHABAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(326.3,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(315.4,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_13.setTransform(302.2,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAJgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_14.setTransform(286.6,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(265.1,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_16.setTransform(245.1,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_17.setTransform(232.4,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_18.setTransform(212.4,26.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_19.setTransform(196.1,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_20.setTransform(184.3,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgQAAgXQgBgYAKgQQAIgRAPgKQAPgJARgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHAEgQIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgIgPAAQgNgBgKAIg");
	this.shape_21.setTransform(171.9,20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_22.setTransform(160.3,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_23.setTransform(148.6,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_24.setTransform(132.1,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_25.setTransform(113.3,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_26.setTransform(99.4,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_27.setTransform(86.1,21.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_28.setTransform(77.7,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_29.setTransform(65.9,23.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_30.setTransform(49.3,23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABOBlIgGhZIgBgcIgBgfIAAgbIgBAAIgMAkIgOAoIgkBiIgSAAIghhhIgNgnQgGgUgEgSIgBAAIgBAbIgBAfIgCAeIgFBXIgZAAIAOjJIAhAAIAjBhIALAjQAFARAEAQIAAAAIAJghIAMgjIAkhhIAhAAIANDJg");
	this.shape_31.setTransform(29.1,20.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_32.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Holdingbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.HoldingHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-207.1,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-224.4,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-237.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsBjQgOgJgJgRQgIgRAAgXQAAgZAJgQQAJgRAPgKQAPgJARAAQANAAAKAFQAKAEAGAIIAAAAIAAhQIAuAAIAACoIAAAZIABATIgpAAIgCgVIAAAAQgIAMgMAGQgMAGgNAAQgSAAgOgJgAgOgDQgIAEgDAKQgEAJAAAMQABATAHAKQAJALAOAAQAJAAAIgGQAHgGACgKIABgFIAAgFIAAgTIAAgFIAAgDQgCgKgHgFQgIgHgKAAQgKAAgGAGg");
	this.shape_3.setTransform(-250.6,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_4.setTransform(-263.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_5.setTransform(-276.2,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAmBlIAAhVIhLAAIAABVIguAAIAAjJIAuAAIAABOIBLAAIAAhOIAuAAIAADJg");
	this.shape_6.setTransform(-295.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HoldingHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.holdingbg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DMH_08_06_spaghetti_meatball_chafing_dishes();
	this.instance.parent = this;
	this.instance.setTransform(483,-10,0.921,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.holdingbg, new cjs.Rectangle(0,-10,1213.4,639.4), null);


(lib.coolingtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBCQgFgFAAgIQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIQgBAIgEAFQgFAGgIAAQgHAAgFgGgAgMgmQgFgGAAgIQAAgIAFgFQAFgGAHAAQAIAAAFAGQAEAFABAIQgBAIgEAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(-176.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_1.setTransform(-183.5,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(-196.7,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAOgJATAAQAPAAALAGQALAGAGAJIAAAAIAAhWIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgJAHgGALQgFANAAAQQAAAPAFAMQAEANAKAGQAKAIANAAQAOAAAKgJQAKgHAFgPIABgGIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgKgIgPgBQgMAAgKAIg");
	this.shape_3.setTransform(-213.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_4.setTransform(-224.6,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_5.setTransform(-234.1,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_6.setTransform(-248.4,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(-264.9,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_8.setTransform(-281.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingtext, new cjs.Rectangle(-292.5,-20,585.1,40.1), null);


(lib.coolingimage2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_52_03_fridge_cool_pots_of_soup();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhedAxLMAAAhiVMC87AAAMAAABiVg");
	this.shape.setTransform(-35.2,209);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingimage2, new cjs.Rectangle(-639.8,-105.7,1209.3,629.4), null);


(lib.CoolingHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-210.5,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-227.8,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-240.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_3.setTransform(-248.9,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_4.setTransform(-261.7,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_5.setTransform(-279,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBbQgXgNgMgXQgMgXAAgdQAAgiAPgYQAPgXAZgNQAYgMAeAAQASAAANADQANACAGAEIgJAkQgHgDgKgCQgJgCgMgBQgTAAgOAIQgOAHgIAPQgJAPAAAVQAAAfARASQAQARAfAAQALAAAKgCQAKgBAHgDIAHAkQgHADgNACQgNADgTAAQgiAAgYgNg");
	this.shape_6.setTransform(-296.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CoolingHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.coolingbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(352.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_1.setTransform(339.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(327.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(313.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAEAMAKAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgIgQAAQgMgBgKAIg");
	this.shape_4.setTransform(296.4,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_5.setTransform(280.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(266.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(251.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(239.4,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_9.setTransform(225.6,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_10.setTransform(201.4,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_11.setTransform(185,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(169.1,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_13.setTransform(150.8,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(137.6,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(121.8,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_16.setTransform(101.8,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_17.setTransform(81.2,26.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_18.setTransform(68.7,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_19.setTransform(56.9,23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AApBoIAAhSIAAAAQgGALgMAHQgMAIgRAAQgRgBgOgIQgOgJgIgRQgIgQAAgVQAAgcAKgRQAKgSAPgHQAPgJAPAAQAQAAALAIQAMAGAFAMIABAAIAAgXIAZAAIAAATIgBAVIAACkgAgUhLQgKAHgFANQgGANAAAQQAAAPAFALQAFAMAJAHQAKAIANAAQANgBAKgGQAKgIAFgNIACgGIAAgGIAAgcIAAgGIgBgFQgDgNgKgIQgKgJgPAAQgNAAgJAHg");
	this.shape_20.setTransform(39.7,26.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag4BlIAAjJIBsAAIAAAWIhSAAIAAA/IBOAAIAAAVIhOAAIAABJIBXAAIAAAWg");
	this.shape_21.setTransform(25,20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_22.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.coolingbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape.setTransform(349.3,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(333,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(316.6,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(304.8,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(289.7,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(276.3,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(255.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(244.7,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_8.setTransform(231.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(214.9,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(198.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_11.setTransform(177.7,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(157.6,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape_13.setTransform(135.5,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(119.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_15.setTransform(103.3,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_16.setTransform(84.1,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(70.7,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_18.setTransform(55.1,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_19.setTransform(39,26.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_20.setTransform(24.5,20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.coolingbg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cooking one
	this.instance = new lib.DM_140_01_soup_on_counter();
	this.instance.parent = this;
	this.instance.setTransform(210,76,0.979,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingbg1, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.cookingbg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cooking one
	this.instance = new lib.DM72_34_08_chef_thinks_take_temperature_chicken_thermometer();
	this.instance.parent = this;
	this.instance.setTransform(456,97,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookingbg2, new cjs.Rectangle(0,0,1209.7,637.5), null);


(lib.cookingbg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cooking one
	this.instance = new lib.DM72_34_08_cooked_chicken_skillet();
	this.instance.parent = this;
	this.instance.setTransform(425,35,0.745,0.745);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookingbg1, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.CookHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-202.5,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-219.8,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-232.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASBrIgig9IgMAPIAAAuIguAAIAAjVIAuAAIAACAIABAAIAEgJIAGgJIAdgrIA3AAIg1A6IA8BYg");
	this.shape_3.setTransform(-243.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_4.setTransform(-261.7,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_5.setTransform(-279,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBbQgXgNgMgXQgMgXAAgdQAAgiAPgYQAPgXAZgNQAYgMAeAAQASAAANADQANACAGAEIgJAkQgHgDgKgCQgJgCgMgBQgTAAgOAIQgOAHgIAPQgJAPAAAVQAAAfARASQAQARAfAAQALAAAKgCQAKgBAHgDIAHAkQgHADgNACQgNADgTAAQgiAAgYgNg");
	this.shape_6.setTransform(-296.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CookHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.cookbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape.setTransform(421.9,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_1.setTransform(406.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_2.setTransform(390.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_3.setTransform(375.6,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(361.1,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_5.setTransform(346.8,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(335.2,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(315.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(304,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgMAGQgLAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(290.7,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_10.setTransform(271.5,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_11.setTransform(258.1,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(246.5,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_13.setTransform(232.5,23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_14.setTransform(219.2,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_15.setTransform(206.7,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_16.setTransform(195.8,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(182.6,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_18.setTransform(167,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABPBKIAAhRQAAgVgIgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgQgBQgIABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEALAAQAQAAAKAIQAKAIAFANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQAKAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_19.setTransform(145.5,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_20.setTransform(125.5,23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgHgDg");
	this.shape_21.setTransform(112.9,21.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_22.setTransform(94.2,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_23.setTransform(82.6,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_24.setTransform(68.6,23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_25.setTransform(54.3,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_26.setTransform(40.1,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag4BlIAAjJIBsAAIAAAWIhSAAIAAA/IBOAAIAAAVIhOAAIAABJIBXAAIAAAWg");
	this.shape_27.setTransform(25,20.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_28.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.cookbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(427.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgNABgIAGg");
	this.shape_1.setTransform(414.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(402.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(388.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(375.2,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgMAGQgLAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(362.7,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(351.8,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_7.setTransform(338.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagKAQQgJASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_8.setTransform(323,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(301.5,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_10.setTransform(281.5,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_11.setTransform(268.9,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_12.setTransform(248.8,26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_13.setTransform(232.6,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_14.setTransform(220.8,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_15.setTransform(211.5,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_16.setTransform(195,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_17.setTransform(178.5,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_18.setTransform(163.7,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_19.setTransform(143,23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_20.setTransform(127.1,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_21.setTransform(115.3,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_22.setTransform(99.3,23.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_23.setTransform(82.8,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_24.setTransform(69.6,23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_25.setTransform(56.9,21.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_26.setTransform(44.6,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag8BmIgWgCIAAjGIAagDIAegBQAbAAAUAHQAUAGAOAMQANANAHASQAIARAAAZQAAAYgIAUQgHATgOAPQgOAOgXAHQgWAIgeAAIgZgBgAgrhQIgNABIAACfIAMABIAPABQApgBAWgWQAWgWAAgoQAAgYgJgSQgJgRgSgKQgTgJgaAAIgSABg");
	this.shape_27.setTransform(27.6,20.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_28.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.BtnStorage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_storage_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_storage_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,838,509);


(lib.BtnServenSell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_serving_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_serving_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302,130);


(lib.BtnReheat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_reheat_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_reheat_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,185);


(lib.BtnReceiving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_receiving_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_receiving_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,314);


(lib.BtnPrep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_preparation_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_preparation_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,625,259);


(lib.BtnHolding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_holding_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_holding_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361,120);


(lib.BtnCooling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_cooling_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_cooling_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334,160);


(lib.Btncook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_cook_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_cook_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,185);


(lib.BtnAssembleandPackage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_ACTIVITY_flow_of_food_assembly_orange();
	this.instance.parent = this;

	this.instance_1 = new lib.DM72_190_ACTIVITY_flow_of_food_assembly_yellow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,306,160);


(lib.AssemblyandPackbullet7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape.setTransform(272.1,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(260.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(248.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(237.3,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_4.setTransform(224.1,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(207.6,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(192.8,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(172.1,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(160.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(146.5,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(133.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(120.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(109.8,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_13.setTransform(96.6,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIAAAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQAMAIAOAAQANAAAJgHQALgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(81,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(59.5,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_16.setTransform(39.5,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_17.setTransform(24.5,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_18.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet7, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(260,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_1.setTransform(248.3,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_2.setTransform(234.1,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_3.setTransform(224.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_4.setTransform(217.1,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(196.7,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(180.2,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_7.setTransform(168.5,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_8.setTransform(159.9,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(147.4,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(132.2,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_11.setTransform(120.4,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_12.setTransform(104.4,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_13.setTransform(84.3,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgHgDg");
	this.shape_14.setTransform(72.4,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_15.setTransform(59.2,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_16.setTransform(42.6,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_17.setTransform(25.8,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_18.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet6, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape.setTransform(181.2,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(165,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(153.2,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_3.setTransform(141.4,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_4.setTransform(127,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(113.5,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAXIAGAYIABAAIAGgYIAGgWIAYhKIAVAAIAWBIIAIAYIAFAYIACAAIAEgYIAHgYIAUhIIAaAAIguCQg");
	this.shape_6.setTransform(95.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape_7.setTransform(75.7,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_8.setTransform(59.3,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(43.4,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAxBlIAAhfIhhAAIAABfIgaAAIAAjJIAaAAIAABVIBhAAIAAhVIAaAAIAADJg");
	this.shape_10.setTransform(26.8,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_11.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet5, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape.setTransform(294.6,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(278.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(266.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_3.setTransform(257.8,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(245.3,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_5.setTransform(233.4,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(224.5,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(210.5,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIAAAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_8.setTransform(194.3,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_9.setTransform(179.3,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(165,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(149.1,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(138.2,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_13.setTransform(127.4,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_14.setTransform(112.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_15.setTransform(98.2,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_16.setTransform(86.4,19.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_17.setTransform(69.1,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_18.setTransform(54.3,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_19.setTransform(39.8,23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_20.setTransform(25.5,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet4, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape.setTransform(210.3,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(195.6,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_2.setTransform(185.2,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAJgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_3.setTransform(173.6,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_4.setTransform(158.6,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_5.setTransform(149.2,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgQAAgXQgBgYAKgQQAIgRAPgKQAPgJARgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIABATIAAASIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHAEgQIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgIgPAAQgNgBgKAIg");
	this.shape_6.setTransform(136.8,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_7.setTransform(114.1,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_8.setTransform(97.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_9.setTransform(75.5,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_10.setTransform(61.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(46.9,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_12.setTransform(36.5,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_13.setTransform(25.5,20.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_14.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet3, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(217.8,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_1.setTransform(204.8,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQgBgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_2.setTransform(190.1,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(179.2,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_4.setTransform(168.4,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(148.9,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(132.3,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_7.setTransform(110.3,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_8.setTransform(93.9,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_9.setTransform(77.6,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_10.setTransform(61.7,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_11.setTransform(50.8,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(41.1,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA5BlIgWg/IhGAAIgWA/IgbAAIBFjJIAeAAIBFDJgAAeARIgUg5IgGgTIgEgSIAAAAIgFASIgGASIgTA6IA8AAg");
	this.shape_13.setTransform(26.2,20.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_14.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIACAZIABAAQAIgNAMgHQANgIARAAQARAAAPAJQANAKAIAQQAIARAAAWQAAAagKAQQgIASgQAIQgPAJgQAAQgOAAgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape.setTransform(75.6,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(59,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(48.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnBlIgahpIgIgjIgFgeIAAAAIgGAeIgJAjIgdBpIgbAAIgzjJIAbAAIAYBlIAJAlIAGAhIAAAAIAHghIAKglIAbhlIAaAAIAZBmIAIAjQAEARACARIABAAIAHgiIAJgkIAahlIAbAAIg5DJg");
	this.shape_3.setTransform(29.8,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_4.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.assembleandpackagebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DM72_00_bg_kitchen_food_potato_salad_label();
	this.instance.parent = this;
	this.instance.setTransform(635,127,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.assembleandpackagebg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.AssembleandPackHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-15.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-32.5,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-45.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASBrIgjg9IgLAPIAAAuIguAAIAAjVIAuAAIAACAIAAAAIAGgJIAFgJIAdgrIA3AAIg0A6IA8BYg");
	this.shape_3.setTransform(-56.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBDQgSgJgJgRQgKgRAAgWQAAgVAKgSQAJgRATgLQATgLAaAAIATACIAQAEIgHAiIgKgDQgHgBgIgBQgTABgJALQgLALAAASQAAANAGAJQAFAKAIAEQAKAEALAAIAOAAIAMgEIAFAiQgGADgLACQgLABgNAAQgXAAgRgJg");
	this.shape_4.setTransform(-72.3,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_5.setTransform(-87.6,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhIBmIAAjHQALgBAPgBQAPgCAVAAQAVAAAOAEQAQAEAKAIQAKAIAGAMQAFAMAAAPQABAPgFANQgFALgJAIQgMALgRAGQgRAEgSAAIgJAAIgIgBIAABJgAgThBIgIABIAAA7IAIABIAIAAQASAAAKgJQAKgIAAgPQAAgOgJgJQgJgHgRgBIgLACg");
	this.shape_6.setTransform(-103.3,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsBjQgOgJgIgRQgJgRAAgXQAAgZAJgQQAJgRAPgKQAPgJARAAQANAAALAFQAKAEAEAIIABAAIAAhQIAuAAIAACoIAAAZIABATIgpAAIgCgVIAAAAQgHAMgMAGQgNAGgNAAQgSAAgOgJgAgOgDQgHAEgFAKQgDAJAAAMQAAATAJAKQAIALANAAQAKAAAIgGQAHgGACgKIABgFIAAgFIAAgTIAAgFIgBgDQgBgKgIgFQgGgHgMAAQgIAAgHAGg");
	this.shape_7.setTransform(-128,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_8.setTransform(-145.5,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_9.setTransform(-162.5,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag+BEIAKgDIAKgFQAFgDAFgFQAGgEADgGIACgEIAAgDIAAgDIgCgEIg1iGIAyAAIAWBJIAEAOIACANIABAAIAEgOIADgNIAShJIAxAAIgiBhQgLAcgIATQgJATgIALQgHALgIAIQgMAKgMAEQgLAFgJABg");
	this.shape_10.setTransform(-183.9,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_11.setTransform(-196,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPBnQgLgFgIgNIgBAAIgBAUIgnAAIABgTIAAgZIAAioIAuAAIAABUIAAAAQAGgKAMgFQALgGAPAAQARAAAOAJQANAKAJAQQAHAQABAWQgBAbgKARQgJASgPAJQgQAIgRAAIgCAAQgLAAgLgFgAgSgCQgHAFgCAKIgBAEIAAAEIAAAWIABAIQACAJAHAGQAHAGAKAAQAOAAAIgKQAJgLAAgUQAAgLgEgKQgDgJgHgEQgHgFgKgBQgJABgIAGg");
	this.shape_12.setTransform(-208.7,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABDBLIAAhPQAAgQgFgIQgFgJgLAAQgIAAgGAEQgFAFgDAGIgBAGIAAAGIAABVIgsAAIAAhRQAAgPgFgHQgFgJgLAAQgJAAgFAFQgFAFgCAGIgCAGIAAAGIAABUIgsAAIAAhjIgBgaIgBgVIAnAAIACAUIABAAQADgFAGgFQAFgGAJgDQAJgEAMAAQAPAAAKAGQAKAIAFALIAAAAIAJgLIAKgHQAGgDAHgCQAHgCAIAAQAOAAALAGQAMAIAGAOQAGAOABAWIAABVg");
	this.shape_13.setTransform(-231.1,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_14.setTransform(-251.8,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBKQgMgDgJgFIAJghIAKAGIAPAEIAOACQAJAAAFgEQAFgDgBgGQABgFgFgEQgEgEgMgEQgXgHgKgLQgJgMAAgNQAAgOAHgKQAIgLANgGQAOgGAQgBQAOABALACQAKACAHAEIgIAgQgFgDgJgDQgIgDgKAAQgIAAgDADQgFAEAAAFQAAAFAFAEQAFADANAFQAUAHAKAKQAJALAAAQQAAAOgGALQgIAKgOAGQgOAHgUgBQgOAAgNgCg");
	this.shape_15.setTransform(-266.2,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBKQgMgDgIgFIAHghIAMAGIANAEIAPACQAJAAAFgEQAEgDAAgGQAAgFgEgEQgEgEgMgEQgXgHgKgLQgKgMABgNQAAgOAIgKQAHgLANgGQANgGASgBQANABAKACQALACAHAEIgIAgQgFgDgIgDQgJgDgJAAQgJAAgEADQgEAEAAAFQAAAFAFAEQAEADANAFQAWAHAJAKQAKALAAAQQAAAOgIALQgHAKgOAGQgOAHgUgBQgPAAgMgCg");
	this.shape_16.setTransform(-279.2,3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AArBlIgPg0Ig6AAIgOA0IgvAAIA9jJIA7AAIA/DJgAAVAPIgMgqIgGgUIgEgTIAAAAIgFAUIgFATIgMAqIAsAAg");
	this.shape_17.setTransform(-295.8,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssembleandPackHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.StorageMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_7166");
	}
	this.frame_664 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(663).call(this.frame_664).wait(1));

	// Heading
	this.instance = new lib.StorageHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.5,-289.3,1.002,1.001,0,0,0,-3.8,-3.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-252.8,regY:3.9,x:-521.8,y:-281.6,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(636).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.storagebullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(1).to({regX:164.2,regY:41.8,x:-395.8,y:-223.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(601).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.storagebullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-164,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).wait(1).to({regX:185.6,regY:39.1,x:-374.4,y:-144.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(516).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 3
	this.instance_3 = new lib.storagebullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-83,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).wait(1).to({regX:192.5,regY:42.1,x:-367.5,y:-60.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(346).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 4
	this.instance_4 = new lib.storagebullet4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-260,-8.7,1,1,0,0,0,300,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(404).to({_off:false},0).wait(1).to({regX:178.2,regY:39.1,x:-381.8,y:10.4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(231).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_5 = new lib.storagebg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(635).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_6 = new lib.Whitebg("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,-2.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.ServenSellMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_71618");
	}
	this.frame_519 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(518).call(this.frame_519).wait(1));

	// Heading
	this.instance = new lib.SSHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-188,regY:3.5,x:-456.8,y:-281.2,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(491).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// consider
	this.instance_1 = new lib.coolingtext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,-224.5,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).wait(1).to({regX:-231.9,regY:0,x:-514.5,y:-244.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_2 = new lib.SSBullet1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).wait(1).to({regX:115.4,regY:23.2,x:-444.6,y:-197.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_3 = new lib.SSBullet2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-159.9,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(319).to({_off:false},0).wait(1).to({regX:114.7,regY:19.9,x:-445.3,y:-160,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(171).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_4 = new lib.SSbg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(491).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.ReheatMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_71614");
	}
	this.frame_454 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(453).call(this.frame_454).wait(1));

	// Heading
	this.instance = new lib.ReheatHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-236.8,regY:3.5,x:-505.7,y:-281.4,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(426).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// consider
	this.instance_1 = new lib.coolingtext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,-224.5,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).wait(1).to({regX:-231.9,regY:0,x:-514.5,y:-244.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(291).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_2 = new lib.reheatbullet1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).wait(1).to({regX:178.1,regY:23.1,x:-381.9,y:-197.3,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(291).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_3 = new lib.reheatbullet2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-159.9,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).wait(1).to({regX:178.7,regY:22.9,x:-381.3,y:-157,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(171).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_4 = new lib.reheatbg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:308.2,y:-6.5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(426).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-327.7,1231.9,642.4);


(lib.RecievingMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_7163");
	}
	this.frame_1009 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1008).call(this.frame_1009).wait(1));

	// Heading
	this.instance = new lib.ReceivingHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.6,-3.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-240.2,regY:3.7,x:-509.3,y:-281.9,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(981).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Purchase
	this.instance_1 = new lib.receivingbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(1).to({regX:221.5,regY:22.7,x:-338.5,y:-242.3,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(952).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Inspect
	this.instance_2 = new lib.receivingbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-204.5,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(274).to({_off:false},0).wait(1).to({regX:116.3,regY:22.9,x:-443.7,y:-201.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(706).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Temp
	this.instance_3 = new lib.receivingbullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-164,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(309).to({_off:false},0).wait(1).to({regX:166.6,regY:22.7,x:-393.4,y:-161.3,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(671).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Particular Concern
	this.instance_4 = new lib.receivingtext();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-287.4,-123.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(364).to({_off:false},0).wait(1).to({regX:-155.9,regY:2.7,x:-443.3,y:-120.7,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(616).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Ready to Eat
	this.instance_5 = new lib.receivingbullet4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-260,-83,1,1,0,0,0,300,20);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(364).to({_off:false},0).wait(1).to({regX:120.4,regY:23.1,x:-439.6,y:-79.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(616).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Seafood
	this.instance_6 = new lib.receivingbullet5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-260,-42.5,1,1,0,0,0,300,20);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(574).to({_off:false},0).wait(1).to({regX:58.9,regY:19.9,x:-501.1,y:-42.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(406).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_7 = new lib.receivingbg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(981).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_8 = new lib.Whitebg("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1,-2.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.PrepMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_7168");
	}
	this.frame_759 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(758).call(this.frame_759).wait(1));

	// Heading
	this.instance = new lib.PrepHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-225.5,regY:3.5,x:-494.4,y:-281.5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(731).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.prepbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(554).to({_off:false},0).wait(1).to({regX:136.7,regY:22.9,x:-423.3,y:-242.1,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(176).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.prepbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(584).to({_off:false},0).wait(1).to({regX:115.4,regY:23.2,x:-444.6,y:-197.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(146).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 3
	this.instance_3 = new lib.prepbullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-159.9,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(625).to({_off:false},0).wait(1).to({regX:137.8,regY:20.4,x:-422.2,y:-159.5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(106).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_4 = new lib.prepbg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(731).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 2
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.HoldingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_71615");
	}
	this.frame_515 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(514).call(this.frame_515).wait(1));

	// Heading
	this.instance = new lib.HoldingHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.2,1.002,1.001,0,0,0,-3.9,-4.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-251.6,regY:3.5,x:-520.5,y:-281.2,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(486).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.Holdingbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:false},0).wait(1).to({regX:250.9,regY:23,x:-309.1,y:-242,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(256).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.holdingbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(314).to({_off:false},0).wait(1).to({regX:270.8,regY:38.9,x:-289.2,y:-181.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(171).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_3 = new lib.holdingbg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:606.7,regY:309.7,x:2.1,y:-5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(486).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Backgroud
	this.instance_4 = new lib.Whitebg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,-2.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-324.7,1231.9,639.4);


(lib.CoolingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{SWITCH:329});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_71612");
	}
	this.frame_624 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(623).call(this.frame_624).wait(1));

	// Heading
	this.instance = new lib.CoolingHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-253.8,regY:3.5,x:-522.7,y:-281.5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(596).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_1 = new lib.coolingbullet2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-263,-167.5,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(429).to({_off:false},0).wait(1).to({regX:178.7,regY:22.9,x:-384.3,y:-164.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(166).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_2 = new lib.coolingbullet1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-263,-208,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(329).to({_off:false},0).wait(1).to({regX:178.1,regY:23.1,x:-384.9,y:-204.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(266).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Consider
	this.instance_3 = new lib.coolingtext();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-284,-242);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(329).to({_off:false},0).wait(1).to({regX:-231.9,x:-515.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(266).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image 2
	this.instance_4 = new lib.coolingimage2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(143,52.9,1,1,0,0,0,104,261.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(329).to({_off:false},0).wait(1).to({regX:-35.2,regY:209,x:3.8,y:0,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(266).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_5 = new lib.coolingbg1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(306).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(290));

	// Layer 2
	this.instance_6 = new lib.Whitebg("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,-2.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.CookingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_71610");
	}
	this.frame_554 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(553).call(this.frame_554).wait(1));

	// Heading
	this.instance = new lib.CookHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.2,1.002,1.001,0,0,0,-3.9,-4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-249.8,regY:3.5,x:-518.7,y:-281.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(526).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.cookbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).wait(1).to({regX:216.2,regY:23,x:-343.8,y:-242,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(201).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.cookbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(444).to({_off:false},0).wait(1).to({regX:214.3,regY:22.9,x:-345.7,y:-197.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(81).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image2
	this.instance_3 = new lib.cookingbg2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(324).to({_off:false},0).wait(1).to({regX:604.8,regY:318.7,x:0.2,y:4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(201).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image1
	this.instance_4 = new lib.cookingbg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(215));

	// Background
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.AssemblyandPackingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120c00_en_71616");
	}
	this.frame_726 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = false;}
		
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(725).call(this.frame_726).wait(1));

	// Heading
	this.instance = new lib.AssembleandPackHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.2,1.002,1.001,0,0,0,-3.9,-4.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-156.4,regY:3.7,x:-425.1,y:-281,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(696).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Bullet 1
	this.instance_1 = new lib.AssemblyandPackbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-240.9,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(259).to({_off:false},0).wait(1).to({regX:41.3,regY:23.4,x:-518.7,y:-237.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(436).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Bullet 2
	this.instance_2 = new lib.AssemblyandPackbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-197.7,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(294).to({_off:false},0).wait(1).to({regX:111.3,regY:23.8,x:-448.7,y:-193.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(401).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Bullet 3
	this.instance_3 = new lib.AssemblyandPackbullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-153.2,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(339).to({_off:false},0).wait(1).to({regX:108.6,regY:23.2,x:-451.4,y:-150,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(356).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Bullet 4
	this.instance_4 = new lib.AssemblyandPackbullet4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-260,-112.7,1,1,0,0,0,300,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(384).to({_off:false},0).wait(1).to({regX:150.4,regY:22.7,x:-409.6,y:-110,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// consider
	this.instance_5 = new lib.coolingtext();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.4,-51.7,1,1,0,0,0,300,20);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(459).to({_off:false},0).wait(1).to({regX:-231.9,regY:0,x:-514.5,y:-71.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(237).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Bullet 5
	this.instance_6 = new lib.AssemblyandPackbullet5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-260,-31.7,1,1,0,0,0,300,20);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(459).to({_off:false},0).wait(1).to({regX:94,regY:23,x:-466,y:-28.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(237).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Bullet 6
	this.instance_7 = new lib.AssemblyandPackbullet6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-260,11.5,1,1,0,0,0,300,20);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(609).to({_off:false},0).wait(1).to({regX:132.4,regY:20.1,x:-427.6,y:11.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Bullet 7
	this.instance_8 = new lib.AssemblyandPackbullet7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-260,54.7,1,1,0,0,0,300,20);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(644).to({_off:false},0).wait(1).to({regX:136.7,regY:22.9,x:-423.3,y:57.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(51).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Image
	this.instance_9 = new lib.assembleandpackagebg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(696).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Background
	this.instance_10 = new lib.Whitebg("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1,-10);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-322.9,1231.9,637.7);


// stage content:
(lib._120a00_en_716i = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("_120c00_en_7161");
	}
	this.frame_144 = function() {
		exportRoot.stop();
		
		var clicked = 0; //keeps track of everything
		
		function disableAll(){
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.disabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.disabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.disabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.disabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.disabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.disabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.disabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.disabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.disabled = true;}
		}
		
		exportRoot.btn_receive.addEventListener("click", receive_clickHandler.bind(this));
		function receive_clickHandler(){
			exportRoot.receive.gotoAndPlay(1); //play the info clip
			exportRoot.btn_receive.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_store.addEventListener("click", store_clickHandler.bind(this));
		function store_clickHandler(){
			exportRoot.store.gotoAndPlay(1); //play the info clip
			exportRoot.btn_store.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_prep.addEventListener("click", prep_clickHandler.bind(this));
		function prep_clickHandler(){
			exportRoot.prep.gotoAndPlay(1); //play the info clip
			exportRoot.btn_prep.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_cook.addEventListener("click", cook_clickHandler.bind(this));
		function cook_clickHandler(){
			exportRoot.cook.gotoAndPlay(1); //play the info clip
			exportRoot.btn_cook.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_cool.addEventListener("click", cool_clickHandler.bind(this));
		function cool_clickHandler(){
			exportRoot.cool.gotoAndPlay(1); //play the info clip
			exportRoot.btn_cool.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_reheat.addEventListener("click", reheat_clickHandler.bind(this));
		function reheat_clickHandler(){
			exportRoot.reheat.gotoAndPlay(1); //play the info clip
			exportRoot.btn_reheat.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_hold.addEventListener("click", hold_clickHandler.bind(this));
		function hold_clickHandler(){
			exportRoot.hold.gotoAndPlay(1); //play the info clip
			exportRoot.btn_hold.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_assemble_pack.addEventListener("click", assemble_pack_clickHandler.bind(this));
		function assemble_pack_clickHandler(){
			exportRoot.assemble_pack.gotoAndPlay(1); //play the info clip
			exportRoot.btn_assemble_pack.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
		
		exportRoot.btn_serve_sell.addEventListener("click", serve_sell_clickHandler.bind(this));
		function serve_sell_clickHandler(){
			exportRoot.serve_sell.gotoAndPlay(1); //play the info clip
			exportRoot.btn_serve_sell.visible = false; //hide button for no replays
			disableAll();
			if(clicked >= 9){
				exportRoot.play();
			}
			else {
				clicked++;
			}
		}
	}
	this.frame_160 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(16).call(this.frame_160).wait(1));

	// Serving or Selling
	this.serve_sell = new lib.ServenSellMC();
	this.serve_sell.parent = this;
	this.serve_sell.setTransform(639.9,385.4);
	this.serve_sell._off = true;

	this.timeline.addTween(cjs.Tween.get(this.serve_sell).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Assembly and Packaging
	this.assemble_pack = new lib.AssemblyandPackingMC();
	this.assemble_pack.parent = this;
	this.assemble_pack.setTransform(639.9,385.4);
	this.assemble_pack._off = true;

	this.timeline.addTween(cjs.Tween.get(this.assemble_pack).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Holding
	this.hold = new lib.HoldingMC();
	this.hold.parent = this;
	this.hold.setTransform(639.9,385.4);
	this.hold._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hold).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Reheating
	this.reheat = new lib.ReheatMC();
	this.reheat.parent = this;
	this.reheat.setTransform(639.9,385.4);
	this.reheat._off = true;

	this.timeline.addTween(cjs.Tween.get(this.reheat).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Cooling
	this.cool = new lib.CoolingMC();
	this.cool.parent = this;
	this.cool.setTransform(639.9,385.4);
	this.cool._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cool).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Cooking
	this.cook = new lib.CookingMC();
	this.cook.parent = this;
	this.cook.setTransform(639.9,385.4);
	this.cook._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cook).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Prep
	this.prep = new lib.PrepMC();
	this.prep.parent = this;
	this.prep.setTransform(639.9,385.4);
	this.prep._off = true;

	this.timeline.addTween(cjs.Tween.get(this.prep).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Storage
	this.store = new lib.StorageMC();
	this.store.parent = this;
	this.store.setTransform(639.9,385.4);
	this.store._off = true;

	this.timeline.addTween(cjs.Tween.get(this.store).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Receiving
	this.receive = new lib.RecievingMC();
	this.receive.parent = this;
	this.receive.setTransform(639.9,385.4);
	this.receive._off = true;

	this.timeline.addTween(cjs.Tween.get(this.receive).wait(144).to({_off:false},0).to({_off:true},1).wait(16));

	// Borders
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("EBjSA4QIAAgBMjGiAAAIAAABIguAAIAAgBIgBAAIAAguIABAAMAAAhvwIAuAAMAAABvwMDGiAAAMAAAhoqIAuAAMAAABpZg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},145).wait(16));

	// Title
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525252").s().p("AgrBIQgRgJgEgVIAXgFQADANALAGQAKAGASAAQAUAAAKgHQAJgFAAgNQAAgJgHgGQgGgGgOgEIgSgEQgXgHgKgEQgJgGgGgIQgFgIAAgLQAAgXAPgLQAQgLAcAAQAbAAAPAJQAQAJAEAVIgYADQgCgLgKgFQgJgGgRAAQgQAAgJAGQgIAFAAALQAAAGADAFQAEAFAGADQAHADAVAFQAVAFAKAFQAJADAFAGQAGAFACAHQADAHAAAJQAAAWgQANQgRAMgfAAQgcAAgQgKg");
	this.shape_1.setTransform(817.5,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525252").s().p("AhCBwIAAi8IAAggIAZAAIABAEIAAALIABAKIAAAAQAHgOAMgHQALgHASAAQAdAAAPAUQAOATAAAqQAABSg6ABQgjAAgNgcIgBAAIABAZIAAA+gAgVhUQgJAHgEAOQgFANAAAXQAAAeAKAPQAKAPAVAAQAUAAAJgOQAJgPAAghQAAghgJgOQgJgOgUAAQgOgBgJAHg");
	this.shape_2.setTransform(802.1,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525252").s().p("AgzA9QgSgVgBgoQABgnASgVQASgVAhAAQBGAAAABTIAAAEIhvAAQAAAbALAPQALAOAUAAQASAAAKgGQAKgHAEgLIAYAHQgPAlgzAAQgiAAgSgVgAgdgxQgLANgBAWIBUAAQgCgZgKgLQgLgMgUAAQgSAAgLANg");
	this.shape_3.setTransform(785.1,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_4.setTransform(772.7,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525252").s().p("AhVA2IAbgGQAFATAPAJQAPAIAZAAQAbAAAPgJQAPgJAAgSQAAgKgFgHQgFgGgIgEQgIgEgMgDIgYgGQgZgFgMgFQgNgFgIgHQgHgHgEgIQgEgJABgMQgBgbAVgOQAUgOAkAAQAkAAASALQATAKAHAaIgbAFQgFgQgNgIQgMgHgXAAQgYAAgNAIQgMAIAAARQAAAJAEAGQAGAHAJAEQAJAEAcAGIATAFIASAFQAJADAHAEQAIAEAFAGQAGAGADAJQAEAIAAALQgBAdgWAQQgXAPgoAAQhLAAgLg0g");
	this.shape_5.setTransform(758.4,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525252").s().p("AgMBtIAAjZIAZAAIAADZg");
	this.shape_6.setTransform(736.7,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_7.setTransform(725.7,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525252").s().p("AAlBRIAAhkQAAgPgDgJQgDgJgHgEQgHgDgNAAQgSAAgLANQgLANAAAXIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAJgQAMgHQAMgHAQAAQAaAAANANQAMANAAAeIAABpg");
	this.shape_8.setTransform(708.4,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_9.setTransform(691.6,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525252").s().p("AgMBtIAAieIAZAAIAACegAgMhSIAAgaIAZAAIAAAag");
	this.shape_10.setTransform(680,26.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_11.setTransform(672.6,28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_12.setTransform(660.6,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525252").s().p("AgkBRIAAh5IgBglIAaAAIABAhIAAAAQAGgVAIgHQAIgIAOAAIALACIAAAYQgFgCgIAAQgRAAgIAPQgJAOAAAaIAABSg");
	this.shape_13.setTransform(647.4,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525252").s().p("AgzA9QgTgVAAgoQAAgnATgVQATgVAgAAQBGAAABBTIAAAEIhxAAQAAAbAMAPQALAOAUAAQASAAAKgGQALgHADgLIAXAHQgOAlgzAAQghAAgTgVgAgdgxQgMANgBAWIBWAAQgDgZgLgLQgKgMgUAAQgSAAgLANg");
	this.shape_14.setTransform(633.2,29.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525252").s().p("AhCBwIAAi8IAAggIAZAAIABAEIAAALIABAKIAAAAQAHgOAMgHQALgHASAAQAdAAAPAUQAOATAAAqQAABSg6ABQgjAAgNgcIgBAAIABAZIAAA+gAgVhUQgJAHgEAOQgFANAAAXQAAAeAKAPQAKAPAVAAQAUAAAJgOQAJgPAAghQAAghgJgOQgJgOgUAAQgOgBgJAHg");
	this.shape_15.setTransform(616.9,32.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525252").s().p("Ag2BdQgXgNgMgYQgNgYAAggQAAgxAcgcQAbgcAvAAQAgAAAXAMQAXANANAYQAMAYgBAgQAAAfgMAZQgMAYgXANQgXANggAAQgfAAgXgNgAg1g9QgUAWAAAnQAAAmAUAXQATAWAiAAQAkAAATgVQATgXAAgnQAAgmgTgWQgUgWgjAAQgiAAgTAVg");
	this.shape_16.setTransform(596.6,27.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525252").s().p("AAlBRIAAhkQAAgPgDgJQgDgJgHgEQgHgDgNAAQgSAAgLANQgLANAAAXIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAJgQAMgHQAMgHAQAAQAaAAANANQAMANAAAeIAABpg");
	this.shape_17.setTransform(568.2,29.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_18.setTransform(551.5,29.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525252").s().p("ABPBRIAAhkQAAgXgGgJQgGgIgRAAQgRAAgKANQgKAMAAAYIAABbIgZAAIAAhkQAAgXgGgJQgGgIgQAAQgSAAgJANQgKAMAAAYIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAIgQALgHQALgHAPAAQASAAALAIQAKAHAEAPQAJgQALgHQALgHARAAQAYAAALANQALANAAAeIAABpg");
	this.shape_19.setTransform(530.7,29.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525252").s().p("ABPBRIAAhkQAAgXgGgJQgGgIgRAAQgRAAgKANQgKAMAAAYIAABbIgZAAIAAhkQABgXgHgJQgGgIgRAAQgRAAgJANQgKAMAAAYIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIAAAIIABAPIAAAAQAJgQALgHQALgHAPAAQATAAAKAIQAJAHAFAPQAIgQAMgHQAMgHAQAAQAYAAALANQALANAAAeIAABpg");
	this.shape_20.setTransform(505.7,29.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_21.setTransform(484.8,29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525252").s().p("AgvBdQgXgNgMgYQgMgYAAggQAAgxAbgcQAagcAvAAQAhAAAWANQAWANAKAZIgaAJQgHgSgQgKQgQgJgWAAQghAAgTAWQgUAWABAmQgBAlAVAXQATAXAhAAQAsAAAVgrIAXAMQgNAagWAOQgYAOgeAAQgeAAgXgNg");
	this.shape_22.setTransform(465.8,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},145).wait(16));

	// Border
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5F5F5").s().p("Ehj/AD6IAAnzMDH/AAAIAAHzg");
	this.shape_23.setTransform(640,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).to({_off:true},145).wait(16));

	// Serving or Selling
	this.btn_serve_sell = new lib.BtnServenSell();
	this.btn_serve_sell.parent = this;
	this.btn_serve_sell.setTransform(961.6,545.4,0.862,0.862);
	this.btn_serve_sell.alpha = 0;
	this.btn_serve_sell._off = true;
	new cjs.ButtonHelper(this.btn_serve_sell, 0, 1, 2, false, new lib.BtnServenSell(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_serve_sell).wait(129).to({_off:false},0).wait(1).to({regX:151,regY:65,x:1091.9,y:601.4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Assembly and Packing
	this.btn_assemble_pack = new lib.BtnAssembleandPackage();
	this.btn_assemble_pack.parent = this;
	this.btn_assemble_pack.setTransform(559.5,323.4,0.89,0.875);
	this.btn_assemble_pack.alpha = 0;
	this.btn_assemble_pack._off = true;
	new cjs.ButtonHelper(this.btn_assemble_pack, 0, 1, 2, false, new lib.BtnAssembleandPackage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_assemble_pack).wait(129).to({_off:false},0).wait(1).to({regX:153,regY:80,x:695.6,y:393.4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Reheating
	this.btn_reheat = new lib.BtnReheat();
	this.btn_reheat.parent = this;
	this.btn_reheat.setTransform(927,107.1,0.888,0.888);
	this.btn_reheat.alpha = 0;
	this.btn_reheat._off = true;
	new cjs.ButtonHelper(this.btn_reheat, 0, 1, 2, false, new lib.BtnReheat(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_reheat).wait(129).to({_off:false},0).wait(1).to({regX:105,regY:92.5,x:1020.2,y:189.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Holding
	this.btn_hold = new lib.BtnHolding();
	this.btn_hold.parent = this;
	this.btn_hold.setTransform(793.2,451.6,0.885,0.88,0,0,0,0,0.1);
	this.btn_hold.alpha = 0;
	this.btn_hold._off = true;
	new cjs.ButtonHelper(this.btn_hold, 0, 1, 2, false, new lib.BtnHolding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_hold).wait(129).to({_off:false},0).wait(1).to({regX:180.5,regY:60,x:953,y:504.3,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Cooling
	this.btn_cool = new lib.BtnCooling();
	this.btn_cool.parent = this;
	this.btn_cool.setTransform(817.9,324.8,0.884,0.867,0,0,0,0.1,0.1);
	this.btn_cool.alpha = 0;
	this.btn_cool._off = true;
	new cjs.ButtonHelper(this.btn_cool, 0, 1, 2, false, new lib.BtnCooling(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cool).wait(129).to({_off:false},0).wait(1).to({regX:167,regY:80,scaleX:0.89,x:965.4,y:393.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Cooking
	this.btn_cook = new lib.Btncook();
	this.btn_cook.parent = this;
	this.btn_cook.setTransform(784.5,107.2,0.881,0.881,0,0,0,0.1,0.1);
	this.btn_cook.alpha = 0;
	this.btn_cook._off = true;
	new cjs.ButtonHelper(this.btn_cook, 0, 1, 2, false, new lib.Btncook(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cook).wait(129).to({_off:false},0).wait(1).to({regX:87.5,regY:92.5,x:861.5,y:188.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Recieving
	this.btn_receive = new lib.BtnReceiving();
	this.btn_receive.parent = this;
	this.btn_receive.setTransform(64.1,349.5,0.886,0.886,0,0,0,0.1,0.1);
	this.btn_receive.alpha = 0;
	this.btn_receive._off = true;
	new cjs.ButtonHelper(this.btn_receive, 0, 1, 2, false, new lib.BtnReceiving(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_receive).wait(129).to({_off:false},0).wait(1).to({regX:151.5,regY:157,x:198.1,y:488.4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Prep
	this.btn_prep = new lib.BtnPrep();
	this.btn_prep.parent = this;
	this.btn_prep.setTransform(559.4,107.3,0.886,0.886,0,0,0,0,0.3);
	this.btn_prep.alpha = 0;
	this.btn_prep._off = true;
	new cjs.ButtonHelper(this.btn_prep, 0, 1, 2, false, new lib.BtnPrep(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_prep).wait(129).to({_off:false},0).wait(1).to({regX:312.5,regY:129.5,x:836.2,y:221.7,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Storage
	this.btn_store = new lib.BtnStorage();
	this.btn_store.parent = this;
	this.btn_store.setTransform(64.6,107.1,0.884,0.884,0,0,0,0,0.1);
	this.btn_store.alpha = 0;
	this.btn_store._off = true;
	new cjs.ButtonHelper(this.btn_store, 0, 1, 2, false, new lib.BtnStorage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_store).wait(129).to({_off:false},0).wait(1).to({regX:419,regY:254.5,x:435.1,y:332,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(16));

	// Layer 1
	this.text = new cjs.Text("IT WORKED!\n\nClick next to continue", "30px 'Myriad Pro'");
	this.text.lineHeight = 38;
	this.text.parent = this;
	this.text.setTransform(329.4,218.2);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(145).to({_off:false},0).wait(1).to({x:295.3,y:228.5},0).wait(1).to({x:264.8,y:246.4},0).wait(1).to({x:278.7,y:273.9},0).wait(1).to({x:311.3,y:288.3},0).wait(1).to({x:345.3,y:298.9},0).wait(1).to({x:379.8,y:307.8},0).wait(1).to({x:414.6,y:315.6},0).wait(1).to({x:449.6,y:322.7},0).wait(1).to({x:484.6,y:329.3},0).wait(1).to({x:519.7,y:335.4},0).wait(1).to({x:554.9,y:341.3},0).wait(1).to({x:590.1,y:346.8},0).wait(1).to({x:625.3,y:352.1},0).wait(1).to({x:660.6,y:357.2},0).wait(1).to({x:696,y:362.1},0).wait(1));

	// Click Area BG
	this.instance = new lib.MainBG();
	this.instance.parent = this;
	this.instance.setTransform(640.3,360.1,1,1,0,0,0,587.3,289.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:317.5,y:388.5,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(131).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/DM72_00_bg_kitchen_food_potato_salad_label.jpg", id:"DM72_00_bg_kitchen_food_potato_salad_label"},
		{src:"images/DM72_04_2_FRED_JUAN_happy_man_meal_server.jpg", id:"DM72_04_2_FRED_JUAN_happy_man_meal_server"},
		{src:"images/DM72_124_01_receiving_truck_approved_supplier.jpg", id:"DM72_124_01_receiving_truck_approved_supplier"},
		{src:"images/DM72_190_01_food_flow_floor_plan.jpg", id:"DM72_190_01_food_flow_floor_plan"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_assembly_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_assembly_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_assembly_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_assembly_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_cook_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_cook_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_cook_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_cook_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_cooling_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_cooling_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_cooling_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_cooling_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_holding_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_holding_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_holding_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_holding_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_preparation_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_preparation_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_preparation_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_preparation_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_receiving_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_receiving_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_receiving_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_receiving_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_reheat_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_reheat_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_reheat_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_reheat_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_serving_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_serving_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_serving_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_serving_yellow"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_storage_orange.png", id:"DM72_190_ACTIVITY_flow_of_food_storage_orange"},
		{src:"images/DM72_190_ACTIVITY_flow_of_food_storage_yellow.png", id:"DM72_190_ACTIVITY_flow_of_food_storage_yellow"},
		{src:"images/DM72_34_08_chef_thinks_take_temperature_chicken_thermometer.jpg", id:"DM72_34_08_chef_thinks_take_temperature_chicken_thermometer"},
		{src:"images/DM72_34_08_cooked_chicken_skillet.jpg", id:"DM72_34_08_cooked_chicken_skillet"},
		{src:"images/DM_140_01_soup_on_counter.png", id:"DM_140_01_soup_on_counter"},
		{src:"images/DMH_08_06_spaghetti_meatball_chafing_dishes.jpg", id:"DMH_08_06_spaghetti_meatball_chafing_dishes"},
		{src:"images/DMH_110080_21_02_waitress_contaminate_food.png", id:"DMH_110080_21_02_waitress_contaminate_food"},
		{src:"images/DMH_122_01_walkin_temperature.png", id:"DMH_122_01_walkin_temperature"},
		{src:"images/DMH_44a_04_HARROON_employee_thermocouple.png", id:"DMH_44a_04_HARROON_employee_thermocouple"},
		{src:"images/DMH_52_03_fridge_cool_pots_of_soup.png", id:"DMH_52_03_fridge_cool_pots_of_soup"},
		{src:"sounds/_120c00_en_7161.mp3", id:"_120c00_en_7161"},
		{src:"sounds/_120c00_en_71610.mp3", id:"_120c00_en_71610"},
		{src:"sounds/_120c00_en_71612.mp3", id:"_120c00_en_71612"},
		{src:"sounds/_120c00_en_71614.mp3", id:"_120c00_en_71614"},
		{src:"sounds/_120c00_en_71615.mp3", id:"_120c00_en_71615"},
		{src:"sounds/_120c00_en_71616.mp3", id:"_120c00_en_71616"},
		{src:"sounds/_120c00_en_71618.mp3", id:"_120c00_en_71618"},
		{src:"sounds/_120c00_en_7163.mp3", id:"_120c00_en_7163"},
		{src:"sounds/_120c00_en_7166.mp3", id:"_120c00_en_7166"},
		{src:"sounds/_120c00_en_7168.mp3", id:"_120c00_en_7168"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;