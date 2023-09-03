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
        tripDuration: "short",
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
        tripDuration: "short",
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
        tripDuration: "long",
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
        tripDuration: "long",
    },
    {
        header: "Mediterranean Melodies",
        description: "Discover the enchanting allure of the Mediterranean. Explore historic cities like Rome and Athens, and indulge in the romance of Santorini's sunset. Let the Mediterranean breezes carry the sweet sounds of our onboard music festival.",
        image: "Card 5.jpg",
        duration: "6 Days",
        accommodation: "Modern cabins with Asian-inspired décor",
        music: "Ambient electronic artists, acoustic duos, and soothing instrumental performances",
        price: "Starting from $2,599 per person",
        tripCode: "#232456"
    },
    {
        header: "Pacific Groove",
        description: "Set sail across the Pacific to explore stunning destinations like Bora Bora and Fiji. Dive into the crystal-clear waters by day and dance under the stars by night as we celebrate island beats and global rhythms.",
        image: "Card 6.jpg",
        duration: "7 Days",
        music: "Tango orchestras, and Latin fusion bands", 
        price: "Starting from $1,999 per person",
        tripCode: "#232456"
    },
    {
        header: "Northern Lights Serenade",
        description: "Journey to the Arctic Circle to witness the mesmerizing Northern Lights. Let the ethereal glow inspire our onboard music festival, creating a harmonious blend of nature's wonders and captivating melodies.",
        image: "Card 7.jpg",
        duration: "4 Days",
        accommodation: "Comfortable staterooms with Nordic influences",
        music: "Classical ensembles, Baltic folk musicians, and European electronic artists",
        price: "Starting from $2,399 per person",
        tripCode: "#232456"
    },
    {
        header: "Asian Fusion Voyage",
        description: "Navigate the bustling cities and serene landscapes of Asia. Experience the juxtaposition of tradition and modernity as you explore Tokyo, Shanghai, and more, all while enjoying our Asian fusion music festival.",
        image: "Card 8.jpg",
        duration: "9 Days",
        accommodation: "Safari-themed suites with African motifs",
        music: "Afrobeat legends, Sahara desert blues, and rhythmic African drumming",
        price: "Starting from $2,799 per person",
        tripCode: "#232456"
    },
    {
        header: "South American Samba",
        description: "Sail along the coasts of South America, from the vibrant shores of Rio de Janeiro to the historic streets of Buenos Aires. Let the rhythms of samba and tango infuse your journey with passion and excitement.",
        image: "Card 9.jpg",
        duration: "4 Days",
        accommodation: "Modern cabins with Australasian design touches",
        music: "Indigenous didgeridoo players, Maori traditional performances, and Australasian pop artists",
        price: "Starting from $3,199 per person",
        tripCode: "#232456"
    },
    {
        header: "Baltic Symphony",
        description: "Admire the elegance of Northern Europe's capitals, including Copenhagen and St. Petersburg. Our onboard music festival transforms the Baltic Sea into a harmonious symphony of cultures and melodies.",
        image: "Card 10.jpg",
        duration: "4 Days",
        accommodation: "Art Deco-inspired cabins reminiscent of the jazz era",
        music: "Swing orchestras, jazz quartets, and vocal jazz sensations",
        price: "Starting from $1,799 per person",
        tripCode: "#232456"
    },
    {
        header: "African Beats Expedition",
        description: "Embark on an adventure along the African coastline, from the vibrant markets of Morocco to the serene beaches of Seychelles. Immerse yourself in the rich rhythms of Africa's diverse music scene.",
        image: "Card 11.jpg",
        duration: "7 Days",
        accommodation: "Opulent suites with Middle Eastern flair",
        music: "Oud virtuosos, Middle Eastern fusion ensembles, and desert-inspired ambient sounds",
        price: "Starting from $2,199 per person",
        tripCode: "#232456"
    },
    {
        header: "Australasia Harmony",
        description: "Cruise through the beauty of Australasia, exploring the Great Barrier Reef and the stunning landscapes of New Zealand. Let the sounds of didgeridoos and Maori chants enrich your experience.",
        image: "Card 12.jpg",
        duration: "6 Days",
        accommodation: "Bungalows and overwater villas in true Polynesian style",
        music: "Hula dancers, ukulele maestros, and Polynesian pop sensations",
        price: "Starting from $3,299 per person",
        tripCode: "#232456"
    },
    {
        header: "Transatlantic Jazz Crossing",
        description: "Embark on a transatlantic crossing, reliving the golden era of jazz and swing. From New York to London, experience the magic of live jazz performances that harken back to a bygone era.",
        image: "Card 13.jpg",
        duration: "4 Days",
        accommodation: "Step into the elegance of our Art Deco-inspired cabins for 4 days of comfort and style.",
        music: "Immerse yourself in the soulful rhythms and swinging melodies of our onboard jazz program featuring world-renowned swing orchestras, jazz quartets, and vocal sensations.",
        price: "Starting from $1,799 per person, this cruise is your ticket to a timeless jazz experience.",
        tripCode: "#232456"
    },
    {
        header: "Arabian Nights Odyssey",
        description: "Explore the mystique of the Middle East, from the opulence of Dubai to the historic beauty of Petra. Our Arabian Nights-themed music festival showcases the rich cultural tapestry of the region.",
        image: "Card 14.jpg",
        duration: "7",
        accommodation: "Eco-friendly cabins with panoramic rainforest views",
        music: "Indigenous Amazonian drumming, jungle-inspired electronic beats, and Latin American folklore",
        price: "Starting from $2,699 per person",
        tripCode: "#232456"
    },
    {
        header: "Norwegian Ford Serenade",
        description: "Sail through the islands of the Pacific, from Hawaii to Tahiti. Discover the allure of Polynesian culture and music, surrounded by the stunning beauty of the South Pacific's natural wonders.",
        image: "Card 5.jpg",
        duration: "5 Days",
        accommodation: "Cozy cabins with Scandinavian design elements",
        music: "Nordic folk musicians, classical performances with a Norwegian twist, and ambient electronic artists",
        price: "Starting from $2,099 per person",
        tripCode: "#232456"
    },
];
 
