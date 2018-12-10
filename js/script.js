document.querySelector(".search form").addEventListener("submit",function(){
    if(this.getElementsByTagName("input")[0].value=="")event.preventDefault();
    document.querySelector(".search form input[type=search]").focus();
});
document.querySelector(".search form input[type=search]").addEventListener("focus",function(){
    document.querySelector(".search form>button").className="submit_active";
    document.querySelector(".search form>button").setAttribute("clidked","submit");
    document.querySelector(".search form>button .search_icon_show>div").className="search_icon_active";
    document.querySelector(".search form>button .search_icon_show>div").setAttribute("clidked","search_icon");
});
document.querySelector(".search form input[type=search]").addEventListener("focusout",function(){
    document.querySelector(".search form>button").className="submit";
    document.querySelector(".search form>button").setAttribute("clidked","submit_active");
    document.querySelector(".search form>button .search_icon_show>div").className="search_icon";
    document.querySelector(".search form>button .search_icon_show>div").setAttribute("clidked","search_icon_active");
});
document.querySelector(".chatroom_title").addEventListener("click",function(){
    var click_obj=document.querySelector(".chatroom");
    var ong=click_obj.className;
    document.querySelector(".chatroom").className=click_obj.getAttribute("chstatic");
    document.querySelector(".chatroom").setAttribute("chstatic",ong);
    click_obj=document.querySelector(".chatroom_title");
    ong=click_obj.className;
    document.querySelector(".chatroom_title").className=click_obj.getAttribute("chstatic");
    document.querySelector(".chatroom_title").setAttribute("chstatic",ong);
});