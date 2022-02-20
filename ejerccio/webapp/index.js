sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], 
/**
 * 
 * @param {sap.ui.core.mvc.XMLView} XMLView 
 */
function(XMLView) {
    'use strict';
    XMLView.create({
        viewName: "logaligroup.ejercicio.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });

});