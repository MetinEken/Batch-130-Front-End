<script>
  const accordionItems = document.querySelectorAll('.accordion-item');

  function toggleAccordion() {
    this.classList.toggle('active');
  }

  accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));
</script>
