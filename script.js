(function () {
  const birthDate = new Date('2007-01-01');
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  const ageElement = document.getElementById('age');
  const updateElement = document.getElementById('lastUpdate');

  if (ageElement) {
    ageElement.textContent = String(age);
  }

  if (updateElement) {
    updateElement.textContent = today.toLocaleDateString('pt-BR');
  }
})();
