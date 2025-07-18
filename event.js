// Array to hold event data
let events = [];

// Function to display events
function displayEvents() {
  const eventContainer = document.getElementById('eventsContainer');
  eventContainer.innerHTML = ''; // Clear the existing events
  events.forEach((event, index) => {
    const eventItem = document.createElement('li');
    eventItem.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Description:</strong> ${event.description}</p>
    `;
    eventContainer.appendChild(eventItem);
  });
}

// Handle form submission
document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form data
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventLocation = document.getElementById('eventLocation').value;
  const eventDescription = document.getElementById('eventDescription').value;

  // Create a new event object
  const newEvent = {
    name: eventName,
    date: eventDate,
    location: eventLocation,
    description: eventDescription
  };

  // Add the new event to the events array
  events.push(newEvent);

  // Display all events
  displayEvents();

  // Reset the form
  document.getElementById('eventForm').reset();
});
