
import enTranslation from "./en.json" assert {
  type: "json",
};
import deTranslation from "./de.json" assert {
  type: "json",
};

$(function () {
  $(document).scroll(() => {
    $(".navbar").toggleClass('scrolled', $(this).scrollTop() > 0);
    $('.header-image').css('top', $(this).scrollTop() + 'px');
  });
});

const localize = () => {
  $('body').localize();
}

/** 
i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  parseDefaultValueFromContent: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    de: {
      translation: deTranslation,
    },
  }
}, function (err, t) {
  if (err) return console.error(err);
  jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  localize();

  const select = document.getElementById('languageSwitcher');

  select.addEventListener('change', function handleChange(event) {
    const chosenLng = select.options[select.selectedIndex].value;
    console.log('chosenLng', $(this).children("option:selected"), chosenLng);
    i18next.changeLanguage(chosenLng, () => {
      localize();
    });
  });
});
*/