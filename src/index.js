$(document).ready(function () {
    var $textarea = $('#textarea');
    $textarea.on('input', function () {
        this.value = this.value.replace(/[^0-9 ]/g, '');
        ValidateInput(this.value);
    });
    $('#modifyInput').on('click', function (e) {
        removeIncorrectInputs($('#textarea').val());
    })
    function ValidateInput(str) {
        if (str.length && str.match(/^([0-9]{10}\s*)*$/)) {
            return true;
        }
        return false;
    }
    function removeIncorrectInputs(str) {
        var arr = str.split(/[ ,]+/);
        if (arr.length >= 20) {
            // Error Scenario
        }
        var modifiedarr = arr.filter(x => (x.length === 10));
        $textarea.val(modifiedarr.join(' '));
    }

    $textarea.on('paste', function (event) {
        event.preventDefault();
        let text_area_id = $(this).attr('id');
        $('#' + text_area_id).val('');
        let clip = event.originalEvent.clipboardData.getData('Text');
        let final_clip = clip.replace(/\s+/g, ' ');
        $('#' + text_area_id).val(final_clip);
    });
});










    // $('.contact-widget').click(function () {
    //     $('.contact-widget').removeClass('d-none');
    //     $(this).addClass('d-none');
    // });

    // $('a').on('click', function () {
    //     $(this).blur();
    // });

    // var $features = $('.category-feature-item');

    // $features.forEach((i) => i.on('click', () => {
    //     $features.removeClass('active');
    //     // console.log($(this));
    //     $(this).addClass('active');
    // }));


// if (window.matchMedia("(max-width: 700px)").matches) {
//     let navLiItems = document.querySelectorAll(".sub-menu-li");
//     let navContainer = document.getElementById("nav-container");
//     let backBtn = document.querySelectorAll("coh-style-back-button");


//     navLiItems.forEach((item) => {
//         item.addEventListener('click', () => {
//             slideNavigation(item);
//         });
//     })

//     backBtn.forEach()

//     function slideNavigation(item) {
//         var x = item.querySelector('.menu-level-2-wrapper');
//         console.log(x);
//         x.classList.add('d-block');
//         navContainer.classList.add("coh-style-slide-nav");
//     }
// }

// $(document).ready(function () {
//     var $features = jQuery(".category-feature-block .category-feature-item"),
//         $featureImages = jQuery('.category-feature-block .category-feature-image');

//     for (i = 0; i < $features.length; i++) {
//         $features[i].setAttribute('data-tab-index', i);
//         $featureImages[i].setAttribute('data-tab-index', i);
//     }
//     $features.eq(0).addClass('active');
// });

// var previousActiveTabIndex = 0;
// jQuery(".category-feature-block .category-feature-item").on('click', function (event) {
//     var tabClicked = jQuery(this).data("tab-index");
//     if (tabClicked != previousActiveTabIndex) {
//         jQuery(".category-feature-image").each(function () {
//             if (jQuery(this).data("tab-index") == tabClicked) {
//                 jQuery(".category-feature-image").hide();
//                 jQuery(this).show();
//                 previousActiveTabIndex = jQuery(this).data("tab-index");
//                 return;
//             }
//         });
//     }
//     jQuery(".category-feature-block .category-feature-item").removeClass('active');
//     $(this).addClass('active');
// });