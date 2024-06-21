document.addEventListener('DOMContentLoaded', () => {
    console.log("Site do Mercearia FB carregado.");
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const status = document.getElementById('status');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === "" || email === "" || message === "") {
            status.innerText = "Por favor, preencha todos os campos.";
            status.style.color = "red";
            return;
        }

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('service_v2btwml', 'template_7zd12i4', templateParams)
            .then(() => {
                status.innerText = "Mensagem enviada com sucesso!";
                status.style.color = "green";
                contactForm.reset();
            }, (error) => {
                console.error("Erro ao enviar a mensagem:", error);
                status.innerText = "Ocorreu um erro ao enviar a mensagem.";
                status.style.color = "red";
            });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        document.querySelector('.carousel-slide').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prev.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    next.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Adicionar ao Carrinho';
        product.appendChild(addToCartButton);

        addToCartButton.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const productItems = document.querySelectorAll('.product');

    function searchProducts() {
        const query = searchInput.value.toLowerCase();
        productItems.forEach(product => {
            const productName = product.querySelector('h3').innerText.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', searchProducts);
});


