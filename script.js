document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 1;
  const totalPages = 16;

  const pages = document.querySelectorAll('.page-content');
  const indicator = document.getElementById('page-indicator');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  let typeInterval = null;

  function showPage(pageNo) {
    // Hide all pages
    pages.forEach(p => p.classList.remove('active'));

    // Activate selected page
    const activePageEl = document.querySelector(`.page-content[data-page="${pageNo}"]`);
    activePageEl.classList.add('active');

    // Update Counter
    indicator.innerText = `Page ${pageNo} / ${totalPages}`;

    // Update Buttons State
    prevBtn.disabled = (pageNo === 1);
    nextBtn.disabled = (pageNo === totalPages);

    if (pageNo === totalPages) {
      nextBtn.innerText = "🎉 Happy Birthday!";
    } else {
      nextBtn.innerText = "Next Page →";
    }

    // Trigger Cursive Typewriter Animation
    const typewriterEl = activePageEl.querySelector('.typewriter-cursive');
    if (typewriterEl) {
      runCursiveTypewriter(typewriterEl);
    }
  }

  function runCursiveTypewriter(element) {
    if (typeInterval) clearInterval(typeInterval);

    const fullText = element.getAttribute('data-text');
    element.innerText = "";
    let i = 0;

    typeInterval = setInterval(() => {
      if (i < fullText.length) {
        element.innerText += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 25); // Smooth Typewriter speed
  }

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Initialize Page 1
  showPage(1);
});
