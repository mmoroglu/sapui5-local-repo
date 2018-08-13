sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createPointModel: function(){
			var values = [{
		        number: '',
		        point: ''
	    	}];
			
			var pointModel = new sap.ui.model.json.JSONModel();
			pointModel.setData({
				values: values
			});

			return pointModel;
	    }

	};
});