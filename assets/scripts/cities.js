App.Cities = {
  el: document.getElementById("cities"),

  options: {
    "samoa":         ["Samoa",           "Pacific/Samoa"],
    "hawaii":        ["Hawaii",          "US/Hawaii"],
    "uspacific":     ["US Pacific",      "US/Pacific"],
    "sanfrancisco":  ["San Francisco",   "America/Los_Angeles"],
    "losangeles":    ["Los Angeles",     "America/Los_Angeles"],
    "phoenix":       ["Phoenix",         "America/Phoenix"],
    "vancouver":     ["Vancouver",       "America/Vancouver"],
    "denver":        ["Denver",          "America/Denver"],
    "costarica":     ["Costa Rica",      "America/Costa_Rica"],
    "elsalvador":    ["El Salvador",     "America/El_Salvador"],
    "chicago":       ["Chicago",         "America/Chicago"],
    "uscentral":     ["US Central",      "US/Central"],
    "austin":        ["Austin",          "US/Central"],
    "jamaica":       ["Jamaica",         "America/Jamaica"],
    "caracas":       ["Caracas",         "America/Caracas"],
    "lapaz":         ["La Paz",          "America/La_Paz"],
    "havana":        ["Havana",          "America/Havana"],
    "detroit":       ["Detroit",         "America/Detroit"],
    "useastern":     ["US Eastern",      "US/Eastern"],
    "newyork":       ["New York",        "America/New_York"],
    "toronto":       ["Toronto",         "America/Toronto"],
    "santiago":      ["Santiago",        "America/Santiago"],
    "saopaulo":      ["São Paulo",       "America/Sao_Paulo"],
    "newfoundland":  ["Newfoundland",    "Canada/Newfoundland"],
    "utc":           ["UTC",             "UTC"],
    "canary":        ["Canary Islands",  "Atlantic/Canary"],
    "london":        ["London",          "Europe/London"],
    "belfast":       ["Belfast",         "Europe/Belfast"],
    "isleofman":     ["Isle of Man",     "Europe/Isle_of_Man"],
    "dublin":        ["Dublin",          "Europe/Dublin"],
    "luxembourg":    ["Luxembourg",      "Europe/Luxembourg"],
    "madrid":        ["Madrid",          "Europe/Madrid"],
    "malta":         ["Malta",           "Europe/Malta"],
    "monaco":        ["Monaco",          "Europe/Monaco"],
    "oslo":          ["Oslo",            "Europe/Oslo"],
    "prague":        ["Prague",          "Europe/Prague"],
    "rome":          ["Rome",            "Europe/Rome"],
    "andorra":       ["Andorra",         "Europe/Andorra"],
    "paris":         ["Paris",           "Europe/Paris"],
    "vienna":        ["Vienna",          "Europe/Vienna"],
    "warsaw":        ["Warsaw",          "Europe/Warsaw"],
    "zurich":        ["Zurich",          "Europe/Zurich"],
    "berlin":        ["Berlin",          "Europe/Berlin"],
    "brussels":      ["Brussels",        "Europe/Brussels"],
    "copenhagen":    ["Copenhagen",      "Europe/Copenhagen"],
    "johannesburg":  ["Johannesburg",    "Africa/Johannesburg"],
    "capetown":      ["Cape Town",       "Africa/Johannesburg"], // Not in tzdb
    "helsinki":      ["Helsinki",        "Europe/Helsinki"],
    "istanbul":      ["Istanbul",        "Asia/Istanbul"],
    "baghdad":       ["Baghdad",         "Asia/Baghdad"],
    "cairo":         ["Cairo",           "Africa/Cairo"],
    "athens":        ["Athens",          "Europe/Athens"],
    "gaza":          ["Gaza",            "Asia/Gaza"],
    "telaviv":       ["Tel Aviv",        "Asia/Tel_Aviv"],
    "moscow":        ["Moscow",          "Europe/Moscow"],
    "dubai":         ["Dubai",           "Asia/Dubai"],
    "maldives":      ["Maldives",        "Indian/Maldives"],
    "colombo":       ["Colombo",         "Asia/Colombo"],
    "mumbai":        ["Mumbai",          "Asia/Calcutta"], // Not in tzdb
    "calcutta":      ["Calcutta",        "Asia/Calcutta"],
    "dhaka":         ["Dhaka",           "Asia/Dhaka"],
    "cocosisland":   ["Cocos Islands",   "Indian/Cocos"],
    "christmas":     ["Christmas Island","Indian/Christmas"],
    "bangkok":       ["Bangkok",         "Asia/Bangkok"],
    "hochiminh":     ["Ho Chi Minh",     "Asia/Ho_Chi_Minh"],
    "jakarta":       ["Jakarta",         "Asia/Jakarta"],
    "saigon":        ["Saigon",          "Asia/Saigon"],
    "singapore":     ["Singapore",       "Asia/Singapore"],
    "manila":        ["Manila",          "Asia/Manila"],
    "perth":         ["Perth",           "Australia/Perth"],
    "shanghai":      ["Shanghai",        "Asia/Shanghai"],
    "taipei":        ["Taipei",          "Asia/Taipei"],
    "hongkong":      ["Hong Kong",       "Asia/Hong_Kong"],
    "seoul":         ["Seoul",           "Asia/Seoul"],
    "tokyo":         ["Tokyo",           "Asia/Tokyo"],
    "adelaide":      ["Adelaide",        "Australia/Adelaide"],
    "brisbane":      ["Brisbane",        "Australia/Brisbane"],
    "melbourne":     ["Melbourne",       "Australia/Melbourne"],
    "hobart":        ["Hobart",          "Australia/Hobart"],
    "canberra":      ["Canberra",        "Australia/ACT"],
    "sydney":        ["Sydney",          "Australia/Sydney"],
    "lordhowe":      ["Lord Howe Island","Australia/Lord_Howe"],
    "vladivostok":   ["Vladivostok",     "Asia/Vladivostok"],
    "auckland":      ["Auckland",        "Pacific/Auckland"],
    "fiji":          ["Fiji",            "Pacific/Fiji"]
  },

  initializeList: function() {
    for (var city in App.Cities.options) {
      var currentTime                  = moment().tz(App.Cities.options[city][1]).format(App.TimeFormats.TimeForList);
      var currentGmtOffset             = moment().tz(App.Cities.options[city][1]).format('Z');

      $(App.Settings.el).append("<div class='addbutton' data-city='" + city + "'>" +
          App.Cities.options[city][0] + "<span>"+currentTime+"</span><span>"+
          currentGmtOffset+"</span></div>");

      urlCities = App.Url.get().split("/");
      if (urlCities.indexOf(city) > -1) {
        cities[city] = [
          App.Cities.options[city][0],
          App.Cities.options[city][1]
        ];
        $("*[data-city='"+ city +"']").addClass('is-active');
      }
    }
  }
};
