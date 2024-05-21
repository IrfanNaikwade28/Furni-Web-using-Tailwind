var navItems = document.querySelectorAll(".nav-item");
var toggleBtn = document.querySelector(".menu-toggle-btn");
var collapseMenu = document.querySelector(".menu-collapse");
var productCard = document.querySelectorAll(".product-card");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(navItem => {
            navItem.classList.remove("active");
        });
        item.classList.add("active");
    });
});


toggleBtn.addEventListener("click", () => {
    if (collapseMenu.classList.contains("hidden")) {
        collapseMenu.classList.remove("hidden");
        collapseMenu.classList.add("flex");
        toggleBtn.innerHTML = `
        <path fill="#fff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        `;
    }else{
        collapseMenu.classList.remove("flex");
        collapseMenu.classList.add("hidden");
        toggleBtn.innerHTML = `
        <path fill="#fff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        `;
    }
});

productCard.forEach(item =>{
    item.addEventListener("click",()=>{
       productCard.forEach((product) =>{
            product.classList.remove("active-border");
       });
       item.classList.add("active-border");
    });
});