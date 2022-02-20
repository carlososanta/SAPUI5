sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'logaligroup/ejercicio/model/model',
    'sap/ui/model/resource/ResourceModel'
],
    /**
     * 
     * @param {sap.ui.core.mvc.Controller} Controller 
     * @param {sap.m.MessageToast} MessageToast
     * @param {logaligroup.ejercicio.model.model} model
     * @param {sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, model,ResourceModel) {
        'use strict';
        return Controller.extend("logaligroup.ejercicio.controller.App",
            {

                onInit: function () {
                    this.getView().setModel(model.createRecipient());

                    let i18nModel = new ResourceModel({bundleName: 'logaligroup.ejercicio.i18n.i18n'});
                    this.getView().setModel(i18nModel,'i18n');

                },
                onShowHello: function () {
                    let oBundle = this.getView().getModel('i18n').getResourceBundle();
                    let sRecipient = this.getView().getModel().getProperty("/recipient/name/");

                    let sMsg = oBundle.getText("DecirHola",[sRecipient]);
                    MessageToast.show(sMsg);
                }
            }
        )
    });