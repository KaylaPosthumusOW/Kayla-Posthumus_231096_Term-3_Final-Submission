// ------------------------------------------
// When the document Loads
// ------------------------------------------
 
const tripsArr = [
    {
        header: "Tropical Rhythms Cruise Adventure",
        description: "Explore the stunning beauty of the Caribbean with stops in Cozumel, Grand Cayman, and Jamaica. Enjoy snorkeling in crystal-clear waters, visit ancient Mayan ruins, and savor the vibrant local culture.",
        image: "Card 1.jpg",
        duration: "8 Days",
        accommodation: "Luxurious ocean-view cabins with private balconies",
        music: "Reggae legends, calypso performers, and Caribbean DJs",
        price: "Starting from $1,899 per person",
        tripCode: "#232456",
        tripDuration: "long",
        
        destination: "multi"
    },
    {
        header: "European Melodies River Cruise",
        description: "Sail along the iconic Danube River, exploring enchanting European cities. Visit Vienna, Budapest, Bratislava, and more while enjoying the picturesque landscapes and cultural delights.",
        image: "Card 2.png",
        duration: "7 Days",
        accommodation: "Elegant staterooms with modern amenities",
        music: "Classical orchestras, local folk ensembles, and Mediterranean-inspired jazz",
        price: "Starting from $2,299 per person",
        tripCode: "#232456",
        tripDuration: "long",
        onSale: "true",
        destination: "single"
    },
    {
        header: "Asian Beats Expedition",
        description: "Embark on an unforgettable journey through Asia, discovering the rich cultural tapestry of Japan, South Korea, and Taiwan. Immerse yourself in the sights, sounds, and flavors of this diverse region.",
        image: "Card 3.png",
        duration: "4 Days",
        accommodation: "Spacious suites with panoramic ocean views",
        music:  "K-Pop sensations, traditional Chinese ensembles, and modern Asian electronica",
        price: "Starting from $2,999 per person",
        tripCode: "#232456",
        tripDuration: "short",
        destination: "multi"
    },
    {
        header: "Caribbean Rhythms",
        description: "Experience the vibrant energy of the Caribbean as you sail through turquoise waters. From the lively streets of Havana to the white-sand beaches of Jamaica, immerse yourself in island culture and dance the night away at our Caribbean music festival.",
        image: "Card 4.jpeg",
        duration: "3 Days",
        accommodation: "Cozy cabins with Northern Lights viewing decks",
        music: "Polynesian drum troupes, island reggae bands, and global fusion DJs",
        price: "Starting from $1,499 per person",
        tripCode: "#232456",
        tripDuration: "short",
        onSale: "true",
        destination: "origin"
    },
    {
        header: "Mediterranean Melodies",
        description: "Discover the enchanting allure of the Mediterranean. Explore historic cities like Rome and Athens, and indulge in the romance of Santorini's sunset. Let the Mediterranean breezes carry the sweet sounds of our onboard music festival.",
        image: "Card 5.jpg",
        duration: "6 Days",
        accommodation: "Modern cabins with Asian-inspired décor",
        music: "Ambient electronic artists, acoustic duos, and soothing instrumental performances",
        price: "Starting from $2,599 per person",
        tripCode: "#232456",
        tripDuration: "long",
        onSale: "true",
        destination: "multi"
    },
    {
        header: "Pacific Groove",
        description: "Set sail across the Pacific to explore stunning destinations like Bora Bora and Fiji. Dive into the crystal-clear waters by day and dance under the stars by night as we celebrate island beats and global rhythms.",
        image: "Card 6.jpg",
        duration: "7 Days",
        music: "Tango orchestras, and Latin fusion bands", 
        price: "Starting from $1,999 per person",
        tripCode: "#232456",
        tripDuration: "long",
        destination: "single"
    },
    {
        header: "Northern Lights Serenade",
        description: "Journey to the Arctic Circle to witness the mesmerizing Northern Lights. Let the ethereal glow inspire our onboard music festival, creating a harmonious blend of nature's wonders and captivating melodies.",
        image: "Card 7.jpg",
        duration: "4 Days",
        accommodation: "Comfortable staterooms with Nordic influences",
        music: "Classical ensembles, Baltic folk musicians, and European electronic artists",
        price: "Starting from $2,399 per person",
        tripCode: "#232456",
        tripDuration: "short",
        destination: "origin"
    },
    {
        header: "Asian Fusion Voyage",
        description: "Navigate the bustling cities and serene landscapes of Asia. Experience the juxtaposition of tradition and modernity as you explore Tokyo, Shanghai, and more, all while enjoying our Asian fusion music festival.",
        image: "Card 8.jpg",
        duration: "9 Days",
        accommodation: "Safari-themed suites with African motifs",
        music: "Afrobeat legends, Sahara desert blues, and rhythmic African drumming",
        price: "Starting from $2,799 per person",
        tripCode: "#232456",
        tripDuration: "long",
        onSale: "true",
        destination: "multi"
    },
    {
        header: "South American Samba",
        description: "Sail along the coasts of South America, from the vibrant shores of Rio de Janeiro to the historic streets of Buenos Aires. Let the rhythms of samba and tango infuse your journey with passion and excitement.",
        image: "Card 9.jpg",
        duration: "4 Days",
        accommodation: "Modern cabins with Australasian design touches",
        music: "Indigenous didgeridoo players, Maori traditional performances, and Australasian pop artists",
        price: "Starting from $3,199 per person",
        tripCode: "#232456",
        tripDuration: "short",
        destination: "origin"
    },
    {
        header: "Baltic Symphony",
        description: "Admire the elegance of Northern Europe's capitals, including Copenhagen and St. Petersburg. Our onboard music festival transforms the Baltic Sea into a harmonious symphony of cultures and melodies.",
        image: "Card 10.jpg",
        duration: "4 Days",
        accommodation: "Art Deco-inspired cabins reminiscent of the jazz era",
        music: "Swing orchestras, jazz quartets, and vocal jazz sensations",
        price: "Starting from $1,799 per person",
        tripCode: "#232456",
        tripDuration: "short",
        onSale: "true",
        destination: "single"
    },
    {
        header: "African Beats Expedition",
        description: "Embark on an adventure along the African coastline, from the vibrant markets of Morocco to the serene beaches of Seychelles. Immerse yourself in the rich rhythms of Africa's diverse music scene.",
        image: "Card 11.jpg",
        duration: "7 Days",
        accommodation: "Opulent suites with Middle Eastern flair",
        music: "Oud virtuosos, Middle Eastern fusion ensembles, and desert-inspired ambient sounds",
        price: "Starting from $2,199 per person",
        tripCode: "#232456",
        tripDuration: "long",
        destination: "multi"
    },
    {
        header: "Australasia Harmony",
        description: "Cruise through the beauty of Australasia, exploring the Great Barrier Reef and the stunning landscapes of New Zealand. Let the sounds of didgeridoos and Maori chants enrich your experience.",
        image: "Card 12.jpg",
        duration: "6 Days",
        accommodation: "Bungalows and overwater villas in true Polynesian style",
        music: "Hula dancers, ukulele maestros, and Polynesian pop sensations",
        price: "Starting from $3,299 per person",
        tripCode: "#232456",
        tripDuration: "long",
        onSale: "true",
        destination: "origin"
    },
    {
        header: "Transatlantic Jazz Crossing",
        description: "Embark on a transatlantic crossing, reliving the golden era of jazz and swing. From New York to London, experience the magic of live jazz performances that harken back to a bygone era.",
        image: "Card 13.jpg",
        duration: "4 Days",
        accommodation: "Step into the elegance of our Art Deco-inspired cabins for 4 days of comfort and style.",
        music: "Immerse yourself in the soulful rhythms and swinging melodies of our onboard jazz program featuring world-renowned swing orchestras, jazz quartets, and vocal sensations.",
        price: "Starting from $1,799 per person, this cruise is your ticket to a timeless jazz experience.",
        tripCode: "#232456",
        tripDuration: "short",
        destination: "origin"
    },
    {
        header: "Arabian Nights Odyssey",
        description: "Explore the mystique of the Middle East, from the opulence of Dubai to the historic beauty of Petra. Our Arabian Nights-themed music festival showcases the rich cultural tapestry of the region.",
        image: "Card 14.jpg",
        duration: "7",
        accommodation: "Eco-friendly cabins with panoramic rain forest views",
        music: "Indigenous Amazonian drumming, jungle-inspired electronic beats, and Latin American folklore",
        price: "Starting from $2,699 per person",
        tripCode: "#232456",
        tripDuration: "long",
        destination: "single"
    },
    {
        header: "Norwegian Ford Serenade",
        description: "Sail through the islands of the Pacific, from Hawaii to Tahiti. Discover the allure of Polynesian culture and music, surrounded by the stunning beauty of the South Pacific's natural wonders.",
        image: "Card 5.jpg",
        duration: "5 Days",
        accommodation: "Cozy cabins with Scandinavian design elements",
        music: "Nordic folk musicians, classical performances with a Norwegian twist, and ambient electronic artists",
        price: "Starting from $2,099 per person",
        tripCode: "#232456",
        tripDuration: "short",
        onSale: "true",
        destination: "origin"
    },
];
 
