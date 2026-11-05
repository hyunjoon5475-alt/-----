// Time Calculator
const timeSelect = document.getElementById('timeSelect');
const vDay = document.getElementById('vDay');
const vWeek = document.getElementById('vWeek');
const vMonth = document.getElementById('vMonth');
const vYear = document.getElementById('vYear');
const vDays = document.getElementById('vDays');

function updateCalc() {
  const mins = parseInt(timeSelect.value, 10);
  vDay.textContent = mins >= 60 ? `${mins / 60}시간` : `${mins}분`;
  vWeek.textContent = `${((mins * 7) / 60).toFixed(1)}시간`;
  vMonth.textContent = `${((mins * 30) / 60).toFixed(1)}시간`;
  const yHours = ((mins * 365) / 60).toFixed(1);
  const yD = ((mins * 365) / (60 * 24)).toFixed(1);
  vYear.textContent = `${yHours}시간`;
  vDays.textContent = `약 ${yD}일의 여유`;
}
timeSelect.addEventListener('change', updateCalc);

// FAQ Accordion
const faqRows = document.querySelectorAll('.faq-row');
faqRows.forEach(row => {
  const q = row.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const isActive = row.classList.contains('active');
    faqRows.forEach(r => r.classList.remove('active'));
    if (!isActive) row.classList.add('active');
  });
});