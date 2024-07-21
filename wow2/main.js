        // JavaScript code to add interactivity
        window.onload = function() {
            const figures = document.querySelectorAll('.gallery figure');
            const largeImage = document.getElementById('largeImage');
            const imageDescription = document.getElementById('imageDescription');

            figures.forEach((figure, index) => {
                const img = figure.querySelector('img');
                img.tabIndex = 0; // Add tabindex for keyboard access

                img.onmouseover = function() {
                    largeImage.style.backgroundImage = `url(${img.src})`;
                    imageDescription.textContent = img.alt;
                };

                img.onmouseleave = function() {
                    largeImage.style.backgroundImage = '';
                    imageDescription.textContent = 'Hover over an image to see the description here.';
                };

                img.onfocus = function() {
                    largeImage.style.backgroundImage = `url(${img.src})`;
                    imageDescription.textContent = img.alt;
                };

                img.onblur = function() {
                    largeImage.style.backgroundImage = '';
                    imageDescription.textContent = 'Hover over an image to see the description here.';
                };
            });

            console.log("Event listeners added, and tabindex attributes set.");
        };
