/// <reference path="../../../ts-libraries/jquery.d.ts" />
var AweTabs = (function () {
    function AweTabs(el, options) {
        this.$el = (el instanceof HTMLElement) ? jQuery(el) : el;
        this.options = jQuery.extend(true, {}, AweTabs.defaultOptions, options);
        this.validate();
        this.initialize();
    }
    AweTabs.prototype.validate = function () {
        if (jQuery('.ac-tab__nav', this.$el).length === 0)
            throw Error("Could not find tab navigator element. Please put class\"ac-tab__nav\" to navigator element.");
        if (jQuery('.ac-tab__nav li a', this.$el).length === 0)
            throw Error('Could not find any tab\'s navigator element. Please put class "ac-tab__nav-item" to li element of tab\'s navigator.');
        if (jQuery('.ac-tab__panel', this.$el).length === 0)
            throw Error('Could not find any tab panel elements. Please put class "ac-tab__panel" to wrapper element of tab\'s panel.');
        var _self = this;
        jQuery('.ac-tab__nav:first li a', this.$el).each(function () {
            var tabId = jQuery(this).attr('href'), $tabPanel = jQuery(tabId, _self.$el);
            if ($tabPanel.length !== 1)
                throw Error("Have " + $tabPanel.length + " elements which have id=\"" + tabId + "\".");
        });
    };
    AweTabs.prototype.initialize = function () {
        jQuery('.ac-tab__nav:first li a', this.$el).removeClass("active");
        if (jQuery('.ac-tab__content:first', this.$el).length === 0)
            jQuery(this.$el.append('<div class="ac-tab__content"></div>'));
        jQuery('.ac-tab__content:first', this.$el).append(jQuery('.ac-tab__panel:first', this.$el));
        jQuery('.ac-tab__content:first', this.$el).css({ display: 'block', opacity: 0, visible: 'hidden' });
        this.initPanelsHeight();
        this.events();
        jQuery('.ac-tab__content:first', this.$el).css({ display: '', opacity: '', visible: '' });
        jQuery('.ac-tab__panel', this.$el).hide();
        if (this.options.active !== false) {
            var fireEvent = this.options.activeEvent === 'hover' ? 'mouseenter' : "click";
            jQuery(".ac-tab__nav li:eq(" + this.options.active + ") a", this.$el).trigger(fireEvent);
        }
    };
    AweTabs.prototype.initPanelsHeight = function () {
        if (this.options.heightStyle === 'auto') {
            var maxHeight_1 = 0;
            jQuery('.ac-tab__panel:first', this.$el).each(function () {
                if (jQuery(this).height() > maxHeight_1)
                    maxHeight_1 = jQuery(this).height();
            }).height(maxHeight_1);
        }
    };
    AweTabs.prototype.events = function () {
        var _self = this, options = this.options, fireEvent = options.activeEvent === 'hover' ? 'mouseenter' : "click";
        this.$el.delegate('.ac-tab__nav:first li a', fireEvent, function (event) {
            event.preventDefault();
            var tabID = jQuery(this).attr('href');
            if (options.collapsible)
                jQuery(tabID, _self.$el).toggle();
            else if (!jQuery(this).hasClass('active')) {
                var $activatedTab = jQuery('.ac-tab__nav:first li a.active', _self.$el), $activatedPanel = jQuery($activatedTab.attr('href'), _self.$el);
                $activatedTab.removeClass('active ac-active');
                $activatedPanel.hide();
                jQuery(jQuery(this).attr('href'), _self.$el).show();
                jQuery(this).addClass("active ac-active");
            }
        });
    };
    AweTabs.defaultOptions = {
        active: 0,
        collapsible: false,
        heightStyle: 'content',
        activeEvent: 'click',
        navigatorPosition: 'top'
    };
    return AweTabs;
}());
jQuery.fn.aweTabs = function (options) {
    jQuery.each(this, function () {
        if (options == undefined) {
            options = JSON.parse(jQuery(this).attr('data-tabs'));
        }
        var tabs = new AweTabs(this, options);
        jQuery(this).data('awe-tabs', tabs);
    });
    return this;
};
jQuery(document).ready(function ($) {
    $('.js-tabs').aweTabs();
});


