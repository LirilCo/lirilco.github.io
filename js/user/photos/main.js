function openModal(a) {
    $("body")[0].style.overflowY= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a

    var user = a.closest(".photo").find(".username").html();
    $('.theater .comments .info .username').html(user);

    var time = a.closest(".photo").find(".time").html();
    $('.theater .comments .info .time').html(time);

    var title = a.closest(".photo").find(".title").html();
    $('.theater .comments .title').html(title);
    if (a.closest(".photo").find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest(".photo").find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }
    var pic = a.closest(".photo").find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest(".photo").find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    var more= !!a.closest(".photo").find(".moreI").html()? a.closest(".photo").find(".moreI").html(): "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet varius lectus, congue rutrum urna. Suspendisse in ultrices enim. In hac habitasse platea dictumst. Praesent aliquet, nisi nec euismod vulputate, odio velit porta erat, ut semper lacus erat ac nulla. Aenean ex libero, volutpat vel sem et, blandit dictum dui. Duis suscipit sed nisi finibus vestibulum. Quisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculiuisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculis nibh.";
    $('.theater .comments .more').html(more);
    
    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }
    $("#theater").find(".info").height() <= $("#theater").find(".info").find("img").width()? $("#theater").find(".description").css({"padding-top": "58px"}): $("#theater").find(".description").css({"padding-top": "76px"})

    $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
    if(a.closest('.photo').is(".mult_img")){ 
        ar= $(a.closest('.photo')); 
        source= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
        $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
        $("#theater").append('<div class="nav_arrow left' + (ar.find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (ar.find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            !ar.find(".carr").is(":animated")? ar.find(".carr")[0].scrollLeft= ar.find(".carr")[0].scrollLeft - ar.find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
            source= $("#theater").find("#bigPic")[0].src; 
            history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            !ar.find(".carr").is(":animated")? ar.find(".carr")[0].scrollLeft= ar.find(".carr")[0].scrollLeft + ar.find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
            source= $("#theater").find("#bigPic")[0].src; 
            history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
        
        history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    }else{ 
        var source = un_tn($(a.closest(".photo").children()[0]).attr('src')); 
        $('.theater #bigPic').attr('src', source); 
        history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    } 


    responsive(); 
}

function closeModal() { 
    $("#theater #bigPic")[0].src= ""; 

    history.pushState({page: 1}, "", "/" + username + "/photos"); 

    $("#theater .nav_arrow").remove(); 
              
    ar= null; 
              
    if ($('.theater .comments .options .bookmark').hasClass("true")) {
        $this.find('.options .bookmark').addClass("true");
    } else {
        $this.find('.options .bookmark').removeClass("true");
    }
    if ($('.theater .comments .options .star').hasClass("true")) {
        $this.find('.options .star').addClass("true");
    } else {
        $this.find('.options .star').removeClass("true");
    }
    $(".theater").css({
        "display": "none"
    })
    $("body")[0].style.overflowY= ""; 
} 
function un_tn(u){ 
    return u.slice(0, u.indexOf("_tn")) + u.slice(u.indexOf("_tn") + 3); 
} 
$(document).on("ready",function(e){
    Used= []; 
    Urls= ["Abigail O'Neill.jpg", "Alana Campos.png", "Alexandra Tyler.jpeg", "Ali Chanel.jpg", "Ali Michael.jpg", "Alicia Loraina Olivas.jpg", "Allie Leggett.jpg", "Allie Silva.jpg", "Alyssa Arcè.jpg", "Amanda Booth.jpg", "Amanda Cerny.webp", "Amanda Streich.jpg", "Amberleigh West.jpg", "Amelia Talon.jpg", "Amy Leigh Andrews.jpg", "Ana Cheri.webp", "Anita Pathammavong.jpg", "Anna Sophia Berglund.jpg", "Ashley Doris.jpg", "Ashley Hobbs.jpg", "Ashley Smith.webp", "Audrey Aleen Allen.jpg", "Beth Williams.jpg", "Bridget Malcolm.jpg", "Britany Nola.jpg", "Britt Linn.jpeg", "Brittany Brousseau.jpg", "Brittny Ward.jpg", "Brook Power.jpg", "Bryiana Noelle.jpg", "Camille Rowe.jpg", "Carly Lauren.jpg", "Carolina Ballesteros.jpg", "Cassandra Dawn.webp", "Chasity Samone.jpg", "Chelsie Aryn.jpg", "Ciara Price.jpg", "Claire Sinclair.jpg", "Dana Taylor.jpg", "Dani Mathers.jpg", "Danielle Alcaraz.jpg", "Dominique Jane.jpg", "Dree Hemingway.jpg", "Elizabeth Elam.webp", "Elizabeth Ostrander.webp", "Elsie Hewitt.jpg", "Emily Agnes.jpg", "Enikő Mihalik.jpg", "Eugena Washington.jpg", "Fo Porter.jpg", "Francesca Frigo.jpg", "Geena Rocero.jpg", "Gemma Lee Farrell.jpg", "Gia Marie.jpg", "Gillian Chan.jpg", "Heather Knox.jpg", "Heather Rae Young.webp", "Hilda Dias Pimentel.jpg", "Ines Rau.jpg", "Iryna Ivanova.jpg", "Jaclyn Swedberg.jpg", "Jaime Faith Edmonson.jpg", "Jaslyn Ome.jpg", "Jenny Watwood.jpg", "Jessa Lynn Hinton.jpg", "Jessica Ashley.jpg", "Jessica Wall.jpg", "Jordan Emanuel.webp", "Jordy Murray.jpg", "Josie Canseco.jpg", "Joy Corrigan.jpg", "Karina Marie.jpg", "Kassie Lyn Logsdon.jpg", "Katie Vernola.jpg", "Kayla Garvin.jpg", "Kayla Rae Reid.webp", "Kaylia Cassandra.webp", "Kayslee Collins.webp", "Kelly Gale.png", "Kennedy Summers.jpg", "Khrystyana.jpg", "Kirby Griffin.jpg", "Kristen Nicole.jpeg", "Kristy Garett.jpg", "Kylie Johnson.jpg", "Kyra Milan.jpg", "Lada Kravchenko.jpg", "Leola Bell.jpg", "Lisa Seiffert.jpg", "Liza Kei.png", "Lorena Medina.jpg", "Maggie May.jpg", "Marsha Elle.jpg", "Megan Moore.jpg", "Megan Samperi.jpg", "Mei-Ling Lam.jpg", "Miki Hamano.jpg", "Milan Dixon.jpg", "Monica Sims.jpg", "Nereyda Bird.jpg", "Nikki Leigh.jpg", "Nina Daniele.jpg", "Olga de Mar.jpg", "Olivia Paige.jpg", "Pamela Horton.jpg", "Priscilla Huggins.jpg", "Rachel Harris.jpg", "Rainy Day Jordan.jpg", "Raquel Pomplun.jpg", "Riley Ticotin.jpg", "Roos van Montfort.jpg", "Roxanna June.jpg", "Sasha Bonilova.jpg", "Savannah Smith.jpeg", "Shanice Jordyn.jpg", "Shanna McLaughlin.jpg", "Shauna Sexton.jpg", "Shawn Dillon.jpeg", "Shelby Chesnes.jpg", "Shelby Rose.jpg", "Shelby Rose.webp", "Shera Bechard.jpg", "Sophie O’Neil.jpg", "Stephanie Branton.jpg", "Tanerélle.jpg", "Teela LaRoux.jpg", "Tiffany Toth.jpg", "Val Keil.jpeg", "Valeria Lakhina.jpg", "Vendela Lindblom.jpg", "Yoli Lara.jpg"]; 

    while(Used.length != Urls.length){ 
        randmIntgr= parseInt(Math.random() * Urls.length );

        while(Used.indexOf(randmIntgr) != -1){ 
            randmIntgr= parseInt(Math.random() * Urls.length ); 
        }

        $("#resizeBottom ul")[0].innerHTML= $("#resizeBottom ul")[0].innerHTML + '<li class="button offline"><img src="/resources/images/chat/' + Urls[randmIntgr] + '" alt=""><p>' + Urls[randmIntgr].slice(0, Urls[randmIntgr].indexOf(".")) + '</p><span ></span></li>'
        Used[Used.length]= randmIntgr
    }

    Number= 7 + parseInt(Math.random() * 78);  
                                          
    for(eForensics in document.querySelector("#resizeBottom ul").children){ 
        if(Number > 0){ 
            $($("#resizeBottom ul").children()[eForensics]).removeClass("offline"); 
            $($("#resizeBottom ul").children()[eForensics]).addClass("connected"); 
            Number--; 
        } 
    } 

    responsive();
    
    $(".carr").on("scroll", function(){ 
        $$$th= $(this); 
        $(this)[0].scrollLeft / $(this).width() == $(this).find(".pic").length - 1? (function(){
            $$$th.closest(".photo").find(".nav_arrow.right").addClass("disabled");
            $("#theater .nav_arrow.right").addClass("disabled"); 
        })(): (function(){
            $$$th.closest(".photo").find(".nav_arrow.right").removeClass("disabled");
            $("#theater .nav_arrow.right").removeClass("disabled"); 
        })(); 
        $(this)[0].scrollLeft == 0? (function(){
            $$$th.closest(".photo").find(".nav_arrow.left").addClass("disabled");
            $("#theater .nav_arrow.left").addClass("disabled"); 
        })(): (function(){
            $$$th.closest(".photo").find(".nav_arrow.left").removeClass("disabled");
            $("#theater .nav_arrow.left").removeClass("disabled"); 
        })(); 
    }) 
    $('.chats').click(function(e){ 
	    aa= e.target; 
	    ii= false; 
	    while(!!aa.parentElement && !ii){ 
	        (!!aa.parentElement.getAttribute("class") && aa.parentElement.getAttribute("class").indexOf("chat ") != -1)? ii = true: 1; 
	        aa= aa.parentElement; 
	    }
        if(!ii){ 
            $(this).hide(); 
    	    $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click"); 
    	    $(this).show(); 
        } 
    }); 
    $("html").click(function() {
        $(".wrapper").removeClass("visible")
        $("#right-menu .index-arrow").removeClass("open");
        $("#profileSettings").removeClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      
    $("#theater").on("click", function(i){$(i.target).is("#theater")? closeModal(): 1; }); 


e.stopPropagation() 


});

$('#profileSettings').click(function(i){
    i.stopPropagation()
   
}); 
});
$(document).keypress(function (e) {
if(!$("textarea").is(":focus") && !$("input").is(":focus")){
    if (e.keyCode == 108) {
        $(".current").find('.options .star').toggleClass("true");
        $("#theater").find('.options .star').toggleClass("true");
    }
    if (e.keyCode == 98) {
        $(".current").find('.options .bookmark').toggleClass("true");
        $("#theater").find('.options .bookmark').toggleClass("true");        
    }
    if (e.keyCode == 102) {
        openModal($(".current .pic"))
    }
    var forward;
    if (e.keyCode == 106) {
        forward = true;
    } else if (e.keyCode == 107) {
        forward = false;
    } else {
        return true;
    }


    if (!$(".story.current").length) {
        $(".story:first").addClass("current");
    }

    if ($(".story.current").length) {
        var current = $(".story.current");
        var next;
        if (forward) {
            next = current.next(".story")
        } else {
            next = current.prev(".story");
        }
        if (next.length) {
            current.removeClass("current");
            next.addClass("current");
        } else {
            loadMore();
        }
    }

    $("html, body").animate({
        scrollTop: $(".current").offset().top - 56
    }, 400);
    }
});
var c = 0
var $this
$(window).on("load", function () {
    $("#chat ul li").on("click",function(){
        if($(this).attr('class').split(' ')[2] == null){
            $(this).addClass( c.toString() );
            newChat($(this), c);
            c++
        }else{
            $dat =$(".chats .chat."+$(this).attr('class').split(' ')[2])
            if(! $dat.hasClass("open")){
                prependClass($dat,"open");  
            }
            $(".chats .chat."+$(this).attr('class').split(' ')[2]+" .newMessage textarea").focus();
        }
    }


        )

  
    $("#chats .chats ").on("mouseover mouseout", ".chatTitle", function() {
        $( this ).find(".close").toggleClass( "visible" );
      });
    $( ".chatTitle .close" ).on("click",
      function() {
        destroyChat($(this));
      }
    );
    $("#chats .chats ").on("click", ".chatTitle", function() {
         $( this ).closest(".chat").toggleClass("open");
       $( this ).parent().find($(".newMessage textarea")).focus()

      });
    $("#chats .chats ").on("click", ".chatTitle .close", function() {
         destroyChat($( this ))
      });
    $(".story").on("click", function () {
        $(".current").removeClass("current");
        $(this).addClass("current")
    })
    $("li").prop("title", function () {
        return $(this).find("p").text();
    });

    $('.knob').trigger(
        'configure', {
            "fgColor": "#2ecc71"
        }
    );

    $(".star").on("click", function () {
        $(this).toggleClass("true")
    });
    $(".bookmark").on("click", function () {
        $(this).toggleClass("true")
    });

    $("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
           
                 $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                
            
            })
        } else {
           $("header").removeClass("open");
           $('.knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
           }
          
               
            
        });
    
    $("#profilePic").on("click", function () {
        openProfilePicModal($(this))
    }); 
    
    $("#gallery img").on("click", function () {
        openModal($(this));
        responsive(); 
                $('#target').tooltip()

    });

    $("#close").on("click", function () {

        closeModal()
    });

    $("#wrapper").on("click", function () {
        closeModal()
    });
   
document.onkeydown = function (evt) {
    (!!ar || $(".current").is(".mult_img"))? (function(){ 
        switch(evt.keyCode){
            case 37: 
                ar? th= ar: th= $(".current"); 
                if($("#theater").css("display") == "none"){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400): 672; 
                }else{ 
                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
                    $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                    source= un_tn($(th.find(".carr")).find(".pic")[th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width()].src); 
                    history.pushState({page: 1}, "", "/" + th.find(".username").children()[0].href.slice(th.find(".username").children()[0].href.lastIndexOf("/") + 1) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

                } 
                break; 
            case 39: 
                ar? th= ar: th= $(".current"); 
                if($("#theater").css("display") == "none"){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400): 672; 
                }else{ 
                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
                    $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                    source= un_tn($(th.find(".carr")).find(".pic")[th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width()].src); 
                    history.pushState({page: 1}, "", "/" + th.find(".username").children()[0].href.slice(th.find(".username").children()[0].href.lastIndexOf("/") + 1) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
                } 
                break; 
        }
    })(): 672; 

        evt = evt || window.event;
        if (evt.keyCode == 27) {
            if($("#theater").css("display")== "none"){
             destroyChat($(document.activeElement))
        }else{
                        closeModal();

        }
            }
    };
   
     $(".chat").on("click", function(){})

        if ($("#profileSettings").hasClass("open") && $("#Store").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
$("#chats .chats ").on("click", ".chat", function(ev) {
        if(getSelectionText()  == ""){
        $(this).find("textarea").focus();
}
});
    $("#profileTrigger").on("click", function (e) {
        $(".wrapper").toggleClass("visible")
        $("#right-menu .index-arrow").toggleClass("open");
        $("#profileSettings").toggleClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 




    });
$("#chats .chats").on("keypress", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
    if(ev.keyCode == 13 &&  $(this).val() != 0 && !ev.shiftKey){
      ev.preventDefault();
      var content = this.value;                
       $(this).closest(".chat").find(".messages").append("<p class='sent'>" + content + "</p>")
       $(this).val("")
       scrollBottom($(this).closest(".chat").find(".chatBox .messages"))
  }
 })
$("#chats .chats").on("keyup", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
$("#chats .chats").on("keydown", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
});

$(window).on("resize", function(){
    responsive();
})
function responsive() {
    $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);

    
        $("#sidebar").height($(window).height() - 46);
        $("#sidebar #container").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#sidebar #chat").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#resizeBottom").resizable("option", "maxHeight", ($(window).height() - $("#sidebar #search").outerHeight() - 51));
        if ($("#resizeBottom").height() > ($(window).height() - $("#sidebar #search").outerHeight() - 51)) {
            $("#resizeBottom").css({
                "height": "50%"
            })
        }

        if (parseInt($(window).width() - $("#sidebar").outerWidth()) <= 600) {
            $("#feed .story").css({
                "padding": "10px 0"
               
            })
            $("#feed .story .info").css({
                "text-align": "center"
            })

        } else {
            $("#feed .story").css({
                "padding": "10px"
            })
            $("#feed .story .info").css({
                "text-align": "left"
            })
        }
        $("#chats .chats").width($(window).width() - $("#sidebar").outerWidth() -10);
        $("#biography").width($(window).width() - $("#sidebar").outerWidth());
        $("#sidebar #container #resizeTop").height($("#sidebar").height() - $("#sidebar #container #resizeBottom").height() - 36);
    $("#options ul").width($("#content").width() - 243.5); 
 }

 function newChat(a, b){
   
        $(".chats").prepend("<div class='chat open "+b.toString()+"'><div class='chatTitle button'><p class='user'>"+ a.find("p").text() +"</p><span class='close'></span></div><div class='chatBox'><div class='messages'></div><div class='newMessage'><textarea rows='1'/><div class='emoticon'></div></div></div>");
        $(".chats .chat:first-child .newMessage textarea").focus();
        $('textarea').textareaAutoSize();

}
function destroyChat(a){
    var i = a.closest(".chat").hasClass("open") ? a.closest(".chat").attr('class').split(' ')[2] : a.closest(".chat").attr('class').split(' ')[1]
    $("#chat ul li."+i).removeClass(i)
    a.closest(".chat").remove();
    $(".chats .chat:first-child .newMessage textarea").focus();

}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function prependClass(sel, strClass) {
    var $el = jQuery(sel);

    /* prepend class */
    var classes = $el.attr('class');
    classes = strClass +' ' +classes;
    $el.attr('class', classes);
}
function getCaret(el) {
  if (el.selectionStart) {
     return el.selectionStart;
  } else if (document.selection) {
     el.focus();

   var r = document.selection.createRange();
   if (r == null) {
    return 0;
   }

    var re = el.createTextRange(),
    rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }  
  return 0;
}
function sizeMessages(a){
    CBH= a.closest(".chat").find(".chatBox").height()
    NMH = a.closest(".chat").find(".chatBox .newMessage" ).outerHeight()
    a.closest(".chat").find(".chatBox .messages").height(CBH - NMH - 8);
    a.closest(".chat").find(".chatBox .messages").css({bottom: NMH})
}
function scrollBottom(d){
    d.scrollTop(d.prop("scrollHeight"));
}
/* 
function getLink(){ 
    pSBl= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
           
    lnk= ""; 
           
    for(e= 9; e >= 0; e--){ 
    lnk= lnk + pSBl[parseInt(Math.random() * pSBl.length)]; 
    } 
    
    return lnk; 
} 
*/ //!!1 <3 