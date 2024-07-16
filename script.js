const apitoken =  'haha';
const mayorURL = 'https://api.hypixel.net/v2/resources/skyblock/election';
const firesaleURL = 'https://api.hypixel.net/v2/skyblock/firesales';
const OPTIONS = {
    method: 'GET',
    headers: {
        'API-Key': apitoken
    }
}
const gem_usd = 0.00894814814;


// Define the function to fetch the current mayor's name
async function fetchCurrentMayor() {
    try {
      // Replace 'yourAPIEndpoint' with the actual API endpoint
      const response = await fetch(mayorURL, OPTIONS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Assuming the API returns an object with a 'mayor' property
      const mayorName = data.mayor.name;
      const year = data.mayor.election.year;
      // Update the HTML content with the mayor's name
      document.querySelector('#mayorHeader').textContent = `Current Mayor: ${mayorName}`;
      document.querySelector('#yearHeader').textContent = `Year: ${year}`;
    } catch (error) {
      console.error('Failed to fetch the current mayor:', error);
      // Optionally, update the HTML to show an error message
      document.querySelector('h2').textContent = 'Failed to fetch the current mayor';
    }
  }

  // Define the function to fetch the current mayor's name
async function fetchCurrentSales() {
    try {
      // Replace 'yourAPIEndpoint' with the actual API endpoint
      const response = await fetch(firesaleURL, OPTIONS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Assuming the API returns an object with a 'mayor' property
      const itemID = data.sales[0].item_id;
      const startTimeStamp = data.sales[0].start;
      var startDate = new Date(startTimeStamp * 1000);
      const endTimeStamp = data.sales[0].end;
      var endDate = new Date(endTimeStamp * 1000);
      const amount = data.sales[0].amount;
      const price = data.sales[0].price + ' Gems';
      const usd_price = Math.round((data.sales[0].price * gem_usd)*100)/100 + ' USD';
      // Update the HTML content with the mayor's name
      document.querySelector('#fireSale').textContent = ` ${itemID}`;
      document.querySelector('#fireSalePrice').textContent = ` ${price} | ${usd_price}`;
      document.querySelector('#fireSaleAmount').textContent = ` ${amount} Units`;
      
    } catch (error) {
      console.error('Failed to fetch the current mayor:', error);
      // Optionally, update the HTML to show an error message
      document.querySelector('h2').textContent = 'Failed to fetch the current mayor';
    }
  }
  
  // Optionally, automatically call fetchCurrentMayor when the page loads
  document.addEventListener('DOMContentLoaded', fetchCurrentMayor);
  document.addEventListener('DOMContentLoaded', fetchCurrentSales);


