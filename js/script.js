document.querySelector(".search form").addEventListener("submit",function(){
    if(this.getElementsByTagName("input")[0].value=="")event.preventDefault();
    document.querySelector(".search form input[type=search]").focus();
    /*var click_obj=document.querySelector(".search form>button");
    var ong=click_obj.className;
    document.querySelector(".search form>button").className=click_obj.getAttribute("clidked");
    document.querySelector(".search form>button").setAttribute("clidked",ong);
    click_obj=document.querySelector(".search form>button .search_icon_show>div");
    ong=click_obj.className;
    document.querySelector(".search form>button .search_icon_show>div").className=click_obj.getAttribute("clidked");
    document.querySelector(".search form>button .search_icon_show>div").setAttribute("clidked",ong);*/
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
