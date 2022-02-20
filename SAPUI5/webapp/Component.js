// @ts-nocheck
sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroup/SAPUI5/model/model',
    'sap/ui/model/resource/ResourceModel'
],
    /**
     * 
     * @param {sap.ui.core.UIComponent} UIComponent
     * @param {logaligroup.SAPUI5.model.model} model
     * @param {sap.ui.model.resource.ResourceModel} ResourceModel 
     */
    function (UIComponent, model, ResourceModel) {
        'use strict';
        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                 manifest : "json"
                // "rootView": {
                //     "viewName":"logaligroup.SAPUI5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                UIComponent.prototype.init.apply(this, arguments);

                /// set data model on the view
                this.setModel(model.createRecipient());
                /// set i18n model on the view
                let i18nModel = new ResourceModel({ bundleName: 'logaligroup.SAPUI5.i18n.i18n' });
                this.setModel(i18nModel, 'i18n');
            }

        })
    });