        window.addEventListener('scroll', function () {
            var navbar = document.getElementById('mainNavbar');
                if (window.scrollY > 0) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
        });

        function navigateToContact() {
            // Redirect to the contact screen
            window.location.href = "contact.html";
        }

        function navigateToHome() {
            // Redirect to the contact screen
            window.location.href = "index.html";
        }

    document.addEventListener('DOMContentLoaded', function () {
            var scrollTopBtn = document.getElementById('scrollTopBtn');

            window.onscroll = function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    scrollTopBtn.style.display = 'block';
                } else {
                    scrollTopBtn.style.display = 'none';
                }
            };

            // Corrected function name here
            function scrollToTop() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }

            // Attach the corrected function to the button click event
            scrollTopBtn.onclick = scrollToTop;
        });

