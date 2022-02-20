// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',

],
    /**
     * 
     * @param {sap.ui.core.mvc.Controller} Controller 
     * @param {sap.m.MessageToast} MessageToast

     */
    function (Controller, MessageToast, model, ResourceModel) {
        'use strict';
        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            
            onInit: function () {
               
            },
            
            onShowHello: function () {
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                let sRecipient = this.getView().getModel().getProperty("/recipient/name/");
                
                let sMsg = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });