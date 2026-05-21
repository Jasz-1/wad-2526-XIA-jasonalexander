let cart = [];

loadCart();

function loadCart() {
    const params = new URLSearchParams(window.location.search);
    cart = JSON.parse(params.get('cart'));

    let display = '';
    let grandTotal = 0;

    for (let i = 0; i < menus.length; i++) {
        const e = menus[i];

        for (let j = 0; j < e.variants.length; j++) {
            const f = e.variants[j];

            if (cart[i][j] > 0) {
                const quantity = cart[i][j];
                const total = f.price * quantity;

                grandTotal += total;

                display += `
                <div class="menu-row">
                    <div>${quantity} ${e.name} - ${f.description}</div>
                    <div>Rp ${total}000,00</div>
                </div>`;
            }
        }
    }

    display += `
    <hr>
    <div class="menu-row total-row">
        <p>Total</p>
        <p>Rp ${grandTotal}000,00</p>
    </div>`;

    document.getElementById('cart').innerHTML = display;
}

const today = new Date();

const formatted =
    today.getDate() + "/" +
    (today.getMonth() + 1) + "/" +
    today.getFullYear();

document.getElementById("date").textContent = formatted;