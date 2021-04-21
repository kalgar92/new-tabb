jQuery(function() {

    var simplemde = new SimpleMDE({ 
        element: document.getElementById("notes-textarea"),
        autofocus: true,
        autosave: {
            enabled: true,
            uniqueId: "MyUniqueID",
            delay: 1000,
        },
        spellChecker: false,
        status: false,
        toolbar: ["bold", "italic", "link", "ordered-list", "unordered-list", "|", "heading-1", "heading-2", "heading-3", "|", "image", "table"]
    });

    var quotes = [
        "Act as if what you do makes a difference. It does.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Never bend your head. Always hold it high. Look the world straight in the eye.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Believe you can and you're halfway there.",
        "When you have a dream, you've got to grab it and never let go.",
        "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        "No matter what you're going through, there's a light at the end of the tunnel.",
        "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
        "Life is like riding a bicycle. To keep your balance, you must keep moving."
    ];
    
    function switchTab(location){
        
        if(location == 'home'){
            var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            $(".home blockquote").text(randomQuote);
        }

        if(location == 'search'){
            $(".mega-search").focus();
            console.log("search");
        }

        $("[data-active]").fadeOut(250);
        setTimeout(function(){
            $("[data-active]").attr("data-active", "false");
            $("section."+location).fadeIn(200,'swing');
            $("section."+location).attr("data-active", "true");
            $(".actif").removeAttr("class");
            $(".menu [href='#"+location+"']").attr("class", "actif");
        },250);
    }

    $(".menu a").click(function(){

        switchTab($(this).attr("href").replace("#", ""));

    });

    $("nav a").hover(function(){

      $(this).find(".fa-grip-lines").css("opacity", "1");

    }, function(){

      $(this).find(".fa-grip-lines").css("opacity", "0");

    });


    $(document).keydown(function(event){ 

        var prevent = $(".mega-search").is(":focus");

        prevent = true;

        if(!prevent){

            var keycode = (event.keyCode ? event.keyCode : event.which); 
            switch(keycode) {
                case 72:
                    switchTab("home");
                  break;
                case 70:
                    switchTab("focus");
                  break;
                case 84:
                    switchTab("todo");
                  break;
                case 68:
                    switchTab("daily");
                  break;
                case 77:
                    switchTab("monthly");
                  break;
                case 69:
                    switchTab("event");
                  break;
                case 82:
                    switchTab("read");
                  break;
                case 87:
                    switchTab("watch");
                  break;
                case 78:
                    switchTab("notes");
                  break;
                case 83:
                      switchTab("search");
                    break;
                case 85:
                      switchTab("ui");
                    break;
                case 81:
                      switchTab("quick");
                    break;
                default:
                  // code block
            }
            event.stopPropagation(); 
        }
            
    }); 


});
