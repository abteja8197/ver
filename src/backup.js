jQuery(document).ready(function () {
    jQuery('.coh-style-solution-block-wrap .coh-style-solution-block').on('click', function () {
        jQuery(this).parent().animate({ "left": "-100%" }, "slow");
        jQuery(this).parents('.coh-style-verathon-solutions-wrap').find('.coh-style-solution-feature-container').animate({ "margin-left": "0" }, "slow");
        setTimeout(() => {
            jQuery(this).parent().css('display', 'none');
            jQuery(this).parents('.coh-style-verathon-solutions-wrap').find('.coh-style-solution-feature-container').css({ 'position': 'relative', 'top': '0px' });
        }, 1000);
    });
    jQuery('.solution-bread-crumbs li:first-child').on('click', function () {
        jQuery('.coh-style-solution-block-wrap').css('display', 'flex').animate({ "left": "0" }, "slow");
        jQuery('.coh-style-solution-feature-container').css({ "position": "absolute", "top": "32px" }).animate({ "margin-left": "100%" }, "slow");
    });
    jQuery('.coh-style-solution-block-wrap .coh-style-solution-block:first-child').on('click', function () {
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:first-child').show()
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:nth-child(2)').hide()
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:last-child').hide()
    });
    jQuery('.coh-style-solution-block-wrap .coh-style-solution-block:nth-child(2)').on('click', function () {
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:first-child').hide()
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:nth-child(2)').show()
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:last-child').hide()
    });
    jQuery('.coh-style-solution-block-wrap .coh-style-solution-block:last-child').on('click', function () {
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:first-child').hide()
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:nth-child(2)').hide()
        jQuery('.coh-style-solution-feature-container .solutions-feature-wrap:last-child').show()
    });


    // Category Feature Block
    var $features = jQuery(".category-feature-block .category-feature-item"),
        $featureImages = jQuery('.category-feature-block .category-feature-image');

    for (i = 0; i < $features.length; i++) {
        $features[i].setAttribute('data-tab-index', i);
        $featureImages[i].setAttribute('data-tab-index', i);
    }
    $features[0].addClass('active');

    var previousActiveTabIndex = 0;
    jQuery(".category-feature-block .category-feature-item").on('click', function (event) {
        var tabClicked = jQuery(this).data("tab-index");
        if (tabClicked != previousActiveTabIndex) {
            jQuery(".category-feature-image").each(function () {
                if (jQuery(this).data("tab-index") == tabClicked) {
                    jQuery(".category-feature-image").hide();
                    jQuery(this).show();
                    previousActiveTabIndex = jQuery(this).data("tab-index");
                    return;
                }
            });
        }
        jQuery(".category-feature-block .category-feature-item").removeClass('active');
        $(this).addClass('active');
    });
})