let appliedFilter = "";
let filterApplied = "";
const selectedTrips = [];

// ---------------------
// When homepage loads in
// ---------------------
document.addEventListener("DOMContentLoaded", function () {
    var h1Element = document.getElementById("LoadIn");
    h1Element.textContent = "Welcome to Harmony Voyages";
});

// --------------------
// Browse Trips
// -----------------------------
 
$(document).ready(function(){
 
    console.log(tripsArr);
    loadTrips(tripsArr);
  
});

// ---------------------
// Weather API
// ---------------------
$(document).ready(function() {

    const city = "Pretoria"; 
    const apiKey = "cfeed7382e62ca260918a3416eb90d8b";

    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
      success: function(data) {
        const temp = data.main.temp;
        console.log("Temperature:", temp);
        
        updateTemperature(Math.round(temp - 273));
      }
    });
  });

  function updateTemperature(temp) {

    const templateContents = $("#weatherApi").contents().clone();
    const tempElement = templateContents.find("#temp");
    tempElement.text("Temperature: " + temp + "°C");

    $(".weather").empty().append(templateContents);
  }
 
// ---------------------------------------------
// Load Trips
// ---------------------------------------------
 
function loadTrips(tripsShow) {
 
    console.log(tripsShow);
 
    // Clear Cards in Arr
    $("#tripsContainer").empty();

    // loop Through Trips
    for (let i = 0; i < tripsShow.length; i++) {
        const trips = tripsShow[i];
        
        console.log(trips);
 
        $("#tripsContainer").append($("#tripsListTemplate").html());
 
        let currentChild = $("#tripsContainer").children().eq(i);
 
        $(currentChild).find("#tripsHeader").text(trips.header);
        $(currentChild).find("#description").text(trips.description);
        $(currentChild).find("#trips-image").attr('src', '../assets/' + trips.image)
        $(currentChild).find("#tripDuration").text(trips.duration);
        $(currentChild).find("#tripAccom").text(trips.accommodation);
        $(currentChild).find("#musicLineUp").text(trips.music);
        $(currentChild).find("#tripPrice").text(trips.price);
        $(currentChild).find("#tripCode").text(trips.tripCode);
  
        // Hide info
        $(currentChild).find("#information").hide();
        $(currentChild).find("#tripDuration").hide();
        $(currentChild).find("#tripAccom").hide();
        $(currentChild).find("#musicLineUp").hide();
        $(currentChild).find("#tripPrice").hide();
        $(currentChild).find(".purchase-hidden").hide();
        $(currentChild).find("#tripCode").hide();
    }
};

