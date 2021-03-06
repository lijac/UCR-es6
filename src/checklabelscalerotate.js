var CheckBoxLayer = ccui.CheckBox.extend({
    ctor: function(normal, clicked, selected, touchEnabled = true) {
        this._super();

        this.loadTextures(normal, clicked, selected);
        this.setTouchEnabled(touchEnabled);
    }
});

var CheckLabelScaleRotate = cc.Layer.extend({
    valSprite: null,
    checkbox: null,
    value: -1,
    answer: -1,
    myscale: 1,

    ctor: function(normal, clicked, selected, touchEnabled = true) {
        this._super();

        this.checkbox = new CheckBoxLayer(normal, clicked, selected,touchEnabled);
        this.addChild(this.checkbox, 0);

        this.valSprite = null;
    },
    setText: function(text) {
        //this.label.setString(text);
    },
    setSize: function(w, h) {
        if (w != -1)
            this.checkbox.setScaleX(w / this.checkbox.width);
        if (h != -1)
            this.checkbox.setScaleY(h / this.checkbox.height);
    },
    setValue: function(val) {
        this.value = val;
        if (this.valSprite != null)
            this.removeChild(this.valSprite);
        if (this.value == -1)
            return;
        
        this.valSprite = cc.Sprite.create(boardValues[this.value]);
        this.valSprite.setPosition(0, 0);
        this.valSprite.setScale(this.myscale);
        this.addChild(this.valSprite, 1);
    },
    setAnswer: function(ans) {
        this.answer = ans;
    },
    setValueScale: function(sca) {
        this.myscale = sca;
    }
});