let appliedFilter = "";
const selectedTrips = [];
// Browse Trips
 
$(document).ready(function(){
 
    console.log(tripsArr);
    loadTrips(tripsArr);
    filterTrips();
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
 
// filterTrips();
 
// ---------------------------------------------
// Load Trips
// ---------------------------------------------
 

function loadTrips(tripsShow) {
 
    console.log(tripsShow);
 
 
    for (let i = 0; i < tripsShow.length; i++) {
        const trips = tripsShow[i];
        
 
        console.log(trips);
 
        $("#tripsContainer").append($("#tripsListTemplate").html());
 
        let currentChild = $("#tripsContainer").children().eq(i+1);
 
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

// ----------------------
// Filter Radio Buttons

// $("input[name='filter']").click(function(){
//     appliedFilter = $(this).attr('id');

//     console.log(appliedFilter)
//    filterTrips();
// });

// function filterTrips() {

//     let filteredTripsArr = [];

    

//             let filterArrTrips = [];
         
//             if (appliedFilter) {
//                 if (appliedFilter === "shortTrip") {
//                     filterArrTrips = tripsArr.filter(trips => trips.tripDuration === "short"); 
//                 } else if (appliedFilter === "longTrip") {
//                     filterArrTrips = tripsArr.filter(trips => trips.tripDuration === "long"); 
//                 }
//             }
                
//         loadTrips(filteredTripsArr)
// };

    

//     console.log(appliedFilter);

//     //Filter Trips
//     if (appliedFilter === "onSale") {
//         filteredSortedArrPlants = arrPlants.filter(plant => plant.onSale == "true");

//     filteredTripsArr = tripsArr.filter(function(trips) {
//         return trips.duration > 5;
//     }) 

//     loadTrips(filteredTripsArr);
// };

// --------------------
// When button is clicked








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






// Filter clicked
// $("input[name='filter']").click(function(){
//     appliedFilter = $(this).attr('value');
 
//     console.log(appliedFilter);
//     filterTrips();
// });
 
// function filterTrips(){
 
//     let  filterArrTrips = [];
 
//     if(appliedFilter) {
//         if (appliedFilter === "short"){
//             filterArrTrips = tripsArr.filter(trips => trips.duration == 5)
//         }
//     }
// }
 
// $("input[name='filter']").click(function () {
//     appliedFilter = $(this).attr('value');
 
//     console.log(appliedFilter);
//     filterTrips(tripsArr);
// });
 
// function filterTrips() {
//     let filterArrTrips = [];
 
//     if (appliedFilter) {
//         if (appliedFilter === "shortTrip") {
//             filterArrTrips = tripsArr.filter(trips => trips.duration < 5); 
//         } else if (appliedFilter === "longTrip") {
//             filterArrTrips = tripsArr.filter(trips => trips.duration >= 5); 
//         }
//     }
// };
 
//  console.log(filterArrTrips);
//  loadTrips(filterArrTrips);


$(document).ready(function () {

    //local storage
    const selectedTrips = JSON.parse(localStorage.getItem("selectedTrips")) || [];
    //
    const selectedTrips = [];

    function updateTotalPrice() {
        let totalPrice = 0;
        selectedTrips.forEach((trip) => {
            totalPrice += trip.quantity * parseFloat(trip.price);
        });

        $("#totalPrice").text(`Total: R${totalPrice.toFixed(2)}`);
    }

    function addTripToCart(trip) {
    
        const existingTrip = selectedTrips.find((item) => item.tripCode === trip.tripCode);
        if (existingTrip) {
            existingTrip.quantity++;
        } else {
          
            selectedTrips.push({ ...trip, quantity: 1 });
        }

        updateCheckoutTable();
        updateTotalPrice();
    }

    function updateCheckoutTable() {
        const tableBody = $("#checkoutTable");
        tableBody.empty();

        selectedTrips.forEach((trip) => {
            const row = $("<tr>");
            row.append(`<td>${trip.header}</td>`);
            row.append(`<td>${trip.tripCode}</td>`);
            row.append(`<td>${trip.duration}</td>`);
            row.append(`<td>${trip.quantity}</td>`);
            row.append(`<td>R${(trip.quantity * parseFloat(trip.price)).toFixed(2)}</td>`);
            const removeButton = $(`<td><button class="remove-item" data-trip-code="${trip.tripCode}">Remove</button></td>`);
            row.append(removeButton);
            tableBody.append(row);
        });

        $(".remove-item").click(function () {
            const tripCodeToRemove = $(this).data("trip-code");
            const indexToRemove = selectedTrips.findIndex((trip) => trip.tripCode === tripCodeToRemove);
            if (indexToRemove !== -1) {
                selectedTrips.splice(indexToRemove, 1);
                updateCheckoutTable();
                updateTotalPrice();
            }
        });
    }
    //local storage
    function saveSelectedTripsToLocalStorage() {
        localStorage.setItem("selectedTrips", JSON.stringify(selectedTrips));
    }
 
    $(".checkout-button").click(function () {
        console.log("Selected trips:", selectedTrips);
    });


    $(".remove").click(function () {
        selectedTrips.length = 0;
        updateCheckoutTable();
        updateTotalPrice();
        saveSelectedTripsToLocalStorage();
    });

    $("#tripsContainer").on("click", ".purchase-hidden", function () {
        const tripCode = $(this).data("trip-id");
        const selectedTrip = tripsArr.find((trip) => trip.tripCode === tripCode);
        if (selectedTrip) {
            addTripToCart(selectedTrip);
        }
        saveSelectedTripsToLocalStorage();
    });


    if (selectedTrips.length > 0) {
        updateCheckoutTable();
        updateTotalPrice();
    }
});






 
