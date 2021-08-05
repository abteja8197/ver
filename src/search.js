$(document).ready(function () {
  var input = document.querySelector(".chip-input");
  var chips = document.querySelector(".chips");

  document.querySelector(".form-field")
    .addEventListener('click', () => {
      input.focus();
    });

  input.addEventListener('keypress', function (event) {
    if (event.which === 13 && event.target.value.length) {
      chips.appendChild(function () {
        var _chip = document.createElement('div');

        _chip.classList.add('chip');
        _chip.append(
          (function () {
            var _chip_text = document.createElement('span');
            _chip_text.classList.add('chip--text');
            _chip_text.innerHTML = input.value;

            return _chip_text;
          })(),
          (function () {
            var _chip_close = document.createElement('span');
            _chip_close.classList.add('chip--button');
            _chip_close.innerHTML = 'x';
            _chip_close.addEventListener('click', chipClickHandler);

            return _chip_close;
          })()
        );

        return _chip;
      }());
      input.value = '';
    }
  });
  function chipClickHandler(event) {
    chips.removeChild(event.currentTarget.parentNode);
  }
});
function formSubmitted() {
  console.log('form Submitted');
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};
// var x = getUrlParameter('keywords');
// x.replaceAll('+', '').split(',');
// var input = document.querySelector(".chip-input");
// var chips = document.querySelector(".chips");
// input.addEventListener('keypress', function (event) {
//   if (event.which === 13 && event.target.value.length) {
//     chips.appendChild(function () {
//       var _chip = document.createElement('div');

//       _chip.classList.add('chip');
//       _chip.append(
//         (function () {
//           var _chip_text = document.createElement('span');
//           _chip_text.classList.add('chip--text');
//           _chip_text.innerHTML = input.value;

//           return _chip_text;
//         })(),
//         (function () {
//           var _chip_close = document.createElement('span');
//           _chip_close.classList.add('chip--button');
//           _chip_close.innerHTML = 'x';
//           _chip_close.addEventListener('click', chipClickHandler);

//           return _chip_close;
//         })()
//       );

//       return _chip;
//     }());
//     input.value = '';
//   }
// });


$(document).ready(function () {
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  };
  var chipsArray = getUrlParameter('keywords').split('+').join('').split(',');
  var chips = document.querySelector(".chips");
  for (chip = 0; chip < chipsArray.length; chip++) {
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
  function chipClickHandler(event) {
    chips.removeChild(event.currentTarget.parentNode);
  }
});