// ------------------------------------
// When a filter is clicked
// ----------------------------------

$("input[name='filter']").click(function() {

    appliedFilter = $(this).attr('value')

    console.log(appliedFilter);
    filterTrips();
});

$("input[name='filter2']").click(function() {

    filterApplied = $(this).attr('value')

    console.log(filterApplied);
    tripsFilter();
});

    function filterTrips() {

        let filteredTripsArr = [];

        // Filter 1
       
        if (appliedFilter) {
            if (appliedFilter === "onSale") {
                filteredTripsArr = tripsArr.filter(trips => trips.onSale == "true");
            } else {
                filteredTripsArr = tripsArr.filter(trips => trips.tripDuration == appliedFilter)
            }
          } else {
            filteredTripsArr = tripsArr;
          }

          loadTrips(filteredTripsArr);
        
         };

        //  Filter 2
    function tripsFilter() {

        let secFilteredArr = [];
        if(filterApplied) {
            secFilteredArr = tripsArr.filter(trips => trips.destination == filterApplied)
        }

        loadTrips(secFilteredArr)
    };

// -----------------------------------------------------
// When card is clicked
// -----------------------------------------------------

$("#tripsContainer").on('click', '.card', function(){

    // Toggle
    $(this).find("#information").slideToggle();
    $(this).find("#tripDuration").slideToggle();
    $(this).find("#tripAccom").slideToggle();
    $(this).find("#musicLineUp").slideToggle();
    $(this).find("#tripPrice").slideToggle();
    $(this).find(".purchase-hidden").slideToggle();
    $(this).find("#tripCode ").slideToggle();

    // hide
    $(this).find("#description").toggle();
    $(this).find("#trips-image").toggle();
    $(this).find(".learn-more").toggle();

});


// -----------------------------------------------
// When Purchase button is clicked
// -----------------------------------------------

let tripOrder = [];

tripCheckout = (tripsShow) => {

    loadTrips(tripsShow)
    for (let i = 0; i < tripsShow.length; i++) {
        const trips = tripsShow[i];
         
    let currentChild = $("#tripsContainer").children().eq(i);

    let tripName = $(currentChild).find("#tripsHeader").text(trips.header); 
    let code = $(currentChild).find("#tripCode").text(trips.tripCode);
    let duration = $(currentChild).find("#tripDuration").text(trips.duration);
    let cost = $(currentChild).find("#tripPrice").text(trips.price);

    tripOrder.push({
        tripName: tripName,
        code: code,
        duration: duration,
        cost: cost
    });

    console.log(tripOrder)
    };

    let data = JSON.stringify(tripOrder);
    localStorage.setItem('order', data);

};

  // --------------------------------------------------
  // Remove Button
  // --------------------------------------------------

  $(document).ready(function() {
    // Handle click event on the remove icons
    $(".remove-icon").on("click", function() {
      // Find the closest parent <tr> element and remove it
      $(this).closest("tr").remove();
    });
  });

// Remove all tbody
  function removeAll() {
    // Get the table element by its id
    var table = document.getElementById("tripTable");
  
    // Remove all the <tbody> elements within the table
    var tbodyElements = table.getElementsByTagName("tbody");
    for (var i = tbodyElements.length - 1; i >= 0; i--) {
      table.removeChild(tbodyElements[i]);
    }
  };

//   click Book Tickets btn
function showAlert() {
    alert("Thank you for booking your trips!");
  };
  