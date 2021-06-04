import Swal from 'sweetalert2';

// Swal fire sweetaleert2 success like icon
const swalSuccessInit = (title) => {
  Swal.fire({
    title,
    icon: 'success',
    confirmButtonText: 'Oke',
    confirmButtonColor: '#00ff55',
    reverseButtons: true,
  });
};

// Swal fire sweetaleert2 error like icon
const swallErrorInit = (title) => {
  Swal.fire({
    title,
    icon: 'error',
    confirmButtonText: 'Oke',
    confirmButtonColor: '#00ff55',
    reverseButtons: true,
  });
};

export { swalSuccessInit, swallErrorInit };
