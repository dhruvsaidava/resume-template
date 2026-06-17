jQuery(document).ready(function($) {

    /*======= Theme Toggle (Light/Dark Mode) =======*/
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('theme-toggle-icon');
    
    // Check for saved theme preference or default to system preferences
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Apply initial theme
    if (initialTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (toggleIcon) {
            toggleIcon.className = 'fa fa-sun';
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (toggleIcon) {
            toggleIcon.className = 'fa fa-moon';
        }
    }
    
    // Toggle theme on click
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (toggleIcon) {
                    toggleIcon.className = 'fa fa-moon';
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (toggleIcon) {
                    toggleIcon.className = 'fa fa-sun';
                }
            }
        });
    }

    /*======= Skillset Progress Animation & Labeling =======*/
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            const itemWidth = $(this).data('level');
            
            // Set width animate
            $(this).animate({
                width: itemWidth
            }, 1000);
            
            // Set the level label text dynamically on the title for CSS access
            const parentItem = $(this).closest('.item');
            const levelTitle = parentItem.find('.level-title');
            if (levelTitle.length) {
                levelTitle.attr('data-level-val', itemWidth);
            }
        });
    });

});