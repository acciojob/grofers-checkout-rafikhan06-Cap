 const priceElements = document.querySelectorAll('.prices');

    // Calculate total
    let total = 0;
    priceElements.forEach(price => {
      total += parseFloat(price.textContent);
    });

    // Create new row for total
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // span across both columns
    totalCell.textContent = `Total Price: ₹${total}`;

    totalRow.appendChild(totalCell);

    // Append total row to table
    document.getElementById('grocery-table').appendChild(totalRow);
