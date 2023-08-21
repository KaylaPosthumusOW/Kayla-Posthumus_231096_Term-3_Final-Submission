// ------------------------------------------
// When the document Loads
// ------------------------------------------
 
const tripsArr = [
    {
        header: "Tropical Rhythms Cruise Adventure",
        description: "Explore the stunning beauty of the Caribbean with stops in Cozumel, Grand Cayman, and Jamaica. Enjoy snorkeling in crystal-clear waters, visit ancient Mayan ruins, and savor the vibrant local culture.",
        image: "Card 1.jpg",
        duration: "8"
    },
    {
        header: "European Melodies River Cruise",
        description: "Sail along the iconic Danube River, exploring enchanting European cities. Visit Vienna, Budapest, Bratislava, and more while enjoying the picturesque landscapes and cultural delights.",
        image: "Card 2.png",
        duration: "7"
    },
    {
        header: "Asian Beats Expedition",
        description: "Embark on an unforgettable journey through Asia, discovering the rich cultural tapestry of Japan, South Korea, and Taiwan. Immerse yourself in the sights, sounds, and flavors of this diverse region.",
        image: "Card 3.png",
        duration: "4"
    },
    {
        header: "Caribbean Rhythms",
        description: "Experience the vibrant energy of the Caribbean as you sail through turquoise waters. From the lively streets of Havana to the white-sand beaches of Jamaica, immerse yourself in island culture and dance the night away at our Caribbean music festival.",
        image: "Card 4.jpeg",
        duration: "3"
    },
    {
        header: "Mediterranean Melodies",
        description: "Discover the enchanting allure of the Mediterranean. Explore historic cities like Rome and Athens, and indulge in the romance of Santorini's sunset. Let the Mediterranean breezes carry the sweet sounds of our onboard music festival.",
        image: "Card 5.jpg",
        duration: "6"
    },
    {
        header: "Pacific Groove",
        description: "Set sail across the Pacific to explore stunning destinations like Bora Bora and Fiji. Dive into the crystal-clear waters by day and dance under the stars by night as we celebrate island beats and global rhythms.",
        image: "Card 6.jpg",
        duration: "7"
    },
    {
        header: "Northern Lights Serenade",
        description: "Journey to the Arctic Circle to witness the mesmerizing Northern Lights. Let the ethereal glow inspire our onboard music festival, creating a harmonious blend of nature's wonders and captivating melodies.",
        image: "Card 7.jpg",
        duration: "4"
    },
    {
        header: "Asian Fusion Voyage",
        description: "Navigate the bustling cities and serene landscapes of Asia. Experience the juxtaposition of tradition and modernity as you explore Tokyo, Shanghai, and more, all while enjoying our Asian fusion music festival.",
        image: "Card 8.jpg",
        duration: "9"
    },
    {
        header: "South American Samba",
        description: "Sail along the coasts of South America, from the vibrant shores of Rio de Janeiro to the historic streets of Buenos Aires. Let the rhythms of samba and tango infuse your journey with passion and excitement.",
        image: "Card 9.jpg",
        duration: "4"
    },
    {
        header: "Baltic Symphony",
        description: "Admire the elegance of Northern Europe's capitals, including Copenhagen and St. Petersburg. Our onboard music festival transforms the Baltic Sea into a harmonious symphony of cultures and melodies.",
        image: "Card 10.jpg",
        duration: "4"
    },
    {
        header: "African Beats Expedition",
        description: "Embark on an adventure along the African coastline, from the vibrant markets of Morocco to the serene beaches of Seychelles. Immerse yourself in the rich rhythms of Africa's diverse music scene.",
        image: "Card 11.jpg",
        duration: "7"
    },
    {
        header: "Australasia Harmony",
        description: "Cruise through the beauty of Australasia, exploring the Great Barrier Reef and the stunning landscapes of New Zealand. Let the sounds of didgeridoos and Maori chants enrich your experience.",
        image: "Card 12.jpg",
        duration: "6"
    },
    {
        header: "Transatlantic Jazz Crossing",
        description: "Embark on a transatlantic crossing, reliving the golden era of jazz and swing. From New York to London, experience the magic of live jazz performances that harken back to a bygone era.",
        image: "Card 13.jpg",
        duration: "4"
    },
    {
        header: "Arabian Nights Odyssey",
        description: "Explore the mystique of the Middle East, from the opulence of Dubai to the historic beauty of Petra. Our Arabian Nights-themed music festival showcases the rich cultural tapestry of the region.",
        image: "Card 14.jpg",
        duration: "7"
    },
    {
        header: "Polynesian Paradise",
        description: "Sail through the islands of the Pacific, from Hawaii to Tahiti. Discover the allure of Polynesian culture and music, surrounded by the stunning beauty of the South Pacific's natural wonders.",
        image: "Card 5.jpg",
        duration: "5"
    },
];
 
let appliedFilter = "";
 
// Browse Trips
 
$(document).ready(function(){
    console.log("Hello")
 
    console.log(tripsArr);
    loadTrips();
});
 
filterTrips();
 
// ---------------------------------------------
// Load Trips
// ---------------------------------------------
 

function loadTrips() {
 
    console.log(tripsArr);
 
 
    for (let i = 0; i < tripsArr.length; i++) {
        const trips = tripsArr[i];
 
        console.log(trips);
 
        $("#tripsContainer").append($("#tripsListTemplate").html());
 
        let currentChild = $("#tripsContainer").children().eq(i+1);
 
        $(currentChild).find("#tripsHeader").text(trips.header);
        $(currentChild).find("#description").text(trips.description);
        $(currentChild).find("#trips-image").attr('src', '../assets/' + trips.image)
 
 
    }
};
 
// ---------------------------------------------


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
 
//   -----------------------------------------
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
//             filterArrTrips = tripsArr.filter(trips => trips.duration == )
//         }
//     }
// }
 
$("input[name='filter']").click(function () {
    appliedFilter = $(this).attr('value');
 
    console.log(appliedFilter);
    filterTrips();
});
 
function filterTrips() {
    let filterArrTrips = [];
 
    if (appliedFilter) {
        if (appliedFilter === "shortTrip") {
            filterArrTrips = tripsArr.filter(trips => trips.duration < 5); 
        } else if (appliedFilter === "longTrip") {
            filterArrTrips = tripsArr.filter(trips => trips.duration >= 5); 
        }
    }
 
 console.log(filterArrTrips);
 loadTrips(filterArrTrips);
}

