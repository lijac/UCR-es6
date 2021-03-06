"use strict";

var CheckBoxLayer = ccui.CheckBox.extend({
    ctor: function ctor(normal, clicked, selected) {
        var touchEnabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        this._super();

        this.loadTextures(normal, clicked, selected);
        this.setTouchEnabled(touchEnabled);
    }
});

var CheckLabelScale = cc.Layer.extend({
    valSprite: null,
    checkbox: null,
    value: -1,

    ctor: function ctor(normal, clicked, selected) {
        var touchEnabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        this._super();

        this.checkbox = new CheckBoxLayer(normal, clicked, selected, touchEnabled);
        this.addChild(this.checkbox, 0);

        this.valSprite = null;
    },
    setText: function setText(text) {
        //this.label.setString(text);
    },
    setSize: function setSize(w, h) {
        if (w != -1) this.checkbox.setScaleX(w / this.checkbox.width);
        if (h != -1) this.checkbox.setScaleY(h / this.checkbox.height);
    },
    setValue: function setValue(val) {
        this.value = val;
        if (this.valSprite != null) this.removeChild(this.valSprite);

        this.valSprite = cc.Sprite.create(boardValues[this.value]);
        this.valSprite.setPosition(0, 0);
        this.valSprite.setScale(1);
        this.addChild(this.valSprite, 1);
    }
});