document.addEventListener("DOMContentLoaded", function() {
  const toastEl = document.getElementById('liveToast');
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { autohide: false });

  document.getElementById('discount-row').addEventListener('click', function(e){
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
      // Set toast content from data attributes
      document.getElementById('toast-title').textContent = e.target.dataset['title'] || '';
      document.getElementById('toast-product').textContent = e.target.dataset['product'] || '';
      document.getElementById('toast-code').textContent = 'Discount Code: ' + (e.target.dataset['code'] || '');
      toast.show();
    }
  });

  // Close toast on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      toast.hide();
    }
  });
});