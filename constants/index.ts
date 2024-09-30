export function weatherIcons(val: string) {
   switch (val) {
      case "Güneşli":
         return require("../assets/icons/day/sunny.png");
      case "Parçalı Bulutlu":
         return require("../assets/icons/day/partlyCloudy.png");
      case "Bulutlu":
      case "Çok bulutlu":
         return require("../assets/icons/day/cloudy.png");
      case "Sisli":
      case "Puslu":
      case "Dondurucu sis":
         return require("../assets/icons/day/mist.png");
      case "Bölgesel düzensiz yağmur yağışlı":
      case "Hafif sağnak yağışlı":
      case "Düzensiz hafif yağmurlu":
      case "Hafif yağmurlu":
      case "Ara ara orta kuvvetli yağmurlu":
      case "Orta kuvvetli yağmurlu":
      case "Ara ara şiddetli yağmurlu":
      case "Şiddetli yağmurlu":
      case "Orta kuvvetli veya Şiddetli dondurucu yağmurlu":
      case "Orta kuvvetli veya yoğun sağnak yağışlı":
      case "Şiddetli sağnak yağmur":
      case "Bölgesel gök gürültülü düzensiz hafif yağmur":
      case "Bölgesel gök gürültülü orta kuvvetli veya şiddetli yağış":
         return require("../assets/icons/day/rainy.png");
      case "Bölgesel düzensiz kar yağışlı":
      case "Düzensiz hafif karlı":
      case "Hafif karlı":
      case "Düzensiz orta kuvvetli karlı":
      case "Orta kuvvetli karlı":
      case "Düzensiz yoğun kar yağışlı":
      case "Yoğun kar yağışlı":
      case "Tipi":
      case "Kar fırtınası":
      case "Hafif sağnak şeklinde kar":
      case "Orta kuvvetli veya yoğun ve sağnak şeklinde kar":
         return require("../assets/icons/day/snowy.png");
      case "Bölgesel düzensiz karla karışık yağmurlu":
      case "Bölgesel düzensiz donmuş çisenti":
      case "Hafif karla karışık yağmur":
      case "Orta kuvvetli veya şiddetli karla karışık yağmur":
      case "Hafif çisenti":
      case "Hafif dondurucu yağmurlu":
      case "Dondurucu çisenti":
      case "Yoğun dondurucu çisenti":
      case "Orta kuvvetli veya şiddetli karla karışık sağnak yağış":
      case "Hafif karla karışık sağnak yağış":
      case "Hafif buz taneleri şeklinde sağnak yağış":
      case "Orta kuvvetli veya yoğun buz taneleri sağnak yağışlı":
      case "Buz taneleri":
         return require("../assets/icons/day/snowrain.png");
      case "Bölgesel düzensiz gök gürültülü yağmurlu":
         return require("../assets/icons/day/thunderyRainy.png");

      // Gece versiyonları
      case "Açık":
         return require("../assets/icons/night/clearNight.png");
      case "Parçalı Bulutlu-gece":
         return require("../assets/icons/night/partlyCloudyNight.png");
      case "Bulutlu-gece":
      case "Çok bulutlu-gece":
         return require("../assets/icons/night/cloudyNight.png");
      case "Sisli-gece":
      case "Puslu-gece":
      case "Dondurucu sis-gece":
         return require("../assets/icons/night/mistNight.png");
      case "Bölgesel düzensiz yağmur yağışlı-gece":
      case "Hafif sağnak yağışlı-gece":
      case "Düzensiz hafif yağmurlu-gece":
      case "Hafif yağmurlu-gece":
      case "Ara ara orta kuvvetli yağmurlu-gece":
      case "Orta kuvvetli yağmurlu-gece":
      case "Ara ara şiddetli yağmurlu-gece":
      case "Şiddetli yağmurlu-gece":
      case "Orta kuvvetli veya Şiddetli dondurucu yağmurlu-gece":
      case "Orta kuvvetli veya yoğun sağnak yağışlı-gece":
      case "Şiddetli sağnak yağmur-gece":
      case "Bölgesel gök gürültülü düzensiz hafif yağmur-gece":
      case "Bölgesel gök gürültülü orta kuvvetli veya şiddetli yağış-gece":
         return require("../assets/icons/night/rainyNight.png");
      case "Bölgesel düzensiz kar yağışlı-gece":
      case "Düzensiz hafif karlı-gece":
      case "Hafif karlı-gece":
      case "Düzensiz orta kuvvetli karlı-gece":
      case "Orta kuvvetli karlı-gece":
      case "Düzensiz yoğun kar yağışlı-gece":
      case "Yoğun kar yağışlı-gece":
      case "Tipi-gece":
      case "Kar fırtınası-gece":
      case "Hafif sağnak şeklinde kar-gece":
      case "Orta kuvvetli veya yoğun ve sağnak şeklinde kar-gece":
         return require("../assets/icons/night/snowyNight.png");
      case "Bölgesel düzensiz karla karışık yağmurlu-gece":
      case "Bölgesel düzensiz donmuş çisenti-gece":
      case "Hafif karla karışık yağmur-gece":
      case "Orta kuvvetli veya şiddetli karla karışık yağmur-gece":
      case "Hafif çisenti-gece":
      case "Hafif dondurucu yağmurlu-gece":
      case "Dondurucu çisenti-gece":
      case "Yoğun dondurucu çisenti-gece":
      case "Orta kuvvetli veya şiddetli karla karışık sağnak yağış-gece":
      case "Hafif karla karışık sağnak yağış-gece":
      case "Hafif buz taneleri şeklinde sağnak yağış-gece":
      case "Orta kuvvetli veya yoğun buz taneleri sağnak yağışlı-gece":
      case "Buz taneleri-gece":
         return require("../assets/icons/night/snowrainNight.png");
      case "Bölgesel düzensiz gök gürültülü yağmurlu-gece":
         return require("../assets/icons/night/thunderyRainyNight.png");
   }
}
