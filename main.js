
    /* MY Single-page JS */
(function() {
    var app = {
        // routes (ie. views and their functionality) defined here
        'routes': {
            'music': {
                'rendered': function() {
                    console.log('this view is "music"');
                }
            },
            'video': {
                'rendered': function() {
                    console.log('this view is "video"');
                }
             }
            
        },
        // The default view is recorded here. A more advanced implementation
        // might query the DOM to define it on the fly
        'default': 'home',
        'routeChange': function() {
            app.routeID = location.hash.slice(1);
            app.route = app.routes[app.routeID];
            app.routeElem = document.getElementById(app.routeID);
            if (app.route) {
              app.route.rendered();
            }
        },
        // The function to start the app.
        'init': function() {
            window.addEventListener('hashchange', function() {
                app.routeChange();
            });
            // If there's no hash in the URL, change the URL to
            // include the default view's hash
            if (!window.location.hash) {
                window.location.hash = app.default;
            } else {
                // Execute routeChange() for the first time
                app.routeChange();
            }
        }
    };
    window.app = app;
})();

app.init();



    /* MY Image-slider JS */   
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000
        
    });

 

var live = new Swiper('.live-container', {
        pagination: '.live-pagination',
        effect: 'cube',
        grabCursor: true,
        autoplay: 3000,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });

   




    /* MY DATA from handlebars */
var context ={
    people: [
        {
        name: "Elvis rpasic",
        shortname: "blend",       
        },
        {
        name: "Arad Sourati",
        shortname: "blend2",
        },
        {
        name: "Emil Steen",
        shortname: "blend3",   
        },
        {
        name: "Arad Sourati",
        shortname: "blend4",
        },
    ]
};



var template = $('#template').html();

var html = Mustache.to_html(template, context);
$('#content-placeholder').html(html);





var navigation;
function yScroll() {
    
    var navigation = document.getElementById("navigation");
    var yPos = window.pageYOffset;
    if(yPos > 128) {
        navigation.style.position = "fixed";
        
    } else {
        navigation.style.position = "";
    }
}

window.addEventListener("scroll", yScroll);














