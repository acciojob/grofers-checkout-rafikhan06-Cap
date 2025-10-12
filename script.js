const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price");
	let total = 0;
	prices.forEach(priceCell => {
		total +=Number(priceCell.textContent)
	});

	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");

	newCell.setAttribute("colspan", "2");
	newCell.textContent = `Total Price: Rs ${total}`;
	newCell.style.textAlign="center";

	newRow.appendChild(newCell);
	document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

