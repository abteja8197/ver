jQuery(document).ready(function () {
    var getUrlParameter = function getUrlParameter(param) {
        var pageUrl = window.location.search.substring(1),
            urlVariables = pageUrl.split('&'),
            urlParams,
            i;

        for (i = 0; i < urlVariables.length; i++) {
            urlParams = urlVariables[i].split('=');

            if (urlParams[0] === param) {
                return typeof urlParams[1] === undefined ? true : decodeURIComponent(urlParams[1]);
            }
        }
        return false;
    };
    var chipsArray = getUrlParameter('keywords');

    if (chipsArray.length) {
        chipsArray = chipsArray.split('+');
        chipsArray = chipsArray.filter(function (el) {
            return el != "";
        });
        chipsArray = chipsArray.join(' ');
    }

    if (chipsArray.length > 1) {
        chipsArray = chipsArray.split(',');

        if (chipsArray.length > 5) {
            chipsArray.length = 5;
            $('.search-keywords-warning').removeClass('d-none');
        }

        var chipsLen = chipsArray.length;
        var chips = document.querySelector(".chips");
        for (chip = 0; chip < chipsLen; chip++) {
            chips.appendChild(function () {
                var _chip = document.createElement('div');

                _chip.classList.add('chip');
                _chip.append(
                    (function () {
                        var _chip_text = document.createElement('span');
                        _chip_text.classList.add('chip-text');
                        _chip_text.innerHTML = chipsArray[chip];

                        return _chip_text;
                    })(),
                    (function () {
                        var _chip_close = document.createElement('span');
                        _chip_close.classList.add('chip-button');
                        _chip_close.innerHTML = 'x';
                        _chip_close.addEventListener('click', chipClickHandler);

                        return _chip_close;
                    })()
                );

                return _chip;
            }());
        }
        jQuery('#edit-keywords--2').val('');
    }


    function chipClickHandler(event) {
        var removedChip = event.currentTarget.parentNode.children[0].innerText;
        chipsArray = chipsArray.map(chip => chip.trim());
        var index = chipsArray.indexOf(removedChip);
        if (index !== -1) {
            chipsArray.splice(index, 1);
        }
        chips.removeChild(event.currentTarget.parentNode);
        var updatedstring = chipsArray.join(', ');
        jQuery('#edit-keywords--2').val(updatedstring);
        jQuery('#edit-submit-acquia-search--2').trigger('click');
    }
});

// .search .chips .chip {
//     display: inline-block;
//     width: auto;
//     background-color: #0078AB;
//     color: #fff;
//     border-radius: 0.25rem;
//     margin: 0.125rem;
//     overflow: hidden;
//   }

//   .search .chips .chip {
//     float: left;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: center;
//         -ms-flex-pack: center;
//             justify-content: center;
//     -webkit-box-align: center;
//         -ms-flex-align: center;
//             align-items: center;
//   }

//   .search .chips .chip .chip-button {
//     padding: 0px 0.3125rem;
//     padding-bottom: 0.1875rem;
//     cursor: pointer;
//     font-size: small;
//     background-color: white;
//     display: inline-block;
//     line-height: 1;
//     color: #0078AB;
//     border-radius: 50%;
//     margin-right: 0.625rem;
//   }

//   .search .chips .chip .chip-text {
//     padding: 0.3125rem 0.75rem;
//     cursor: text;
//     display: inline-block;
//     pointer-events: none;
//   }