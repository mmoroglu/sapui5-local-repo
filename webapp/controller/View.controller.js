sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	var myVariable;

	return Controller.extend("SurveyApp.controller.View", {

		onPress: function() {
			this._getDialog().open();
		},

		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment(
					"SurveyApp.view.Form", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},

		// onClose event handler of the fragment
		onClose: function() {
			this._oDialog.close();
		},

		calculate: function(oEvent) {
			var number = this.byId("number").getSelectedKey();
			var point = this.byId("point").getValue();

			var oTotal = sap.ui.getCore().byId("app").getModel("totalModel");
			oTotal.oData.total = number * point;
		},

		onChange: function(oEvent) {
         var questionModel = this.getOwnerComponent().getModel();
         var questions = this.getOwnerComponent().getModel().getData()["questions"];
         
         var tableIndex = oEvent.getParameters().id.split("-");
         var index = tableIndex.slice(-1);
         var changedQuestion = questions[index];
         
         var selectedValue = oEvent.getSource().getSelectedItem().getText();
         
         changedQuestion.result = changedQuestion.questionPoint * selectedValue;
         questions[index] = changedQuestion;
         
         questionModel.oData.questions = questions;
         questionModel.refresh();
         
		}

	});
});