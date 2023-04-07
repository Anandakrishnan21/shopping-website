const shoes = [
    { name: "ADIDAS GRANT COURT X LEGO® 2.0 SHOES", image: "images/shoe1.webp", price: 4200 },
    { name: "FORUM MID SHOES", image: "images/shoe2.webp", price: 10000 },
    { name: "ADIDAS ULTRABOOST", image: "images/shoe3.webp", price: 5000 },
    { name: "Adistound M Black Running Shoes", image: "images/shoe10.webp", price: 3000 },
    { name: "ADIDAS SUPERSTAR", image: "images/shoe5.webp", price: 2000 },
    { name: "ADIDAS ADI2000", image: "images/shoe6.webp", price: 5000 },
    { name: "ADIDAS FORUM HI", image: "images/shoe7.webp", price: 6000 },
    { name: "ADIDAS HUMANRACE SIČHONA", image: "images/shoe8.webp", price: 1500 }
];

let selectedShoes = [];

const shoeList = document.getElementById('available-div');

shoes.forEach((shoe) => {

    const newDiv = document.createElement('div');
    newDiv.classList.add('shoe');

    const newName = document.createElement('h3');
    newName.textContent = shoe.name;

    const newImg = document.createElement('img');
    newImg.src = shoe.image;

    const newPrice = document.createElement('p');
    newPrice.textContent = ` ₹ ${shoe.price}`;

    newDiv.appendChild(newName);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newPrice);

    newDiv.addEventListener('click', () => {
        newDiv.classList.toggle('selected');
        if (newDiv.classList.contains('selected')) {
            selectedShoes.push(shoe);
        }
        else {
            selectedShoes = selectedShoes.filter((selected) => selected.name !== shoe.name);
        }
        updatedList();
        updateCost();
    })
    shoeList.appendChild(newDiv);
});

const selectedList = document.getElementById('selected-div');
const updatedList = () => {
    selectedList.innerHTML = '';
    selectedShoes.forEach((shoe) => {
        const li = document.createElement('li');
        li.textContent = `${shoe.name} - ₹ ${shoe.price}`;

        const newImg = document.createElement('img');
        newImg.src = shoe.image;

        li.appendChild(newImg)
        selectedList.appendChild(li);
    })

    const updateCost = () =>{
        const totalCost = selectedShoes.reduce((acc,shoe) => acc + shoe.price, 0);
        return `${totalCost}`;
    };
    document.getElementById('total-cost').textContent = 'TOTAL COST: ' + '₹' + updateCost(shoes);
}

