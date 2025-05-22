document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter button');
  const topicButtons = document.querySelectorAll('.temki button');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      topicButtons.forEach(topic => {
        const category = topic.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          topic.parentElement.style.display = 'block';
        } else {
          topic.parentElement.style.display = 'none';
        }
      });

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');


      if (button.id === 'special-btn') {
        const img = button.querySelector('img');
        img.src = '/img/image 2.png';
      }
    });
  });
});

